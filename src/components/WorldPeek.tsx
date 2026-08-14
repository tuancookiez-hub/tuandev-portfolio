import type { WorldId } from "../data/worlds";

/* Hospitality: no scaled page preview inside the card. The portal
   transition handles the reveal — the card expands into the full
   cafe hero image on click. Hover just shows the existing card
   art + label + "Come in" cue. */
function HospitalityPreview() {
  return null;
}

function SystemsPreview() {
  return (
    <span className="peek peek-systems">
      <span className="peek-side"><b>T</b><i /><i /><i /><i /></span>
      <span className="peek-dashboard">
        <small>Overview · Tuan Systems</small>
        <span className="peek-stats"><b>HyAtlas<small>Memory</small></b><b>Console<small>API</small></b><b>Tracker<small>Live</small></b></span>
        <svg viewBox="0 0 180 52" aria-hidden="true"><path d="M2 47C24 39 39 44 56 26s35 4 53-8 31-6 45-15 21 1 25-2" fill="none" stroke="currentColor" strokeWidth="3" /></svg>
      </span>
    </span>
  );
}

function CreativePreview() {
  return (
    <span className="peek peek-creative">
      <i className="peek-orbit" /><i className="peek-orbit" /><i className="peek-core" />
      <span><small>GARGANTUA</small><b>Written in code</b><em>Scroll. It comes apart.</em></span>
    </span>
  );
}

function RoboticsPreview() {
  return (
    <span className="peek peek-robotics">
      {[0, 1, 2, 3, 4].map((part) => <i key={part} style={{ ["--part" as string]: part }} />)}
      <span><small>ASSEMBLY / 04</small><b>Not open yet</b><em>Still building this</em></span>
    </span>
  );
}

export default function WorldPeek({ id }: { id: WorldId }) {
  if (id === "hospitality") return <HospitalityPreview />;
  if (id === "systems") return <SystemsPreview />;
  if (id === "creative") return <CreativePreview />;
  return <RoboticsPreview />;
}