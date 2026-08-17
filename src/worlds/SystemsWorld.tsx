"use client";

/**
 * Systems world — five-tier escalation from static cards to an organic agentic
 * network. Each stage is a full-height scroll section; animations are
 * gesture-triggered entrances (once-per-scroll).
 *
 * Tier map (low → high complexity):
 *   1 · overview — static KPI dashboard
 *   2 · aiclient — AIClient2API routing console (provider pool + golden signals)
 *   3 · flow — React Flow kernel optimization graph (markdown tutorial)
 *   4 · reports — flip-page PDF viewer
 *   5 · network — organic agentic network (video reference)
 */

import { motion, useReducedMotion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import DevicePreview, { usePreviewReceiver } from "../components/DevicePreview";
import { useActiveWorld } from "../context/ActiveWorldContext";
import { BarChart, CountUp, Donut, KpiTile, Panel, Sparkline, StatusRow, UsageRow } from "../components/SystemsWidgets";
import AiClientConsole from "../components/AiClientConsole";
import KernelViz from "../components/KernelViz";
import PdfViewer from "../components/PdfViewer";
import React from "react";

// Lazy-load SwarmGraph to avoid pulling Three.js into the main bundle
const SwarmGraph = React.lazy(() => import("../components/SwarmGraph"));

// ─── L1 OVERVIEW DATA ────────────────────────────────────────

const kpis = {
  uptime: 99.97,
  availability: 99.982,
  latencyP95: 232,
  errorRate: 0.38,
  throughputRps: 1842,
  cpu: 47.2,
  memory: 64.8,
  disk: 71.4,
};

const barData = [
  { label: "00", value: 420 }, { label: "04", value: 610 }, { label: "08", value: 1180 },
  { label: "12", value: 1640 }, { label: "16", value: 1890 }, { label: "20", value: 1430 },
  { label: "24", value: 780 },
];

const usage = [
  { label: "CPU", value: 47.2, color: "#14b8a6" },
  { label: "Memory", value: 64.8, color: "#477da2" },
  { label: "Disk", value: 71.4, color: "#c98a12" },
];

const services = [
  { name: "API Gateway", status: "Operational" as const, detail: "12 routes · 99.98% uptime" },
  { name: "Model Router", status: "Operational" as const, detail: "3 providers, auto-failover" },
  { name: "Vector Store", status: "Degraded" as const, detail: "p95 latency 4.1s" },
  { name: "Batch Worker", status: "Operational" as const, detail: "430 jobs in last 24h" },
  { name: "Auth Service", status: "Operational" as const, detail: "2.1k tokens issued" },
];

const spark = {
  latency: [180, 190, 175, 205, 195, 220, 210, 232, 215, 208, 226, 232],
  throughput: [120, 240, 380, 520, 690, 860, 1020, 1180, 1360, 1540, 1710, 1842],
};

// ─── TIER NARRATIVE ─────────────────────────────────────────

export default function SystemsWorld({
  onClose,
  embed = false,
}: {
  onClose?: () => void;
  embed?: boolean;
}) {
  const ctx = useActiveWorld();
  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start start", "end end"] });
  usePreviewReceiver(embed);

  // 5-level wash: light field → dark → very dark
  const wash = useTransform(scrollYProgress,
    [0, 0.10, 0.22, 0.38, 0.52, 0.68, 1],
    ["#eef0f2", "#eef0f2", "#c8cdcc", "#1a2435", "#0c1420", "#020617", "#020617"],
  );
  const gridFade = useTransform(scrollYProgress, [0, 0.10, 0.30, 0.55, 1], [1, 0.85, 0.3, 0, 0]);

  // Smooth text colors — stay dark through the grey zone, only lighten when bg is dark
  const textColor = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.6], ["#10243a", "#10243a", "#eaf3f9", "#eaf3f9"]);
  const softColor = useTransform(scrollYProgress, [0, 0.35, 0.45, 0.6], ["#2a3a4a", "#2a3a4a", "#a9c9db", "#a9c9db"]);

  const [progress, setProgress] = useState(0);
  const [stageName, setStageName] = useState("overview");
  const [ink, setInk] = useState("#10243a");
  const [soft, setSoft] = useState("#2a3a4a");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
    if (v < 0.16) setStageName("overview");
    else if (v < 0.34) setStageName("aiclient");
    else if (v < 0.52) setStageName("flow");
    else if (v < 0.72) setStageName("reports");
    else setStageName("network");
  });
  useMotionValueEvent(textColor, "change", setInk);
  useMotionValueEvent(softColor, "change", setSoft);

  // Theme is now smooth, not a hard switch
  const theme = progress < 0.22 ? "light" : progress < 0.45 ? "mid" : "dark";

  return (
    <div className="sys" data-stage={stageName} data-theme={theme}>
      {!embed && (
        <button type="button" className="world-return sys-return" onClick={() => (onClose ? onClose() : ctx.leave())}>
          <i aria-hidden="true">←</i> Main menu
        </button>
      )}

      <div className="sys-topbar" data-sync="utility">
        <span className="sys-topbar-left">SYS · LIVE OPERATIONS CONSOLE</span>
        <span className="sys-topbar-right">
          <i className="sys-live-dot" /> LIVE · Kuala Lumpur · MYT
        </span>
      </div>

      <motion.main className="sys-main" data-theme={theme} style={{ backgroundColor: wash, ["--sys-ink" as string]: ink, ["--sys-soft" as string]: soft } as any}>
        <motion.div className="sys-grid-bg" style={reduced ? undefined : { opacity: gridFade }} aria-hidden="true">
          <div className="sys-grid-pattern" />
        </motion.div>

        <section ref={stageRef} className="sys-story" data-sync="journey" data-progress={progress.toFixed(3)} data-stage={stageName} data-theme={theme} style={reduced ? undefined : { color: ink } as React.CSSProperties}>
          <div className="sys-story-sticky">
            <div className="sys-story-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>

            {/* ── LEVEL 1: OPERATIONS OVERVIEW ── */}
            <div className="sys-stage sys-stage-overview">
              <header className="sys-ov-head">
                <div>
                  <span className="sys-ov-eyebrow">System overview · L1</span>
                  <h1 className="sys-ov-title">I run this in production.</h1>
                </div>
                <div className="sys-ov-uptime">
                  <span className="sys-ov-uptime-label">uptime · 30d</span>
                  <div className="sys-ov-uptime-num"><CountUp value={kpis.uptime} decimals={2} suffix="%" /></div>
                </div>
              </header>
              <div className="sys-kpi-grid">
                <KpiTile label="Availability" value={kpis.availability} decimals={3} suffix="%" delta={0.01} tone="#14b8a6" />
                <KpiTile label="Latency p95" value={kpis.latencyP95} decimals={0} suffix=" ms" delta={-18} deltaUnit="ms" tone="#477da2" />
                <KpiTile label="Error rate" value={kpis.errorRate} decimals={2} suffix="%" delta={-0.2} tone="#c98a12" />
                <KpiTile label="Requests / sec" value={kpis.throughputRps} decimals={0} suffix="" delta={12.4} tone="#8b5cf6" />
              </div>
              <div className="sys-ov-mid">
                <Panel title="Traffic by hour" hint="requests · 24h">
                  <BarChart data={barData} color="#477da2" height={150} />
                </Panel>
                <Panel title="Resource utilization" hint="current load">
                  <div className="sys-ov-usage-col">
                    {usage.map((u, i) => <UsageRow key={u.label} label={u.label} value={u.value} color={u.color} delay={i * 0.12} />)}
                    <div className="sys-ov-donut-row">
                      <Donut value={87} label="capacity" color="#14b8a6" size={120} thickness={10} />
                      <div className="sys-ov-spark-cols">
                        <div className="sys-ov-spark"><span>latency p95</span><Sparkline data={spark.latency} color="#14b8a6" /></div>
                        <div className="sys-ov-spark"><span>throughput</span><Sparkline data={spark.throughput} color="#477da2" /></div>
                      </div>
                    </div>
                  </div>
                </Panel>
              </div>
              <div className="sys-ov-bottom">
                <Panel title="Service health" hint="real-time status">
                  <div className="sys-status-list">
                    {services.map((s, i) => <StatusRow key={s.name} name={s.name} status={s.status} detail={s.detail} delay={i * 0.08} />)}
                  </div>
                </Panel>
              </div>
            </div>

            {/* ── LEVEL 2: AICLIENT2API CONSOLE ── */}
            <div className="sys-stage sys-stage-aiclient">
              <header className="sys-r-head">
                <span className="sys-r-eyebrow">AIClient2API · L2</span>
                <h2>Route once. Swap providers later.</h2>
                <p>The provider pool, golden routing signals, and a live workflow — how AIClient2API keeps the client stable while the model pool rotates underneath.</p>
              </header>
              <AiClientConsole />
            </div>

            {/* ── LEVEL 3: FLOW (React Flow kernel visualization) ── */}
            <div className="sys-stage sys-stage-flow">
              <header className="sys-r-head">
                <span className="sys-r-eyebrow">compute graph · L3</span>
                <h2>Operator fusion in real time.</h2>
                <p>Nodes merge, edges rewrite, particles stream through the graph. Step through each pass or let the optimization run.</p>
              </header>
              <KernelViz />
            </div>

            {/* ── LEVEL 4: REPORTS (flip-page PDF) ── */}
            <div className="sys-stage sys-stage-reports">
              <header className="sys-rep-head">
                <span className="sys-rep-eyebrow">Inspection · reporting · L4</span>
                <h2>Four pages. No download.</h2>
                <p>A flip-book PDF rendered inline — the way a client reads their inspection report on a business site. Cover, summary, findings, and timeline.</p>
              </header>
              <PdfViewer src="sample-inspection-report.pdf" label="Inspection report — sample" />
            </div>

              {/* ── LEVEL 5: 3D SWARM NETWORK ── */}
            <div className="sys-stage sys-stage-network">
              <header className="sys-r-head">
                <span className="sys-r-eyebrow">agentic swarm · L5</span>
                <h2>Every cluster. Every connection. Live.</h2>
                <p>A 3D force-directed graph of autonomous bots, dense glowing edges, and a real-time HUD tracking throughput, spend, and blast radius.</p>
              </header>
              <React.Suspense fallback={<div style={{height:500, background:"#0a0a0f", borderRadius:16, border:"1px solid rgba(159,208,240,.16)", display:"flex", alignItems:"center", justifyContent:"center", color:"#5eead4", fontFamily:"var(--font-mono)", fontSize:14}}>Loading 3D swarm…</div>}>
                <SwarmGraph />
              </React.Suspense>
            </div>

            <div className="sys-story-step"><b>{stageName}</b><span>scroll to unfold</span></div>
          </div>
        </section>

        <section className="sys-contact" id="sys-contact" data-sync="contact">
          <span>I build the interface around the work.</span>
          <h2>Show me the system.<br />I'll make it readable.</h2>
          <a href="mailto:tuancookiez@gmail.com">Write to Tuan ↗</a>
        </section>
      </motion.main>

      <footer className="sys-footer" data-sync="footer">
        <b>TUAN DEV · SYSTEMS</b><span>Kuala Lumpur · Malaysia</span><span>GitHub · Contact</span>
      </footer>
      {!embed && <DevicePreview world="systems" />}
    </div>
  );
}
