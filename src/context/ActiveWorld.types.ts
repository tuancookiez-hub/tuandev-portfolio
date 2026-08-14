import type { WorldId } from "../data/worlds";

export type ActiveWorld = WorldId | null;

export interface ActiveWorldState {
  active: ActiveWorld;
  entered: ActiveWorld;
  setActive: (world: ActiveWorld) => void;
  hover: (world: WorldId) => void;
  unhover: () => void;
  enter: (world: WorldId) => void;
  leave: () => void;
}
