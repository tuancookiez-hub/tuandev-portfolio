"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * L4 Background Beams — faithful port of Aceternity's
 * BackgroundBeamsWithCollision. Beams fall from the top of the stage and,
 * when their tip reaches the collision line, burst into scattered spark
 * particles before restarting. Cyan/white palette, runs only while L4 is
 * in view, respects reduced-motion.
 */

type BeamOpts = {
  x: number;
  duration: number;
  repeatDelay: number;
  delay: number;
  height: number;
  width: number;
};

const BEAMS: BeamOpts[] = [
  { x: 2, duration: 7, repeatDelay: 3, delay: 2, height: 96, width: 2 },
  { x: 46, duration: 3, repeatDelay: 3, delay: 4, height: 64, width: 2 },
  { x: 9, duration: 7, repeatDelay: 7, delay: 0, height: 24, width: 1.5 },
  { x: 32, duration: 5, repeatDelay: 14, delay: 4, height: 64, width: 2 },
  { x: 62, duration: 11, repeatDelay: 2, delay: 0, height: 80, width: 2.5 },
  { x: 78, duration: 4, repeatDelay: 2, delay: 0, height: 48, width: 1.5 },
  { x: 92, duration: 6, repeatDelay: 4, delay: 2, height: 24, width: 2 },
];

type Burst = {
  id: number;
  x: number;
  y: number;
  spans: { x: number; y: number; size: number; white: boolean }[];
};

let burstId = 0;

function makeBurst(x: number, y: number): Burst {
  return {
    id: ++burstId,
    x,
    y,
    spans: Array.from({ length: 16 }, () => ({
      x: Math.floor(Math.random() * 80 - 40),
      y: Math.floor(Math.random() * -50 - 10),
      size: 1.5 + Math.random() * 2,
      white: Math.random() > 0.6,
    })),
  };
}

function Beam({ opts, active, collideY, containerW, onCollide }: { opts: BeamOpts; active: boolean; collideY: number; containerW: number; onCollide: (x: number, y: number) => void }) {
  const [key, setKey] = useState(0);
  const [done, setDone] = useState(false);
  const fall = collideY + opts.height * 0.4;

  useEffect(() => {
    if (!active) return;
    setDone(false);
    const t = setTimeout(() => setKey((k) => k + 1), (opts.duration + opts.repeatDelay) * 1000 + opts.delay * 1000);
    return () => clearTimeout(t);
  }, [key, active, opts.duration, opts.repeatDelay, opts.delay]);

  if (!active) return null;

  return (
    <motion.div
      key={key}
      className="sys-beam"
      style={{
        left: `${opts.x}%`,
        width: opts.width,
        height: opts.height,
        opacity: done ? 0 : undefined,
      }}
      initial={{ y: -opts.height - 40 }}
      animate={{ y: fall }}
      transition={{ duration: opts.duration, delay: opts.delay, ease: "linear" }}
      onAnimationComplete={() => {
        if (!done) {
          setDone(true);
          onCollide((opts.x / 100) * containerW, fall + opts.height);
        }
      }}
    />
  );
}

export default function L4Beams({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const [active, setActive] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [collideY, setCollideY] = useState(620);
  const [containerW, setContainerW] = useState(1200);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      setCollideY(Math.max(280, el.clientHeight - 70));
      setContainerW(el.clientWidth);
    };
    measure();
    const io = new IntersectionObserver(
      (entries) => setActive(entries[0]?.isIntersecting ?? false),
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      io.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [containerRef]);

  useEffect(() => {
    if (bursts.length === 0) return;
    const t = setTimeout(() => setBursts((b) => b.slice(1)), 1100);
    return () => clearTimeout(t);
  }, [bursts]);

  if (reduced.current) return null;

  return (
    <div className="sys-beams" aria-hidden="true" data-active={String(active)}>
      <div className="sys-beams-field">
        {BEAMS.map((b, i) => (
          <Beam
            key={i}
            opts={b}
            active={active}
            collideY={collideY}
            containerW={containerW}
            onCollide={(x, y) => setBursts((cur) => [...cur.slice(-3), makeBurst(x, y)])}
          />
        ))}
      </div>
      <AnimatePresence>
        {bursts.map((burst) => (
          <div key={burst.id} className="sys-burst" style={{ left: burst.x, top: burst.y }}>
            {burst.spans.map((s, i) => (
              <motion.span
                key={i}
                className={`sys-burst-dot${s.white ? " is-white" : ""}`}
                style={{ width: s.size, height: s.size }}
                initial={{ x: 0, y: 0, opacity: 1 }}
                animate={{ x: s.x, y: s.y, opacity: 0 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>
      <div className="sys-beams-collision" style={{ top: collideY + 46 }} />
    </div>
  );
}
