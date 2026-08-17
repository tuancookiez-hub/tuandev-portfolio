import type { WorldId } from "../data/worlds";

export type ActiveWorld = WorldId | null;

export type Origin = {
  x: number;
  y: number;
  w: number;
  h: number;
};

export interface ActiveWorldState {
  active: ActiveWorld;
  entered: ActiveWorld;
  origin: Origin | null;
  setActive: (world: ActiveWorld) => void;
  hover: (world: WorldId) => void;
  unhover: () => void;
  enter: (world: WorldId, origin?: Origin) => void;
  leave: () => void;
}
