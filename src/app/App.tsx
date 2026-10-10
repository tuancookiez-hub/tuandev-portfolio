import { useEffect } from "react";
import { ActiveWorldProvider } from "../context/ActiveWorldProvider";
import Header from "../components/Header";
import LandingIntro from "../components/LandingIntro";
import LandingContact from "../components/LandingContact";
import WorldSelector from "../components/WorldSelector";
import WeatherPortal from "../components/WeatherPortal";
import { useActiveWorld } from "../context/ActiveWorldContext";
import { applyMeta } from "../utils/meta";
import WorldLoader from "../components/WorldLoader";
import { useWorldComponent } from "../worlds/loaders";
import { getWorld } from "../data/worlds";
import type { WorldId } from "../data/worlds";


/** Renders a world once its chunk is in memory; shows only a small centred dot until then. */
function World({ id, ...props }: { id: WorldId } & Record<string, unknown>) {
  const Component = useWorldComponent(id);
  return Component === null ? <WorldLoader label={getWorld(id).label} /> : <Component {...props} />;
}

const goHome = () => window.location.assign(window.location.pathname);

function Shell() {
  const state = useActiveWorld();
  const query = new URLSearchParams(window.location.search);
  const direct = query.get("world");
  const embed = query.get("embed") === "1";
  const worldParam = direct === "hyatlas" || direct === "hospitality" || direct === "systems" || direct === "creative" || direct === "robotics" ? direct : null;
  useEffect(() => applyMeta(worldParam), [worldParam]);

  // Escape inside a world returns to the gateway (unless a dialog inside the world is using the key).
  const entered = state.entered !== null;
  const leave = state.leave;
  useEffect(() => {
    if (embed || (!entered && worldParam === null)) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      if (document.querySelector('[role="dialog"], dialog[open]') !== null) return;
      if (entered) leave();
      else goHome();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [embed, entered, leave, worldParam]);

  if (direct === "hyatlas") return <World id="hyatlas" embed={embed} onClose={embed ? undefined : goHome} />;

  if (direct === "hospitality" && embed) return <World id="hospitality" embed shared />;
  if (direct === "hospitality") {
    return (
      <World id="hospitality"
          embed={false}
          shared={false}
          showReturn
          onClose={goHome}
        />
    );
  }
  if (direct === "systems" && embed) return <World id="systems" embed />;
  if (direct === "systems") {
    return <World id="systems" onClose={goHome} />;
  }
  if (direct === "creative") return <World id="creative" />;

  if (direct === "robotics" && embed) return <World id="robotics" embed />;
  if (direct === "robotics") {
    return <World id="robotics" onClose={goHome} />;
  }

  const cover = state.entered !== null;

  return (
    <div className="portal-stage">
      <div
        className="landing"
        aria-hidden={cover}
        data-entered={cover}
        data-cover={String(cover)}
        style={cover ? { pointerEvents: "none" } : undefined}
      >
        <Header />
        <main className="landing-main">
          <LandingIntro />
          <WorldSelector />
          <LandingContact />
        </main>
      </div>

      <WeatherPortal world="hyatlas">
        {(ready) => <World id="hyatlas" ready={ready} onClose={() => state.leave()} />}
      </WeatherPortal>

      <WeatherPortal world="hospitality">
        {(ready) => (
          <World id="hospitality"
              embed={false}
              shared={false}
              showReturn={ready}
              onClose={() => state.leave()}
            />
        )}
      </WeatherPortal>

      <WeatherPortal world="systems">
        {(ready) => <World id="systems" ready={ready} />}
      </WeatherPortal>

      <WeatherPortal world="creative">
        {(ready) => <World id="creative" ready={ready} />}
      </WeatherPortal>

      <WeatherPortal world="robotics">
        {(ready) => <World id="robotics" ready={ready} />}
      </WeatherPortal>
    </div>
  );
}

export default function App() {
  return (
    <ActiveWorldProvider><Shell /></ActiveWorldProvider>
  );
}
