import type { WorldId } from "../data/worlds";

export default function WorldArt({ id }: { id: WorldId }) {
  const face = id !== "robotics";
  if (!face) {
    return (
      <img
        className="gateway-image"
        data-face={false}
        src={`./assets/gateway/${id}.webp`}
        alt=""
        aria-hidden="true"
      />
    );
  }
  return (
    <picture>
      <source media="(max-width: 720px)" srcSet={`./assets/gateway/${id}-face-m.webp`} />
      <img
        className="gateway-image"
        data-face={true}
        src={`./assets/gateway/${id}-face.webp`}
        alt=""
        aria-hidden="true"
      />
    </picture>
  );
}
