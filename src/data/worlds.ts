export type WorldId = "hospitality" | "systems" | "creative" | "robotics";

export interface World {
  id: WorldId;
  number: string;
  label: string;
  line: string;
}

export const WORLDS: readonly World[] = [
  {
    id: "hospitality",
    number: "01",
    label: "Hospitality",
    line: "Café sites. Menu, hours, a reason to come in.",
  },
  {
    id: "systems",
    number: "02",
    label: "Systems",
    line: "HyAtlas, my API console, the tracker. Tools I needed.",
  },
  {
    id: "creative",
    number: "03",
    label: "Creative / Interactive",
    line: "I wrote a black hole. No assets. Just code.",
  },
  {
    id: "robotics",
    number: "04",
    label: "Robotics / 3D",
    line: "Physical work. Not ready to show yet.",
  },
] as const;

export function getWorld(id: WorldId): World {
  const world = WORLDS.find((item) => item.id === id);
  if (world === undefined) throw new Error(`Unknown world: ${id}`);
  return world;
}
