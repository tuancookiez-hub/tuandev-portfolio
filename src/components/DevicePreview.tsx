import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Sync = {
  type: "portfolio-preview-scroll";
  section: string;
  progress: number;
};

function current(): Omit<Sync, "type"> | null {
  const sections = [...document.querySelectorAll<HTMLElement>("[data-sync]")];
  if (sections.length === 0) return null;

  const line = window.innerHeight * 0.42;
  const section = sections.find((item) => {
    const box = item.getBoundingClientRect();
    return box.top <= line && box.bottom > line;
  }) ?? sections.at(-1);
  if (section === undefined) return null;

  // Calculate how far through this section we are (0 to 1)
  const box = section.getBoundingClientRect();
  const sectionTop = box.top + window.scrollY;
  const sectionHeight = Math.max(1, box.height);
  const progressInSection = Math.min(1, Math.max(0, (window.scrollY - sectionTop + window.innerHeight * 0.42) / sectionHeight));

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
      const section = document.querySelector<HTMLElement>(`[data-sync="${CSS.escape(event.data.section)}"]`);
      if (section === null) return;

      // Map to the same section in the iframe, proportionally through it
      const target = section.offsetTop + (event.data.progress * section.offsetHeight);
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
      frame.current?.contentWindow?.postMessage({ type: "portfolio-preview-scroll", ...sync } satisfies Sync, "*");
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
