import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import { motion } from "motion/react";
import type { World } from "../data/worlds";
import { useActiveWorld } from "../context/ActiveWorldContext";
import { preload } from "../worlds/loaders";
import WorldArt from "./WorldArt";

type Props = { world: World; index: number };

export default function WorldPanel({ world, index }: Props) {
  const state = useActiveWorld();
  const ref = useRef<HTMLButtonElement>(null);
  const intent = useRef<ReturnType<typeof setTimeout> | null>(null);
  const active = state.active === world.id;
  const muted = state.active !== null && !active;
  const entered = state.entered !== null;
  const restoring = useRef(false);
  const wasEntered = useRef(false);

  // Closing a world hands focus back to the card that opened it (without re-triggering its hover state).
  useEffect(() => {
    const mine = state.entered === world.id;
    const closed = wasEntered.current && state.entered === null;
    wasEntered.current = mine;
    if (!closed) return;
    let frame = 0;
    let tries = 0;
    const attempt = () => {
      const node = ref.current;
      if (node === null) return;
      restoring.current = true;
      node.focus({ preventScroll: true });
      restoring.current = false;
      // The gateway is display:none until the portal starts closing; retry for a few frames.
      if (document.activeElement !== node && tries++ < 30) frame = requestAnimationFrame(attempt);
    };
    frame = requestAnimationFrame(attempt);
    return () => cancelAnimationFrame(frame);
  }, [state.entered, world.id]);

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
      aria-pressed={active}
      aria-label={`Explore ${world.label}`}
      onClick={() => {
        const box = ref.current?.getBoundingClientRect();
        state.enter(world.id, box
          ? { x: box.left, y: box.top, w: box.width, h: box.height }
          : undefined);
      }}
      onFocus={() => {
        preload(world.id);
        if (!restoring.current) state.hover(world.id);
      }}
      onBlur={() => {
        if (state.entered === null) state.unhover();
      }}
      onMouseEnter={() => {
        // Warm the world's chunk so the open transition never waits on the network.
        preload(world.id);
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
      }}
      onPointerDown={() => preload(world.id)}
      onPointerMove={(event) => {
        const box = ref.current?.getBoundingClientRect();
        if (box === undefined) return;
        event.currentTarget.style.setProperty("--mx", `${(event.clientX - box.left) / box.width - .5}`);
        event.currentTarget.style.setProperty("--my", `${(event.clientY - box.top) / box.height - .5}`);
      }}
      animate={{ flexGrow: active ? 1.7 : muted ? .86 : 1 }}
      transition={{ duration: 0.96, ease: [0.16, 1, 0.3, 1], layout: { duration: 0.82, ease: [0.16, 1, 0.3, 1] } }}
    >
      <span className="world-art" aria-hidden="true"><WorldArt id={world.id} priority={index > 0 && index <= 2} /></span>
      <span className="world-shade" aria-hidden="true" />
      <span className="world-topline" aria-hidden="true"><i /> {world.number}</span>
      <span className="world-copy">
        <strong className="world-label">{world.label}</strong>
        <span className="world-line">{world.line}</span>
        <span className="world-enter" aria-hidden="true"><i /> Come in <b>↗</b></span>
      </span>
    </motion.button>
  );
}
