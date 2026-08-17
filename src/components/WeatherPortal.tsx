"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { WorldId } from "../data/worlds";
import { useActiveWorld } from "../context/ActiveWorldContext";

type Phase = "hidden" | "entering" | "open" | "closing";
const EASE = [0.16, 1, 0.3, 1] as const;

const SKY: Record<Exclude<WorldId, "robotics">, { photo: string; hold: string; wash: string; fog: string }> = {
  hospitality: {
    photo: "./assets/gateway/hospitality.webp",
    hold: "#fff9ec",
    wash: "radial-gradient(ellipse 70% 55% at 30% 40%, rgba(247,198,112,.42), transparent 58%), linear-gradient(115deg, rgba(255,249,236,.94) 0%, rgba(255,249,236,.55) 42%, rgba(19,55,39,.18) 100%)",
    fog: "radial-gradient(ellipse 80% 50% at 20% 70%, rgba(255,244,220,.9), transparent 62%), radial-gradient(ellipse 70% 46% at 82% 28%, rgba(255,236,198,.74), transparent 58%)",
  },
  systems: {
    photo: "./assets/gateway/systems.webp",
    hold: "#c8cdcc",
    wash: "radial-gradient(ellipse 65% 50% at 72% 30%, rgba(71,125,162,.28), transparent 60%), linear-gradient(180deg, rgba(238,240,242,.9) 0%, rgba(200,205,204,.72) 48%, rgba(10,16,32,.35) 100%)",
    fog: "radial-gradient(ellipse 78% 52% at 18% 60%, rgba(232,238,244,.88), transparent 64%), radial-gradient(ellipse 68% 44% at 86% 24%, rgba(159,184,204,.64), transparent 56%)",
  },
  creative: {
    photo: "./assets/gateway/creative.webp",
    hold: "#07060a",
    wash: "radial-gradient(ellipse 60% 48% at 50% 42%, rgba(167,139,250,.22), transparent 62%), linear-gradient(180deg, rgba(7,6,10,.2) 0%, rgba(7,6,10,.72) 100%)",
    fog: "radial-gradient(ellipse 76% 50% at 30% 70%, rgba(28,18,40,.88), transparent 62%), radial-gradient(ellipse 64% 42% at 78% 22%, rgba(80,50,40,.58), transparent 58%)",
  },
};

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
  const sky = SKY[world];

  useEffect(() => {
    if (ctx.entered === world && phase === "hidden") setPhase("entering");
  }, [ctx.entered, phase, world]);

  useEffect(() => {
    if (ctx.entered === null && phase === "open") setPhase("closing");
  }, [ctx.entered, phase]);

  if (phase === "hidden") return null;

  const open = phase === "open" || phase === "entering";
  const wrap: CSSProperties = {
    position: phase === "open" ? "relative" : "fixed",
    inset: phase === "open" ? "auto" : 0,
    zIndex: 120,
    width: "100%",
    minHeight: "100dvh",
    overflow: phase === "open" ? "visible" : "hidden",
    overscrollBehavior: "contain",
    background: sky.hold,
    pointerEvents: "auto",
  };
  const dur = reduced ? 0.2 : phase === "closing" ? 0.72 : 0.86;

  return (
    <motion.div
      className="wx-portal"
      data-world={world}
      data-phase={phase}
      style={wrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: phase === "closing" ? 0 : 1 }}
      transition={{ duration: reduced ? 0.2 : phase === "closing" ? 0.68 : 0.38, ease: EASE }}
      onAnimationComplete={() => {
        if (phase === "closing") setPhase("hidden");
      }}
    >
      <motion.div
        className="wx-photo"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.2, filter: "blur(22px)" }}
        animate={{
          opacity: open ? 1 : 0.68,
          scale: phase === "open" ? 1.04 : 1.14,
          filter: phase === "open" ? "blur(2px)" : "blur(16px)",
        }}
        transition={{ duration: dur, ease: EASE }}
      >
        <img src={sky.photo} alt="" />
      </motion.div>

      <motion.div
        className="wx-wash"
        aria-hidden="true"
        style={{ background: sky.wash }}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0.68 }}
        transition={{ duration: reduced ? 0.2 : 0.7, ease: EASE }}
      />

      <motion.div
        className="wx-fog"
        aria-hidden="true"
        style={{ background: sky.fog }}
        initial={{ opacity: 0.98, scale: 1.16, y: 36 }}
        animate={{
          opacity: phase === "open" ? 0 : 0.9,
          scale: phase === "open" ? 1.48 : 1.08,
          y: phase === "open" ? -28 : 10,
        }}
        transition={{ duration: reduced ? 0.2 : 0.84, ease: EASE }}
        onAnimationComplete={() => {
          if (phase === "entering") setPhase("open");
        }}
      />

      <i className="wx-grain" aria-hidden="true" />

      <motion.div
        className="wx-page"
        initial={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
        animate={{
          opacity: phase === "open" ? 1 : 0,
          scale: phase === "open" ? 1 : 1.03,
          filter: phase === "open" ? "blur(0px)" : "blur(6px)",
        }}
        transition={{
          duration: reduced ? 0.18 : 0.6,
          delay: phase === "open" && !reduced ? 0.06 : 0,
          ease: EASE,
        }}
      >
        {children(phase === "open")}
      </motion.div>
    </motion.div>
  );
}
