import type { WorldId } from "../data/worlds";

export default function WorldArt({ id }: { id: WorldId }) {
  return (
    <img
      className="gateway-image"
      src={`./assets/gateway/${id}.webp`}
      alt=""
      aria-hidden="true"
    />
  );
}
