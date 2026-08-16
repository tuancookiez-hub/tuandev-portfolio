"use client";

/**
 * Reusable dashboard widgets for the Systems world.
 * Every animation is a gesture/scroll-triggered ENTRANCE animation: it plays
 * once, fully, when its container scrolls into view (via useInView), then
 * stops. No scroll-scrubbing — this is the "play on gesture" behaviour.
 *
 * Content is representative AIClient2API / ops monitoring data, clearly sample.
 */

import {
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

/** Count-up number that animates 0 → value when it enters the viewport. */
export function CountUp({
  value,
  decimals = 0,
  suffix = "",
  format,
}: {
  value: number;
  decimals?: number;
  suffix?: string;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 22 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => mv.set(value), 80);
      return () => clearTimeout(t);
    }
  }, [inView, value, mv]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(format ? format(v) : v.toFixed(decimals));
    });
    return unsub;
  }, [spring, format, decimals]);

  return (
    <span className="sys-count" ref={ref}>
      {display}
      {(suffix || null) && <em>{suffix}</em>}
    </span>
  );
}

/** KPI tile — label, big count-up value, delta, status. */
export function KpiTile({
  label,
  value,
  decimals = 1,
  suffix,
  delta,
  deltaUnit = "%",
  status = "ok",
  tone,
}: {
  label: string;
  value: number;
  decimals?: number;
  suffix?: string;
  delta?: number;
  deltaUnit?: string;
  status?: "ok" | "warn" | "bad" | "neutral";
  tone?: string;
}) {
  const up = delta !== undefined && delta >= 0;
  const toneStyle: React.CSSProperties = tone ? { ["--kpi-tone" as string]: tone } : {};
  return (
    <div className="sys-kpi" style={toneStyle} data-status={status}>
      <div className="sys-kpi-top">
        <span className="sys-kpi-label">{label}</span>
        <span className={`sys-kpi-status sys-st-${status}`} aria-label={status} />
      </div>
      <div className="sys-kpi-value">
        <CountUp value={value} decimals={decimals} suffix={suffix} />
      </div>
      <div className="sys-kpi-bottom">
        {delta !== undefined && (
          <span className={`sys-kpi-delta ${up ? "is-up" : "is-down"}`}>
            {up ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}{deltaUnit}
          </span>
        )}
        <span className="sys-kpi-meta">24h / sample</span>
      </div>
    </div>
  );
}

/** Donut gauge (ring) — animates a sweep on entrance. */
export function Donut({
  value,
  label,
  color,
  size = 150,
  thickness = 12,
}: {
  value: number; // 0-100
  label: string;
  color: string;
  size?: number;
  thickness?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 50, damping: 24 });
  const dash = useTransform(spring, (v) => {
    const r = (size - thickness) / 2;
    const c = 2 * Math.PI * r;
    return `${((v / 100) * c).toFixed(1)} ${c.toFixed(1)}`;
  });

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => mv.set(value), 100);
      return () => clearTimeout(t);
    }
  }, [inView, value, mv]);

  const r = (size - thickness) / 2;

  return (
    <div className="sys-donut" ref={ref}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(120,140,160,.14)" strokeWidth={thickness} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={thickness}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          strokeDasharray={dash}
        />
      </svg>
      <div className="sys-donut-center">
        <b>{value.toFixed(0)}%</b>
        <span>{label}</span>
      </div>
    </div>
  );
}

/** Vertical bar chart — bars grow from 0 on entrance. */
export function BarChart({
  data,
  color,
  height = 170,
  label,
}: {
  data: { label: string; value: number }[];
  color: string;
  height?: number;
  label?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const max = Math.max(...data.map((d) => d.value)) || 1;

  return (
    <div className="sys-bars" ref={ref}>
      {label && <div className="sys-bars-label">{label}</div>}
      <div className="sys-bars-canvas" style={{ height }}>
        {data.map((d, i) => (
          <div className="sys-bar-col" key={i} title={`${d.label}: ${d.value}`}>
            <motion.div
              className="sys-bar"
              initial={{ height: "0%" }}
              animate={inView ? { height: `${(d.value / max) * 100}%` } : { height: "0%" }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              style={{ background: color }}
            />
            <span className="sys-bar-label">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Horizontal utilization bars (CPU / Mem / Disk rows). */
export function UsageRow({
  label,
  value,
  color,
  delay = 0,
}: {
  label: string;
  value: number;
  color: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div className="sys-usage" ref={ref}>
      <div className="sys-usage-head">
        <span>{label}</span>
        <b>{value.toFixed(1)}%</b>
      </div>
      <div className="sys-usage-track">
        <motion.div
          className="sys-usage-fill"
          initial={{ width: "0%" }}
          animate={inView ? { width: `${value}%` } : { width: "0%" }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

/** Status list rows (service health). */
export function StatusRow({
  name,
  status,
  detail,
  delay = 0,
}: {
  name: string;
  status: "Operational" | "Degraded" | "Outage" | "Maintenance";
  detail: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div
      className="sys-status-row"
      ref={ref}
      data-status={status.toLowerCase()}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
      transition={{ duration: 0.5, delay }}
    >
      <span className="sys-status-dot" />
      <span className="sys-status-name">{name}</span>
      <span className="sys-status-detail">{detail}</span>
      <span className="sys-status-badge">{status}</span>
    </motion.div>
  );
}

/** Animated sparkline — draws once on entrance. */
export function Sparkline({
  data,
  color,
  height = 40,
}: {
  data: number[];
  color: string;
  height?: number;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const width = 120;
  const max = Math.max(...data) || 1;
  const min = Math.min(...data);
  const path = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((v - min) / (max - min || 1)) * (height - 4) - 2;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg ref={ref} width={width} height={height} className="sys-spark" aria-hidden="true">
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}

/** A generic dashboard panel card. */
export function Panel({
  title,
  hint,
  children,
  className,
}: {
  title: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`sys-panel ${className ?? ""}`}>
      <div className="sys-panel-head">
        <span className="sys-panel-title">{title}</span>
        {hint && <span className="sys-panel-hint">{hint}</span>}
      </div>
      {children}
    </div>
  );
}
