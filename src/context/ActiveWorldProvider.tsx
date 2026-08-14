import { useCallback, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ActiveWorldContext } from "./ActiveWorldContext";
import type { ActiveWorld } from "./ActiveWorld.types";
import type { WorldId } from "../data/worlds";

export function ActiveWorldProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ActiveWorld>(null);
  const [entered, setEntered] = useState<ActiveWorld>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const gap = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hover = useCallback((world: WorldId) => {
    if (gap.current !== null) clearTimeout(gap.current);
    gap.current = null;
    if (timer.current !== null) clearTimeout(timer.current);
    setActive(world);
  }, []);

  const unhover = useCallback(() => {
    if (gap.current !== null) clearTimeout(gap.current);
    gap.current = setTimeout(() => setActive(null), 280);
  }, []);

  const enter = useCallback((world: WorldId) => {
    if (timer.current !== null) clearTimeout(timer.current);
    if (gap.current !== null) clearTimeout(gap.current);
    gap.current = null;
    setActive(world);
    setEntered(world);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const leave = useCallback(() => {
    if (gap.current !== null) clearTimeout(gap.current);
    gap.current = null;
    if (entered !== null) setActive(entered);
    setEntered(null);
    window.scrollTo({ top: 0, behavior: "auto" });
    timer.current = setTimeout(() => setActive(null), 1150);
  }, [entered]);

  const value = useMemo(() => ({ active, entered, setActive, hover, unhover, enter, leave }), [active, entered, hover, unhover, enter, leave]);

  return <ActiveWorldContext.Provider value={value}>{children}</ActiveWorldContext.Provider>;
}
