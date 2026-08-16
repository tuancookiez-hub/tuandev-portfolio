"use client";

/**
 * Scroll-scrubbed routing diagram — appears in phase 2, grows in complexity
 * into phase 3. Uses anime.js v4 timelines + seek() for the scrub.
 *
 * The diagram opens as a simple Client → Gateway → Router → Model A → Sink
 * path (phase 2), then layers on Model B, a fallback, a live monitoring loop
 * and heat glyphs (phase 3) as the user scrolls deeper. No external assets —
 * pure inline SVG + an anime timeline scrubbed by the page's own scroll.
 */

import { useEffect, useRef } from "react";
import { createTimeline, stagger } from "animejs";

export default function RoutingDiagram() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const baseLines = Array.from(el.querySelectorAll<SVGPathElement>(".rd-base"));
    const baseNodes = Array.from(el.querySelectorAll<SVGElement>(".rd-node-base"));
    const extra = Array.from(el.querySelectorAll<SVGElement>(".rd-extra"));

    // Set stroke lengths once the SVG is laid out.
    const prep = (list: SVGPathElement[]) =>
      list.forEach((p) => {
        let len = 100;
        try { len = Math.max(1, p.getTotalLength() || 100); } catch { /* zero-size at mount */ }
        p.style.strokeDasharray = `${len} ${len + 1}`;
        p.style.strokeDashoffset = String(len);
      });
    prep(baseLines);
    extra.forEach((g) => prep(Array.from(g.querySelectorAll<SVGPathElement>(".rd-line"))));
    const extraLines = extra.flatMap((g) => Array.from(g.querySelectorAll<SVGPathElement>(".rd-line")));

    if (reduced) {
      baseLines.forEach((p) => (p.style.strokeDashoffset = "0"));
      extraLines.forEach((p) => (p.style.strokeDashoffset = "0"));
      baseNodes.forEach((n) => (n.style.opacity = "1"));
      extra.forEach((n) => (n.style.opacity = "1"));
      return;
    }

    // anime.js timelines — scrub is driven by a light scroll listener below.
    const baseTl = createTimeline({ defaults: { ease: "inOut(2)" } });
    baseTl.add(baseLines, { strokeDashoffset: [0], duration: 1200, delay: stagger(140) });
    baseTl.add(baseNodes, { opacity: [0, 1], duration: 300, delay: stagger(90) }, ">");

    const extraTl = createTimeline({ defaults: { ease: "out(3)" } });
    extraTl.add(extraLines, { strokeDashoffset: [0], duration: 900, delay: stagger(120) });
    extraTl.add(extra, { opacity: [0, 1], duration: 300, delay: 60 }, ">");

    const baseDur = baseTl.duration || 1200;
    const extraDur = extraTl.duration || 900;

    const apply = () => {
      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));
      // 0 → 0.62 drives the base path; 0.62 → 1 drives the complexity layer.
      const baseP = Math.min(1, p / 0.62);
      const extraP = Math.max(0, Math.min(1, (p - 0.62) / 0.38));
      baseTl.seek(baseP * baseDur);
      extraTl.seek(extraP * extraDur);
    };

    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
      baseTl.revert();
      extraTl.revert();
    };
  }, []);

  return (
    <div className="sys-routing-diagram" ref={root} aria-hidden="true">
      <svg viewBox="0 0 820 380" className="rd-svg" role="img">
        {/* PHASE 2 — base routing path */}
        <path className="rd-line rd-base" d="M40 190 H 210" />
        <g className="rd-node-base"><circle className="rd-node" cx="40" cy="190" r="9" /><text className="rd-label" x="18" y="220">Client</text></g>

        <path className="rd-line rd-base" d="M210 190 C 290 190, 290 100, 370 100" />
        <g className="rd-node-base"><circle className="rd-node" cx="210" cy="190" r="9" /><text className="rd-label" x="170" y="210">Gateway</text></g>

        <path className="rd-line rd-base" d="M370 100 H 530" />
        <g className="rd-node-base"><circle className="rd-node rd-core" cx="370" cy="100" r="12" /><text className="rd-label" x="330" y="82">Router</text></g>

        <path className="rd-line rd-base" d="M530 100 C 610 100, 610 190, 690 190" />
        <g className="rd-node-base"><circle className="rd-node" cx="530" cy="100" r="9" /><text className="rd-label" x="500" y="82">Model A</text></g>

        <g className="rd-node-base"><circle className="rd-node" cx="690" cy="190" r="9" /><text className="rd-label" x="668" y="216">Sink</text></g>

        {/* PHASE 3 — extra complexity */}
        <g className="rd-extra">
          <path className="rd-line" d="M370 100 C 450 100, 450 300, 540 296" />
          <circle className="rd-node" cx="540" cy="296" r="8" /><text className="rd-label" x="500" y="320">Model B</text>

          <path className="rd-line" d="M370 100 C 400 110, 400 210, 470 212 H 560" />
          <circle className="rd-node" cx="560" cy="212" r="8" /><text className="rd-label" x="520" y="200">Fallback</text>

          <path className="rd-line rd-loop" d="M690 190 C 720 300, 370 340, 370 140" />
          <text className="rd-label rd-loop-label" x="410" y="350">live monitoring loop</text>

          {Array.from({ length: 14 }).map((_, i) => (
            <circle key={i} className="rd-heat" cx={120 + i * 46} cy={120 + (i % 4) * 44} r="3" />
          ))}
        </g>
      </svg>
    </div>
  );
}
