import { useEffect, useRef, useState } from "react";
import * as THREE from "three/webgpu";
import { bloom } from "three/addons/tsl/display/BloomNode.js";
import { pass, uniform } from "three/tsl";
import { createBlackHoleShader } from "./blackhole-shader.js";
import { bh, stops } from "./creative-black-hole";

/* MIT-derived shader integration based on dgreenheck/webgpu-black-hole.
   The shader source remains in blackhole-shader.js; this component owns
   renderer lifecycle, adaptive quality, and portfolio camera choreography. */

const config = {
  blackHoleMass: 0.4,
  diskInnerRadius: 3.55,
  diskOuterRadius: 15.2,
  diskTemperature: 52,
  temperatureFalloff: 4.5,
  diskBrightness: 5.8,
  diskRotationSpeed: -8.7,
  turbulenceScale: 2.25,
  turbulenceStretch: 0.52,
  turbulenceSharpness: 5.6,
  turbulenceCycleTime: 5,
  turbulenceLacunarity: 3.15,
  turbulencePersistence: 0.76,
  diskEdgeSoftnessInner: 0.08,
  diskEdgeSoftnessOuter: 0.38,
  gravitationalLensing: 2.7,
  dopplerStrength: 4.2,
  stepSize: 0.76,
  starDensity: 0.16,
  starSize: 1.05,
  starBrightness: 0.24,
};

const centers = [
  new THREE.Vector3(-24, 12, -1),
  new THREE.Vector3(23, 10, 1),
  new THREE.Vector3(-19, -15, 2),
  new THREE.Vector3(20, -16, -1),
  new THREE.Vector3(0, 1, 13),
];

const shots = [
  new THREE.Vector3(4, 2.5, 13),
  new THREE.Vector3(-8, 5, 21),
  new THREE.Vector3(1.2, 0.9, 4.8),
  new THREE.Vector3(-1.8, 1.3, 9.5),
  new THREE.Vector3(0.5, 0.45, 2.1),
];

function uniforms(size: THREE.Vector2) {
  return {
    blackHoleMass: uniform(config.blackHoleMass),
    diskInnerRadius: uniform(config.diskInnerRadius),
    diskOuterRadius: uniform(config.diskOuterRadius),
    diskTemperature: uniform(config.diskTemperature),
    temperatureFalloff: uniform(config.temperatureFalloff),
    diskBrightness: uniform(config.diskBrightness),
    diskRotationSpeed: uniform(config.diskRotationSpeed),
    turbulenceScale: uniform(config.turbulenceScale),
    turbulenceStretch: uniform(config.turbulenceStretch),
    turbulenceSharpness: uniform(config.turbulenceSharpness),
    turbulenceCycleTime: uniform(config.turbulenceCycleTime),
    turbulenceLacunarity: uniform(config.turbulenceLacunarity),
    turbulencePersistence: uniform(config.turbulencePersistence),
    diskEdgeSoftnessInner: uniform(config.diskEdgeSoftnessInner),
    diskEdgeSoftnessOuter: uniform(config.diskEdgeSoftnessOuter),
    gravitationalLensing: uniform(config.gravitationalLensing),
    dopplerStrength: uniform(config.dopplerStrength),
    stepSize: uniform(config.stepSize),
    starsEnabled: uniform(1),
    starBackgroundColor: uniform(new THREE.Color("#000000")),
    starDensity: uniform(config.starDensity),
    starSize: uniform(config.starSize),
    starBrightness: uniform(config.starBrightness),
    nebulaEnabled: uniform(1),
    nebula1Scale: uniform(2),
    nebula1Density: uniform(0.5),
    nebula1Brightness: uniform(0.012),
    nebula1Color: uniform(new THREE.Color("#071f44")),
    nebula2Scale: uniform(5.5),
    nebula2Density: uniform(0.05),
    nebula2Brightness: uniform(0.19),
    nebula2Color: uniform(new THREE.Color("#010615")),
    time: uniform(0),
    resolution: uniform(size),
    cameraPosition: uniform(new THREE.Vector3(0, -3, 20)),
    cameraTarget: uniform(new THREE.Vector3()),
    lensCenter: uniform(new THREE.Vector3()),
    diskCenter: uniform(new THREE.Vector3()),
    ringCenter: uniform(new THREE.Vector3()),
    horizonCenter: uniform(new THREE.Vector3()),
    coreCenter: uniform(new THREE.Vector3()),
    lensWeight: uniform(1),
    diskWeight: uniform(1),
    ringWeight: uniform(0),
    horizonWeight: uniform(1),
    horizonScale: uniform(1.01),
    coreWeight: uniform(0),
    coreFocus: uniform(0),
  };
}

