import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { motion } from "motion/react";
import type { World } from "../data/worlds";
import { useActiveWorld } from "../context/ActiveWorldContext";
import WorldArt from "./WorldArt";
import WorldPeek from "./WorldPeek";

type Props = { world: World; index: number };

export default function WorldPanel({ world, index }: Props) {
  const state = useActiveWorld();
  const ref = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const intent = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = state.active === world.id;
  const muted = state.active !== null && !active;
  const available = true; // robotics live as of retro-futurist lab world
  const entered = state.entered !== null;
  const face = available;
  const isLab = false; // lab retired: robotics is the fourth live world

  useEffect(() => {
    const node = (ref.current ?? divRef.current) as HTMLElement | null;
    if (!node || !face) return;
    const pin = () => {
      const box = node.getBoundingClientRect();
      node.style.setProperty("--vx", `${-box.left}px`);
      node.style.setProperty("--vy", `${-box.top}px`);
    };
    pin();
    const ro = new ResizeObserver(pin);
    ro.observe(node);
    window.addEventListener("resize", pin);
    window.addEventListener("scroll", pin, true);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", pin);
      window.removeEventListener("scroll", pin, true);
    };
  }, [face, active, muted]);

  if (isLab) {
    return (
      <div
        ref={divRef}
        className="world world-lab"
        style={{ "--index": index } as CSSProperties}
        data-world={world.id}
        data-active={active}
        data-muted={muted}
        data-entered={entered}
        data-face={false}
        data-available={false}
        data-wip={true}
        aria-disabled="true"
        role="note"
        aria-label={`${world.label} — ${world.line}`}
        tabIndex={0}
        onFocus={() => state.hover(world.id)}
        onMouseEnter={() => {
          if (intent.current !== null) clearTimeout(intent.current);
          if (state.active !== null) { state.hover(world.id); return; }
          intent.current = setTimeout(() => state.hover(world.id), 110);
        }}
        onMouseLeave={(event) => {
          if (intent.current !== null) clearTimeout(intent.current);
          (event.currentTarget as HTMLElement).style.removeProperty("--mx");
          (event.currentTarget as HTMLElement).style.removeProperty("--my");
        }}
        onPointerMove={(event) => {
          const box = divRef.current?.getBoundingClientRect();
          if (box === undefined) return;
          (event.currentTarget as HTMLElement).style.setProperty("--mx", `${(event.clientX - box.left) / box.width - .5}`);
          (event.currentTarget as HTMLElement).style.setProperty("--my", `${(event.clientY - box.top) / box.height - .5}`);
        }}
      >
        <span className="world-art" aria-hidden="true"><WorldArt id={world.id} /></span>
        <span className="world-shade" aria-hidden="true" />
        <span className="world-topline" aria-hidden="true"><i /> {world.number}</span>
        <span className="world-copy">
          <strong className="world-label">{world.label}</strong>
          <span className="world-line">{world.line}</span>
        </span>
        <WorldPeek id={world.id} />
        <span className="world-wip"><i aria-hidden="true" /> Lab — in progress</span>
      </div>
    );
  }

  return (
    <motion.button
      ref={ref}
      layout="position"
      type="button"
      className="world"
      style={{ "--index": index } as CSSProperties}
      data-world={world.id}
      data-active={active}
      data-muted={muted}
      data-entered={entered}
      data-face={face}
      aria-pressed={active}
      aria-label={`Explore ${world.label}`}
      onClick={() => {
        const box = ref.current?.getBoundingClientRect();
        state.enter(world.id, box
          ? { x: box.left, y: box.top, w: box.width, h: box.height }
          : undefined);
      }}
      data-available={available}
      data-wip={false}
      onFocus={() => state.hover(world.id)}
      onBlur={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Element && next.closest(".world")) return;
        if (state.entered !== null) return;
      }}
      onMouseEnter={() => {
        if (intent.current !== null) clearTimeout(intent.current);
        if (state.active !== null) {
          state.hover(world.id);
          return;
        }
        intent.current = setTimeout(() => state.hover(world.id), 110);
      }}
      onMouseLeave={(event) => {
        if (intent.current !== null) clearTimeout(intent.current);
        event.currentTarget.style.removeProperty("--mx");
        event.currentTarget.style.removeProperty("--my");
        const next = event.relatedTarget;
        if (next instanceof Element && next.closest(".world")) return;
      }}
      onPointerMove={(event) => {
        const box = ref.current?.getBoundingClientRect();
        if (box === undefined) return;
        event.currentTarget.style.setProperty("--mx", `${(event.clientX - box.left) / box.width - .5}`);
        event.currentTarget.style.setProperty("--my", `${(event.clientY - box.top) / box.height - .5}`);
      }}
      animate={{ flexGrow: active ? 1.7 : muted ? .86 : 1 }}
      transition={{ duration: 0.96, ease: [0.16, 1, 0.3, 1], layout: { duration: 0.82, ease: [0.16, 1, 0.3, 1] } }}
    >
      <span className="world-art" aria-hidden="true"><WorldArt id={world.id} /></span>
      <span className="world-shade" aria-hidden="true" />
      <span className="world-topline" aria-hidden="true"><i /> {world.number}</span>
      <span className="world-copy">
        <strong className="world-label">{world.label}</strong>
        <span className="world-line">{world.line}</span>
      </span>
      <span className="world-enter" aria-hidden="true"><i /> Come in <b>↗</b></span>
    </motion.button>
  );
}
