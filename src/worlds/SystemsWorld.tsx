"use client";

/**
 * Systems world — four-tier scroll.
 * L1 white overview · L2 grey console · L3 dark kernel graph · L4 reports.
 */

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import DevicePreview, { usePreviewReceiver } from "../components/DevicePreview";
import { useActiveWorld } from "../context/ActiveWorldContext";
import { BarChart, CountUp, Donut, KpiTile, Panel, Sparkline, StatusRow, UsageRow } from "../components/SystemsWidgets";
import AiClientConsole from "../components/AiClientConsole";
import KernelViz from "../components/KernelViz";
import PdfViewer from "../components/PdfViewer";
import BklitShowcase from "../components/BklitShowcase";

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
  ready = true,
}: {
  onClose?: () => void;
  embed?: boolean;
  ready?: boolean;
}) {
  const ctx = useActiveWorld();
  const stageRef = useRef<HTMLElement>(null);
  const l1 = useRef<HTMLDivElement>(null);
  const l2 = useRef<HTMLDivElement>(null);
  const l3 = useRef<HTMLDivElement>(null);
  const l4 = useRef<HTMLDivElement>(null);
  usePreviewReceiver(embed);

  const [stageName, setStageName] = useState("overview");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = stageRef.current;
    if (!root) return;
    const map = new Map<Element, string>();
    if (l1.current) map.set(l1.current, "overview");
    if (l2.current) map.set(l2.current, "aiclient");
    if (l3.current) map.set(l3.current, "flow");
    if (l4.current) map.set(l4.current, "reports");
    const io = new IntersectionObserver((entries) => {
      const hit = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (hit) setStageName(map.get(hit.target) ?? "overview");
    }, { root: null, threshold: [0.25, 0.45, 0.65], rootMargin: "-12% 0px -28% 0px" });
    map.forEach((_, el) => io.observe(el));
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      setProgress(window.scrollY / max);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const theme = stageName === "overview" ? "light" : stageName === "aiclient" ? "mid" : "dark";
  const wash = theme === "light" ? "#eef0f2" : theme === "mid" ? "#c8cdcc" : "#0a0a0f";
  const ink = theme === "dark" ? "#eaf3f9" : "#10243a";
  const soft = theme === "dark" ? "#a9c9db" : "#2a3a4a";
  const card = theme === "light" ? "rgba(255,255,255,.9)" : theme === "mid" ? "rgba(232,236,236,.82)" : "rgba(10,10,16,.74)";

  return (
    <div className="sys" data-stage={stageName} data-theme={theme} data-ready={String(ready || embed)}>
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

      <motion.main
        className="sys-main"
        data-theme={theme}
        animate={{ backgroundColor: wash, color: ink }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ ["--sys-ink" as string]: ink, ["--sys-soft" as string]: soft, ["--sys-card" as string]: card } as React.CSSProperties}
      >
        <div className="sys-grid-bg" aria-hidden="true" style={{ opacity: theme === "dark" ? 0 : theme === "mid" ? 0.35 : 0.9 }}>
          <div className="sys-grid-pattern" />
        </div>

        <section ref={stageRef} className="sys-story" data-sync="journey" data-progress={progress.toFixed(3)} data-stage={stageName} data-theme={theme} style={{ color: ink }}>
          <div className="sys-story-sticky">
            <div className="sys-story-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>

            {/* ── LEVEL 1: OPERATIONS OVERVIEW ── */}
            <div ref={l1} className="sys-stage sys-stage-overview">
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
                <KpiTile label="Availability" value={kpis.availability} decimals={3} suffix="%" delta={0.01} tone="#14b8a6" delay={0} />
                <KpiTile label="Latency p95" value={kpis.latencyP95} decimals={0} suffix=" ms" delta={-18} deltaUnit="ms" tone="#477da2" delay={0.08} />
                <KpiTile label="Error rate" value={kpis.errorRate} decimals={2} suffix="%" delta={-0.2} tone="#c98a12" delay={0.16} />
                <KpiTile label="Requests / sec" value={kpis.throughputRps} decimals={0} suffix="" delta={12.4} tone="#477da2" delay={0.24} />
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

            {/* ── LEVEL 2: AICLIENT2API CONSOLE + REPORT ── */}
            <div ref={l2} className="sys-stage sys-stage-aiclient">
              <header className="sys-r-head">
                <span className="sys-r-eyebrow">AIClient2API · L2</span>
                <h2>Route once. Swap providers later.</h2>
                <p>The provider pool, golden routing signals, and a live workflow — how AIClient2API keeps the client stable while the model pool rotates underneath.</p>
              </header>
              <AiClientConsole />
              <div className="sys-l2-report">
                <span className="sys-r-eyebrow">Inspection · report</span>
                <PdfViewer src="sample-inspection-report.pdf" label="Inspection report — sample" />
              </div>
            </div>

            {/* ── LEVEL 3: FLOW (React Flow kernel visualization) ── */}
            <div ref={l3} className="sys-stage sys-stage-flow">
              <header className="sys-r-head">
                <span className="sys-r-eyebrow">kernel fusion · L3</span>
                <h2>65 tok/s → 406. One graph.</h2>
                <p>A decomposed compute DAG fuses across six passes. Nodes merge. Dispatches drop. Play it or step it.</p>
              </header>
              <KernelViz />
            </div>

            {/* ── LEVEL 4: INSPECTION DATA (bklit charts) ── */}
            <div ref={l4} className="sys-stage sys-stage-reports">
              <header className="sys-rep-head">
                <span className="sys-rep-eyebrow">Inspection data · L4</span>
                <h2>Every signal, one glance.</h2>
                <p>Volume, reach, capacity — animated with the bklit chart engine.</p>
              </header>
              <BklitShowcase />
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
