"use client";
/**
 * Level 5 — 3D knowledge graph (GitNexus-inspired).
 * Community-colored clusters, force layout, typed edges, signal pulses.
 * Lazy-loaded.
 */
import { useMemo, useState, useRef, useCallback, useEffect } from "react";
import type { FC } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

/* ── Cluster definitions ── */
const CLUSTERS = [
  [
    { name: "Auth Gateway", color: "#6366f1", cx: 0, cy: 0, cz: 0, count: 45, spread: 28 },
    { name: "User Registry", color: "#8b5cf6", cx: 70, cy: 25, cz: 15, count: 38, spread: 24 },
    { name: "Session Store", color: "#a78bfa", cx: -55, cy: -20, cz: -10, count: 32, spread: 22 },
    { name: "Token Service", color: "#c4b5fd", cx: 20, cy: -50, cz: 40, count: 28, spread: 20 },
  ],
  [
    { name: "Permission Graph", color: "#6366f1", cx: 0, cy: 0, cz: 0, count: 52, spread: 30 },
    { name: "Role Resolver", color: "#8b5cf6", cx: 80, cy: 30, cz: 20, count: 44, spread: 26 },
    { name: "Policy Engine", color: "#a78bfa", cx: -65, cy: -25, cz: -15, count: 38, spread: 24 },
    { name: "Access Ledger", color: "#c4b5fd", cx: 25, cy: -55, cz: 45, count: 34, spread: 22 },
    { name: "Audit Trail", color: "#7c3aed", cx: -30, cy: 40, cz: 30, count: 28, spread: 20 },
  ],
  [
    { name: "API Gateway", color: "#6366f1", cx: 0, cy: 0, cz: 0, count: 58, spread: 32 },
    { name: "Load Balancer", color: "#8b5cf6", cx: 90, cy: 35, cz: 25, count: 48, spread: 28 },
    { name: "Rate Limiter", color: "#a78bfa", cx: -75, cy: -30, cz: -20, count: 42, spread: 26 },
    { name: "Circuit Breaker", color: "#c4b5fd", cx: 30, cy: -60, cz: 50, count: 36, spread: 24 },
    { name: "Cache Layer", color: "#7c3aed", cx: -35, cy: 45, cz: 35, count: 32, spread: 22 },
    { name: "Queue Worker", color: "#818cf8", cx: 55, cy: 60, cz: -30, count: 28, spread: 20 },
  ],
  [
    { name: "Core Runtime", color: "#6366f1", cx: 0, cy: 0, cz: 0, count: 65, spread: 35 },
    { name: "Event Bus", color: "#8b5cf6", cx: 100, cy: 40, cz: 30, count: 55, spread: 30 },
    { name: "State Machine", color: "#a78bfa", cx: -85, cy: -35, cz: -25, count: 48, spread: 28 },
    { name: "Data Pipeline", color: "#c4b5fd", cx: 35, cy: -70, cz: 55, count: 42, spread: 26 },
    { name: "Service Mesh", color: "#7c3aed", cx: -40, cy: 50, cz: 40, count: 38, spread: 24 },
    { name: "Health Monitor", color: "#818cf8", cx: 60, cy: 65, cz: -35, count: 32, spread: 22 },
  ],
];

const EDGE_TYPES = [
  { color: "rgba(99,102,241,.35)", width: 0.8 },
  { color: "rgba(139,92,246,.28)", width: 0.6 },
  { color: "rgba(167,139,250,.32)", width: 0.7 },
];
const NODE_TYPES = ["Function", "Class", "Interface", "Module", "Service", "Handler"];
const TITLES = ["Initial dispatch", "Authorization cascade", "Connection wave", "Full mesh"];
const HUD = [
  { hosts: ["gw:443"], logins: [82, 91, 88, 95], blast: [72, 65, 40, 30, 55], actions: [35, 28, 42, 20, 15, 22, 18], throughput: 1240, spend: 18 },
  { hosts: ["gw:443", "auth:8443"], logins: [90, 85, 92, 88], blast: [80, 72, 55, 40, 65], actions: [42, 35, 50, 28, 22, 30, 25], throughput: 2180, spend: 34 },
  { hosts: ["gw:443", "auth:8443", "lb:80"], logins: [95, 92, 88, 96], blast: [88, 80, 65, 50, 75], actions: [50, 42, 58, 35, 28, 38, 32], throughput: 3420, spend: 52 },
  { hosts: ["gw:443", "auth:8443", "lb:80", "app:3000"], logins: [96, 94, 91, 98], blast: [95, 88, 72, 58, 82], actions: [58, 48, 65, 42, 35, 45, 38], throughput: 4860, spend: 68 },
];

