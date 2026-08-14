import { createContext, useContext } from "react";
import type { ActiveWorldState } from "./ActiveWorld.types";

export const ActiveWorldContext = createContext<ActiveWorldState | null>(null);

export function useActiveWorld(): ActiveWorldState {
  const ctx = useContext(ActiveWorldContext);
  if (ctx === null) {
    throw new Error("useActiveWorld must be used inside <ActiveWorldProvider>");
  }
  return ctx;
}
