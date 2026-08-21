import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Sync = {
  type: "portfolio-preview-scroll";
  section: string;
  progress: number;
  stage?: string;
  stageProgress?: number;
};

function activeStage(): { name: string; progress: number } | null {
  const stages = [...document.querySelectorAll<HTMLElement>(".sys-stage")];
  if (stages.length === 0) return null;
  const anchor = window.innerHeight * 0.42;
  let cur = stages[0];
  if (!cur) return null;
  for (const s of stages) {
    if (s.getBoundingClientRect().top <= anchor) cur = s;
  }
  const cls = [...cur.classList].find((c) => c.startsWith("sys-stage-")) ?? "";
  const name = cls.replace("sys-stage-", "");
  if (!name) return null;
  const box = cur.getBoundingClientRect();
  const range = Math.max(1, box.height - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -box.top / range));
  return { name, progress };
}

function current(): Omit<Sync, "type"> | null {
  const sections = [...document.querySelectorAll<HTMLElement>("[data-sync]")];
  if (sections.length === 0) return null;

  const line = window.innerHeight * 0.42;
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

    const receive = (event: MessageEvent<Sync>) => {
      if (event.data?.type !== "portfolio-preview-scroll") return;

      // Stage-aware sync (Systems world): land the phone at the same stage
      // as the parent, positioned by how far INTO that stage the parent is.
      // Stages differ wildly in height between desktop and mobile, so a
      // whole-document proportional scroll can never line up.
      if (event.data.stage) {
        const el = document.querySelector<HTMLElement>(`.sys-stage-${CSS.escape(event.data.stage)}`);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const range = Math.max(1, el.offsetHeight - window.innerHeight);
          const target = top + (event.data.stageProgress ?? 0) * range;
          window.scrollTo({ top: target, behavior: "auto" });
          return;
        }
      }

      const section = document.querySelector<HTMLElement>(`[data-sync="${CSS.escape(event.data.section)}"]`);
      if (section === null) return;
      const journey = section.dataset.sync === "journey";
      const range = Math.max(1, section.offsetHeight - (journey ? window.innerHeight : 0));
      const target = section.offsetTop + (event.data.progress * range);
      window.scrollTo({ top: target, behavior: "auto" });
    };

    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [enabled]);
}

export default function DevicePreview({ world }: { world: "hospitality" | "systems" }) {
  const frame = useRef<HTMLIFrameElement>(null);
  const tick = useRef(0);
  const [open, setOpen] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const send = () => {
      tick.current = 0;
      const sync = current();
      if (sync === null) return;
      const stage = activeStage();
      frame.current?.contentWindow?.postMessage({ type: "portfolio-preview-scroll", ...sync, stage: stage?.name, stageProgress: stage?.progress } satisfies Sync, "*");
    };
    const scroll = () => {
      if (tick.current !== 0) return;
      tick.current = requestAnimationFrame(send);
    };

    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", scroll);
    send();
    return () => {
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", scroll);
      if (tick.current !== 0) cancelAnimationFrame(tick.current);
    };
  }, [ready]);

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
