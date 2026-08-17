"use client";

/**
 * The clicked card IS the door. It lifts from its slot to fill
 * the viewport. The world lives inside that same surface.
 * Leave shrinks the same card back into its slot.
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
  systems: "#c8cdcc",
  creative: "#07060a",
};

function box(origin: Origin | null) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (!origin) {
    return { left: vw * 0.25, top: vh * 0.2, width: vw * 0.5, height: vh * 0.6 };
  }
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
  const dur = reduced ? 0.2 : 0.88;

  const frame: CSSProperties = {
    position: "fixed",
    zIndex: 120,
    overflow: phase === "open" ? "auto" : "hidden",
    overscrollBehavior: "contain",
    background: HOLD[world],
    pointerEvents: "auto",
    WebkitOverflowScrolling: "touch",
    transformOrigin: "top left",
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
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "closing" ? 0 : 1 }}
        transition={{ duration: reduced ? 0.16 : 0.42, delay: full && !reduced ? 0.28 : 0, ease: EASE }}
      >
        {children(phase === "open")}
      </motion.div>
    </motion.div>
  );
}
