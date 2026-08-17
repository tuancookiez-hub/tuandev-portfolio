"use client";

/**
 * The card is a crop of the page top. Click opens that crop
 * to the full page. The page never scales — only the window grows.
 */

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { WorldId } from "../data/worlds";
import { useActiveWorld } from "../context/ActiveWorldContext";
import type { Origin } from "../context/ActiveWorld.types";

type Phase = "hidden" | "entering" | "open" | "closing";
const EASE = [0.22, 1, 0.32, 1] as const;

const HOLD: Record<Exclude<WorldId, "robotics">, string> = {
  hospitality: "#fff9ec",
  systems: "#eef0f2",
  creative: "#07060a",
};

function box(origin: Origin | null) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (!origin) return { left: vw * 0.25, top: vh * 0.18, width: vw * 0.5, height: vh * 0.64 };
  return { left: origin.x, top: origin.y, width: origin.w, height: origin.h };
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
  const [from, setFrom] = useState({ left: 0, top: 0, width: 0, height: 0 });

  useEffect(() => {
    if (ctx.entered === world && phase === "hidden") {
      setFrom(box(ctx.origin));
      setPhase("entering");
    }
  }, [ctx.entered, ctx.origin, phase, world]);

  useEffect(() => {
    if (ctx.entered === null && (phase === "open" || phase === "entering")) {
      setFrom(box(ctx.origin));
      setPhase("closing");
    }
  }, [ctx.entered, ctx.origin, phase]);

  if (phase === "hidden") return null;

  const full = phase === "open" || phase === "entering";
  const dur = reduced ? 0.01 : 0.62;

  const frame: CSSProperties = {
    position: "fixed",
    zIndex: 120,
    overflow: phase === "open" ? "auto" : "hidden",
    overscrollBehavior: "contain",
    background: HOLD[world],
    pointerEvents: phase === "open" ? "auto" : "none",
    WebkitOverflowScrolling: "touch",
  };

  return (
    <motion.div
      className="wx-portal"
      data-world={world}
      data-phase={phase}
      style={frame}
      initial={from}
      animate={full
        ? { left: 0, top: 0, width: "100vw", height: "100dvh", borderRadius: 0 }
        : { ...from, borderRadius: 3 }}
      transition={{ duration: dur, ease: EASE }}
      onAnimationComplete={() => {
        if (phase === "entering") setPhase("open");
        if (phase === "closing") setPhase("hidden");
      }}
    >
      <motion.div
        className="wx-page"
        style={{ position: "absolute", width: "100vw", minHeight: "100dvh" }}
        initial={{ left: -from.left, top: -from.top }}
        animate={full ? { left: 0, top: 0 } : { left: -from.left, top: -from.top }}
        transition={{ duration: dur, ease: EASE }}
      >
        {children(phase === "open")}
      </motion.div>
    </motion.div>
  );
}
