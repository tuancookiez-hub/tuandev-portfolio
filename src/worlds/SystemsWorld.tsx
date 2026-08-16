"use client";

/**
 * Systems world — a professional system-operations dashboard.
 *
 * Every animation is a gesture/scroll-triggered ENTRANCE animation: it plays
 * once, fully, when its section scrolls into view, then stops. Numbers count
 * up from 0, line charts draw, bars grow, donuts sweep — all fire on entry.
 * (Uses Motion's useInView + anime.js on an IntersectionObserver.)
 *
 * Content is representative AIClient2API / generic ops-monitoring data,
 * clearly marked as sample. This mirrors what people actually monitor on a
 * system dashboard: availability, latency (p95), error rate, throughput,
 * CPU / memory / disk utilization, and service health.
 */

import { motion, useReducedMotion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import DevicePreview, { usePreviewReceiver } from "../components/DevicePreview";
import { useActiveWorld } from "../context/ActiveWorldContext";
import { AnimatedChart } from "../components/bklit/AnimatedChart";
import RoutingDiagram from "../components/RoutingDiagram";
import PdfViewer from "../components/PdfViewer";
import {
  BarChart,
  CountUp,
  Donut,
  KpiTile,
  Panel,
  Sparkline,
  StatusRow,
  UsageRow,
} from "../components/SystemsWidgets";

// ─── SAMPLE DASHBOARD DATA ────────────────────────────────────

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
  { label: "00", value: 420 },
  { label: "04", value: 610 },
  { label: "08", value: 1180 },
  { label: "12", value: 1640 },
  { label: "16", value: 1890 },
  { label: "20", value: 1430 },
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

// ─── SYSTEMS WORLD ────────────────────────────────────────────

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

  const wash = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.78, 1], ["#eef0f2", "#eef0f2", "#0f172a", "#020617", "#020617"]);
  const gridFade = useTransform(scrollYProgress, [0, 0.18, 0.5, 1], [1, 1, 0, 0]);
  const [progress, setProgress] = useState(0);
  const [stageName, setStageName] = useState("overview");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
    setStageName(v < 0.34 ? "overview" : v < 0.7 ? "routing" : "reports");
  });
  const theme = progress < 0.5 ? "light" : "dark";

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

      <motion.main className="sys-main" data-theme={theme} style={reduced ? undefined : { backgroundColor: wash }}>
        <motion.div className="sys-grid-bg" style={reduced ? undefined : { opacity: gridFade }} aria-hidden="true">
          <div className="sys-grid-pattern" />
        </motion.div>

        <section ref={stageRef} className="sys-story" data-sync="journey" data-progress={progress.toFixed(3)} data-stage={stageName} data-theme={theme}>
          <div className="sys-story-sticky">
            <div className="sys-story-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>

            {/* ── STAGE 1: OPERATIONS OVERVIEW (professional dashboard) ── */}
            <div className="sys-stage sys-stage-overview">
              <header className="sys-ov-head">
                <div>
                  <span className="sys-ov-eyebrow">System overview</span>
                  <h1 className="sys-ov-title">Operations at a glance.</h1>
                </div>
                <div className="sys-ov-uptime">
                  <span className="sys-ov-uptime-label">uptime · 30d</span>
                  <div className="sys-ov-uptime-num"><CountUp value={kpis.uptime} decimals={2} suffix="%" /></div>
                </div>
              </header>

              {/* KPI grid */}
              <div className="sys-kpi-grid">
                <KpiTile label="Availability" value={kpis.availability} decimals={3} suffix="%" delta={0.01} tone="#14b8a6" />
                <KpiTile label="Latency p95" value={kpis.latencyP95} decimals={0} suffix=" ms" delta={-18} deltaUnit="ms" tone="#477da2" />
                <KpiTile label="Error rate" value={kpis.errorRate} decimals={2} suffix="%" delta={-0.2} tone="#c98a12" />
                <KpiTile label="Requests / sec" value={kpis.throughputRps} decimals={0} suffix="" delta={12.4} tone="#8b5cf6" />
              </div>

              {/* Middle row: bar chart + donut + utilization */}
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

              {/* Service health list */}
              <div className="sys-ov-bottom">
                <Panel title="Service health" hint="real-time status">
                  <div className="sys-status-list">
                    {services.map((s, i) => <StatusRow key={s.name} name={s.name} status={s.status} detail={s.detail} delay={i * 0.08} />)}
                  </div>
                </Panel>
              </div>
            </div>

            {/* ── STAGE 2: ROUTING (charts + diagram) ── */}
            <div className="sys-stage sys-stage-routing">
              <header className="sys-r-head">
                <span className="sys-r-eyebrow">AIClient2API · routing console</span>
                <h2>Latency, tokens, cost. Drawn on entry.</h2>
                <p>Each chart draws itself when it scrolls into view. Representative AIClient2API patterns — not live data.</p>
              </header>
              <div className="sys-trio">
                <AnimatedChart label="LATENCY" series={[310, 290, 265, 240, 258, 232, 245, 220, 236, 222, 232, 215]} color="#14b8a6" unit=" ms" />
                <AnimatedChart label="TOKENS" series={[9200, 11800, 13400, 15000, 16200, 17400, 18900, 19800, 21400, 22600, 23800, 24800]} color="#477da2" unit="k" />
                <AnimatedChart label="COST" series={[38, 41, 39, 44, 42, 47, 45, 49, 46, 51, 49, 53]} color="#c98a12" unit="$" />
              </div>
              <RoutingDiagram />
            </div>

            {/* ── STAGE 3: REPORTS (PDF viewer) ── */}
            <div className="sys-stage sys-stage-reports">
              <header className="sys-rep-head">
                <span className="sys-rep-eyebrow">Inspection · reporting</span>
                <h2>Reports, read inline.</h2>
                <p>This is how a client sees their report on a business site — a built-in reader, not a download. A generic sample is shown.</p>
              </header>
              <PdfViewer src="sample-inspection-report.pdf" label="Inspection report — sample" />
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
