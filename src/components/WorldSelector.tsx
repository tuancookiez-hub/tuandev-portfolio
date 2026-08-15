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

  return (
    <section className="gateway" id="work" data-theme={theme} style={variables(palette)} aria-label="Portfolio worlds">
      <div className="gateway-atmosphere" aria-hidden="true"><i /><i /><i /></div>
      <div className="selector">
        {WORLDS.map((world, index) => <WorldPanel key={world.id} world={world} index={index} />)}
      </div>
      <div className="gateway-status" aria-hidden="true">
        <span>{state.active === null ? "I'm Tuan. These are the things I make." : WORLDS.find((world) => world.id === state.active)?.line}</span>
        <b>{state.active === null ? "Hover a world" : state.active === "hospitality" || state.active === "creative" || state.active === "systems" ? "Open this one ↗" : "Still building this"}</b>
      </div>
    </section>
  );
}
