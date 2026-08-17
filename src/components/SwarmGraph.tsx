"use client";

/**
 * Level 5 — Neural network visualization.
 * Brain-like clusters with dendrite connections and signal pulses.
 * Game server locations sending information neuron-style.
 * Lazy-loaded to avoid SSR/Three.js issues.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

// ─── Neural cluster definitions ────────────────────────────────

const CLUSTERS = [
  { id: "calendar", label: "calendar sync", color: "#ff66aa", pos: [-80, 40, 0] as [number, number, number] },
  { id: "inbox", label: "inbox triage", color: "#66ffff", pos: [80, 40, -20] as [number, number, number] },
  { id: "invoice", label: "invoice_run", color: "#a78bfa", pos: [0, -50, 10] as [number, number, number] },
  { id: "outreach", label: "outreach", color: "#f472b6", pos: [-60, -40, -30] as [number, number, number] },
  { id: "leads", label: "people 4 people", color: "#5eead4", pos: [60, -30, 20] as [number, number, number] },
  { id: "report", label: "report build", color: "#fb923c", pos: [0, 60, -10] as [number, number, number] },
];

type Node = {
  id: string;
  group: string;
  color: string;
  fx: number;
  fy: number;
  fz: number;
  val: number;
  isCore: boolean;
};

type Link = {
  source: string;
  target: string;
  value: number;
  pulse: boolean;
};

function makeNeurons(): { nodes: Node[]; links: Link[] } {
  const nodes: Node[] = [];
  const links: Link[] = [];

  CLUSTERS.forEach((cluster) => {
    const [cx, cy, cz] = cluster.pos;

    // Core neuron (large, central)
    nodes.push({
      id: `${cluster.id}-core`,
      group: cluster.id,
      color: cluster.color,
      fx: cx,
      fy: cy,
      fz: cz,
      val: 3.5,
      isCore: true,
    });

    // Surrounding neurons (smaller, scattered around core)
    for (let i = 0; i < 35; i++) {
      const angle = (i / 35) * Math.PI * 2;
      const radius = 25 + Math.random() * 20;
      const x = cx + Math.cos(angle) * radius + (Math.random() - 0.5) * 15;
      const y = cy + Math.sin(angle) * radius + (Math.random() - 0.5) * 15;
      const z = cz + (Math.random() - 0.5) * 20;

      nodes.push({
        id: `${cluster.id}-${i}`,
        group: cluster.id,
        color: cluster.color,
        fx: x,
        fy: y,
        fz: z,
        val: 0.5 + Math.random() * 1.2,
        isCore: false,
      });
    }

    // Intra-cluster dendrite connections (neuron to core)
    for (let i = 0; i < 35; i++) {
      // Connect some neurons to each other within cluster
      if (i > 0 && Math.random() < 0.3) {
        links.push({
          source: `${cluster.id}-${i}`,
          target: `${cluster.id}-${i - 1}`,
          value: 0.4 + Math.random() * 0.4,
          pulse: Math.random() < 0.2,
        });
      }
      // Every 3rd neuron connects to core
      if (i % 3 === 0) {
        links.push({
          source: `${cluster.id}-${i}`,
          target: `${cluster.id}-core`,
          value: 0.6 + Math.random() * 0.3,
          pulse: Math.random() < 0.3,
        });
      }
    }
  });

  // Inter-cluster connections (axon bundles between cores)
  const coreIds = CLUSTERS.map((c) => `${c.id}-core`);
  for (let i = 0; i < coreIds.length; i++) {
    for (let j = i + 1; j < coreIds.length; j++) {
      if (Math.random() < 0.7) {
        links.push({
          source: coreIds[i],
          target: coreIds[j],
          value: 0.8 + Math.random() * 0.2,
          pulse: true,
        });
      }
    }
  }

  return { nodes, links };
}

// ─── Stage definitions ──────────────────────────────────────────

function stageData(stageIdx: number) {
  const base = makeNeurons();
  // Scale spread based on stage
  const spread = [1, 1.1, 1.3, 1.2][stageIdx] ?? 1;
  return {
    nodes: base.nodes.map((n) => ({
      ...n,
      fx: n.fx * spread,
      fy: n.fy * spread,
      fz: n.fz * spread,
    })),
    links: base.links,
  };
}

const STAGES = [
  { id: "s1", label: "Initial dispatch", metrics: { bots: 4, actions: 124, throughput: 847, spend: 12.40 }, log: ["08:00:12 — bot spawned: calendar-sync", "08:00:15 — bot spawned: inbox-triage", "08:00:18 — bot spawned: invoice-run", "08:00:21 — bot spawned: lead-scrape"] },
  { id: "s2", label: "Connection wave", metrics: { bots: 8, actions: 256, throughput: 1240, spend: 24.80 }, log: ["08:15:03 — wave: 4 bots dispatched", "08:15:12 — connection: 84 nodes linked", "08:15:18 — merge: calendar+invoice clusters fused", "08:15:24 — pipeline: inbox→leads routing active"] },
  { id: "s3", label: "Peak throughput", metrics: { bots: 13, actions: 512, throughput: 2140, spend: 42.60 }, log: ["08:30:01 — peak: 2140 actions/min", "08:30:05 — cluster: 6 groups merged", "08:30:12 — alert: invoice spike detected", "08:30:18 — auto: outreach batch dispatched"] },
  { id: "s4", label: "Self-healing", metrics: { bots: 10, actions: 380, throughput: 1680, spend: 33.60 }, log: ["08:45:02 — heal: bot restarted (inbox-triage)", "08:45:08 — reroute: invoice→calendar fallback", "08:45:14 — stable: all clusters reconnecting", "08:45:20 — optimize: 12% latency reduction"] },
];

// ─── HUD Panel Components ─────────────────────────────────────

function BlastRadius({ stageIdx }: { stageIdx: number }) {
  const dims = ["scope", "speed", "cost", "risk", "impact"];
  const values = [
    [40, 55, 30, 25, 60],
    [60, 70, 50, 40, 75],
    [80, 85, 70, 55, 90],
    [65, 75, 55, 45, 80],
  ];
  const v = values[stageIdx] ?? values[0];
  const cx = 60, cy = 55, r = 38;
  const pts = v.map((val, i) => {
    const a = (i / dims.length) * Math.PI * 2 - Math.PI / 2;
    return `${cx + Math.cos(a) * r * val / 100},${cy + Math.sin(a) * r * val / 100}`;
  }).join(" ");

  return (
    <div className="sg-hud-panel">
      <div className="sg-hud-label">BLAST RADIUS</div>
      <svg width="120" height="110" viewBox="0 0 120 110">
        {[20, 40, 60, 80].map((ring) => (
          <polygon key={ring} points={dims.map((_, i) => {
            const a = (i / dims.length) * Math.PI * 2 - Math.PI / 2;
            return `${cx + Math.cos(a) * r * ring / 100},${cy + Math.sin(a) * r * ring / 100}`;
          }).join(" ")} fill="none" stroke="rgba(159,208,240,.12)" strokeWidth="0.5" />
        ))}
        <polygon points={pts} fill="rgba(99,225,197,.12)" stroke="#63e1c5" strokeWidth="1.5" />
        {dims.map((d, i) => {
          const a = (i / dims.length) * Math.PI * 2 - Math.PI / 2;
          return <text key={d} x={cx + Math.cos(a) * (r + 14)} y={cy + Math.sin(a) * (r + 14)} fill="#8aa4b8" fontSize="6" textAnchor="middle" dominantBaseline="middle">{d}</text>;
        })}
      </svg>
    </div>
  );
}

function ActionHeat({ stageIdx }: { stageIdx: number }) {
  const bars = [
    { label: "calendar", vals: [30, 55, 78, 50] },
    { label: "inbox", vals: [45, 70, 90, 65] },
    { label: "invoice", vals: [20, 40, 65, 45] },
    { label: "outreach", vals: [35, 60, 82, 55] },
  ];
  const max = 100;
  return (
    <div className="sg-hud-panel">
      <div className="sg-hud-label">ACTION HEAT</div>
      <svg width="130" height="70" viewBox="0 0 130 70">
        {bars.map((b, i) => {
          const x = 8 + i * 30;
          const h = (b.vals[stageIdx] ?? 30) / max * 50;
          return (
            <g key={b.label}>
              <rect x={x} y={55 - h} width="20" height={h} rx="3" fill={`rgba(251,146,60,${0.5 + (stageIdx * 0.12)})`} />
              <text x={x + 10} y={66} fill="#8aa4b8" fontSize="5.5" textAnchor="middle">{b.label.slice(0, 4)}</text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function AccessLedger({ stageIdx }: { stageIdx: number }) {
  const services = ["google", "stripe", "notion", "calendar", "slack"];
  const percentages = [
    [30, 20, 15, 25, 10],
    [55, 35, 25, 40, 18],
    [78, 50, 40, 60, 30],
    [50, 30, 20, 35, 15],
  ];
  const pcts = percentages[stageIdx] ?? percentages[0];

  return (
    <div className="sg-hud-panel">
      <div className="sg-hud-label">ACCESS LEDGER</div>
      <div className="sg-hud-bars">
        {services.map((svc, i) => (
          <div key={svc} className="sg-hud-bar-row">
            <span className="sg-hud-bar-label">{svc}</span>
            <div className="sg-hud-bar-track">
              <motion.div className="sg-hud-bar-fill" animate={{ width: `${pcts[i]}%` }} transition={{ duration: 1.2, ease: "easeInOut" }} />
            </div>
            <span className="sg-hud-bar-val">{pcts[i]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ThroughputChart({ stageIdx }: { stageIdx: number }) {
  const vals = [847, 1240, 2140, 1680];
  const v = vals[stageIdx] ?? 847;
  return (
    <div className="sg-hud-panel">
      <div className="sg-hud-label">THROUGHPUT</div>
      <motion.div className="sg-hud-big" key={v} initial={{ scale: 1.15, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        {v.toLocaleString()}
      </motion.div>
      <div className="sg-hud-unit">actions / min</div>
    </div>
  );
}

function RunLog({ lines }: { lines: string[] }) {
  return (
    <div className="sg-hud-panel sg-hud-log">
      <div className="sg-hud-label">RUN LOG</div>
      <div className="sg-hud-log-lines">
        {lines.map((l, i) => (
          <div key={i} className="sg-hud-log-line">{l}</div>
        ))}
      </div>
    </div>
  );
}

function BotStatus({ stageIdx }: { stageIdx: number }) {
  const bots = [
    { name: "calendar-sync", status: "active" },
    { name: "inbox-triage", status: "active" },
    { name: "invoice-run", status: "active" },
    { name: "lead-scrape", status: "active" },
    { name: "outreach-blast", status: stageIdx >= 1 ? "active" : "pending" },
    { name: "report-build", status: stageIdx >= 2 ? "active" : "pending" },
  ];
  return (
    <div className="sg-hud-panel">
      <div className="sg-hud-label">BOT STATUS</div>
      <div className="sg-hud-bots">
        {bots.map((b) => (
          <div key={b.name} className="sg-hud-bot">
            <span className={`sg-hud-dot ${b.status === "active" ? "on" : "off"}`} />
            <span>{b.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────

export default function SwarmGraph() {
  const fgRef = useRef<any>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [orbitAngle, setOrbitAngle] = useState(0);
  const stage = STAGES[index];
  const data = useMemo(() => stageData(index), [index]);

  // Camera auto-fit
  const onEngineStop = () => {
    const fg = fgRef.current;
    if (!fg) return;
    const clusters = CLUSTERS;
    let cx = 0, cy = 0, cz = 0;
    clusters.forEach((c) => { cx += c.pos[0]; cy += c.pos[1]; cz += c.pos[2]; });
    cx /= clusters.length; cy /= clusters.length; cz /= clusters.length;
    const dist = 250;
    fg.cameraPosition({ x: cx + dist * 0.4, y: cy + dist * 0.3, z: cz + dist * 2 }, { x: cx, y: cy, z: cz }, 1500);
  };

  // Auto-play
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % STAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [playing]);

  // Continuous orbit
  useEffect(() => {
    if (!playing) return;
    let raf: number;
    const tick = () => {
      setOrbitAngle((a) => a + 0.002);
      const fg = fgRef.current;
      if (fg) {
        const dist = 280;
        fg.cameraPosition(
          { x: Math.cos(orbitAngle) * dist, y: Math.sin(orbitAngle * 0.7) * dist * 0.4, z: Math.sin(orbitAngle) * dist * 1.2 },
          { x: 0, y: 0, z: 0 },
          50,
        );
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, orbitAngle]);

  // Re-fit camera on stage change
  useEffect(() => { onEngineStop(); }, [index]);

  // Custom node: neuron sphere with glow
  const nodeThreeObject = useMemo(() => {
    return (node: any) => {
      const group = new THREE.Group();
      const size = node.val ?? 1;

      // Core sphere
      const geo = new THREE.SphereGeometry(size * 1.2, 16, 16);
      const mat = new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.9 });
      group.add(new THREE.Mesh(geo, mat));

      // Glow aura
      const glowGeo = new THREE.SphereGeometry(size * 3, 16, 16);
      const glowMat = new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.15 });
      group.add(new THREE.Mesh(glowGeo, glowMat));

      // Core neuron gets dendrite spikes
      if (node.isCore) {
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const spikeGeo = new THREE.CylinderGeometry(0.3, 0.1, size * 4, 6);
          const spikeMat = new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.4 });
          const spike = new THREE.Mesh(spikeGeo, spikeMat);
          spike.position.set(
            Math.cos(angle) * size * 2.5,
            Math.sin(angle) * size * 2.5,
            (Math.random() - 0.5) * size * 2,
          );
          spike.rotation.z = angle + Math.PI / 2;
          group.add(spike);
        }
      }

      return group;
    };
  }, []);

  // Custom link: organic dendrite with optional pulse
  const linkThreeObject = useMemo(() => {
    return (link: any) => {
      const group = new THREE.Group();
      const source = link.source;
      const target = link.target;

      // Curved tube geometry for dendrite
      const points = [];
      const sx = source.fx ?? 0, sy = source.fy ?? 0, sz = source.fz ?? 0;
      const tx = target.fx ?? 0, ty = target.fy ?? 0, tz = target.fz ?? 0;
      const mx = (sx + tx) / 2 + (Math.random() - 0.5) * 20;
      const my = (sy + ty) / 2 + (Math.random() - 0.5) * 20;
      const mz = (sz + tz) / 2 + (Math.random() - 0.5) * 20;

      for (let i = 0; i <= 20; i++) {
        const t = i / 20;
        const x = (1 - t) * (1 - t) * sx + 2 * (1 - t) * t * mx + t * t * tx;
        const y = (1 - t) * (1 - t) * sy + 2 * (1 - t) * t * my + t * t * ty;
        const z = (1 - t) * (1 - t) * sz + 2 * (1 - t) * t * mz + t * t * tz;
        points.push(new THREE.Vector3(x, y, z));
      }

      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeo = new THREE.TubeGeometry(curve, 20, 0.15 + link.value * 0.3, 6, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: source.color || "#888",
        transparent: true,
        opacity: 0.25 + link.value * 0.2,
      });
      group.add(new THREE.Mesh(tubeGeo, tubeMat));

      // Signal pulse sphere
      if (link.pulse) {
        const pulseGeo = new THREE.SphereGeometry(1.5, 8, 8);
        const pulseMat = new THREE.MeshBasicMaterial({ color: source.color || "#fff", transparent: true, opacity: 0.8 });
        const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
        pulseMesh.userData.curve = curve;
        pulseMesh.userData.t = Math.random();
        group.add(pulseMesh);
      }

      return group;
    };
  }, []);

  return (
    <div className="sg-shell">
      {/* ── Top status bar ── */}
      <div className="sg-top-bar">
        <div className="sg-top-left">
          <span className="sg-top-logo">SYS</span>
          <span className="sg-top-sep">·</span>
          <span className="sg-top-nav">graph-overview</span>
          <span className="sg-top-nav">labels</span>
          <span className="sg-top-nav">physics</span>
        </div>
        <div className="sg-top-right">
          <span className="sg-top-metric">ACTIONS <b>{stage.metrics.actions}</b></span>
          <span className="sg-top-metric">NODES <b>{data.nodes.length}</b></span>
          <span className="sg-top-metric">EDGES <b>{data.links.length}</b></span>
          <span className="sg-top-sep">·</span>
          <span className="sg-top-status">pending <b>{stage.metrics.bots}</b></span>
        </div>
      </div>

      {/* ── Graph canvas ── */}
      <div className="sg-graph-area">
        <ForceGraph3D
          ref={fgRef}
          graphData={data}
          nodeVal={(n: any) => n.val}
          nodeColor={(n: any) => n.color}
          nodeOpacity={0.95}
          nodeThreeObject={nodeThreeObject}
          linkColor={() => "rgba(159,208,240,.35)"}
          linkOpacity={0.4}
          linkWidth={0.8}
          linkCurvature={0.2}
          linkThreeObject={linkThreeObject}
          backgroundColor="#000000"
          width={1500}
          height={600}
          d3VelocityDecay={0.3}
          warmupTicks={40}
          cooldownTicks={0}
          enablePointerInteraction={false}
        />

        {/* Floating cluster labels */}
        <div className="sg-cluster-labels">
          {CLUSTERS.map((c) => {
            const [cx, cy] = c.pos;
            return (
              <div
                key={c.id}
                className="sg-cluster-label"
                style={{ left: `${50 + (cx / 100) * 35}%`, top: `${50 + (cy / 100) * 30}%`, color: c.color }}
              >
                {c.label}
              </div>
            );
          })}
        </div>

        {/* Stage label */}
        <div className="sg-stage-label">
          <span className="sg-stage-idx">{String(index + 1).padStart(2, "0")}</span>
          <span className="sg-stage-name">{stage.label}</span>
        </div>
      </div>

      {/* ── Bottom HUD strip ── */}
      <div className="sg-hud-strip">
        <RunLog lines={stage.log} />
        <AccessLedger stageIdx={index} />
        <BlastRadius stageIdx={index} />
        <ActionHeat stageIdx={index} />
        <ThroughputChart stageIdx={index} />
        <BotStatus stageIdx={index} />
      </div>

      {/* ── Controls ── */}
      <div className="sg-controls">
        <button className="sg-ctrl-btn" onClick={() => setPlaying(!playing)}>
          {playing ? "⏸" : "▶"}
        </button>
        {STAGES.map((s, i) => (
          <button
            key={s.id}
            className={`sg-ctrl-btn ${i === index ? "active" : ""}`}
            onClick={() => { setIndex(i); setPlaying(false); }}
          >
            {String(i + 1).padStart(2, "0")}
          </button>
        ))}
      </div>
    </div>
  );
}
