import { useCallback, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ActiveWorldContext } from "./ActiveWorldContext";
import type { ActiveWorld, Origin } from "./ActiveWorld.types";
import type { WorldId } from "../data/worlds";

export function ActiveWorldProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<ActiveWorld>(null);
  const [entered, setEntered] = useState<ActiveWorld>(null);
  const [origin, setOrigin] = useState<Origin | null>(null);
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

  const enter = useCallback((world: WorldId, next?: Origin) => {
    if (timer.current !== null) clearTimeout(timer.current);
    if (gap.current !== null) clearTimeout(gap.current);
    gap.current = null;
    setActive(world);
    setOrigin(next ?? null);
    setEntered(world);
  }, []);

  const leave = useCallback(() => {
    if (gap.current !== null) clearTimeout(gap.current);
    gap.current = null;
    if (entered !== null) setActive(entered);
    setEntered(null);
    timer.current = setTimeout(() => {
      setActive(null);
      setOrigin(null);
    }, 980);
  }, [entered]);

  const value = useMemo(
    () => ({ active, entered, origin, setActive, hover, unhover, enter, leave }),
    [active, entered, origin, hover, unhover, enter, leave],
  );

  return <ActiveWorldContext.Provider value={value}>{children}</ActiveWorldContext.Provider>;
}
