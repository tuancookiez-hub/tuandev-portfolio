"use client";

/**
 * Level 5 — 3D agentic swarm graph.
 * Uses react-force-graph-3d for the 3D force-directed graph.
 * Lazy-loaded to avoid SSR/Three.js issues with main bundle.
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
      const r = g.spread * (0.4 + Math.random() * 0.6);
      return {
        id: `${g.name}-${i}`, group: g.name, val: 0.5 + Math.random() * 1.5,
        color: g.color,
        fx: Math.cos(a) * r + (Math.random() - 0.5) * g.spread * 0.3,
        fy: Math.sin(a) * r + (Math.random() - 0.5) * g.spread * 0.3,
        fz: (Math.random() - 0.5) * g.spread * 0.5,
      };
    }),
  );
}

function makeLinks(nodes: SN[], density: number) {
  const links: { source: string; target: string; value: number }[] = [];
  const groups = [...new Set(nodes.map((n) => n.group))];
  groups.forEach((g) => {
    const gn = nodes.filter((n) => n.group === g);
    for (let i = 0; i < gn.length; i++)
      for (let j = i + 1; j < gn.length; j++)
        if (Math.random() < density * 0.4)
          links.push({ source: gn[i].id, target: gn[j].id, value: 0.3 + Math.random() * 0.7 });
  });
  for (let i = 0; i < nodes.length; i++)
    for (let j = i + 1; j < nodes.length; j++)
      if (nodes[i].group !== nodes[j].group && Math.random() < density * 0.03)
        links.push({ source: nodes[i].id, target: nodes[j].id, value: 0.1 + Math.random() * 0.3 });
  return links;
}

type SN = { id: string; group: string; val: number; color: string; fx?: number; fy?: number; fz?: number };
type SL = { source: string; target: string; value: number };

const STAGES: { id: string; label: string; nodes: SN[]; links: SL[]; metrics: { bots: number; actions: number; throughput: number; spend: number }; log: string[] }[] = [
  {
    id: "s1", label: "Initial dispatch",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 18, spread: 40 },
      { name: "inbox", color: COLORS.cyan, count: 22, spread: 45 },
      { name: "invoice", color: COLORS.purple, count: 14, spread: 35 },
      { name: "outreach", color: COLORS.pink, count: 16, spread: 38 },
      { name: "leads", color: COLORS.teal, count: 12, spread: 32 },
      { name: "report", color: COLORS.orange, count: 10, spread: 30 },
    ]),
    links: [], metrics: { bots: 4, actions: 124, throughput: 847, spend: 12.40 },
    log: ["08:00:12 — bot spawned: calendar-sync", "08:00:15 — bot spawned: inbox-triage", "08:00:18 — bot spawned: invoice-run", "08:00:21 — bot spawned: lead-scrape"],
  },
  {
    id: "s2", label: "Connection wave",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 24, spread: 48 },
      { name: "inbox", color: COLORS.cyan, count: 28, spread: 52 },
      { name: "invoice", color: COLORS.purple, count: 18, spread: 42 },
      { name: "outreach", color: COLORS.pink, count: 20, spread: 44 },
      { name: "leads", color: COLORS.teal, count: 16, spread: 38 },
      { name: "report", color: COLORS.orange, count: 14, spread: 36 },
    ]),
    links: [], metrics: { bots: 6, actions: 312, throughput: 1240, spend: 28.75 },
    log: ["08:02:30 — fusion: calendar+inbox linked", "08:02:45 — fusion: invoice+leads linked", "08:03:00 — new connection: outreach→report", "08:03:15 — cluster density increased"],
  },
  {
    id: "s3", label: "Peak activity",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 32, spread: 55 },
      { name: "inbox", color: COLORS.cyan, count: 35, spread: 58 },
      { name: "invoice", color: COLORS.purple, count: 22, spread: 48 },
      { name: "outreach", color: COLORS.pink, count: 26, spread: 50 },
      { name: "leads", color: COLORS.teal, count: 20, spread: 44 },
      { name: "report", color: COLORS.orange, count: 18, spread: 42 },
    ]),
    links: [], metrics: { bots: 8, actions: 584, throughput: 1820, spend: 45.20 },
    log: ["08:05:00 — all clusters active", "08:05:15 — throughput peak: 1820/min", "08:05:30 — cross-cluster fusion active", "08:05:45 — spend alert: $45.20"],
  },
  {
    id: "s4", label: "Settling",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 20, spread: 42 },
      { name: "inbox", color: COLORS.cyan, count: 24, spread: 46 },
      { name: "invoice", color: COLORS.purple, count: 16, spread: 38 },
      { name: "outreach", color: COLORS.pink, count: 18, spread: 40 },
      { name: "leads", color: COLORS.teal, count: 14, spread: 34 },
      { name: "report", color: COLORS.orange, count: 12, spread: 32 },
    ]),
    links: [], metrics: { bots: 5, actions: 420, throughput: 1380, spend: 36.80 },
    log: ["08:08:00 — bots returning to idle", "08:08:15 — clusters contracting", "08:08:30 — spend stabilizing", "08:08:45 — cycle complete"],
  },
];
STAGES.forEach((s) => { s.links = makeLinks(s.nodes, 0.3 + STAGES.indexOf(s) * 0.15); });

// ─── HUD components ────────────────────────────────────────────

function RunLog({ lines }: { lines: string[] }) {
  return (
    <div className="sh-log">
      <div className="sh-log-head">Run Log</div>
      {lines.map((l, i) => (
        <motion.div key={l} className="sh-log-line"
          initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}>{l}</motion.div>
      ))}
    </div>
  );
}

function AccessLedger({ stageIdx }: { stageIdx: number }) {
  const stageData = [
    [{ name: "google", pct: 30 }, { name: "stripe", pct: 20 }, { name: "notion", pct: 15 }, { name: "calendar", pct: 40 }, { name: "slack", pct: 10 }],
    [{ name: "google", pct: 55 }, { name: "stripe", pct: 40 }, { name: "notion", pct: 30 }, { name: "calendar", pct: 65 }, { name: "slack", pct: 22 }],
    [{ name: "google", pct: 78 }, { name: "stripe", pct: 62 }, { name: "notion", pct: 45 }, { name: "calendar", pct: 88 }, { name: "slack", pct: 34 }],
    [{ name: "google", pct: 50 }, { name: "stripe", pct: 38 }, { name: "notion", pct: 28 }, { name: "calendar", pct: 55 }, { name: "slack", pct: 20 }],
  ];
  const data = stageData[stageIdx];
  return (
    <div className="sh-ledger">
      <div className="sh-ledger-head">Access Ledger</div>
      {data.map((a) => (
        <div key={a.name} className="sh-ledger-row">
          <span className="sh-ledger-name">{a.name}</span>
          <div className="sh-ledger-track"><motion.div className="sh-ledger-fill" initial={{ width: 0 }} animate={{ width: `${a.pct}%` }} transition={{ duration: 1.2 }} /></div>
          <span className="sh-ledger-pct">{a.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function ThroughputChart({ value }: { value: number }) {
  const spark = useMemo(() => Array.from({ length: 20 }, (_, i) => value * (0.5 + Math.sin(i * 0.4) * 0.3 + Math.random() * 0.2)), [value]);
  const max = Math.max(...spark);
  return (
    <div className="sh-throughput">
      <div className="sh-throughput-head">Throughput</div>
      <motion.div className="sh-throughput-value"
        key={value} initial={{ scale: 1.1, opacity: 0.6 }} animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}>{value.toLocaleString()}</motion.div>
      <div className="sh-throughput-sub">actions / min</div>
      <svg viewBox="0 0 200 40" className="sh-throughput-spark">
        <polyline points={spark.map((v, i) => `${(i / 19) * 200},${40 - (v / max) * 36}`).join(" ")} fill="none" stroke="#5eead4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ActionHeat({ stageIdx }: { stageIdx: number }) {
  const stageItems = [
    [{ label: "calendar", value: 30, color: COLORS.magenta }, { label: "inbox", value: 45, color: COLORS.cyan }, { label: "invoice", value: 20, color: COLORS.purple }, { label: "outreach", value: 25, color: COLORS.pink }, { label: "leads", value: 15, color: COLORS.teal }],
    [{ label: "calendar", value: 55, color: COLORS.magenta }, { label: "inbox", value: 70, color: COLORS.cyan }, { label: "invoice", value: 40, color: COLORS.purple }, { label: "outreach", value: 50, color: COLORS.pink }, { label: "leads", value: 30, color: COLORS.teal }],
    [{ label: "calendar", value: 78, color: COLORS.magenta }, { label: "inbox", value: 92, color: COLORS.cyan }, { label: "invoice", value: 54, color: COLORS.purple }, { label: "outreach", value: 66, color: COLORS.pink }, { label: "leads", value: 41, color: COLORS.teal }],
    [{ label: "calendar", value: 50, color: COLORS.magenta }, { label: "inbox", value: 60, color: COLORS.cyan }, { label: "invoice", value: 35, color: COLORS.purple }, { label: "outreach", value: 42, color: COLORS.pink }, { label: "leads", value: 28, color: COLORS.teal }],
  ];
  const items = stageItems[stageIdx];
  return (
    <div className="sh-heat">
      <div className="sh-heat-head">Action Heat</div>
      {items.map((it) => (
        <div key={it.label} className="sh-heat-row">
          <span className="sh-heat-label">{it.label}</span>
          <div className="sh-heat-track"><motion.div className="sh-heat-fill" style={{ background: it.color }} initial={{ width: 0 }} animate={{ width: `${it.value}%` }} transition={{ duration: 1 }} /></div>
        </div>
      ))}
    </div>
  );
}

function BlastRadius({ stageIdx }: { stageIdx: number }) {
  const dims = ["scope", "speed", "cost", "risk", "impact"];
  const stageValues = [
    [0.4, 0.5, 0.2, 0.2, 0.3],
    [0.6, 0.7, 0.35, 0.25, 0.6],
    [0.85, 0.9, 0.6, 0.5, 0.95],
    [0.55, 0.6, 0.4, 0.3, 0.7],
  ];
  const values = stageValues[stageIdx];
  const cx = 50, cy = 50, r = 38;
  const points = dims.map((_, i) => {
    const a = (i / dims.length) * Math.PI * 2 - Math.PI / 2;
    return `${cx + Math.cos(a) * r * values[i]},${cy + Math.sin(a) * r * values[i]}`;
  }).join(" ");
  return (
    <div className="sh-blast">
      <div className="sh-blast-head">Blast Radius</div>
      <svg viewBox="0 0 100 100" className="sh-blast-svg">
        <motion.polygon
          points={points} fill="rgba(94,234,212,.15)" stroke="#5eead4" strokeWidth="1"
          animate={{ points }} transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {dims.map((d, i) => {
          const a = (i / dims.length) * Math.PI * 2 - Math.PI / 2;
          return <text key={d} x={cx + Math.cos(a) * (r + 10)} y={cy + Math.sin(a) * (r + 10)} textAnchor="middle" fill="#a9c9db" fontSize="6" fontFamily="monospace">{d}</text>;
        })}
      </svg>
    </div>
  );
}

function BotStatusList({ stageIdx }: { stageIdx: number }) {
  const stageBots = [
    [
      { name: "calendar-sync", status: "active" as const, tasks: 6 },
      { name: "inbox-triage", status: "active", tasks: 4 },
      { name: "invoice-run", status: "idle", tasks: 0 },
      { name: "lead-scrape", status: "active", tasks: 3 },
    ],
    [
      { name: "calendar-sync", status: "active" as const, tasks: 12 },
      { name: "inbox-triage", status: "active", tasks: 8 },
      { name: "invoice-run", status: "active", tasks: 4 },
      { name: "lead-scrape", status: "active", tasks: 5 },
    ],
    [
      { name: "calendar-sync", status: "active" as const, tasks: 18 },
      { name: "inbox-triage", status: "active", tasks: 14 },
      { name: "invoice-run", status: "active", tasks: 9 },
      { name: "lead-scrape", status: "active", tasks: 8 },
      { name: "report-build", status: "active", tasks: 5 },
      { name: "outreach", status: "active", tasks: 3 },
    ],
    [
      { name: "calendar-sync", status: "active" as const, tasks: 8 },
      { name: "inbox-triage", status: "active", tasks: 5 },
      { name: "invoice-run", status: "idle", tasks: 0 },
      { name: "lead-scrape", status: "active", tasks: 2 },
    ],
  ];
  const bots = stageBots[stageIdx];
  return (
    <div className="sh-bots">
      <div className="sh-bots-head">Bot Status</div>
      {bots.map((b) => (
        <div key={b.name} className="sh-bot-row">
          <span className={`sh-bot-dot ${b.status === "active" ? "active" : ""}`} />
          <span className="sh-bot-name">{b.name}</span>
          <span className="sh-bot-tasks">{b.tasks > 0 ? `${b.tasks} tasks` : "idle"}</span>
        </div>
      ))}
    </div>
  );
}

function SpendGauge({ value, max }: { value: number; max: number }) {
  const pct = Math.min(1, value / max);
  const c = 2 * Math.PI * 28;
  return (
    <div className="sh-spend">
      <div className="sh-spend-head">Spend</div>
      <svg viewBox="0 0 70 70" className="sh-spend-gauge">
        <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(150,170,200,.15)" strokeWidth="5" />
        <motion.circle cx="35" cy="35" r="28" fill="none" stroke="#c98a12" strokeWidth="5" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)} transform="rotate(-90 35 35)"
          initial={false} animate={{ strokeDashoffset: c * (1 - pct) }} transition={{ duration: 1.2, ease: "easeOut" }} />
        <text x="35" y="33" textAnchor="middle" fill="#eaf3f9" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">${value.toFixed(2)}</text>
        <text x="35" y="44" textAnchor="middle" fill="#a9c9db" fontSize="7" fontFamily="monospace">of ${max.toFixed(2)}</text>
      </svg>
    </div>
  );
}

// ─── 3D Canvas ─────────────────────────────────────────────────

function Swarm3DCanvas({ stage, playing }: { stage: typeof STAGES[0]; playing: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<any>(null);
  const angleRef = useRef(0);

  // Custom node: glowing sphere + halo (with pulsing via uniform time)
  const nodeThreeObject = useMemo(() => (node: SN) => {
    const g = new THREE.Group();
    const main = new THREE.Mesh(
      new THREE.SphereGeometry(0.5 + node.val * 0.25, 16, 16),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(node.color), transparent: true, opacity: 0.85 }),
    );
    g.add(main);
    const glow = new THREE.Mesh(
      new THREE.SphereGeometry(1.0 + node.val * 0.4, 16, 16),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(node.color), transparent: true, opacity: 0.1 }),
    );
    g.add(glow);
    return g;
  }, []);

  // Custom link: simple line
  const linkThreeObject = useMemo(() => () => {
    const geo = new THREE.BufferGeometry();
    const mat = new THREE.LineBasicMaterial({ color: 0x8ab4f8, transparent: true, opacity: 0.18 });
    return new THREE.Line(geo, mat);
  }, []);

  const linkPositionUpdate = useMemo(() => (_line: any, coords: { start: { x: number; y: number; z: number }; end: { x: number; y: number; z: number } }) => {
    const geo = _line.geometry as THREE.BufferGeometry;
    const pos = new Float32Array([coords.start.x, coords.start.y, coords.start.z, coords.end.x, coords.end.y, coords.end.z]);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  }, []);

  // Camera: after engine settles, zoom to fit the graph
  const handleEngineStop = useMemo(() => () => {
    const fg = fgRef.current;
    if (!fg) return;
    const nodes = stage.nodes;
    if (!nodes.length) return;
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity, minZ = Infinity, maxZ = -Infinity;
    nodes.forEach((n) => {
      const x = n.fx ?? 0, y = n.fy ?? 0, z = n.fz ?? 0;
      minX = Math.min(minX, x); maxX = Math.max(maxX, x);
      minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
    });
    const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, cz = (minZ + maxZ) / 2;
    const spanX = maxX - minX, spanY = maxY - minY;
    const dist = Math.max(spanX, spanY) * 1.2 + 50;
    fg.cameraPosition({ x: cx + dist * 0.3, y: cy + dist * 0.15, z: cz + dist }, undefined, 1500);
  }, [stage]);

  // Continuous camera orbit when playing
  useEffect(() => {
    if (!playing) return;
    let raf: number;
    const orbit = () => {
      const fg = fgRef.current;
      if (!fg) { raf = requestAnimationFrame(orbit); return; }
      angleRef.current += 0.003;
      const a = angleRef.current;
      const nodes = stage.nodes;
      if (!nodes.length) { raf = requestAnimationFrame(orbit); return; }
      // Compute center from node positions
      let sx = 0, sy = 0, sz = 0;
      nodes.forEach((n) => { sx += n.fx ?? 0; sy += n.fy ?? 0; sz += n.fz ?? 0; });
      const cx = sx / nodes.length, cy = sy / nodes.length, cz = sz / nodes.length;
      // Orbit radius based on spread
      let mxx = 0, myy = 0;
      nodes.forEach((n) => { mxx = Math.max(mxx, Math.abs((n.fx ?? 0) - cx)); myy = Math.max(myy, Math.abs((n.fy ?? 0) - cy)); });
      const r = Math.max(mxx, myy) * 1.4 + 40;
      const camX = cx + Math.cos(a) * r;
      const camY = cy + Math.sin(a * 0.7) * r * 0.3;
      const camZ = cz + Math.sin(a) * r;
      fg.cameraPosition({ x: camX, y: camY, z: camZ }, { x: cx, y: cy, z: cz }, 0);
      raf = requestAnimationFrame(orbit);
    };
    raf = requestAnimationFrame(orbit);
    return () => cancelAnimationFrame(raf);
  }, [playing, stage]);

  return (
    <div className="sg-canvas-wrap" ref={containerRef}>
      <ForceGraph3D
        ref={fgRef}
        graphData={{ nodes: stage.nodes, links: stage.links }}
        backgroundColor="#0a0a0f"
        showNavInfo={false}
        width={undefined}
        height={undefined}
        nodeThreeObject={nodeThreeObject}
        linkThreeObject={linkThreeObject}
        linkPositionUpdate={linkPositionUpdate}
        linkDirectionalParticles={4}
        linkDirectionalParticleWidth={2}
        linkDirectionalParticleSpeed={0.008}
        linkDirectionalParticleColor={() => "#5eead4"}
        linkOpacity={0.25}
        nodeOpacity={0.9}
        d3VelocityDecay={0.3}
        warmupTicks={30}
        cooldownTicks={100}
        enablePointerInteraction
        enableNavigationControls
        onEngineStop={handleEngineStop}
      />
    </div>
  );
}

// ─── Main ──────────────────────────────────────────────────────

export default function SwarmGraph() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = STAGES[index];

  const next = () => setIndex((i) => (i + 1) % STAGES.length);

  useEffect(() => {
    if (!playing) return;
    timer.current = setTimeout(next, 5000);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [playing, next, index]);

  return (
    <div className="sg-shell">
      <div className="sg-graph-area">
        <Swarm3DCanvas stage={current} playing={playing} />

        <motion.div className="sg-stage-label" key={current.id}
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          <span className="sg-stage-id">{current.id.toUpperCase()}</span>
          <span className="sg-stage-title">{current.label}</span>
        </motion.div>

        <div className="sg-controls">
          <button type="button" className="sg-play" onClick={() => setPlaying((p) => !p)}>
            {playing ? "❚❚" : "▶"}
          </button>
          {STAGES.map((s, i) => (
            <button key={s.id} type="button"
              className={`sg-step ${i === index ? "is-active" : ""} ${i < index ? "is-done" : ""}`}
              onClick={() => { setIndex(i); setPlaying(false); }}>
              {i < index ? "✓" : String(i + 1)}
            </button>
          ))}
        </div>
      </div>

      <div className="sg-hud">
        <RunLog lines={current.log} />
        <AccessLedger stageIdx={index} />
        <ThroughputChart value={current.metrics.throughput} />
        <ActionHeat stageIdx={index} />
        <BlastRadius stageIdx={index} />
        <BotStatusList stageIdx={index} />
        <SpendGauge value={current.metrics.spend} max={60} />
      </div>
    </div>
  );
}
