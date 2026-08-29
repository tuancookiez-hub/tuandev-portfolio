import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const DIR = "./assets/ariad/";

const PARTS = [
  { id: "layout", label: "Layout", glb: "component_layout.glb", dims: "components in position", vol: 0, tri: 48, asm: "Manufacturer envelopes plus a supplier-dependent camera reservation." },
  { id: "front_shell", label: "Front shell", glb: "front_shell.glb", dims: "120 × 92 × 58 mm", vol: 92, tri: 4212, asm: "Receives the snap-latched tray, slide-lock panel, and press-fit camera bezel." },
  { id: "electronics_tray", label: "Electronics tray", glb: "electronics_tray.glb", dims: "107 × 49 × 21 mm", vol: 17, tri: 748, asm: "Slides into the shell, locks with two releasable planar snap arms, carries two SCS0009 servo cradles." },
  { id: "service_panel", label: "Service panel", glb: "service_panel.glb", dims: "107 × 85 × 3 mm", vol: 22, tri: 540, asm: "Slides down guide channels and closes with one hand-releasable flex latch." },
  { id: "left_limb", label: "Left limb", glb: "left_limb.glb", dims: "105 × 24 × 14 mm", vol: 33, tri: 792, asm: "Receives a keyed split-stem adapter; printed flat for stronger in-plane layers." },
  { id: "right_limb", label: "Right limb", glb: "right_limb.glb", dims: "105 × 24 × 14 mm", vol: 33, tri: 792, asm: "Receives a keyed split-stem adapter; printed flat for stronger in-plane layers." },
  { id: "left_servo_adapter", label: "Servo adapter L", glb: "left_servo_adapter.glb", dims: "18 × 18 × 17 mm", vol: 1, tri: 1632, asm: "Keys into the limb with a split retention stem; the purchased-servo interface remains provisional." },
  { id: "right_servo_adapter", label: "Servo adapter R", glb: "right_servo_adapter.glb", dims: "18 × 18 × 17 mm", vol: 1, tri: 1632, asm: "Keys into the limb with a split retention stem; the purchased-servo interface remains provisional." },
  { id: "camera_bezel", label: "Camera bezel", glb: "camera_bezel.glb", dims: "29 × 28 × 7 mm", vol: 2, tri: 1316, asm: "Presses into the front opening and extends into a 25 × 24 mm camera-board locating frame." },
  { id: "electronics_carrier", label: "Pi carrier", glb: "electronics_carrier.glb", dims: "68 × 32 × 8 mm", vol: 8, tri: 3852, asm: "Slides onto the tray and provides the Pi Zero 2 W 58 × 23 mm M2.5 mounting pattern." },
] as const;

type Ctx = { stop: () => void; size: () => void; spin: (on: boolean) => void };

