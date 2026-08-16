"use client";

/**
 * Line chart that draws itself once when it enters the viewport.
 * Uses Motion's useInView (gesture/scroll-triggered entrance animation) with
 * the Bklit clip-reveal grammar for a clean draw-in. Includes hover tooltip.
 */

import { useRef, useState } from "react";
import { useInView } from "motion/react";
import { ChartRevealClip } from "./chart-reveal-clip";
import { intFmt } from "./chart-formatters";

export function AnimatedChart({
  label,
  series,
  color,
  unit = "",
}: {
  label: string;
  series: number[];
  color: string;
  unit?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, margin: "-30px" });
  const svgRef = useRef<SVGSVGElement>(null);
  const [hover, setHover] = useState<{ x: number; y: number; v: number } | null>(null);

  const width = 800;
  const height = 180;
  const clipId = useRef(`clip-${Math.random().toString(36).slice(2, 8)}`).current;
  const max = Math.max(...series) * 1.08 || 1;
  const min = Math.min(...series) * 0.92;
  const span = max - min || 1;
  const stepX = width / (series.length - 1);

  const pts = series.map((v, i) => {
    const x = i * stepX;
    const y = height - ((v - min) / span) * height;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  const pathD = `M${pts.join(" L")}`;

  const onMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;
    const rel = (e.clientX - rect.left) / rect.width;
    const idx = Math.min(series.length - 1, Math.max(0, Math.round(rel * (series.length - 1))));
    const x = idx * stepX;
    const y = height - ((series[idx] - min) / span) * height;
    setHover({ x, y, v: series[idx] });
  };

  return (
    <div className="sys-chart card" ref={wrapRef}>
      <div className="sys-chart-head">
        <span className="sys-chart-label" style={{ color }}>{label}</span>
        <span className="sys-chart-live">● sample series</span>
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
            revealEpoch={inView ? 1 : 0}
            animating={!inView}
          />
        </defs>
        <path
          d={pathD}
          fill="none"
          stroke={color}
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ clipPath: `url(#${clipId})` }}
        />
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
        <span>12-point sample</span>
        <span>hover to inspect</span>
      </div>
    </div>
  );
}
