import { ActiveWorldProvider } from "../context/ActiveWorldProvider";
import Header from "../components/Header";
import WorldSelector from "../components/WorldSelector";
import HospitalityPortal from "../components/HospitalityPortal";
import HospitalityWorld from "../worlds/HospitalityWorld";
import CreativeWorld from "../worlds/CreativeWorld";
import SystemsWorld from "../worlds/SystemsWorld";
import { useActiveWorld } from "../context/ActiveWorldContext";

function Shell() {
  const state = useActiveWorld();
  const query = new URLSearchParams(window.location.search);
  const direct = query.get("world");
  const embed = query.get("embed") === "1";

  if (direct === "hospitality" && embed) {
    return <HospitalityWorld embed shared />;
  }

  if (direct === "hospitality") {
    return <HospitalityPortal />;
  }

  if (direct === "systems") {
    return <SystemsWorld />;
  }

  return (
    <div className="portal-stage">
      <div className="landing" aria-hidden={state.entered !== null} data-entered={state.entered !== null} data-cover={String(state.entered === "hospitality")}>
        <Header />
        <main className="landing-main" aria-label="Select a world">
          <WorldSelector />
        </main>
      </div>
      {state.entered === "creative" && <CreativeWorld />}
      {state.entered === "systems" && <SystemsWorld />}
      <HospitalityPortal />
    </div>
  );
}

export default function App() {
  return (
    <ActiveWorldProvider><Shell /></ActiveWorldProvider>
  );
}