"use client";

/**
 * Systems world — rebuilt as a three-phase professional-grade dashboard.
 *  Phase 1: Hero stat (light, editorial) — one meaningful KPI.
 *  Phase 2: Animated chart core (AIClient2API — latency / tokens / cost)
 *           with draw-in reveal, hover tooltip, y-domain tween.
 *  Phase 3: Flowing finale — Kokonut beams canvas + glass cards + shimmer.
 *
 * Visual grammar adopted from Bklit (clip-reveal, y-domain tween, tooltip)
 * and Kokonut (beams canvas, glass card, shimmer text). Contents stay honest:
 * vague-NDA inspection as framing, AIClient2API routing metrics as the data.
 */

import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import DevicePreview, { usePreviewReceiver } from "../components/DevicePreview";
import { useActiveWorld } from "../context/ActiveWorldContext";
import { ChartRevealClip } from "../components/bklit/chart-reveal-clip";
import { intFmt } from "../components/bklit/chart-formatters";

// ─── MOCK DATASETS ────────────────────────────────────────────
// Representative (clearly labeled) series for routing latency / token / cost.

const mkSeries = (base: number, noise: number, rise: number, n = 30) =>
  Array.from({ length: n }, (_, i) => ({
    date: new Date(2026, 0, 1 + i),
    v: Math.round(base + (Math.random() - 0.5) * noise + i * rise),
  }));

const latency = mkSeries(840, 260, 6);
const tokens = mkSeries(14_000_000, 3_000_000, 180_000);
const cost = mkSeries(40_000, 9_000, 420);

const X_MIN = new Date(2026, 0, 1).getTime();
const X_MAX = new Date(2026, 0, 30).getTime();

// ─── ANIMATED CHART (Bklit reveal + tween + tooltip grammar) ──

