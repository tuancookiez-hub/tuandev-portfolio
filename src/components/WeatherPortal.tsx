"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { WorldId } from "../data/worlds";
import { useActiveWorld } from "../context/ActiveWorldContext";
import type { Origin } from "../context/ActiveWorld.types";

type Phase = "hidden" | "entering" | "open" | "closing";
const EASE = [0.22, 1, 0.36, 1] as const;

const HOLD: Record<Exclude<WorldId, "robotics">, string> = {
  hospitality: "#fff9ec",
  systems: "#c8cdcc",
  creative: "#07060a",
};

function start(origin: Origin | null) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (!origin) return { x: 0, y: 0, scale: 0.18 };
  const cx = origin.x + origin.w / 2;
  const cy = origin.y + origin.h / 2;
  const zoom = Math.max(vw / Math.max(origin.w, 1), vh / Math.max(origin.h, 1)) * 1.08;
  return {
    x: vw / 2 - cx,
    y: vh / 2 - cy,
    scale: 1 / zoom,
  };
}

export default function WeatherPortal({
  world,
  children,
}: {
  world: Exclude<WorldId, "robotics">;
  children: (ready: boolean) => ReactNode;
}) {
  const ctx = useActiveWorld();
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("hidden");
  const [from, setFrom] = useState(() => ({ x: 0, y: 0, scale: 0.18 }));

  useEffect(() => {
    if (ctx.entered === world && phase === "hidden") {
      setFrom(start(ctx.origin));
      setPhase("entering");
    }
  }, [ctx.entered, ctx.origin, phase, world]);

  useEffect(() => {
    if (ctx.entered === null && phase === "open") {
      setFrom(start(ctx.origin));
      setPhase("closing");
    }
  }, [ctx.entered, ctx.origin, phase]);

  if (phase === "hidden") return null;

  const fly = phase === "entering" || phase === "closing";
  const wrap: CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 120,
    width: "100%",
    height: "100dvh",
    overflow: phase === "open" ? "auto" : "hidden",
    overscrollBehavior: "contain",
    background: HOLD[world],
    pointerEvents: "auto",
    WebkitOverflowScrolling: "touch",
    transformOrigin: "center center",
  };

  return (
    <motion.div
      className="wx-portal"
      data-world={world}
      data-phase={phase}
      style={wrap}
      initial={reduced ? { opacity: 0 } : { x: from.x, y: from.y, scale: from.scale, opacity: 1 }}
      animate={
        reduced
          ? { opacity: phase === "closing" ? 0 : 1 }
          : phase === "closing"
            ? { x: from.x, y: from.y, scale: from.scale, opacity: 1 }
            : { x: 0, y: 0, scale: 1, opacity: 1 }
      }
      transition={{ duration: reduced ? 0.2 : 0.86, ease: EASE }}
      onAnimationComplete={() => {
        if (phase === "entering") setPhase("open");
        if (phase === "closing") setPhase("hidden");
      }}
    >
      {fly && <i className="wx-haze" aria-hidden="true" />}
      {fly && <i className="wx-grain" aria-hidden="true" />}
      <div className="wx-page">
        {children(phase === "open")}
      </div>
    </motion.div>
  );
}