/* ── Build graph for a stage ── */
function buildStage(si: number) {
  const cls = CLUSTERS[si];
  const nodes: any[] = [];
  const links: any[] = [];
  let nid = 0;
  const idsByCluster: string[][] = [];

  for (const cl of cls) {
    const cids: string[] = [];
    for (let n = 0; n < cl.count; n++) {
      const phi = Math.acos(1 - 2 * (n + 0.5) / cl.count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * n;
      const r = cl.spread * (0.3 + 0.7 * Math.pow(Math.random(), 0.5));
      const id = String(nid++);
      nodes.push({
        id,
        x: cl.cx + r * Math.sin(phi) * Math.cos(theta),
        y: cl.cy + r * Math.sin(phi) * Math.sin(theta),
        z: cl.cz + r * Math.cos(phi),
        val: 0.6 + Math.random() * 0.4,
        color: cl.color,
        cluster: cl.name,
        nodeType: NODE_TYPES[Math.floor(Math.random() * NODE_TYPES.length)],
      });
      cids.push(id);
    }
    idsByCluster.push(cids);
    // Intra-cluster edges
    for (let i = 0; i < cids.length; i++) {
      for (let e = 0; e < 1 + Math.floor(Math.random() * 3); e++) {
        const j = Math.floor(Math.random() * cids.length);
        if (i !== j) {
          const et = EDGE_TYPES[Math.floor(Math.random() * EDGE_TYPES.length)];
          links.push({ source: cids[i], target: cids[j], color: et.color, width: et.width });
        }
      }
    }
  }
  // Inter-cluster edges
  for (let i = 0; i < idsByCluster.length; i++) {
    for (let j = i + 1; j < idsByCluster.length; j++) {
      if (Math.random() > 0.4) {
        for (let e = 0; e < 2 + Math.floor(Math.random() * 4); e++) {
          const a = idsByCluster[i][Math.floor(Math.random() * idsByCluster[i].length)];
          const b = idsByCluster[j][Math.floor(Math.random() * idsByCluster[j].length)];
          const et = EDGE_TYPES[Math.floor(Math.random() * EDGE_TYPES.length)];
          links.push({ source: a, target: b, color: et.color, width: et.width });
        }
      }
    }
  }
  return { nodes, links };
}

/* ── Three.js node object (glowing sphere with aura) ── */
const NODE_OBJ = (node: any) => {
  const group = new THREE.Group();
  const size = node.val ?? 1;
  const col = new THREE.Color(node.color || "#6366f1");
  const core = new THREE.Mesh(
    new THREE.SphereGeometry(size * 1.4, 10, 10),
    new THREE.MeshBasicMaterial({ color: col.clone().multiplyScalar(1.6) })
  );
  group.add(core);
  const aura = new THREE.Mesh(
    new THREE.SphereGeometry(size * 3.5, 8, 8),
    new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: 0.10, depthWrite: false, blending: THREE.AdditiveBlending })
  );
  group.add(aura);
  return group;
};

/* ── Three.js link object (curved tube) ── */
const LINK_OBJ = (link: any) => {
  const src = link.source, tgt = link.target;
  if (!src?.x && src?.x !== 0 || !tgt?.x && tgt?.x !== 0) return null as any;
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(src.x, src.y, src.z),
    new THREE.Vector3((src.x + tgt.x) / 2 + (Math.random() - 0.5) * 30, (src.y + tgt.y) / 2 + (Math.random() - 0.5) * 30, (src.z + tgt.z) / 2 + (Math.random() - 0.5) * 30),
    new THREE.Vector3(tgt.x, tgt.y, tgt.z),
  );
  const mat = new THREE.MeshBasicMaterial({ color: new THREE.Color(link.color || "#6366f1"), transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false });
  return new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.12, 4, false), mat);
};

