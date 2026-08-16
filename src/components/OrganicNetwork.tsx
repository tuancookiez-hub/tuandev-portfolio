"use client";

/**
 * Level 5 — organic agentic network. The most advanced stage.
 *
 * A live canvas-rendered force-directed network of organic glowing clusters
 * (magenta / cyan / red-orange) with particles streaming along curved edges,
 * drifting toward a tighter fuse over time. Matches the reference video:
 *   - soft, semi-transparent particle clouds with bright cores (additive glow)
 *   - thin curved white edges + bright particles flowing along them
 *   - clusters pull closer and glow-blend as their distance drops
 *   - dashboard panels slide in from the sides on scroll-into-view
 *   - the graph itself fades in slowly (opacity ramps over ~1.5s)
 *
 * Panels are React DOM overlays; the network is a <canvas> layer behind them.
 */

import { motion, useInView } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";

type Cluster = {
  x: number; y: number; vx: number; vy: number;
  r: number;
  hue: string;
  label: string;
  charge: number;
  seed: number;
};

const LABELS = ["calendar sync", "index triage", "invoice run", "report build", "provider failover", "token meter", "cost guard", "eviction sweep"];

// Deterministic pseudo-random per cluster so renders are stable across passes
function mulberry(seed: number) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export default function OrganicNetwork() {
  const root = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const inView = useInView(root, { once: false, margin: "-15% 0px -10% 0px" });
  const [seedCh, setSeedCh] = useState(0);

  const clusters = useMemo<Cluster[]>(() => {
    const rand = mulberry(42 + seedCh * 13);
    const hues = ["#ff66aa", "#66ffff", "#ff6666"];
    return Array.from({ length: 9 }, (_, i) => ({
      x: 0.2 + rand() * 0.6,
      y: 0.2 + rand() * 0.55,
      vx: (rand() - 0.5) * 0.08,
      vy: (rand() - 0.5) * 0.08,
      r: 0.09 + rand() * 0.08,
      hue: hues[i % hues.length],
      label: LABELS[i % LABELS.length],
      charge: rand() * 60 - 20,
      seed: i,
    }));
  }, [seedCh]);

  // Auto re-seed every ~7s to keep the organic drift (new random field)
  useEffect(() => {
    if (!inView) return;
    const t = setInterval(() => setSeedCh((s) => s + 1), 7000);
    return () => clearInterval(t);
  }, [inView]);

  // Canvas render loop — force-directed clusters + particle edges
  useEffect(() => {
    const cv = canvasRef.current;
    const wrap = root.current;
    if (!cv || !wrap) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let cx = 0, cy = 0, cw = 0, ch = 0;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const resize = () => {
      const r = wrap.getBoundingClientRect();
      cw = r.width; ch = r.height; cx = cw / 2; cy = ch / 2;
      cv.width = Math.floor(cw * dpr); cv.height = Math.floor(ch * dpr);
      cv.style.width = `${cw}px`; cv.style.height = `${ch}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // particle streams: each edge carries 3 particles with progress
    type P = { from: number; to: number; t: number; speed: number };
    const particles: P[] = [];
    for (let i = 0; i < 9 * 9; i++) {
      if (Math.random() < 0.75) continue; // sparse edges
      particles.push({ from: i % 9, to: Math.floor(i / 9), t: Math.random(), speed: 0.004 + Math.random() * 0.006 });
    }

    const drawCluster = (c: Cluster) => {
      const px = c.x * cw, py = c.y * ch, pr = c.r * cw;
      const sparks = 140;
      const rand = mulberry(c.seed * 999 + Math.floor(Date.now() / 400));
      for (let i = 0; i < sparks; i++) {
        const a = rand() * Math.PI * 2;
        const d = Math.pow(rand(), 1.5) * pr * 1.1;
        const xx = px + Math.cos(a) * d;
        const yy = py + Math.sin(a) * d;
        const o = Math.max(0, 1 - d / (pr * 1.6)) * (0.08 + rand() * 0.5);
        ctx.fillStyle = c.hue;
        ctx.globalAlpha = o;
        ctx.fillRect(xx, yy, 1.6, 1.6);
      }
      // core glow
      const grad = ctx.createRadialGradient(px, py, 0, px, py, pr * 0.85);
      grad.addColorStop(0, `${c.hue}aa`);
      grad.addColorStop(0.4, `${c.hue}55`);
      grad.addColorStop(1, `${c.hue}00`);
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = grad;
      ctx.beginPath(); ctx.arc(px, py, pr * 0.85, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
    };

    const draw = () => {
      ctx.clearRect(0, 0, cw, ch);

      // gentle force-directed velocity + center pull (organic drift inward)
      clusters.forEach((c) => {
        c.vx += (cx / cw - c.x) * 0.0004;
        c.vy += (cy / ch - c.y) * 0.0004;
        clusters.forEach((o) => {
          if (o === c) return;
          const dx = c.x - o.x, dy = c.y - o.y;
          const d2 = dx * dx + dy * dy + 0.0001;
          const f = (c.charge * o.charge) / (d2 * 4000);
          c.vx += (dx / Math.sqrt(d2)) * f;
          c.vy += (dy / Math.sqrt(d2)) * f;
        });
        // clamp + friction
        c.vx *= 0.96; c.vy *= 0.96;
        c.x += c.vx; c.y += c.vy;
        c.x = Math.max(0.05, Math.min(0.95, c.x));
        c.y = Math.max(0.08, Math.min(0.92, c.y));
      });

      // edges (thin white curves) + particle streams
      particles.forEach((p) => {
        const a = clusters[p.from], b = clusters[p.to];
        const ax = a.x * cw, ay = a.y * ch, bx = b.x * cw, by = b.y * ch;
        const mx = (ax + bx) / 2, my = (ay + by) / 2 - 30;
        // edge beam
        ctx.globalAlpha = 0.12; ctx.strokeStyle = "#cfe6ff"; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(ax, ay); ctx.quadraticCurveTo(mx, my, bx, by); ctx.stroke();
        // particle
        p.t += p.speed; if (p.t > 1) p.t = 0;
        const t = p.t, it = 1 - t;
        const px = it * it * ax + 2 * it * t * mx + t * t * bx;
        const py = it * it * ay + 2 * it * t * my + t * t * by;
        ctx.globalAlpha = 0.85; ctx.fillStyle = "#ffffff";
        ctx.beginPath(); ctx.arc(px, py, 2.2, 0, Math.PI * 2); ctx.fill();
        // trailing fade
        ctx.globalAlpha = 0.25; ctx.beginPath(); ctx.arc(px - 2, py - 1, 3.5, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
      });

      clusters.forEach(drawCluster);
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [clusters, inView]);

  return (
    <div className="on-shell" ref={root}>
      <canvas ref={canvasRef} className="on-canvas" aria-hidden="true" />
      <motion.div
        className="on-fade"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {/* Panel: left — slides in from left */}
      <motion.div
        className="on-panel on-panel-l"
        initial={{ x: -90, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: -90, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <span className="on-panel-kicker">agentic dispatch</span>
        <div className="on-panel-metric">12,158</div>
        <div className="on-panel-sub">pending tasks · streaming</div>
        <div className="on-monolog">
          {["calendar sync → ok", "index triage → 3 fused", "invoice run → queued", "provider failover → on"].map((l, i) => (
            <motion.div key={l} className="on-log-line" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 + i * 0.15 }}>
              <i aria-hidden="true" />{l}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Panel: right — slides in from right */}
      <motion.div
        className="on-panel on-panel-r"
        initial={{ x: 90, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 90, opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <span className="on-panel-kicker">cost guard · live</span>
        <div className="on-gauge">
          <svg viewBox="0 0 120 64" width="120" height="64">
            <path d="M8 58 A52 52 0 0 1 112 58" fill="none" stroke="rgba(150,170,200,.2)" strokeWidth="7" strokeLinecap="round" />
            <motion.path
              d="M8 58 A52 52 0 0 1 112 58"
              fill="none" stroke="#c98a12" strokeWidth="7" strokeLinecap="round"
              strokeDasharray="164"
              initial={{ strokeDashoffset: 164 }}
              animate={inView ? { strokeDashoffset: 164 * 0.38 } : { strokeDashoffset: 164 }}
              transition={{ duration: 1.6, delay: 0.6, ease: "easeOut" }}
            />
            <circle cx="60" cy="58" r="4" fill="#c98a12" />
          </svg>
          <b>$558.75</b>
          <span>est. weekly routing</span>
        </div>
      </motion.div>

      {/* Bottom counter overlay */}
      <motion.div
        className="on-byte"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <span>SYS · LIVE</span>
        <b>frame {String(Math.floor((seedCh % 60)).toString().padStart(2, "0")).split("").join(":")}</b>
      </motion.div>
    </div>
  );
}
