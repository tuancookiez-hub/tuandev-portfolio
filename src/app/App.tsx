import { ActiveWorldProvider } from "../context/ActiveWorldProvider";
import Header from "../components/Header";
import WorldSelector from "../components/WorldSelector";
import WeatherPortal from "../components/WeatherPortal";
import HospitalityWorld from "../worlds/HospitalityWorld";
import CreativeWorld from "../worlds/CreativeWorld";
import SystemsWorld from "../worlds/SystemsWorld";
import { useActiveWorld } from "../context/ActiveWorldContext";

function Shell() {
  const state = useActiveWorld();
  const query = new URLSearchParams(window.location.search);
  const direct = query.get("world");
  const embed = query.get("embed") === "1";

  if (direct === "hospitality" && embed) return <HospitalityWorld embed shared />;
  if (direct === "hospitality") {
    return (
      <HospitalityWorld
        embed={false}
        shared={false}
        showReturn
        onClose={() => window.location.assign(window.location.pathname)}
      />
    );
  }
  if (direct === "systems" && embed) return <SystemsWorld embed />;
  if (direct === "systems") {
    return <SystemsWorld onClose={() => window.location.assign(window.location.pathname)} />;
  }
  if (direct === "creative" && embed) return <CreativeWorld />;
  if (direct === "creative") return <CreativeWorld />;

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
        <main className="landing-main" aria-label="Select a world">
          <WorldSelector />
        </main>
      </div>

      <WeatherPortal world="hospitality">
        {(ready) => (
          <HospitalityWorld
            embed={false}
            shared={false}
            showReturn={ready}
            onClose={() => state.leave()}
          />
        )}
      </WeatherPortal>

      <WeatherPortal world="systems">
        {(ready) => <SystemsWorld ready={ready} />}
      </WeatherPortal>

      <WeatherPortal world="creative">
        {(ready) => <CreativeWorld ready={ready} />}
      </WeatherPortal>
    </div>
  );
}

export default function App() {
  return (
    <ActiveWorldProvider><Shell /></ActiveWorldProvider>
  );
}
