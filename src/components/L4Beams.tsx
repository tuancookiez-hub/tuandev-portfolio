"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

/**
 * L4 Background Beams — scoped to the reports wall only.
 * Lightweight port of Aceternity's BackgroundBeamsWithCollision: vertical beams
 * that drift down and "collide" with a faint bottom edge, exploding into a
 * subtle pulse. Stays dark-theme, low opacity, and respects reduced-motion.
 * Only animates while L4 is in view (IntersectionObserver gate).
 */

type BeamOpts = {
  initialX: number;
  translateX: number;
  initialY: number;
  translateY: number;
  duration: number;
  delay: number;
  rotate: number;
  width: number;
  className?: string;
};

function Beam({ opts, active }: { opts: BeamOpts; active: boolean }) {
  const [key, setKey] = useState(0);
  const [exploding, setExploding] = useState(false);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => {
      setExploding(true);
      setTimeout(() => setExploding(false), 420);
      setTimeout(() => setKey((k) => k + 1), 700);
    }, (opts.duration - 0.35) * 1000 + opts.delay * 1000);
    return () => clearTimeout(t);
  }, [key, active, opts.duration, opts.delay]);

  if (!active) return null;

  return (
    <motion.div
      key={key}
      className="sys-beam"
      style={{
        left: opts.initialX,
        width: opts.width,
        ["--sys-beam-rot" as string]: `${opts.rotate}deg`,
      } as React.CSSProperties}
      initial={{ y: opts.initialY, x: 0, opacity: 0 }}
      animate={{
        y: opts.translateY,
        x: opts.translateX,
        opacity: [0, 0.14, 0.14, 0],
      }}
      transition={{
        duration: opts.duration,
        delay: opts.delay,
        ease: "linear",
        repeat: Infinity,
        repeatDelay: 0.6,
      }}
      onAnimationComplete={() => {}}
    >
      <span className="sys-beam-core" />
      <span className={`sys-beam-glow ${exploding ? "is-burst" : ""}`} aria-hidden="true" />
    </motion.div>
  );
}

const BEAMS: BeamOpts[] = [
  { initialX: 48, translateX: 10, initialY: -120, translateY: 780, duration: 7.2, delay: 0.1, rotate: 2, width: 2 },
  { initialX: 180, translateX: -14, initialY: -160, translateY: 820, duration: 8.1, delay: 1.4, rotate: -1.5, width: 1.5 },
  { initialX: 320, translateX: 8, initialY: -100, translateY: 860, duration: 6.8, delay: 0.6, rotate: 1, width: 1.75 },
  { initialX: 520, translateX: -10, initialY: -140, translateY: 800, duration: 7.8, delay: 2.1, rotate: -2, width: 1.5 },
  { initialX: 680, translateX: 12, initialY: -110, translateY: 840, duration: 6.5, delay: 0.9, rotate: 1.2, width: 2 },
  { initialX: 840, translateX: -8, initialY: -170, translateY: 880, duration: 8.4, delay: 1.8, rotate: -1, width: 1.5 },
  { initialX: 980, translateX: 6, initialY: -130, translateY: 820, duration: 7.0, delay: 0.3, rotate: 2.2, width: 1.75 },
  { initialX: 1120, translateX: -12, initialY: -150, translateY: 860, duration: 7.6, delay: 2.6, rotate: -1.8, width: 1.5 },
];

export default function L4Beams({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const [active, setActive] = useState(false);
  const prefersReduced = useRef(false);

  useEffect(() => {
    prefersReduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced.current) return;
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries[0]?.isIntersecting ?? false;
        setActive(v);
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [containerRef]);

  if (prefersReduced.current) return null;

  return (
    <div className="sys-beams" aria-hidden="true" data-active={String(active)}>
      <div className="sys-beams-field">
        {BEAMS.map((b, i) => (
          <Beam key={i} opts={b} active={active} />
        ))}
      </div>
      <div className="sys-beams-collision" />
    </div>
  );
}
