"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * L4 Background Beams — 1:1 faithful port of
 * https://ui.aceternity.com/components/background-beams-with-collision
 * Renders INSIDE .sys-reports-bg (absolute z-0) so beams live BEHIND the
 * dashboard cards/head (z-1), exactly like the demo's parentRef bg slot.
 */

type BeamOpts = {
  x: number; // percent across stage
  duration: number;
  repeatDelay: number;
  delay: number;
  hClass: string; // maps to h-6 / h-12 / h-14 / h-20
};

const BEAMS: BeamOpts[] = [
  { x: 1, duration: 7, repeatDelay: 3, delay: 2, hClass: "h-14" },
  { x: 48, duration: 3, repeatDelay: 3, delay: 4, hClass: "h-14" },
  { x: 8, duration: 7, repeatDelay: 7, delay: 0, hClass: "h-6" },
  { x: 32, duration: 5, repeatDelay: 14, delay: 4, hClass: "h-14" },
  { x: 66, duration: 11, repeatDelay: 2, delay: 0, hClass: "h-20" },
  { x: 83, duration: 4, repeatDelay: 2, delay: 0, hClass: "h-12" },
  { x: 96, duration: 6, repeatDelay: 4, delay: 2, hClass: "h-6" },
];

const H_MAP: Record<string, number> = { "h-6": 24, "h-12": 48, "h-14": 56, "h-20": 80 };

function Explosion({ x, y }: { x: number; y: number }) {
  const spans = useRef(
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      directionX: Math.floor(Math.random() * 80 - 40),
      directionY: Math.floor(Math.random() * -50 - 10),
    }))
  ).current;

  return (
    <div className="sys-explosion" style={{ left: x, top: y }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="sys-explosion-bar"
      />
      {spans.map((s) => (
        <motion.span
          key={s.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: s.directionX, y: s.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className="sys-explosion-dot"
        />
      ))}
    </div>
  );
}

function CollisionMechanism({
  opts,
  containerRef,
  parentRef,
}: {
  opts: BeamOpts;
  containerRef: React.RefObject<HTMLDivElement | null>;
  parentRef: React.RefObject<HTMLDivElement | null>;
}) {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{ x: number; y: number } | null>(null);
  const [key, setKey] = useState(0);
  const [cycle, setCycle] = useState(false);

  useEffect(() => {
    if (cycle) return;
    const id = setInterval(() => {
      if (!beamRef.current || !containerRef.current || !parentRef.current) return;
      const br = beamRef.current.getBoundingClientRect();
      const cr = containerRef.current.getBoundingClientRect();
      const pr = parentRef.current.getBoundingClientRect();
      if (br.bottom >= cr.top) {
        setCollision({
          x: br.left - pr.left + br.width / 2,
          y: br.bottom - pr.top,
        });
        setCycle(true);
      }
    }, 50);
    return () => clearInterval(id);
  }, [cycle, containerRef, parentRef]);

  useEffect(() => {
    if (!collision) return;
    const t1 = setTimeout(() => setCollision(null), 1800);
    const t2 = setTimeout(() => {
      setCycle(false);
      setKey((k) => k + 1);
    }, 2000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [collision]);

  const hPx = H_MAP[opts.hClass] ?? 56;

  return (
    <>
      <motion.div
        key={key}
        ref={beamRef}
        initial={{ translateY: "-200px", translateX: `${opts.x}%` }}
        animate={{ translateY: "1800px", translateX: `${opts.x}%` }}
        transition={{
          duration: opts.duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: opts.delay,
          repeatDelay: opts.repeatDelay,
        }}
        className={`sys-beam ${opts.hClass}`}
        style={{ left: `${opts.x}%`, height: hPx } as React.CSSProperties}
      />
      <AnimatePresence>
        {collision && <Explosion x={collision.x} y={collision.y} />}
      </AnimatePresence>
    </>
  );
}

export default function L4Beams({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const innerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;
    const el = containerRef.current;
    if (!el) return;
    // parentRef is the .sys-reports-bg layer; innerRef is the collision line container
    const io = new IntersectionObserver(
      (entries) => setActive((entries[0]?.intersectionRatio ?? 0) > 0.04),
      { threshold: [0, 0.04, 0.12] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [containerRef]);

  // Mount refs to actual DOM nodes for CollisionMechanism
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const bg = el.querySelector(".sys-reports-bg") as HTMLDivElement | null;
    if (bg) (parentRef as unknown as { current: HTMLDivElement | null }).current = bg;
  });

  if (reduced.current) return null;
  if (!active) {
    // Keep DOM minimal when off-screen; still need parentRef for measurement
    return <div ref={parentRef} style={{ display: "none" }} aria-hidden="true" />;
  }

  return (
    <div className="sys-beams" aria-hidden="true" data-active={String(active)}>
      {/* Collision line container — mirrors demo's containerRef (absolute bottom bar) */}
      <div ref={innerRef} className="sys-beams-collision-line" />
      {BEAMS.map((b, i) => (
        <CollisionMechanism key={`${b.x}-${i}`} opts={b} containerRef={innerRef} parentRef={containerRef as unknown as React.RefObject<HTMLDivElement>} />
      ))}
    </div>
  );
}