/* ── Signal pulse particles ── */
const Pulses: FC<{ links: any[] }> = ({ links }) => {
  const ref = useRef<THREE.Points>(null);
  const phase = useRef(Math.random() * 1000);
  useEffect(() => {
    if (!ref.current) return;
    const pts = links.slice(0, 200).map((l: any) => {
      const s = l.source, t = l.target;
      const p = Math.random();
      return new THREE.Vector3(
        s.x + (t.x - s.x) * p + (Math.random() - 0.5) * 15,
        s.y + (t.y - s.y) * p + (Math.random() - 0.5) * 15,
        s.z + (t.z - s.z) * p + (Math.random() - 0.5) * 15,
      );
    });
    ref.current.geometry = new THREE.BufferGeometry().setFromPoints(pts);
    ref.current.material = new THREE.PointsMaterial({ size: 1.2, color: "#9fd0f0", transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending, depthWrite: false });
  }, [links]);
  useFrame(({ clock }: any) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.getAttribute("position") as THREE.BufferAttribute;
    if (!pos) return;
    const t = (clock.elapsedTime + phase.current) * 0.03;
    for (let i = 0; i < pos.count; i++) {
      pos.array[i * 3 + 1] += Math.sin(t + i * 0.7) * 0.02;
      pos.array[i * 3 + 2] += Math.cos(t + i * 0.5) * 0.015;
    }
    pos.needsUpdate = true;
    (ref.current.material as THREE.PointsMaterial).opacity = 0.45 + 0.15 * Math.sin(t * 0.5);
  });
  return <points ref={ref} frustumCulled={false} /> as any;
};

/* ── HUD mini-components ── */
const HostList: FC<{ hosts: string[] }> = ({ hosts }) => (
  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
    {hosts.map(h => <span key={h} style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4, background: "rgba(99,102,241,.15)", color: "#a5b4fc", fontFamily: "var(--sys-mono)" }}>{h}</span>)}
  </div>
);

const Bars: FC<{ data: number[] }> = ({ data }) => (
  <div style={{ display: "flex", gap: 4, alignItems: "flex-end", height: 36 }}>
    {data.map((v, i) => <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
      <div style={{ width: 8, height: v * 0.36, borderRadius: 2, background: "rgba(99,102,241,.45)" }} />
      <span style={{ fontSize: 8, color: "#64748b" }}>{v}%</span>
    </div>)}
  </div>
);

