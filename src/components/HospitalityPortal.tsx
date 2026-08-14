import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "motion/react";
import HospitalityWorld from "../worlds/HospitalityWorld";
import { useActiveWorld } from "../context/ActiveWorldContext";

/* The portal carries atmosphere across the transition, not card geometry.
   The gateway stays underneath while a full-screen cafe image, warmth, and
   depth dissolve over it. The destination page itself never scales. */

const ease = [0.16, 1, 0.3, 1] as const;
type Phase = "hidden" | "entering" | "open" | "closing";

export default function HospitalityPortal() {
  const ctx = useActiveWorld();
  const [phase, setPhase] = useState<Phase>("hidden");
  const [showReturn, setShowReturn] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (ctx.entered === "hospitality" && phase === "hidden") {
      setReady(false);
      setPhase("entering");
      requestAnimationFrame(() => setReady(true));
    }
  }, [ctx.entered, phase]);

  useEffect(() => {
    if (ctx.entered === null && phase === "open") {
      setShowReturn(false);
      setPhase("closing");
    }
  }, [ctx.entered, phase]);

  if (phase === "hidden") return null;

  const wrap: CSSProperties = {
    position: phase === "open" ? "relative" : "fixed",
    inset: phase === "open" ? "auto" : 0,
    zIndex: 120,
    width: "100%",
    minHeight: "100dvh",
    overflow: phase === "open" ? "visible" : "auto",
    overscrollBehavior: "contain",
    WebkitOverflowScrolling: "touch",
    background: "#fff9ec",
    pointerEvents: "auto",
  };

  const open = phase === "open" || phase === "entering";

  return (
    <motion.div
      style={wrap}
      initial={{ opacity: 0 }}
      animate={{ opacity: phase === "closing" ? 0 : 1 }}
      transition={{ duration: phase === "closing" ? 0.72 : 0.62, ease }}
      onAnimationComplete={() => {
        if (phase === "entering") setPhase("open");
        if (phase === "closing") setPhase("hidden");
      }}
    >
      <motion.div
        aria-hidden="true"
        style={{ position: "absolute", inset: -28, zIndex: 0 }}
        initial={{ opacity: 0, scale: 1.08, filter: "blur(16px)" }}
        animate={{
          opacity: open ? 1 : 0.78,
          scale: open ? 1.02 : 1.06,
          filter: open ? "blur(0px)" : "blur(7px)",
        }}
        transition={{
          opacity: { duration: phase === "closing" ? 0.42 : 0.7, ease },
          scale: { duration: phase === "closing" ? 0.72 : 1.05, ease },
          filter: { duration: phase === "closing" ? 0.42 : 0.7, ease },
        }}
      >
        <img
          src="./assets/cafe/hero.webp"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(circle at 28% 42%, rgba(247, 198, 112, .34), transparent 42%), linear-gradient(115deg, rgba(255, 249, 236, .96) 0%, rgba(255, 249, 236, .72) 34%, rgba(255, 249, 236, .16) 72%, rgba(19, 55, 39, .18) 100%)",
          mixBlendMode: "normal",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0.74 }}
        transition={{ duration: phase === "closing" ? 0.46 : 0.78, ease }}
      />

      <motion.div
        style={{ position: "relative", zIndex: 2, width: "100%", minHeight: "100dvh", overflow: "visible" }}
        initial={{ opacity: 0, y: 22 }}
        animate={{
          opacity: phase === "open" ? 1 : 0,
          y: phase === "open" ? 0 : 22,
        }}
        transition={{ duration: 0.58, delay: phase === "open" ? 0.18 : 0, ease }}
        onAnimationComplete={() => {
          if (phase === "open") setShowReturn(true);
        }}
      >
        <HospitalityWorld
          embed={false}
          shared={false}
          showReturn={showReturn}
          onClose={() => ctx.leave()}
        />
      </motion.div>

      {!ready && null}
    </motion.div>
  );
}
