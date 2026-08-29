import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { WORLDS } from "../data/worlds";
import type { WorldId } from "../data/worlds";
import { useActiveWorld } from "../context/ActiveWorldContext";
import { fallback, imagePalette } from "../utils/imagePalette";
import type { Palette } from "../utils/imagePalette";
import WorldPanel from "./WorldPanel";

function variables(palette: Palette) {
  return {
    "--page": palette.bg,
    "--ink": palette.ink,
    "--soft": palette.soft,
    "--accent": palette.accent,
    "--deep": palette.deep,
    "--wash": palette.wash,
    "--accent-rgb": palette.rgb,
  } as CSSProperties;
}

export default function WorldSelector() {
  const state = useActiveWorld();
  const [palettes, setPalettes] = useState(fallback);

  useEffect(() => {
    let live = true;
    Promise.all(WORLDS.map(async (world) => [world.id, await imagePalette(world.id)] as const))
      .then((entries) => {
        if (!live) return;
        setPalettes((current) => ({ ...current, ...Object.fromEntries(entries) }));
      })
      .catch(() => undefined);
    return () => { live = false; };
  }, []);

  const theme = state.active ?? "neutral";
  const palette = useMemo(() => palettes[theme as WorldId | "neutral"], [palettes, theme]);

  useEffect(() => {
    const landing = document.querySelector<HTMLElement>(".landing");
    if (landing === null) return;
    Object.entries(variables(palette)).forEach(([key, value]) => landing.style.setProperty(key, String(value)));
  }, [palette]);

  const statusLine = (() => {
    if (state.active === null) return "I'm Tuan. These are the things I make.";
    const w = WORLDS.find((world) => world.id === state.active);
    return w?.line ?? "";
  })();
  const statusCta = (() => {
    if (state.active === null) return "Hover a world";
    return "Open this one ↗";
  })();

  return (
    <section className="gateway" id="work" data-theme={theme} style={variables(palette)} aria-label="Portfolio worlds">
      <div className="gateway-atmosphere" aria-hidden="true"><i /><i /><i /></div>
      <div className="selector">
        {WORLDS.map((world, index) => <WorldPanel key={world.id} world={world} index={index} />)}
      </div>
      <div className="gateway-status" aria-hidden="true">
        <span>{statusLine}</span>
        <b>{statusCta}</b>
      </div>
    </section>
  );
}
