"use client";

/**
 * Dolly lives on the landing. Click a card → camera pushes
 * forward toward that card's center. Height and aim stay locked.
 * Destination fades in only after the lens is tight. Leave reverses.
 */

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { WorldId } from "../data/worlds";
import { useActiveWorld } from "../context/ActiveWorldContext";
import type { Origin } from "../context/ActiveWorld.types";

type Phase = "hidden" | "entering" | "open" | "closing";
const EASE = [0.22, 1, 0.32, 1] as const;
const PUSH = 6.4;
const DOLLY_MS = 920;

const HOLD: Record<Exclude<WorldId, "robotics">, string> = {
  hospitality: "#fff9ec",
  systems: "#c8cdcc",
  creative: "#07060a",
};

function aim(origin: Origin | null) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (!origin) return { ox: 50, oy: 50, x: 0, y: 0 };
  const cx = origin.x + origin.w / 2;
  const cy = origin.y + origin.h / 2;
  return {
    ox: (cx / vw) * 100,
    oy: (cy / vh) * 100,
    x: vw / 2 - cx,
    y: vh / 2 - cy,
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
  const [shot, setShot] = useState({ ox: 50, oy: 50, x: 0, y: 0 });
  const wait = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (ctx.entered === world && phase === "hidden") {
      setShot(aim(ctx.origin));
      setPhase("entering");
    }
  }, [ctx.entered, ctx.origin, phase, world]);

  useEffect(() => {
    if (ctx.entered === null && (phase === "open" || phase === "entering")) {
      setShot(aim(ctx.origin));
      setPhase("closing");
    }
  }, [ctx.entered, ctx.origin, phase]);

  useEffect(() => {
    if (wait.current) clearTimeout(wait.current);
    if (phase === "entering") {
      wait.current = setTimeout(() => setPhase("open"), reduced ? 80 : DOLLY_MS);
    }
    if (phase === "closing") {
      wait.current = setTimeout(() => setPhase("hidden"), reduced ? 80 : DOLLY_MS);
    }
    return () => { if (wait.current) clearTimeout(wait.current); };
  }, [phase, reduced]);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".landing");
    if (!root) return;
    if (phase === "hidden") {
      root.style.removeProperty("--cam-x");
      root.style.removeProperty("--cam-y");
      root.style.removeProperty("--cam-z");
      root.style.removeProperty("--cam-ox");
      root.style.removeProperty("--cam-oy");
      root.dataset.cam = "";
      return;
    }
    root.style.setProperty("--cam-x", `${shot.x}px`);
    root.style.setProperty("--cam-y", `${shot.y}px`);
    root.style.setProperty("--cam-ox", `${shot.ox}%`);
    root.style.setProperty("--cam-oy", `${shot.oy}%`);
    root.style.setProperty("--cam-z", phase === "closing" ? "1" : String(PUSH));
    root.dataset.cam = phase;
  }, [phase, shot]);

  if (phase === "hidden") return null;

  const wrap: CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: 120,
    width: "100%",
    height: "100dvh",
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
      style={wrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: phase === "open" ? 1 : 0 }}
      transition={{ duration: reduced ? 0.16 : 0.38, ease: EASE }}
    >
      <div className="wx-page">{children(phase === "open")}</div>
    </motion.div>
  );
}
