import type { CSSProperties } from "react";
import type { WorldId } from "../data/worlds";
import { cardSrc } from "../utils/imagePalette";

/* HyAtlas card cover: seven memory layers as thin stacked bars (CSS only).
   L2 lite green; L1, L3, L4, L7 pro amber; L5, L6 ultra violet. */
const LAYER_COLORS = ["#f5b942", "#3ddc97", "#f5b942", "#f5b942", "#b98cff", "#b98cff", "#f5b942"] as const;
const LAYER_WIDTH = [72, 48, 84, 64, 92, 56, 76] as const;

export default function WorldArt({ id, priority = false }: { id: WorldId; priority?: boolean }) {
  if (id === "hyatlas") {
    return (
      <span className="hyatlas-art" aria-hidden="true">
        {LAYER_COLORS.map((color, index) => (
          <i
            key={index}
            style={{ "--bar": color, "--w": `${LAYER_WIDTH[index]}%`, "--i": index } as CSSProperties}
          />
        ))}
      </span>
    );
  }
  return (
    <img
      className="gateway-image"
      src={cardSrc(id)}
      alt=""
      aria-hidden="true"
      width={720}
      height={960}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
    />
  );
}
