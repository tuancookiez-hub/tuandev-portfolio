"use client";

/**
 * Level 5 — 3D agentic swarm graph. The most advanced stage.
 *
 * A true 3D force-directed graph rendered via react-force-graph-3d (Three.js):
 * - Dense organic clusters of glowing nodes connected by luminous edges
 * - Color-coded clusters (magenta/pink, cyan, purple) with floating labels
 * - Continuous gentle motion — clusters breathe, expand, contract
 * - Bloom/glow post-processing for neon-soft look
 * - Edge trails / particle flow along links
 * - Staged transitions: graph density, cluster sizes, connections evolve
 * - Bottom HUD with live metrics (run log, throughput, bot status, spend gauge)
 *
 * The HUD is pure React UI below the WebGL canvas — never inside it.
 */

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

// ─── Graph data types ────────────────────────────────────────

type SwarmNode = {
  id: string;
  group: string;
  val: number;
  color: string;
  fx?: number;
  fy?: number;
  fz?: number;
};

type SwarmLink = {
  source: string;
  target: string;
  value: number;
  color?: string;
};

type SwarmState = {
  id: string;
  label: string;
  nodes: SwarmNode[];
  links: SwarmLink[];
  metrics: {
    bots: number;
    actions: number;
    throughput: number;
    spend: number;
  };
  log: string[];
};

// ─── Stage data ──────────────────────────────────────────────

const COLORS = {
  magenta: "#ff66aa",
  cyan: "#66ffff",
  purple: "#a78bfa",
  pink: "#f472b6",
  teal: "#5eead4",
  orange: "#fb923c",
};

function makeNodes(groups: { name: string; color: string; count: number; spread: number }[]): SwarmNode[] {
  const nodes: SwarmNode[] = [];
  groups.forEach((g) => {
    for (let i = 0; i < g.count; i++) {
      const a = (i / g.count) * Math.PI * 2;
      const r = g.spread * (0.4 + Math.random() * 0.6);
      nodes.push({
        id: `${g.name}-${i}`,
        group: g.name,
        val: 0.5 + Math.random() * 1.5,
        color: g.color,
        fx: Math.cos(a) * r + (Math.random() - 0.5) * g.spread * 0.3,
        fy: Math.sin(a) * r + (Math.random() - 0.5) * g.spread * 0.3,
        fz: (Math.random() - 0.5) * g.spread * 0.5,
      });
    }
  });
  return nodes;
}

function makeLinks(nodes: SwarmNode[], density: number): SwarmLink[] {
  const links: SwarmLink[] = [];
  const groups = [...new Set(nodes.map((n) => n.group))];
  // Intra-group connections (dense)
  groups.forEach((g) => {
    const gn = nodes.filter((n) => n.group === g);
    for (let i = 0; i < gn.length; i++) {
      for (let j = i + 1; j < gn.length; j++) {
        if (Math.random() < density * 0.4) {
          links.push({ source: gn[i].id, target: gn[j].id, value: 0.3 + Math.random() * 0.7 });
        }
      }
    }
  });
  // Inter-group connections (sparse)
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].group !== nodes[j].group && Math.random() < density * 0.03) {
        links.push({ source: nodes[i].id, target: nodes[j].id, value: 0.1 + Math.random() * 0.3 });
      }
    }
  }
  return links;
}

const STAGES: SwarmState[] = [
  {
    id: "s1",
    label: "Initial dispatch",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 18, spread: 40 },
      { name: "inbox", color: COLORS.cyan, count: 22, spread: 45 },
      { name: "invoice", color: COLORS.purple, count: 14, spread: 35 },
      { name: "outreach", color: COLORS.pink, count: 16, spread: 38 },
      { name: "leads", color: COLORS.teal, count: 12, spread: 32 },
      { name: "report", color: COLORS.orange, count: 10, spread: 30 },
    ]),
    links: [],
    metrics: { bots: 4, actions: 124, throughput: 847, spend: 12.40 },
    log: ["08:00:12 — bot spawned: calendar-sync", "08:00:15 — bot spawned: inbox-triage", "08:00:18 — bot spawned: invoice-run", "08:00:21 — bot spawned: lead-scrape"],
  },
  {
    id: "s2",
    label: "Connection wave",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 24, spread: 48 },
      { name: "inbox", color: COLORS.cyan, count: 28, spread: 52 },
      { name: "invoice", color: COLORS.purple, count: 18, spread: 42 },
      { name: "outreach", color: COLORS.pink, count: 20, spread: 44 },
      { name: "leads", color: COLORS.teal, count: 16, spread: 38 },
      { name: "report", color: COLORS.orange, count: 14, spread: 36 },
    ]),
    links: [],
    metrics: { bots: 6, actions: 312, throughput: 1240, spend: 28.75 },
    log: ["08:02:30 — fusion: calendar+inbox linked", "08:02:45 — fusion: invoice+leads linked", "08:03:00 — new connection: outreach→report", "08:03:15 — cluster density increased"],
  },
  {
    id: "s3",
    label: "Peak activity",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 32, spread: 55 },
      { name: "inbox", color: COLORS.cyan, count: 35, spread: 58 },
      { name: "invoice", color: COLORS.purple, count: 22, spread: 48 },
      { name: "outreach", color: COLORS.pink, count: 26, spread: 50 },
      { name: "leads", color: COLORS.teal, count: 20, spread: 44 },
      { name: "report", color: COLORS.orange, count: 18, spread: 42 },
    ]),
    links: [],
    metrics: { bots: 8, actions: 584, throughput: 1820, spend: 45.20 },
    log: ["08:05:00 — all clusters active", "08:05:15 — throughput peak: 1820/min", "08:05:30 — cross-cluster fusion active", "08:05:45 — spend alert: $45.20"],
  },
  {
    id: "s4",
    label: "Settling",
    nodes: makeNodes([
      { name: "calendar", color: COLORS.magenta, count: 20, spread: 42 },
      { name: "inbox", color: COLORS.cyan, count: 24, spread: 46 },
      { name: "invoice", color: COLORS.purple, count: 16, spread: 38 },
      { name: "outreach", color: COLORS.pink, count: 18, spread: 40 },
      { name: "leads", color: COLORS.teal, count: 14, spread: 34 },
      { name: "report", color: COLORS.orange, count: 12, spread: 32 },
    ]),
    links: [],
    metrics: { bots: 5, actions: 420, throughput: 1380, spend: 36.80 },
    log: ["08:08:00 — bots returning to idle", "08:08:15 — clusters contracting", "08:08:30 — spend stabilizing", "08:08:45 — cycle complete"],
  },
];