export default function RaymarchedBlackHole() {
  const host = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const root = host.current;
    if (root === null) return;

    let live = true;
    let frame = 0;
    let renderer: THREE.WebGPURenderer | null = null;
    let mesh: THREE.Mesh | null = null;
    let observer: ResizeObserver | null = null;
    let post: THREE.PostProcessing | null = null;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    const size = new THREE.Vector2(root.clientWidth, root.clientHeight);
    const u = uniforms(size);
    const pointer = new THREE.Vector2();
    const pos = new THREE.Vector3(0, -3, 20);
    const target = new THREE.Vector3();
    const zero = new THREE.Vector3();
    const wanted = new THREE.Vector3();
    const from = new THREE.Vector3();
    const to = new THREE.Vector3();
    const core = new THREE.Vector3();
    const clock = new THREE.Clock();
    const narrow = window.matchMedia("(max-width: 700px)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const move = (event: PointerEvent) => {
      pointer.set(event.clientX / window.innerWidth * 2 - 1, event.clientY / window.innerHeight * 2 - 1);
    };
    window.addEventListener("pointermove", move, { passive: true });

    const init = async () => {
      try {
        renderer = new THREE.WebGPURenderer({ antialias: !narrow, alpha: false });
        renderer.setPixelRatio(narrow ? Math.min(devicePixelRatio, 0.8) : Math.min(devicePixelRatio, 1.35));
        renderer.setSize(root.clientWidth, root.clientHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.domElement.className = "bh-ray-canvas";
        root.appendChild(renderer.domElement);
        await renderer.init();
        if (!live) return;

        const geometry = new THREE.SphereGeometry(100, 32, 32);
        geometry.scale(-1, 1, 1);
        const material = new THREE.MeshBasicNodeMaterial();
        material.colorNode = createBlackHoleShader(u) as typeof material.colorNode;
        mesh = new THREE.Mesh(geometry, material);
        mesh.frustumCulled = false;
        scene.add(mesh);

        post = new THREE.PostProcessing(renderer);
        const color = pass(scene, camera).getTextureNode();
        const glow = bloom(color);
        glow.threshold.value = 0.34;
        glow.strength.value = narrow ? 0.48 : 0.72;
        glow.radius.value = 0.2;
        post.outputNode = color.add(glow);

        observer = new ResizeObserver(() => {
          if (renderer === null) return;
          const width = root.clientWidth;
          const height = root.clientHeight;
          renderer.setSize(width, height);
          camera.aspect = width / Math.max(1, height);
          camera.updateProjectionMatrix();
          u.resolution.value.set(width, height);
        });
        observer.observe(root);
        setReady(true);

        const loop = () => {
          if (!live || renderer === null || post === null) return;
          frame = requestAnimationFrame(loop);
          const tick = Math.min(clock.getDelta(), 0.033);
          const raw = Math.min(1, Math.max(0, bh.raw));
          const k = narrow ? 0.48 : 1;
          let a = 0;
          while (a < stops.length - 2 && raw >= stops[a + 1]) a += 1;
          const b = Math.min(stops.length - 1, a + 1);
          const span = Math.max(0.0001, stops[b] - stops[a]);
          const linear = Math.min(1, Math.max(0, (raw - stops[a]) / span));
          const mix = linear * linear * (3 - 2 * linear);
          const open = Math.min(1, Math.max(0, (linear - 0.34) / 0.66));
          // The exploded overview is a normal magnetic stop: the catch at the
          // stop holds it, and any further scroll starts moving toward the
          // lens immediately. No dead scroll zone.
          const blend = a === 0
            ? open * open * (3 - 2 * open)
            : mix;
          bh.segment = a;
          bh.blend = blend;
          root.dataset.segment = String(a);
          root.dataset.blend = blend.toFixed(4);

          const weights = [
            [1, 1, 0, 1, 0],
            [1, 0.7, 1, 1, 0.85],
            [1, 0.025, 0.04, 0, 0.04],
            [0.04, 1, 0.04, 0, 0.04],
            [0.62, 0.025, 1, 0.88, 0.04],
            [0.62, 0.025, 0.04, 1, 0.04],
            [0.04, 0.025, 0.04, 0, 1],
            [0.12, 0.04, 0.18, 0, 1],
          ];
          const scale = [1.01, 4.2, 1.01, 1.01, 1.65, 3.4, 0.18, 1.01];
          const pinch = [0, 0.32, 0, 0, 0, 0, 1, 0];
          const lens = [2.7, 3.3, 4.4, 2.7, 3.4, 5.2, 8, 2.7];
          const stars = [0.24, 0.24, 0.65, 0.24, 0.24, 0.65, 0.65, 0.24];
          const threshold = [0.34, 0.34, 0.34, 0.34, 0.72, 0.34, 0.34, 0.34];
          const glowBase = narrow ? 0.48 : 0.72;
          const strength = [glowBase, glowBase, glowBase, glowBase, 0.12, glowBase, glowBase, glowBase];

          const center = (step: number, i: number, out: THREE.Vector3) => {
            if (step === 0) return out.copy(zero);
            out.copy(centers[i]).multiplyScalar((step === 7 ? 0.32 : 1) * k);
            if (step === 7) out.lerp(core.copy(centers[4]).multiplyScalar(k * 0.32), 0.7);
            const focus = step >= 2 && step <= 6 ? step - 2 : -1;
            if (i === 0 && focus === 2) out.copy(centers[2]).multiplyScalar(k);
            if (i === 0 && focus === 3) out.copy(centers[3]).multiplyScalar(k);
            if (i === 0 && focus === 4) out.copy(centers[4]).multiplyScalar(k);
            if (i === 3 && focus === 2) out.copy(centers[2]).multiplyScalar(k);
            if (i === 3 && focus === 4) out.copy(centers[3]).multiplyScalar(k);
            return out;
          };

          const refs = [u.lensCenter, u.diskCenter, u.ringCenter, u.horizonCenter, u.coreCenter];
          refs.forEach((ref, i) => {
            center(a, i, from);
            center(b, i, to);
            ref.value.copy(from).lerp(to, blend);
          });

          const channels = [u.lensWeight, u.diskWeight, u.ringWeight, u.horizonWeight, u.coreWeight];
          channels.forEach((ref, i) => {
            ref.value = THREE.MathUtils.lerp(weights[a][i], weights[b][i], blend);
          });
          u.horizonScale.value = THREE.MathUtils.lerp(scale[a], scale[b], blend);
          u.coreFocus.value = THREE.MathUtils.lerp(pinch[a], pinch[b], blend);
          u.gravitationalLensing.value = THREE.MathUtils.lerp(lens[a], lens[b], blend);
          u.starBrightness.value = THREE.MathUtils.lerp(stars[a], stars[b], blend);
          glow.threshold.value = THREE.MathUtils.lerp(threshold[a], threshold[b], blend);
          glow.strength.value = THREE.MathUtils.lerp(strength[a], strength[b], blend);

          const cameraAt = (step: number, out: THREE.Vector3, look: THREE.Vector3) => {
            if (step === 0) {
              out.set(0, narrow ? -3.3 : -5.2, narrow ? 22 : 24);
              look.copy(zero);
              return;
            }
            if (step >= 2 && step <= 6) {
              const focus = step - 2;
              look.copy(centers[focus]).multiplyScalar(k);
              out.copy(look).add(wanted.copy(shots[focus]).multiplyScalar(narrow ? 1.2 : 1));
              return;
            }
            if (step === 7) {
              look.copy(centers[4]).multiplyScalar(k * 0.32);
              out.set(narrow ? 0.7 : 1.2, narrow ? 1.5 : 2.1, narrow ? 12.5 : 10.5);
              return;
            }
            look.copy(zero);
            out.set(narrow ? 0 : 1.5, narrow ? 0.8 : 1.5, narrow ? 42 : 56);
          };

          if (a === 0) {
            const approach = Math.min(1, linear / 0.52);
            const eased = approach * approach * (3 - 2 * approach);
            const orbit = approach * 0.48;
            const radius = THREE.MathUtils.lerp(narrow ? 22 : 24, narrow ? 8.8 : 7.2, eased);
            from.set(
              Math.sin(orbit) * radius * 0.25 + pointer.x * (reduced ? 0 : 0.42),
              THREE.MathUtils.lerp(narrow ? -3.3 : -5.2, narrow ? -1.45 : -1.8, eased) + pointer.y * (reduced ? 0 : 0.28),
              Math.cos(orbit) * radius,
            );
            if (linear <= 0.52) {
              pos.copy(from);
              target.copy(zero);
            } else {
              const open = (linear - 0.52) / 0.48;
              const easedOpen = open * open * (3 - 2 * open);
              cameraAt(1, to, core);
              pos.copy(from).lerp(to, easedOpen);
              target.copy(zero).lerp(core, easedOpen);
            }
          } else {
            cameraAt(a, from, target);
            cameraAt(b, to, core);
            pos.copy(from).lerp(to, blend);
            target.lerp(core, blend);
          }

          camera.position.copy(pos);
          camera.lookAt(target);
          u.cameraPosition.value.copy(camera.position);
          u.cameraTarget.value.copy(target);
          u.time.value += tick;
          post.render();
        };
        loop();
      } catch (err) {
        console.error("Raymarched black hole renderer failed", err);
        setFailed(true);
      }
    };

    void init();
    return () => {
      live = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      observer?.disconnect();
      mesh?.geometry.dispose();
      if (mesh !== null) {
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        mats.forEach((mat) => mat.dispose());
      }
      renderer?.dispose();
      root.replaceChildren();
    };
  }, []);

  return (
    <div
      className="bh-ray"
      data-ready={String(ready)}
      data-failed={String(failed)}
      style={{ display: ready ? "block" : "none", opacity: ready ? 1 : 0, visibility: ready ? "visible" : "hidden" }}
    >
      <div ref={host} className="bh-ray-host" />
      {!ready && !failed && <span className="bh-ray-status">Bending light…</span>}
      {failed && <span className="bh-ray-status">Your GPU could not open the event horizon.</span>}
    </div>
  );
}