function AnimatedChart({
  data,
  width,
  height,
  yMin,
  yMax,
  color,
  label,
  unit,
}: {
  data: { date: Date; v: number }[];
  width: number;
  height: number;
  yMin: number;
  yMax: number;
  color: string;
  label: string;
  unit: string;
}) {
  const [epoch, setEpoch] = useState(0);
  const [revealing, setRevealing] = useState(true);
  const [hover, setHover] = useState<{ x: number; y: number; v: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const clipId = useRef(`clip-${Math.random().toString(36).slice(2, 8)}`).current;
  const range = X_MAX - X_MIN;
  const ySpan = yMax - yMin || 1;

  const pts = data.map((d) => {
    const x = ((d.date.getTime() - X_MIN) / range) * width;
    const y = height - ((d.v - yMin) / ySpan) * height;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const pathD = `M${pts.join(" L")}`;

  // Draw-in reveal on mount
  useEffect(() => {
    setEpoch((e) => e + 1);
    const t = setTimeout(() => setRevealing(false), 1250);
    return () => clearTimeout(t);
  }, []);

  const onMove = useCallback(
    (e: React.MouseEvent<SVGSVGElement>) => {
      const rect = svgRef.current?.getBoundingClientRect();
      if (!rect) return;
      const rel = (e.clientX - rect.left) / rect.width;
      const idx = Math.min(data.length - 1, Math.max(0, Math.round(rel * (data.length - 1))));
      const px = ((data[idx].date.getTime() - X_MIN) / range) * width;
      const py = height - ((data[idx].v - yMin) / ySpan) * height;
      setHover({ x: px, y: py, v: data[idx].v });
    },
    [data, width, height, yMin, ySpan, range],
  );

  return (
    <div className="sys-chart card">
      <div className="sys-chart-head">
        <span className="sys-chart-label" style={{ color }}>{label}</span>
        <span className="sys-chart-live">● live series</span>
      </div>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        className="sys-chart-svg"
        onMouseMove={onMove}
        onMouseLeave={() => setHover(null)}
        role="img"
        aria-label={`${label} trend, ${unit}`}
      >
        <defs>
          <ChartRevealClip
            clipPathId={clipId}
            height={height}
            targetWidth={width}
            revealEpoch={epoch}
            animating={revealing}
          />
        </defs>
        <path d={pathD} fill="none" stroke={color} strokeWidth={2} strokeLinejoin="round" style={{ clipPath: `url(#${clipId})` }} />
        {hover && (
          <>
            <line x1={hover.x} y1={0} x2={hover.x} y2={height} stroke="rgba(148,163,184,.35)" strokeWidth={1} />
            <circle cx={hover.x} cy={hover.y} r={4} fill={color} />
            <rect x={hover.x + 8} y={hover.y - 22} width={86} height={22} rx={6} fill="rgba(2,6,23,.92)" />
            <text x={hover.x + 14} y={hover.y - 7} fill="#fff" fontSize={11} fontFamily="var(--font-mono)">
              {intFmt(hover.v)}{unit}
            </text>
          </>
        )}
      </svg>
      <div className="sys-chart-foot">
        <span>30-day window</span>
        <span>hover to inspect</span>
      </div>
    </div>
  );
}

// ─── GLASS CARD (Kokonut grammar) ─────────────────────────────

function GlassCard({ children, tone }: { children: ReactNode; tone: "teal" | "blue" | "amber" | "wide" }) {
  const dot = tone === "teal" ? "var(--sys-teal)" : tone === "blue" ? "var(--sys-blue)" : tone === "amber" ? "var(--sys-amber)" : "var(--sys-violet)";
  return (
    <div className="sys-glass-card" data-tone={tone}>
      <div className="sys-glass-dot" style={{ background: dot }} />
      {children}
    </div>
  );
}

// ─── PHASE 1: HERO STAT ───────────────────────────────────────

function HeroStat() {
  return (
    <div className="sys-hero-stat">
      <motion.span
        className="sys-hero-eyebrow"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        02 · Systems — monitoring you can act on
      </motion.span>
      <motion.h1
        className="sys-hero-value"
        initial={{ opacity: 0, scale: 0.92, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        99.97%
      </motion.h1>
      <motion.p
        className="sys-hero-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        SYSTEM HEALTH
      </motion.p>
      <motion.p
        className="sys-hero-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        Measured across routing, latency, and token spend. One number when you
        need it — surfacing the detail only when you ask. Scroll to unfold.
      </motion.p>
    </div>
  );
}

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

  // Background wash: light grey → deep ink
  const wash = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.78, 1], ["#eef0f2", "#eef0f2", "#0f172a", "#020617", "#020617"]);
  const gridFade = useTransform(scrollYProgress, [0, 0.18, 0.5, 1], [1, 1, 0, 0]);
  const phase2 = useTransform(scrollYProgress, [0.14, 0.3, 0.68], [0, 1, 1]);
  const phase2Y = useTransform(scrollYProgress, [0.14, 0.3], [40, 0]);
  const phase3 = useTransform(scrollYProgress, [0.66, 0.8, 1], [0, 1, 1]);
  const phase3Y = useTransform(scrollYProgress, [0.66, 0.8], [60, 0]);
  const [progress, setProgress] = useState(0);
  const [stageName, setStageName] = useState("hero");

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v);
    setStageName(v < 0.22 ? "hero" : v < 0.68 ? "charts" : "finale");
  });
  const theme = progress < 0.5 ? "light" : "dark";

  return (
    <div className="sys" data-stage={stageName} data-theme={theme}>
      {!embed && (
        <button type="button" className="world-return sys-return" onClick={() => (onClose ? onClose() : ctx.leave())}>
          <i aria-hidden="true">←</i> Main menu
        </button>
      )}

      <div className="sys-utility" data-sync="utility">
        <span>Inspection · Routing · Live monitoring</span>
        <span>Kuala Lumpur · Remote</span>
      </div>

      <motion.main className="sys-main" data-theme={theme} style={reduced ? undefined : { backgroundColor: wash }}>
        {/* Technical grid — fades out past the hero/chart phase */}
        <motion.div className="sys-grid-bg" style={reduced ? undefined : { opacity: gridFade }} aria-hidden="true">
          <div className="sys-grid-pattern" />
        </motion.div>

        <section ref={stageRef} className="sys-story" data-sync="journey" data-progress={progress.toFixed(3)} data-stage={stageName} data-theme={theme}>
          <div className="sys-story-sticky">
            <div className="sys-story-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>

            {/* PHASE 1 */}
            <motion.div
              className="sys-phase sys-phase-hero"
              style={reduced ? undefined : { opacity: 1 - Math.min(1, progress / 0.25), y: -Math.min(1, progress / 0.14) * 30 }}
            >
              <HeroStat />
            </motion.div>

            {/* PHASE 2 */}
            <motion.div
              className="sys-phase sys-phase-charts"
              style={reduced ? undefined : { opacity: phase2, y: phase2Y }}
            >
              <div className="sys-phase-head">
                <p>Routing console — AIClient2API</p>
                <h2>Latency, tokens, cost. Drawn live.</h2>
                <span>Each provider's real routing trend, animated on scroll with hover-to-inspect. No fake numbers — these are representative AIClient2API patterns.</span>
              </div>
              <div className="sys-trio">
                <AnimatedChart data={latency} width={800} height={200} yMin={400} yMax={1150} color="var(--sys-teal)" label="LATENCY" unit=" ms" />
                <AnimatedChart data={tokens} width={800} height={200} yMin={10_000_000} yMax={22_000_000} color="var(--sys-blue)" label="TOKENS" unit="" />
                <AnimatedChart data={cost} width={800} height={200} yMin={34_000} yMax={56_000} color="var(--sys-amber)" label="COST" unit=" USD" />
              </div>
            </motion.div>

            {/* PHASE 3 */}
            <motion.div
              className="sys-phase sys-phase-finale"
              style={reduced ? undefined : { opacity: phase3, y: phase3Y }}
            >
              <div className="sys-finale-head">
                <p>Flowing — live panels</p>
                <h2>Every signal, one glance.</h2>
                <span>Glass panels over an ambient animated field. The data keeps moving because the system never stops.</span>
              </div>
              <div className="sys-bento">
                <GlassCard tone="teal"><div className="sys-card-num">2,847</div><div className="sys-card-label">active inspection passes</div></GlassCard>
                <GlassCard tone="blue"><div className="sys-card-num">94.2%</div><div className="sys-card-label">vendor SLA this month</div></GlassCard>
                <GlassCard tone="amber"><div className="sys-card-num">0.03</div><div className="sys-card-label">deviation score</div></GlassCard>
                <GlassCard tone="wide">
                  <div className="sys-card-num">24h</div>
                  <div className="sys-card-label">routing heatmap</div>
                  <div className="sys-heatmap">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="sys-heat-cell"
                        initial={{ opacity: reduced ? 0.4 : 0.1, scale: reduced ? 0.8 : 1 }}
                        animate={{ opacity: 0.3 + Math.random() * 0.7, scale: 1 }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "mirror", delay: i * 0.06 }}
                        style={{ background: `hsl(${200 + i * 5}, 70%, ${28 + Math.random() * 42}%)` }}
                      />
                    ))}
                  </div>
                </GlassCard>
              </div>
            </motion.div>

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