// Pre-compute links for each stage
STAGES.forEach((s, i) => {
  s.links = makeLinks(s.nodes, 0.3 + i * 0.15);
});

// ─── Cluster labels ──────────────────────────────────────────

const CLUSTER_CENTERS: Record<string, { label: string; color: string }> = {
  calendar: { label: "calendar sync", color: COLORS.magenta },
  inbox: { label: "inbox triage", color: COLORS.cyan },
  invoice: { label: "invoice run", color: COLORS.purple },
  outreach: { label: "outreach", color: COLORS.pink },
  leads: { label: "lead scrape", color: COLORS.teal },
  report: { label: "report build", color: COLORS.orange },
};

// ─── HUD data ────────────────────────────────────────────────

const ACCESS_DATA = [
  { name: "google", pct: 78 },
  { name: "stripe", pct: 62 },
  { name: "notion", pct: 45 },
  { name: "calendar", pct: 88 },
  { name: "slack", pct: 34 },
];

const BOT_STATUS = [
  { name: "calendar-sync", status: "active", tasks: 12 },
  { name: "inbox-triage", status: "active", tasks: 8 },
  { name: "invoice-run", status: "idle", tasks: 0 },
  { name: "lead-scrape", status: "active", tasks: 5 },
  { name: "report-build", status: "active", tasks: 3 },
  { name: "outreach", status: "idle", tasks: 0 },
];

// ─── HUD components ──────────────────────────────────────────

function RunLog({ lines }: { lines: string[] }) {
  return (
    <div className="sh-log">
      <div className="sh-log-head">Run Log</div>
      {lines.map((l, i) => (
        <motion.div
          key={l}
          className="sh-log-line"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
        >
          {l}
        </motion.div>
      ))}
    </div>
  );
}