export function AriadViewer() {
  const host = useRef<HTMLDivElement | null>(null);
  const ctx = useRef<Ctx | null>(null);
  const [pick, setPick] = useState("layout");
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState("");
  const [turn, setTurn] = useState(false);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const part = PARTS.find((p) => p.id === pick) ?? PARTS[0];
    let dead = false;
    let raf = 0;
    let theta = Math.PI * 0.25;
    let phi = Math.PI * 0.36;
    let radius = 200;
    let auto = false;
    let dragging = false;
    let px = 0;
    let py = 0;
    let stopFns: (() => void)[] = [];

    setBusy(true);
    setError("");

    const loader = new GLTFLoader();
    loader.load(
      DIR + part.glb,
      (gltf) => {
        if (dead) return void gltf.scene.traverse((o) => { const m = o as THREE.Mesh; if (m.geometry) m.geometry.dispose(); });

        try {
        const scene = new THREE.Scene();
        const cam = new THREE.PerspectiveCamera(38, 1, 0.1, 4000);
        const rend = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        rend.setPixelRatio(Math.min(devicePixelRatio, 2));
        rend.outputColorSpace = THREE.SRGBColorSpace;
        el.appendChild(rend.domElement);

        const mat = new THREE.MeshStandardMaterial({ color: 0xcfd6da, metalness: 0.2, roughness: 0.55 });
        gltf.scene.traverse((o) => { const m = o as THREE.Mesh; if (m.isMesh) { m.material = mat; } });

        const root = new THREE.Group();
        root.add(gltf.scene);
        scene.add(root);

        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const mid = box.getCenter(new THREE.Vector3());
        root.position.sub(mid);
        const maxAxis = Math.max(size.x, size.y, size.z) || 100;
        radius = maxAxis * 2.1;

        const grid = new THREE.GridHelper(maxAxis * 4, 12, 0x2a333c, 0x1c232a);
        grid.position.y = -size.y / 2 - maxAxis * 0.06;
        scene.add(grid);

        scene.add(new THREE.HemisphereLight(0xffe8cc, 0x1a2026, 1.1));
        const key = new THREE.DirectionalLight(0xffc169, 1.4);
        key.position.set(1.2, 1.8, 1.1);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0x9fd4ff, 0.45);
        rim.position.set(-1.4, -0.5, -1);
        scene.add(rim);

        const place = () => {
          const w = el.clientWidth;
          const h = el.clientHeight;
          rend.setSize(w, h, false);
          cam.aspect = w / Math.max(h, 1);
          cam.updateProjectionMatrix();
        };
        place();

        const frame = () => {
          raf = requestAnimationFrame(frame);
          if (auto) theta += 0.004;
          const sinP = Math.sin(phi);
          cam.position.set(
            radius * sinP * Math.sin(theta),
            radius * Math.cos(phi),
            radius * sinP * Math.cos(theta),
          );
          cam.lookAt(0, 0, 0);
          rend.render(scene, cam);
        };
        frame();

        const down = (e: PointerEvent) => { dragging = true; px = e.clientX; py = e.clientY; el.setPointerCapture(e.pointerId); };
        const move = (e: PointerEvent) => {
          if (!dragging) return;
          theta -= (e.clientX - px) * 0.006;
          phi = Math.min(Math.PI - 0.15, Math.max(0.15, phi - (e.clientY - py) * 0.006));
          px = e.clientX;
          py = e.clientY;
        };
        const up = () => { dragging = false; };
        el.addEventListener("pointerdown", down);
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerup", up);
        el.addEventListener("pointercancel", up);

        const ro = new ResizeObserver(place);
        ro.observe(el);

        stopFns = [
          () => cancelAnimationFrame(raf),
          () => { el.removeEventListener("pointerdown", down); el.removeEventListener("pointermove", move); el.removeEventListener("pointerup", up); el.removeEventListener("pointercancel", up); },
          () => ro.disconnect(),
          () => { scene.traverse((o) => { const m = o as THREE.Mesh; if (m.geometry) m.geometry.dispose(); }); mat.dispose(); },
          () => rend.dispose(),
          () => rend.domElement.remove(),
        ];
        ctx.current = {
          stop: () => { stopFns.forEach((f) => f()); stopFns = []; },
          size: place,
          spin: (on) => { auto = on; },
        };
        setBusy(false);
        } catch {
          if (!dead) { setBusy(false); setError("3D viewer unavailable on this device — the spec sheet above still holds."); }
        }
      },
      undefined,
      () => { if (!dead) { setBusy(false); setError("Model failed to load — the GLB ships with the site, so a hard refresh usually clears it."); } },
    );

    return () => {
      dead = true;
      stopFns.forEach((f) => f());
      ctx.current = null;
    };
  }, [pick]);

  useEffect(() => { ctx.current?.spin(turn); }, [turn]);

  const meta = PARTS.find((p) => p.id === pick) ?? PARTS[0];

  return (
    <div className="bot-view-wrap">
      <div className="bot-view-chips" role="tablist" aria-label="Ariad parts">
        {PARTS.map((p) => (
          <button key={p.id} className={`bot-chip${p.id === pick ? " on" : ""}`} onClick={() => setPick(p.id)}>
            {p.label}
          </button>
        ))}
      </div>
      <div className="bot-view" ref={host} data-busy={busy || undefined}>
        {busy && <span className="bot-view-note">loading mesh…</span>}
        {error && <span className="bot-view-note">{error}</span>}
      </div>
      <div className="bot-view-meta">
        <strong>{meta.label}</strong>
        <span>{meta.dims}</span>
        {meta.vol > 0 && <span>{meta.vol} cm³ solid</span>}
        <span>{meta.tri.toLocaleString()} triangles</span>
        <button className="bot-turn" onClick={() => setTurn(!turn)}>{turn ? "◼ stop turn" : "▶ turn"}</button>
      </div>
      <p className="bot-view-asm">{meta.asm}</p>
      <p className="bot-view-hint">drag to orbit · every part kernel-valid, SHA-256 recorded in the run manifest</p>
    </div>
  );
}
