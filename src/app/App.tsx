import { useEffect } from "react";
import { ActiveWorldProvider } from "../context/ActiveWorldProvider";
import Header from "../components/Header";
import LandingIntro from "../components/LandingIntro";
import LandingContact from "../components/LandingContact";
import WorldSelector from "../components/WorldSelector";
import WeatherPortal from "../components/WeatherPortal";
import { useActiveWorld } from "../context/ActiveWorldContext";
import { applyMeta } from "../utils/meta";
import { lazy, Suspense } from "react";
import WorldLoader from "../components/WorldLoader";

const HospitalityWorld = lazy(() => import("../worlds/HospitalityWorld"));
const SystemsWorld = lazy(() => import("../worlds/SystemsWorld"));
const CreativeWorld = lazy(() => import("../worlds/CreativeWorld"));
const RoboticsWorld = lazy(() => import("../worlds/RoboticsWorld"));

function Shell() {
  const state = useActiveWorld();
  const query = new URLSearchParams(window.location.search);
  const direct = query.get("world");
  const embed = query.get("embed") === "1";
  const worldParam = direct === "hospitality" || direct === "systems" || direct === "creative" || direct === "robotics" ? direct : null;
  useEffect(() => applyMeta(worldParam), [worldParam]);

  if (direct === "hospitality" && embed) return <Suspense fallback={<WorldLoader label="Hospitality" />}><HospitalityWorld embed shared /></Suspense>;
  if (direct === "hospitality") {
    return (
      <Suspense fallback={<WorldLoader label="Hospitality" />}>
        <HospitalityWorld
          embed={false}
          shared={false}
          showReturn
          onClose={() => window.location.assign(window.location.pathname)}
        />
      </Suspense>
    );
  }
  if (direct === "systems" && embed) return <Suspense fallback={<WorldLoader label="Systems" />}><SystemsWorld embed /></Suspense>;
  if (direct === "systems") {
    return <Suspense fallback={<WorldLoader label="Systems" />}><SystemsWorld onClose={() => window.location.assign(window.location.pathname)} /></Suspense>;
  }
  if (direct === "creative" && embed) return <Suspense fallback={<WorldLoader label="Creative" />}><CreativeWorld /></Suspense>;
  if (direct === "creative") return <Suspense fallback={<WorldLoader label="Creative" />}><CreativeWorld /></Suspense>;

  if (direct === "robotics" && embed) return <Suspense fallback={<WorldLoader label="Robotics" />}><RoboticsWorld embed /></Suspense>;
  if (direct === "robotics") {
    return <Suspense fallback={<WorldLoader label="Robotics" />}><RoboticsWorld onClose={() => window.location.assign(window.location.pathname)} /></Suspense>;
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

      <WeatherPortal world="hospitality">
        {(ready) => (
          <Suspense fallback={<WorldLoader label="Hospitality" />}>
            <HospitalityWorld
              embed={false}
              shared={false}
              showReturn={ready}
              onClose={() => state.leave()}
            />
          </Suspense>
        )}
      </WeatherPortal>

      <WeatherPortal world="systems">
        {(ready) => <Suspense fallback={<WorldLoader label="Systems" />}><SystemsWorld ready={ready} /></Suspense>}
      </WeatherPortal>

      <WeatherPortal world="creative">
        {(ready) => <Suspense fallback={<WorldLoader label="Creative" />}><CreativeWorld ready={ready} /></Suspense>}
      </WeatherPortal>

      <WeatherPortal world="robotics">
        {(ready) => <Suspense fallback={<WorldLoader label="Robotics" />}><RoboticsWorld ready={ready} /></Suspense>}
      </WeatherPortal>
    </div>
  );
}

export default function App() {
  return (
    <ActiveWorldProvider><Shell /></ActiveWorldProvider>
  );
}