function AccessLedger() {
  return (
    <div className="sh-ledger">
      <div className="sh-ledger-head">Access Ledger</div>
      {ACCESS_DATA.map((a) => (
        <div key={a.name} className="sh-ledger-row">
          <span className="sh-ledger-name">{a.name}</span>
          <div className="sh-ledger-track">
            <motion.div
              className="sh-ledger-fill"
              initial={{ width: 0 }}
              animate={{ width: `${a.pct}%` }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </div>
          <span className="sh-ledger-pct">{a.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function ThroughputChart({ value }: { value: number }) {
  const [spark] = useState(() => Array.from({ length: 20 }, (_, i) => value * (0.5 + Math.sin(i * 0.4) * 0.3 + Math.random() * 0.2)));
  return (
    <div className="sh-throughput">
      <div className="sh-throughput-head">Throughput</div>
      <div className="sh-throughput-value">{value.toLocaleString()}</div>
      <div className="sh-throughput-sub">actions / min</div>
      <svg viewBox="0 0 200 40" className="sh-throughput-spark">
        <polyline
          points={spark.map((v, i) => `${(i / (spark.length - 1)) * 200},${40 - (v / Math.max(...spark)) * 36}`).join(" ")}
          fill="none"
          stroke="#5eead4"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function BotStatusList() {
  return (
    <div className="sh-bots">
      <div className="sh-bots-head">Bot Status</div>
      {BOT_STATUS.map((b) => (
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
  const circumference = 2 * Math.PI * 28;
  return (
    <div className="sh-spend">
      <div className="sh-spend-head">Spend</div>
      <svg viewBox="0 0 70 70" className="sh-spend-gauge">
        <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(150,170,200,.15)" strokeWidth="5" />
        <circle
          cx="35" cy="35" r="28" fill="none"
          stroke="#c98a12" strokeWidth="5" strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - pct)}
          transform="rotate(-90 35 35)"
        />
        <text x="35" y="33" textAnchor="middle" fill="#eaf3f9" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">
          ${value.toFixed(2)}
        </text>
        <text x="35" y="44" textAnchor="middle" fill="#a9c9db" fontSize="7" fontFamily="monospace">
          of ${max.toFixed(2)}
        </text>
      </svg>
    </div>
  );
}

function ActionHeat() {
  const items = [
    { label: "calendar", value: 78, color: COLORS.magenta },
    { label: "inbox", value: 92, color: COLORS.cyan },
    { label: "invoice", value: 54, color: COLORS.purple },
    { label: "outreach", value: 66, color: COLORS.pink },
    { label: "leads", value: 41, color: COLORS.teal },
  ];
  return (
    <div className="sh-heat">
      <div className="sh-heat-head">Action Heat</div>
      {items.map((it) => (
        <div key={it.label} className="sh-heat-row">
          <span className="sh-heat-label">{it.label}</span>
          <div className="sh-heat-track">
            <motion.div
              className="sh-heat-fill"
              style={{ background: it.color }}
              initial={{ width: 0 }}
              animate={{ width: `${it.value}%` }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function BlastRadius() {
  const dims = ["scope", "speed", "cost", "risk", "impact"];
  const values = [0.7, 0.85, 0.4, 0.3, 0.9];
  const cx = 50, cy = 50, r = 38;
  const points = dims.map((_, i) => {
    const a = (i / dims.length) * Math.PI * 2 - Math.PI / 2;
    const v = values[i];
    return `${cx + Math.cos(a) * r * v},${cy + Math.sin(a) * r * v}`;
  }).join(" ");
  const axes = dims.map((d, i) => {
    const a = (i / dims.length) * Math.PI * 2 - Math.PI / 2;
    return { label: d, x: cx + Math.cos(a) * (r + 10), y: cy + Math.sin(a) * (r + 10) };
  });
  return (
    <div className="sh-blast">
      <div className="sh-blast-head">Blast Radius</div>
      <svg viewBox="0 0 100 100" className="sh-blast-svg">
        <polygon points={points} fill="rgba(94,234,212,.15)" stroke="#5eead4" strokeWidth="1" />
        {axes.map((a) => (
          <text key={a.label} x={a.x} y={a.y} textAnchor="middle" fill="#a9c9db" fontSize="6" fontFamily="monospace">
            {a.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────

export default function SwarmGraph() {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { once: false, margin: "-10% 0px" });
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(true);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const current = STAGES[stage];

  useEffect(() => {
    if (!playing || !inView) return;
    timer.current = setTimeout(() => setStage((s) => (s + 1) % STAGES.length), 5000);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [playing, inView, stage]);

  // 3D graph node/link objects for react-force-graph-3d
  const graphData = useMemo(() => ({
    nodes: current.nodes.map((n) => ({ ...n })),
    links: current.links.map((l) => ({ ...l })),
  }), [stage]);

  // Compute cluster label positions from node centroids
  const clusterLabels = useMemo(() => {
    const groups = [...new Set(current.nodes.map((n) => n.group))];
    return groups.map((g) => {
      const gn = current.nodes.filter((n) => n.group === g);
      const cx = gn.reduce((s, n) => s + (n.fx ?? 0), 0) / gn.length;
      const cy = gn.reduce((s, n) => s + (n.fy ?? 0), 0) /gn.length;
      const info = CLUSTER_CENTERS[g] ?? { label: g, color: "#fff" };
      return { group: g, x: cx, y: cy, ...info };
    });
  }, [stage]);

  const ThreeCanvas = useMemo(() => {
    // Lazy-load the 3D components to avoid SSR issues
    return React.lazy(() => import("./SwarmGraphCanvas"));
  }, []);

  return (
    <div className="sg-shell" ref={root}>
      {/* 3D Graph area */}
      <div className="sg-graph-area">
        <ThreeCanvas
          graphData={graphData}
          clusterLabels={clusterLabels}
          inView={inView}
        />

        {/* Stage label overlay */}
        <motion.div
          className="sg-stage-label"
          key={current.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="sg-stage-id">{current.id.toUpperCase()}</span>
          <span className="sg-stage-title">{current.label}</span>
        </motion.div>

        {/* Controls */}
        <div className="sg-controls">
          <button type="button" className="sg-play" onClick={() => setPlaying((p) => !p)}>
            {playing ? "❚❚" : "▶"}
          </button>
          {STAGES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={`sg-step ${i === stage ? "is-active" : ""} ${i < stage ? "is-done" : ""}`}
              onClick={() => { setStage(i); setPlaying(false); }}
            >
              {i < stage ? "✓" : String(i + 1)}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="sg-hud">
        <RunLog lines={current.log} />
        <AccessLedger />
        <ThroughputChart value={current.metrics.throughput} />
        <ActionHeat />
        <BlastRadius />
        <BotStatusList />
        <SpendGauge value={current.metrics.spend} max={60} />
      </div>
    </div>
  );
}