const Radar: FC<{ data: number[] }> = ({ data }) => {
  const n = data.length, cx = 45, cy = 45, r = 35;
  const pts = data.map((v, i) => {
    const a = (Math.PI * 2 * i) / n - Math.PI / 2;
    return `${cx + (v / 100) * r * Math.cos(a)},${cy + (v / 100) * r * Math.sin(a)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 90 90" style={{ width: "100%", height: "100%" }}>
      {[0.25, 0.5, 0.75, 1].map((f, i) => (
        <polygon key={i} points={Array.from({ length: n }, (_, j) => {
          const a = (Math.PI * 2 * j) / n - Math.PI / 2;
          return `${cx + r * f * Math.cos(a)},${cy + r * f * Math.sin(a)}`;
        }).join(" ")} fill="none" stroke="rgba(159,208,240,.12)" strokeWidth=".5" />
      ))}
      <polygon points={pts} fill="rgba(99,102,241,.18)" stroke="#6366f1" strokeWidth="1" />
    </svg>
  );
};

const ActionBars: FC<{ data: number[] }> = ({ data }) => {
  const labels = ["cal", "inbox", "inv", "slack", "notion", "stripe", "git"];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {data.map((v, i) => <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <div style={{ width: `${v}%`, height: 4, borderRadius: 2, background: "rgba(99,102,241,.45)", minWidth: 4 }} />
        <span style={{ fontSize: 8, color: "#64748b", whiteSpace: "nowrap" }}>{labels[i]}</span>
      </div>)}
    </div>
  );
};

/* ── Main component ── */
const SwarmGraph: FC = () => {
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(false);
  const fgRef = useRef<any>(null);
  const angle = useRef(Math.random() * Math.PI * 2);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const R = 380;

  const advance = useCallback(() => {
    setTimeout(() => setStage(s => (s + 1) % CLUSTERS.length), 900);
  }, []);

  useEffect(() => {
    if (!playing) { if (timerRef.current) clearTimeout(timerRef.current); return; }
    timerRef.current = setTimeout(advance, 6000);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [playing, stage, advance]);

  useEffect(() => {
    if (!playing) return;
    let raf: number;
    const tick = () => {
      angle.current += 0.003;
      fgRef.current?.cameraPosition?.({
        x: R * Math.cos(angle.current),
        y: R * 0.25 * Math.sin(angle.current * 0.7),
        z: R * Math.sin(angle.current),
      }, { x: 0, y: 0, z: 0 }, 0);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const { nodes, links } = useMemo(() => buildStage(stage), [stage]);
  const hud = HUD[stage];

  return (
    <div className="sg-shell">
      <div className="sg-stage-title">
        <span className="sg-stage-num">STAGE {stage + 1}/4</span>
        <span className="sg-stage-label">{TITLES[stage]}</span>
      </div>

      <div className="sg-graph-area">
        <Canvas gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }} camera={{ fov: 50, near: 0.1, far: 10000, position: [0, 40, R] }} style={{ background: "#000" }} dpr={[1, 2]}>
          <ambientLight intensity={0.15} />
          <ForceGraph3D ref={fgRef} graphData={{ nodes, links }} nodeThreeObject={NODE_OBJ} linkThreeObject={LINK_OBJ}
            linkDirectionalParticles={3} linkDirectionalParticleWidth={1.8} linkDirectionalParticleSpeed={0.008}
            linkDirectionalParticleColor={() => "#9fd0f0"}
            d3VelocityDecay={0.3} warmupTicks={60} cooldownTicks={0} enablePointerInteraction={false} />
          <Pulses links={links as any} />
          <Environment preset="night" />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>

        {/* Floating cluster labels */}
        <div className="sg-cluster-labels">
          {CLUSTERS[stage].map((cl, i) => (
            <div key={`${stage}-${i}`} className="sg-cluster-label" style={{ left: "50%", top: "50%", transform: `translate(${cl.cx * 0.6}px, ${cl.cy * 0.6}px)`, color: cl.color, borderColor: `${cl.color}44` }}>
              {cl.name}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="sg-hud-strip">
        <div className="sg-hud-card"><div className="sg-hud-title">HOST LIST</div><HostList hosts={hud.hosts} /></div>
        <div className="sg-hud-card"><div className="sg-hud-title">ACCESS LOGINS</div><Bars data={hud.logins} /></div>
        <div className="sg-hud-card"><div className="sg-hud-title">BLAST RADIUS</div><Radar data={hud.blast} /></div>
        <div className="sg-hud-card"><div className="sg-hud-title">ACTION MAP</div><ActionBars data={hud.actions} /></div>
        <div className="sg-hud-card"><div className="sg-hud-title">THROUGHPUT</div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#e4e4ed", fontFamily: "var(--sys-mono)" }}>{(hud.throughput / 1000).toFixed(1)}k</div>
            <div style={{ fontSize: 9, color: "#64748b" }}>req/s</div>
          </div>
        </div>
        <div className="sg-hud-card"><div className="sg-hud-title">SYS STATUS</div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }} />
            <span style={{ fontSize: 10, color: "#a5b4fc" }}>{((hud.spend / 68) * 100).toFixed(0)}% budget</span>
          </div>
        </div>
      </div>

      {/* Play/Pause */}
      <button className="sg-play-btn" onClick={() => setPlaying(p => !p)}>
        {playing ? "❚❚" : "▶"}
      </button>

      {/* Hover tooltip */}
    </div>
  );
};

export default SwarmGraph;
