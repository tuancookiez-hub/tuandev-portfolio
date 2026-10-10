import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import type { WorldId } from "../data/worlds";

/* One import factory per world. The gateway calls preload() on hover/focus so
   the chunk is already in memory when a card is clicked. Worlds are rendered
   through useWorldComponent (not React.lazy): a lazy component that suspends
   shows its fallback and React then holds the real content back ~300ms, which
   read as a blank panel during the open transition. */
export type WorldComponent = ComponentType<Record<string, unknown>>;

const loaders: Record<WorldId, () => Promise<{ default: unknown }>> = {
  hyatlas: () => import("./HyAtlasWorld"),
  hospitality: () => import("./HospitalityWorld"),
  systems: () => import("./SystemsWorld"),
  creative: () => import("./CreativeWorld"),
  robotics: () => import("./RoboticsWorld"),
};

const loaded = new Map<WorldId, WorldComponent>();
const pending = new Map<WorldId, Promise<WorldComponent>>();

export function preload(id: WorldId): Promise<WorldComponent> {
  const cached = pending.get(id);
  if (cached !== undefined) return cached;
  const next = loaders[id]().then((mod) => {
    const component = mod.default as WorldComponent;
    loaded.set(id, component);
    return component;
  });
  next.catch(() => pending.delete(id));
  pending.set(id, next);
  return next;
}

export function useWorldComponent(id: WorldId): WorldComponent | null {
  const [component, setComponent] = useState<WorldComponent | null>(() => loaded.get(id) ?? null);
  useEffect(() => {
    if (component !== null) return;
    let live = true;
    preload(id).then((next) => { if (live) setComponent(() => next); }).catch(() => undefined);
    return () => { live = false; };
  }, [component, id]);
  return component;
}
