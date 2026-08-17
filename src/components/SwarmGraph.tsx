"use client";

/**
 * Level 5 — 3D agentic swarm graph (reference-matching).
 * Massive dense graph with galaxy-like clusters, motion trails,
 * floating labels, and continuous organic drift.
 * Lazy-loaded to avoid SSR/Three.js issues.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import ForceGraph3D from "react-force-graph-3d";
import * as THREE from "three";

// ─── Graph data ────────────────────────────────────────────────

const COLORS = {
  magenta: "#ff66aa", cyan: "#66ffff", purple: "#a78bfa",
  pink: "#f472b6", teal: "#5eead4", orange: "#fb923c",
};

function makeNodes(groups: { name: string; color: string; count: number; spread: number }[]) {
  return groups.flatMap((g) =>
    Array.from({ length: g.count }, (_, i) => {
      const a = (i / g.count) * Math.PI * 2;
      const r = g.spread * (0.3 + Math.random() * 0.7);
      return {
        id: `${g.name}-${i}`, group: g.name, val: 0.3 + Math.random() * 1.8,
        color: g.color,
        fx: Math.cos(a) * r + (Math.random() - 0.5) * g.spread * 0.4,
        fy: Math.sin(a) * r + (Math.random() - 0.5) * g.spread * 0.4,
        fz: (Math.random() - 0.5) * g.spread * 0.6,
      };
    }),
  );
}

function makeLinks(nodes: SN[], density: number) {
  const links: SL[] = [];
  const groups = [...new Set(nodes.map((n) => n.group))];
  groups.forEach((g) => {
    const gn = nodes.filter((n) => n.group === g);
    for (let i = 0; i < gn.length; i++)
      for (let j = i + 1; j < gn.length; j++)
        if (Math.random() < density * 0.35)
          links.push({ source: gn[i].id, target: gn[j].id, value: 0.2 + Math.random() * 0.8 });
  });
  // Cross-group links (sparse web between clusters)
  for (let i = 0; i < nodes.length; i++)
    for (let j = i + 1; j < nodes.length; j++)
      if (nodes[i].group !== nodes[j].group && Math.random() < density * 0.015)
        links.push({ source: nodes[i].id, target: nodes[j].id, value: 0.05 + Math.random() * 0.2 });
  return links;
}

type SN = { id: string; group: string; val: number; color: string; fx?: number; fy?: number; fz?: number };
type SL = { source: string; target: string; value: number };

// ─── Stage definitions (massive node counts) ──────────────────

const STAGES: {
  id: string; label: string; nodes: SN[]; links: SL[];
  metrics: { bots: number; actions: number; throughput: number; spend: number };
  log: string[];
}[] = [
  {
    id: "s1", label: "Initial dispatch",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 90, spread: 55 },
      { name: "inbox", color: COLORS.cyan, count: 110, spread: 60 },
      { name: "invoice", color: COLORS.purple, count: 70, spread: 48 },
      { name: "outreach", color: COLORS.pink, count: 80, spread: 52 },
      { name: "leads", color: COLORS.teal, count: 60, spread: 45 },
      { name: "report", color: COLORS.orange, count: 50, spread: 42 },
    ]),
    links: [], metrics: { bots: 4, actions: 124, throughput: 847, spend: 12.40 },
    log: ["08:00:12 — bot spawned: calendar-sync", "08:00:15 — bot spawned: inbox-triage", "08:00:18 — bot spawned: invoice-run", "08:00:21 — bot spawned: lead-scrape"],
  },
  {
    id: "s2", label: "Connection wave",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 120, spread: 65 },
      { name: "inbox", color: COLORS.cyan, count: 140, spread: 70 },
      { name: "invoice", color: COLORS.purple, count: 90, spread: 55 },
      { name: "outreach", color: COLORS.pink, count: 100, spread: 60 },
      { name: "leads", color: COLORS.teal, count: 80, spread: 50 },
      { name: "report", color: COLORS.orange, count: 70, spread: 48 },
    ]),
    links: [], metrics: { bots: 8, actions: 256, throughput: 1240, spend: 24.80 },
    log: ["08:15:03 — wave: 4 bots dispatched", "08:15:12 — connection: 84 nodes linked", "08:15:18 — merge: calendar+invoice clusters fused", "08:15:24 — pipeline: inbox→leads routing active"],
  },
  {
    id: "s3", label: "Peak throughput",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 150, spread: 75 },
      { name: "inbox", color: COLORS.cyan, count: 170, spread: 80 },
      { name: "invoice", color: COLORS.purple, count: 110, spread: 62 },
      { name: "outreach", color: COLORS.pink, count: 120, spread: 68 },
      { name: "leads", color: COLORS.teal, count: 100, spread: 58 },
      { name: "report", color: COLORS.orange, count: 90, spread: 55 },
    ]),
    links: [], metrics: { bots: 13, actions: 512, throughput: 2140, spend: 42.60 },
    log: ["08:30:01 — peak: 2140 actions/min", "08:30:05 — cluster: 6 groups merged", "08:30:12 — alert: invoice spike detected", "08:30:18 — auto: outreach batch dispatched"],
  },
  {
    id: "s4", label: "Self-healing",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 130, spread: 70 },
      { name: "inbox", color: COLORS.cyan, count: 150, spread: 75 },
      { name: "invoice", color: COLORS.purple, count: 100, spread: 58 },
      { name: "outreach", color: COLORS.pink, count: 110, spread: 62 },
      { name: "leads", color: COLORS.teal, count: 90, spread: 52 },
      { name: "report", color: COLORS.orange, count: 80, spread: 50 },
    ]),
    links: [], metrics: { bots: 10, actions: 380, throughput: 1680, spend: 33.60 },
    log: ["08:45:02 — heal: bot restarted (inbox-triage)", "08:45:08 — reroute: invoice→calendar fallback", "08:45:14 — stable: all clusters reconnecting", "08:45:20 — optimize: 12% latency reduction"],
  },
];

// Generate links after nodes exist (density scales with node count)
STAGES.forEach((s) => {
  s.links = makeLinks(s.nodes, s.nodes.length > 300 ? 0.25 : 0.35);
});

// ─── Cluster center labels ──────────────────────────────────────

const CLUSTER_LABELS: Record<string, { label: string; color: string }> = {
  calendar: { label: "calendar sync", color: "#ff66aa" },
  inbox: { label: "inbox triage", color: "#66ffff" },
  invoice: { label: "invoice_run", color: "#a78bfa" },
  outreach: { label: "outreach", color: "#f472b6" },
  leads: { label: "people 4 people", color: "#5eead4" },
  report: { label: "report build", color: "#fb923c" },
};

function clusterCenters(nodes: SN[]) {
  const groups = [...new Set(nodes.map((n) => n.group))];
  return groups.map((g) => {
    const gn = nodes.filter((n) => n.group === g);
    const cx = gn.reduce((s, n) => s + (n.fx ?? 0), 0) / gn.length;
    const cy = gn.reduce((s, n) => s + (n.fy ?? 0), 0) / gn.length;
    const cz = gn.reduce((s, n) => s + (n.fz ?? 0), 0) / gn.length;
    return { group: g, x: cx, y: cy, z: cz, ...CLUSTER_LABELS[g] };
  });
}

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
        <motion.polygon
          points={pts}
          fill="rgba(99,225,197,.12)"
          stroke="#63e1c5"
          strokeWidth="1.5"
          animate={{ points: pts }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
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
              <motion.div
                className="sg-hud-bar-fill"
                animate={{ width: `${pcts[i]}%` }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
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
      <motion.div
        className="sg-hud-big"
        key={v}
        initial={{ scale: 1.15, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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

  // Camera auto-fit on engine stop
  const onEngineStop = () => {
    const fg = fgRef.current;
    if (!fg) return;
    const nodes = stage.nodes;
    if (nodes.length === 0) return;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
    nodes.forEach((n: SN) => {
      const x = n.fx ?? 0, y = n.fy ?? 0, z = n.fz ?? 0;
      if (x < minX) minX = x; if (x > maxX) maxX = x;
      if (y < minY) minY = y; if (y > maxY) maxY = y;
      if (z < minZ) minZ = z; if (z > maxZ) maxZ = z;
    });
    const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, cz = (minZ + maxZ) / 2;
    const dist = Math.max(maxX - minX, maxY - minY, maxZ - minZ) * 1.8;
    fg.cameraPosition({ x: cx + dist * 0.4, y: cy + dist * 0.3, z: cz + dist * 2.2 }, { x: cx, y: cy, z: cz }, 1500);
  };

  // Auto-play
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % STAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [playing]);

  // Continuous orbit when playing
  useEffect(() => {
    if (!playing) return;
    let raf: number;
    const tick = () => {
      setOrbitAngle((a) => a + 0.003);
      const fg = fgRef.current;
      if (fg) {
        const nodes = stage.nodes;
        let cx = 0, cy = 0, cz = 0;
        nodes.forEach((n: SN) => { cx += n.fx ?? 0; cy += n.fy ?? 0; cz += n.fz ?? 0; });
        cx /= nodes.length; cy /= nodes.length; cz /= nodes.length;
        const dist = 300;
        fg.cameraPosition(
          { x: cx + Math.cos(orbitAngle) * dist, y: cy + Math.sin(orbitAngle * 0.7) * dist * 0.5, z: cz + Math.sin(orbitAngle) * dist * 1.5 },
          { x: cx, y: cy, z: cz },
          100,
        );
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, orbitAngle, stage]);

  // Re-fit camera on stage change
  useEffect(() => { onEngineStop(); }, [index]);

  // Custom node rendering: glowing sphere with aura
  const nodeThreeObject = useMemo(() => {
    return (node: any) => {
      const group = new THREE.Group();
      const size = node.val ?? 1;
      // Core sphere
      const geo = new THREE.SphereGeometry(size * 1.2, 12, 12);
      const mat = new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.85 });
      group.add(new THREE.Mesh(geo, mat));
      // Glow aura
      const glowGeo = new THREE.SphereGeometry(size * 2.5, 12, 12);
      const glowMat = new THREE.MeshBasicMaterial({ color: node.color, transparent: true, opacity: 0.12 });
      group.add(new THREE.Mesh(glowGeo, glowMat));
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
          <span className="sg-top-metric">NODES <b>{stage.nodes.length}</b></span>
          <span className="sg-top-metric">EDGES <b>{stage.links.length}</b></span>
          <span className="sg-top-sep">·</span>
          <span className="sg-top-status">pending <b>{stage.metrics.bots}</b></span>
        </div>
      </div>

      {/* ── Graph canvas ── */}
      <div className="sg-graph-area">
        <ForceGraph3D
          ref={fgRef}
          graphData={stage}
          nodeVal={(n: any) => n.val}
          nodeColor={(n: any) => n.color}
          nodeOpacity={0.92}
          nodeThreeObject={nodeThreeObject}
          linkColor={() => "rgba(159,208,240,.18)"}
          linkOpacity={0.25}
          linkWidth={0.4}
          linkCurvature={0.15}
          backgroundColor="#000000"
          width={1500}
          height={600}
          d3VelocityDecay={0.3}
          warmupTicks={40}
          cooldownTicks={0}
          enablePointerInteraction={false}
        />
        {/* Floating cluster labels — positioned at graph center estimates */}
        <div className="sg-cluster-labels">
          {clusterCenters(stage.nodes).map((c) => (
            <div
              key={c.group}
              className="sg-cluster-label"
              style={{ left: `${50 + (c.x / 80) * 30}%`, top: `${50 + (c.y / 80) * 25}%`, color: c.color }}
            >
              {c.label}
            </div>
          ))}
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
        <button className="sg-ctrl-btn" onClick={() => { setPlaying(!playing); }}>
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
