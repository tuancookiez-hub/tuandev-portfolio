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
    line: "Websites for caf\u00e9s and neighbourhood places: menu, hours, directions, and a reason to visit.",
  },
  {
    id: "systems",
    number: "02",
    label: "Systems",
    line: "AI gateways, observability, routing, and interfaces that stay readable under load.",
  },
  {
    id: "creative",
    number: "03",
    label: "Creative / Interactive",
    line: "A procedural black hole and scroll-driven experiments built in code.",
  },
  {
    id: "robotics",
    number: "04",
    label: "Robotics / 3D Lab",
    line: "Physical computing and 3D studies in progress.",
  },
] as const;
export function getWorld(id: WorldId): World {
  const world = WORLDS.find((item) => item.id === id);
  if (world === undefined) throw new Error(`Unknown world: ${id}`);
  return world;
}
