import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Sync = {
  type: "portfolio-preview-scroll";
  section: string;
  progress: number;
  /** Landmark sync (Systems): index into shared LANDMARKS list + fraction
   *  between landmark[idx] and landmark[idx+1] under the viewport anchor. */
  lm?: number;
  lf?: number;
};

/** Semantic blocks that exist in BOTH desktop and mobile layouts, in document order.
 *  Sync interpolates between these, so alignment follows content, not raw pixels —
 *  stage heights differ ~2x between layouts (L4: 2105px desktop vs 4441px mobile),
 *  which made proportional stage mapping show mismatched content.
 *  NOTE: the L2 PDF viewer also renders a `.bklit-ui` element — use
 *  `.sys-dash` (the L4 dashboard root) instead of bare `.bklit-ui`. */
const LANDMARKS = [
  ".sys-stage-overview",
  ".sys-intro-card",
  ".sys-ov-bottom",
  ".sys-stage-aiclient",
  ".sys-l2-report",
  ".sys-pdf",
  ".sys-stage-flow",
  ".kv-shell",
  ".sys-stage-reports",
  ".bklit-ui.sys-dash",
];

const ANCHOR = () => window.innerHeight * 0.42;

/** Where does the anchor line sit relative to this document's landmarks? */
function landmarkPos(): { i: number; f: number } | null {
  const tops = LANDMARKS.map((s) => {
    const el = document.querySelector<HTMLElement>(s);
    return el ? el.getBoundingClientRect().top + window.scrollY : null;
  });
  const pts = tops.filter((t): t is number => t !== null);
  if (pts.length < 2) return null;
  const a = window.scrollY + ANCHOR();
  if (a <= pts[0]) return { i: 0, f: 0 };
  for (let k = 0; k < pts.length - 1; k++) {
    if (a < pts[k + 1]) {
      return { i: k, f: (a - pts[k]) / Math.max(1, pts[k + 1] - pts[k]) };
    }
  }
  return { i: pts.length - 2, f: 1 };
}

/** Document Y that puts landmark position (i, f) under the anchor line. */
function landmarkY(i: number, f: number): number | null {
  const pts = LANDMARKS.map((s) => {
    const el = document.querySelector<HTMLElement>(s);
    return el ? el.getBoundingClientRect().top + window.scrollY : null;
  }).filter((t): t is number => t !== null);
  if (pts.length < 2) return null;
  const k = Math.min(i, pts.length - 2);
  const y = pts[k] + Math.min(1, Math.max(0, f)) * (pts[k + 1] - pts[k]);
  return y - ANCHOR();
}

function current(): Omit<Sync, "type"> | null {
  const sections = [...document.querySelectorAll<HTMLElement>("[data-sync]")];
  if (sections.length === 0) return null;

  const line = ANCHOR();
  const section = sections.find((item) => {
    const box = item.getBoundingClientRect();
    return box.top <= line && box.bottom > line;
  }) ?? sections.at(-1);
  if (section === undefined) return null;

  const box = section.getBoundingClientRect();
  const sectionTop = box.top + window.scrollY;
  const journey = section.dataset.sync === "journey";
  const sectionHeight = Math.max(1, box.height - (journey ? window.innerHeight : 0));
  const offset = journey ? 0 : window.innerHeight * 0.42;
  const progressInSection = Math.min(1, Math.max(0, (window.scrollY - sectionTop + offset) / sectionHeight));

  return {
    section: section.dataset.sync ?? "",
    progress: progressInSection,
  };
}

export function usePreviewReceiver(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;

    // Smooth glide toward each sync target instead of a hard snap.
    // Exponential ease (lerp) in rAF — messages update `target` continuously,
    // the loop eases toward it and settles. Direct jump only on big jumps
    // (>1200px, e.g. anchor/hash navigation); reduced-motion snaps too.
    let target = window.scrollY;
    let gliding = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const step = () => {
      const y = window.scrollY;
      const delta = target - y;
      if (Math.abs(delta) < 1.5) {
        gliding = false;
        return;
      }
      window.scrollTo(0, y + delta * 0.22);
      requestAnimationFrame(step);
    };

    const seek = (y: number) => {
      target = Math.max(0, y);
      if (reduced || Math.abs(target - window.scrollY) > 1200) {
        window.scrollTo({ top: target, behavior: "auto" });
        gliding = false;
        return;
      }
      if (!gliding) {
        gliding = true;
        requestAnimationFrame(step);
      }
    };

    const receive = (event: MessageEvent<Sync>) => {
      if (event.data?.type !== "portfolio-preview-scroll") return;

      // Landmark sync (Systems): put the same content block under the anchor.
      if (typeof event.data.lm === "number" && typeof event.data.lf === "number") {
        const y = landmarkY(event.data.lm, event.data.lf);
        if (y !== null && Math.abs(y - window.scrollY) > 2) seek(y);
        return;
      }

      // Legacy section-proportional fallback (other worlds).
      const section = document.querySelector<HTMLElement>(`[data-sync="${CSS.escape(event.data.section)}"]`);
      if (section === null) return;
      const journey = section.dataset.sync === "journey";
      const range = Math.max(1, section.offsetHeight - (journey ? window.innerHeight : 0));
      const t = section.offsetTop + (event.data.progress * range);
      if (Math.abs(t - window.scrollY) > 2) seek(t);
    };

    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [enabled]);
}

export default function DevicePreview({ world }: { world: "hospitality" | "systems" }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const [open, setOpen] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Continuous rAF sync — Lenis smooth-scroll keeps animating the parent
    // AFTER scroll events stop, so event-driven posting freezes the iframe
    // at a stale offset (mid-stage drift). A rAF loop converges to the final
    // resting position; posting only on change > 1px keeps it cheap.
    let last = -1;
    let raf = 0;
    const send = () => {
      raf = requestAnimationFrame(send);
      const y = window.scrollY;
      if (Math.abs(y - last) < 1) return;
      last = y;
      const sync = current();
      if (sync === null) return;
      const lp = world === "systems" ? landmarkPos() : null;
      frame.current?.contentWindow?.postMessage({ type: "portfolio-preview-scroll", ...sync, lm: lp?.i, lf: lp?.f } satisfies Sync, "*");
    };
    raf = requestAnimationFrame(send);
    return () => cancelAnimationFrame(raf);
  }, [ready, world]);

  const src = `${window.location.pathname}?world=${world}&embed=1`;

  if (!open) {
    return <motion.button className="device-preview-restore" data-world={world} type="button" onClick={() => setOpen(true)} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>Mobile view ▣</motion.button>;
  }

  return (
    <motion.aside
      className="device-preview"
      data-world={world}
      aria-label="Synchronized mobile website preview"
      initial={{ opacity: 0, x: 28, y: "calc(-50% + 18px)" }}
      animate={{ opacity: 1, x: 0, y: "-50%" }}
      transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="device-preview-head">
        <span><i /> Live mobile</span>
        <button type="button" onClick={() => setOpen(false)} aria-label="Minimize mobile preview">—</button>
      </div>
      <div className="device-shell">
        <div className="device-speaker" aria-hidden="true" />
        <div className="device-screen">
          <iframe
            ref={frame}
            title={`Mobile version of this ${world} portfolio page`}
            src={src}
            onLoad={() => setReady(true)}
          />
        </div>
        <div className="device-home" aria-hidden="true" />
      </div>
      <p>Scroll-linked · actual responsive layout</p>
    </motion.aside>
  );
}
