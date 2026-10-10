"use client";

/**
 * Card → world transition. The world page is laid out at full size the whole
 * time and never scales or shifts; only a clip-path "window" grows from the
 * card's rectangle to the full viewport (and shrinks back on close).
 *
 * While open, the portal is ordinary document flow and the gateway is
 * display:none, so the world scrolls the real window exactly like its direct
 * `?world=` route (scroll listeners, Lenis and fixed bars all behave).
 * On close the portal is re-fixed with the world's scroll offset preserved,
 * the gateway comes back at its saved scroll position, and the window shrinks.
 */

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { WorldId } from "../data/worlds";
import { useActiveWorld } from "../context/ActiveWorldContext";
import type { Origin } from "../context/ActiveWorld.types";

type Phase = "hidden" | "entering" | "open" | "closing";
const EASE = [0.22, 1, 0.32, 1] as const;
const FLAG = "wxOpen";

const HOLD: Record<WorldId, string> = {
  hyatlas: "#0b0b10",
  hospitality: "#fff9ec",
  systems: "#eef0f2",
  creative: "#07060a",
  robotics: "#0a0d10",
};

const FULL = "inset(0px 0px 0px 0px round 0px)";

function clipFor(origin: Origin | null) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const o = origin ?? { x: vw * 0.25, y: vh * 0.18, w: vw * 0.5, h: vh * 0.64 };
  const l = Math.max(0, o.x);
  const t = Math.max(0, o.y);
  const r = Math.max(0, vw - o.x - o.w);
  const b = Math.max(0, vh - o.y - o.h);
  return `inset(${t}px ${r}px ${b}px ${l}px round 3px)`;
}

export default function WeatherPortal({
  world,
  children,
}: {
  world: WorldId;
  children: (ready: boolean) => ReactNode;
}) {
  const ctx = useActiveWorld();
  const reduced = useReducedMotion();
  const node = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<Phase>("hidden");
  const [clip, setClip] = useState(clipFor(null));
  const saved = useRef({ page: 0, world: 0, opened: false });

  useEffect(() => {
    if (ctx.entered === world && phase === "hidden") {
      saved.current = { page: window.scrollY, world: 0, opened: false };
      setClip(clipFor(ctx.origin));
      setPhase("entering");
    }
  }, [ctx.entered, ctx.origin, phase, world]);

  useEffect(() => {
    if (ctx.entered === null && (phase === "open" || phase === "entering")) {
      // Runs before the layout switch below, so the world's scroll is still intact.
      saved.current.world = saved.current.opened ? window.scrollY : 0;
      setClip(clipFor(ctx.origin));
      setPhase("closing");
    }
  }, [ctx.entered, ctx.origin, phase]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    if (phase === "open") {
      root.dataset[FLAG] = world;
      saved.current.opened = true;
      window.scrollTo(0, 0);
    } else if (phase === "closing") {
      delete root.dataset[FLAG];
      window.scrollTo(0, saved.current.page);
      if (node.current !== null) node.current.scrollTop = saved.current.world;
    } else if (phase === "hidden") {
      delete root.dataset[FLAG];
    }
  }, [phase, world]);

  useEffect(() => () => { delete document.documentElement.dataset[FLAG]; }, []);

  if (phase === "hidden") return null;

  const full = phase === "open" || phase === "entering";
  const dur = reduced ? 0.01 : 0.6;
  // Reduced motion: no clip travel, just a short fade in place.
  const closedClip = reduced ? FULL : clip;

  const frame: CSSProperties = phase === "open"
    ? { position: "relative", zIndex: 120, minHeight: "100dvh" }
    : { position: "fixed", top: 0, left: 0, width: "100%", height: "100dvh", zIndex: 120, overflow: "hidden", pointerEvents: "none" };

  return (
    <motion.div
      ref={node}
      className="wx-portal"
      data-world={world}
      data-phase={phase}
      style={{ ...frame, background: HOLD[world] }}
      initial={{ clipPath: closedClip, opacity: 0 }}
      animate={full
        ? { clipPath: FULL, opacity: 1 }
        : { clipPath: closedClip, opacity: 0 }}
      transition={reduced
        ? { clipPath: { duration: 0 }, opacity: { duration: 0.18, ease: "easeOut" } }
        : {
          clipPath: { duration: dur, ease: EASE },
          opacity: full
            ? { duration: dur * 0.4, ease: "easeOut" }
            : { duration: dur * 0.45, delay: dur * 0.55, ease: "easeIn" },
        }}
      onAnimationComplete={() => {
        if (phase === "entering") setPhase("open");
        if (phase === "closing") setPhase("hidden");
      }}
    >
      <div className="wx-page">{children(true)}</div>
    </motion.div>
  );
}
