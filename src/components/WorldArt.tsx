import type { WorldId } from "../data/worlds";

export default function WorldArt({ id }: { id: WorldId }) {
  const face = id !== "robotics";
  return (
    <img
      className="gateway-image"
      data-face={face}
      src={face ? `./assets/gateway/${id}-face.webp` : `./assets/gateway/${id}.webp`}
      alt=""
      aria-hidden="true"
    />
  );
}
