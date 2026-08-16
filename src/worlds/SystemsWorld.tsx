import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import DevicePreview, { usePreviewReceiver } from "../components/DevicePreview";
import { useActiveWorld } from "../context/ActiveWorldContext";

/* Systems world — inspection interfaces.
   The story: one mock power plant, built two ways — a light field console
   and a dark monitoring wall. Every chart is hand-built SVG: no chart
   library, no screenshots, mock data only. Design follows high-performance
   HMI practice — severity is never colour alone (shape + label back it),
   colour is reserved for alarms, every panel carries a timestamp. */

type Box = { w: number; h: number; l: number; r: number; t: number; b: number; min: number; max: number };

const sx = (i: number, n: number, o: Box) => o.l + (i / (n - 1)) * (o.w - o.l - o.r);
const sy = (v: number, o: Box) => o.h - o.b - ((v - o.min) / (o.max - o.min)) * (o.h - o.t - o.b);
const line = (v: number[], o: Box) =>
  v.map((n, i) => `${i ? "L" : "M"}${sx(i, v.length, o).toFixed(1)} ${sy(n, o).toFixed(1)}`).join("");

/* Mock plant — one shared dataset so both faces show the same numbers. */
const output = [612, 648, 703, 741, 780, 802, 826, 851, 873, 888, 904, 897, 891];
const target = 812;
const load = [46, 42, 39, 38, 40, 52, 68, 81, 86, 89, 91, 92, 93.8, 92, 90, 88, 86, 82, 73, 63, 55, 50, 47, 44];
const zones = [
  { z: "Zone B", n: 12 },
  { z: "Zone D", n: 7 },
  { z: "Zone A", n: 5 },
  { z: "Zone C", n: 3 },
  { z: "Zone E", n: 1 },
];
const equip = [
  { id: "GT-04", name: "Gas turbine", z: "B", date: "12 Aug", v: [61, 63, 66, 64, 68, 72, 71], sev: "watch" },
  { id: "GB-02", name: "Gearbox", z: "D", date: "09 Aug", v: [55, 54, 56, 58, 57, 60, 61], sev: "watch" },
  { id: "CP-11", name: "Cooling pump", z: "A", date: "14 Aug", v: [80, 79, 81, 82, 81, 83, 84], sev: "ok" },
  { id: "TR-07", name: "Transformer", z: "C", date: "02 Aug", v: [70, 71, 69, 72, 71, 73, 72], sev: "ok" },
  { id: "CT-EX", name: "Cable tray 7", z: "B", date: "Today", v: [40, 38, 36, 30, 26, 22, 18], sev: "fail" },
];
const trays = [
  "oooooooooooo",
  "ooooowooooow",
  "oowooooohooo",
  "oooooooooooo",
  "ooooowoooooo",
  "oowooooowooo",
  "oowowoohcccc",
  "oooooooooooo",
  "woooooooowoo",
];
const events = [
  { tier: "Urgent", code: "TRAY-07", msg: "78.4 °C — over the 75 °C limit", at: "14:26" },
  { tier: "High", code: "GT-04", msg: "vibration 7.2 mm/s, trending up", at: "13:40" },
  { tier: "High", code: "GB-02", msg: "oil temp +4 °C vs baseline", at: "12:15" },
  { tier: "Advisory", code: "CP-11", msg: "PM window opens Fri 06:00", at: "11:58" },
  { tier: "Advisory", code: "TR-07", msg: "weekly thermography due", at: "09:30" },
];
const sevs: Record<string, string> = { ok: "● OK", watch: "▲ WATCH", fail: "✕ FAIL" };

function Draw({ d, stroke, width = 2 }: { d: string; stroke: string; width?: number }) {
  const still = useReducedMotion();
  return (
    <motion.path
      d={d}
      fill="none"
      strokeWidth={width}
      strokeLinecap="round"
      style={{ stroke }}
      initial={still ? undefined : { pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
  );
}

function Spark({ v, tone }: { v: number[]; tone: string }) {
  const o: Box = { w: 62, h: 16, l: 1, r: 1, t: 2, b: 2, min: Math.min(...v), max: Math.max(...v) };
  return (
    <svg viewBox={`0 0 ${o.w} ${o.h}`} aria-hidden="true">
      <Draw d={line(v, o)} stroke={tone} width={1.5} />
    </svg>
  );
}

function Kpi({ k, v, unit, delta, tone, spark, main }: { k: string; v: string; unit?: string; delta?: string; tone?: string; spark?: number[]; main?: boolean }) {
  return (
    <div className="sys-kpi" data-main={main ? "" : undefined}>
      <small>{k}</small>
      <b>
        {v}
        {unit && <em>{unit}</em>}
      </b>
      {(delta || spark) && (
        <span>
          {delta && <i data-tone={tone ?? "good"}>{delta}</i>}
          {spark && <Spark v={spark} tone={tone === "bad" ? "var(--d-bad)" : tone === "warn" ? "var(--d-warn)" : "var(--d-accent)"} />}
        </span>
      )}
    </div>
  );
}

function Head({ title, sub, at }: { title: string; sub: string; at?: string }) {
  return (
    <div className="sys-chart-h">
      <b>{title}</b>
      <span>{sub}{at ? ` · ${at}` : ""}</span>
    </div>
  );
}

function Trend() {
  const o: Box = { w: 560, h: 176, l: 38, r: 44, t: 12, b: 22, min: 580, max: 950 };
  const grid = [600, 700, 800, 900];
  const xs = [0, 3, 6, 9, 12].map((i) => sx(i, output.length, o));
  return (
    <div className="sys-chart">
      <Head title="Output above the 812 MWe target since 09:40" sub="Unit output · MWe · 06:00–18:00" at="mock" />
      <svg viewBox={`0 0 ${o.w} ${o.h}`} role="img" aria-label="Unit output holding above the 812 megawatt target">
        <defs>
          <linearGradient id="gA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--d-accent)" }} stopOpacity=".22" />
            <stop offset="100%" style={{ stopColor: "var(--d-accent)" }} stopOpacity="0" />
          </linearGradient>
        </defs>
        {grid.map((g) => (
          <g key={g}>
            <line x1={o.l} x2={o.w - o.r} y1={sy(g, o)} y2={sy(g, o)} style={{ stroke: "var(--d-line)" }} strokeWidth="1" />
            <text x={o.l - 7} y={sy(g, o) + 3} textAnchor="end" className="ax">{g}</text>
          </g>
        ))}
        <line x1={o.l} x2={o.w - o.r} y1={sy(target, o)} y2={sy(target, o)} style={{ stroke: "var(--d-warn)" }} strokeWidth="1.25" strokeDasharray="5 4" />
        <text x={o.w - o.r + 5} y={sy(target, o) + 3} className="ax ax-w">TGT</text>
        <path d={`${line(output, o)} L${sx(output.length - 1, output.length, o)} ${o.h - o.b} L${o.l} ${o.h - o.b} Z`} fill="url(#gA)" stroke="none" />
        <Draw d={line(output, o)} stroke="var(--d-accent)" width={2.25} />
        <circle cx={sx(output.length - 1, output.length, o)} cy={sy(output[output.length - 1], o)} r="3.5" style={{ fill: "var(--d-accent)" }} />
        <text x={sx(output.length - 1, output.length, o) - 2} y={sy(output[output.length - 1], o) - 8} textAnchor="end" className="ax ax-v">{output[output.length - 1]}</text>
        {xs.map((x, i) => (
          <text key={i} x={x} y={o.h - 6} textAnchor="middle" className="ax">{["06", "09", "12", "15", "18"][i]}</text>
        ))}
      </svg>
    </div>
  );
}

function Zones() {
  const max = Math.max(...zones.map((z) => z.n));
  return (
    <div className="sys-chart">
      <Head title="Zone B carries 43% of open findings" sub="Findings by zone · 28 open" at="mock" />
      <div className="sys-zone">
        {zones.map((z) => (
          <span key={z.z}>
            <i>{z.z}</i>
            <em><b style={{ width: `${(z.n / max) * 100}%`, background: z.z === "Zone B" ? "var(--d-bad)" : "var(--d-accent)" }} /></em>
            <u>{z.n}</u>
          </span>
        ))}
      </div>
    </div>
  );
}

function Gauge() {
  const C = 2 * Math.PI * 56;
  const seg = [
    { n: 214, c: "var(--d-accent)" },
    { n: 23, c: "var(--d-warn)" },
    { n: 5, c: "var(--d-bad)" },
  ];
  let at = 0;
  return (
    <div className="sys-chart">
      <Head title="Cable fitness 88% — 5 runs due" sub="Cable network · 242 runs" at="mock" />
      <div className="sys-ring">
        <svg viewBox="0 0 150 150" role="img" aria-label="Cable network 88 percent fit">
          <circle cx="75" cy="75" r="56" fill="none" style={{ stroke: "var(--d-tile)" }} strokeWidth="14" />
          {seg.map((s) => {
            const len = (s.n / 242) * C - 2;
            const off = at;
            at += (s.n / 242) * C;
            return <circle key={s.n} cx="75" cy="75" r="56" fill="none" strokeWidth="14" style={{ stroke: s.c }} strokeDasharray={`${Math.max(len, 1)} ${C}`} strokeDashoffset={-off} transform="rotate(-90 75 75)" />;
          })}
          <text x="75" y="74" textAnchor="middle" className="ring-v">88%</text>
          <text x="75" y="90" textAnchor="middle" className="ring-k">FIT</text>
        </svg>
        <div className="sys-ring-l">
          {[["Pass", "214 runs", "var(--d-accent)"], ["Watch", "23 runs", "var(--d-warn)"], ["Replace", "5 runs", "var(--d-bad)"]].map(([k, v, c]) => (
            <span key={k}><i style={{ background: c }} />{k}<em>{v}</em></span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Equip() {
  return (
    <div className="sys-chart">
      <Head title="Two assets on watch, one failing" sub="Equipment · last test · health" at="mock" />
      <div className="sys-tab">
        <span className="sys-tab-h"><i>ID</i><i>Asset</i><i>Zone</i><i>Tested</i><i>Health</i><i>Status</i></span>
        {equip.map((e) => (
          <span key={e.id} className="sys-tab-r">
            <i>{e.id}</i>
            <i>{e.name}</i>
            <i>{e.z}</i>
            <i>{e.date}</i>
            <i><Spark v={e.v} tone={e.sev === "fail" ? "var(--d-bad)" : e.sev === "watch" ? "var(--d-warn)" : "var(--d-accent)"} /></i>
            <i><em className="sys-sev" data-sev={e.sev}>{sevs[e.sev]}</em></i>
          </span>
        ))}
      </div>
    </div>
  );
}

function LightConsole() {
  return (
    <div className="sys-face-dash">
      <div className="sys-kpis sp12">
        <Kpi k="Output" v="904" unit="MWe" delta="▲ 3.1% vs yday" spark={output.slice(-8)} main />
        <Kpi k="Health score" v="92" unit="/100" delta="▲ +1 pt this wk" spark={[84, 85, 87, 86, 89, 90, 92]} />
        <Kpi k="Open findings" v="28" delta="▼ 6 this wk" spark={[40, 37, 36, 33, 31, 30, 28]} />
        <Kpi k="Cable fitness" v="88" unit="%" tone="warn" delta="5 runs due" spark={[91, 91, 90, 90, 89, 88, 88]} />
      </div>
      <div className="sp7"><Trend /></div>
      <div className="sp5"><Zones /></div>
      <div className="sp5"><Gauge /></div>
      <div className="sp7"><Equip /></div>
    </div>
  );
}

function Heat() {
  const bands: Record<string, string> = { o: "var(--h-ok)", w: "var(--h-warm)", h: "var(--h-hot)", c: "var(--h-crit)" };
  const at = [0, 3, 6, 9, 12].map((i) => (i / 11) * 100);
  return (
    <div className="sys-chart">
      <Head title="Tray 7 over its 75 °C limit since 14:00" sub="Cable tray temps · °C · 06:00–18:00" at="mock" />
      <div className="sys-heat">
        {trays.map((row, ti) => (
          <span key={ti} className="sys-heat-r">
            <i>T{ti + 1}</i>
            <em>
              {[...row].map((cell, ci) => (
                <b key={ci} style={{ background: bands[cell] }} data-band={cell} />
              ))}
            </em>
          </span>
        ))}
        <span className="sys-heat-x">
          <i />
          {at.map((p, i) => (
            <u key={i} style={{ left: `${p}%` }}>{["06", "09", "12", "15", "18"][i]}</u>
          ))}
        </span>
      </div>
      <div className="sys-heat-l">
        {[["<55", "o"], ["55–65", "w"], ["65–75", "h"], [">75", "c"]].map(([k, b]) => (
          <span key={k}><b style={{ background: bands[b] }} />{k} °C</span>
        ))}
      </div>
    </div>
  );
}

function Load() {
  const o: Box = { w: 760, h: 176, l: 34, r: 46, t: 14, b: 22, min: 0, max: 100 };
  const xs = [0, 6, 12, 18, 23].map((i) => sx(i, load.length, o));
  return (
    <div className="sys-chart">
      <Head title="Peak 93.8% at 13:00 — 1.2 pts under the alarm line" sub="Plant load · % of nameplate · 24 h" at="mock" />
      <svg viewBox={`0 0 ${o.w} ${o.h}`} role="img" aria-label="24 hour plant load peaking at 93.8 percent">
        <defs>
          <linearGradient id="gB" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{ stopColor: "var(--d-accent)" }} stopOpacity=".3" />
            <stop offset="100%" style={{ stopColor: "var(--d-accent)" }} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 25, 50, 75, 100].map((g) => (
          <g key={g}>
            <line x1={o.l} x2={o.w - o.r} y1={sy(g, o)} y2={sy(g, o)} style={{ stroke: "var(--d-line)" }} strokeWidth="1" />
            <text x={o.l - 7} y={sy(g, o) + 3} textAnchor="end" className="ax">{g}</text>
          </g>
        ))}
        <line x1={o.l} x2={o.w - o.r} y1={sy(95, o)} y2={sy(95, o)} style={{ stroke: "var(--d-bad)" }} strokeWidth="1.25" strokeDasharray="5 4" />
        <text x={o.w - o.r + 5} y={sy(95, o) + 3} className="ax ax-b">95%</text>
        <path d={`${line(load, o)} L${sx(load.length - 1, load.length, o)} ${o.h - o.b} L${o.l} ${o.h - o.b} Z`} fill="url(#gB)" stroke="none" />
        <Draw d={line(load, o)} stroke="var(--d-accent)" width={2.25} />
        <circle cx={sx(12, load.length, o)} cy={sy(load[12], o)} r="3.5" style={{ fill: "var(--d-accent)" }} />
        <text x={sx(12, load.length, o) - 2} y={sy(load[12], o) - 9} textAnchor="end" className="ax ax-v">peak 93.8</text>
        {xs.map((x, i) => (
          <text key={i} x={x} y={o.h - 6} textAnchor="middle" className="ax">{["00", "06", "12", "18", "24"][i]}</text>
        ))}
      </svg>
    </div>
  );
}

function Log() {
  const glyphs: Record<string, string> = { Urgent: "▲", High: "●", Advisory: "■" };
  return (
    <div className="sys-chart">
      <Head title="3 active alarms — 1 urgent" sub="Event log · UTC+8" at="14:26" />
      <div className="sys-log">
        {events.map((e) => (
          <span key={`${e.code}${e.at}`} className="sys-log-r" data-tier={e.tier}>
            <i>{glyphs[e.tier]} {e.tier.slice(0, 3).toUpperCase()}</i>
            <em><b>{e.code}</b>{e.msg}</em>
            <u>{e.at}</u>
          </span>
        ))}
      </div>
      <p className="sys-log-n">Shape and label carry the tier; colour only reinforces it.</p>
    </div>
  );
}

function DarkWall() {
  return (
    <div className="sys-face-dash">
      <div className="sys-kpis sp12">
        <Kpi k="Uptime" v="99.98" unit="%" delta="▲ 30-day" spark={[99.9, 99.95, 99.97, 99.96, 99.98, 99.99, 99.98]} main />
        <Kpi k="Load" v="92.4" unit="%" delta="▲ vs yday" spark={load.slice(-8).map((n) => Math.round(n))} />
        <Kpi k="Active alarms" v="3" tone="warn" delta="1 urgent · 2 high" spark={[5, 4, 4, 3, 4, 3, 3]} />
        <Kpi k="Trays online" v="41" unit="/42" delta="T7 degraded" tone="bad" spark={[42, 42, 42, 42, 41, 41, 41]} />
      </div>
      <div className="sp7"><Heat /></div>
      <div className="sp5"><Log /></div>
      <div className="sp12"><Load /></div>
    </div>
  );
}

function MemoryMock() {
  return (
    <div className="sys-mem">
      {[["L1 profile", ".94", "#7cc47a"], ["L3 fact", ".82", "#477da2"], ["L5 working", ".68", "#f2a33a"]].map(([tag, score, hue]) => (
        <span key={tag}><i style={{ background: hue }} />{tag}<em>{score}</em></span>
      ))}
    </div>
  );
}

function KanbanMock() {
  const board = [
    { tag: "New", hs: [2, 1, 0], items: ["Quote", "Onboard"] },
    { tag: "Running", hs: [1, 0, 2], items: ["Build", "Review"] },
    { tag: "Done", hs: [2, 2, 1], items: ["Invoice", "Shipped"] },
  ];
  return (
    <div className="sys-kanban">
      {board.map((col) => (
        <div key={col.tag} className="sys-kan-col">
          <span className="sys-kan-tag">{col.tag}</span>
          {col.items.map((label, ri) => (
            <span key={ri} className="sys-kan-card" style={{ height: `${22 + col.hs[ri] * 12}px` }}><i />{label}</span>
          ))}
          <span className="sys-kan-ghost" />
        </div>
      ))}
    </div>
  );
}

function RouterMock() {
  const rows = [
    ["grok-4", "620ms", "$1.2"],
    ["minimax", "480ms", "$0.8"],
    ["solar-pro", "890ms", "$0.4"],
    ["kimi", "340ms", "$0.9"],
  ];
  return (
    <div className="sys-router">
      {rows.map(([name, lat, cost]) => (
        <div key={name} className="sys-router-row">
          <b>Req</b><span className="sys-router-n">{name}</span><em>{cost}</em><small>{lat}</small>
        </div>
      ))}
    </div>
  );
}

const more = [
  {
    number: "03",
    style: "Memory inspector",
    title: "Agent memory",
    line: "See what was kept and why.",
    text: "I built HyAtlas because an agent that forgets is hard to work with. This view exposes the stored fact, score, and layer.",
  },
  {
    number: "04",
    style: "Workflow board",
    title: "Work queue",
    line: "See where the work is stuck.",
    text: "I use boards when a pipeline has owners, handoffs, and waiting states. The interface should show the next action without opening a table.",
  },
  {
    number: "05",
    style: "Router console",
    title: "Model routing",
    line: "See which provider handled the call.",
    text: "My AIClient2API console makes providers, latency, routing, and cost inspectable. I want the trade-off visible before I choose a model.",
  },
];

export default function SystemsWorld({ onClose, embed = false }: { onClose?: () => void; embed?: boolean }) {
  const ctx = useActiveWorld();
  const stage = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start start", "end end"] });
  const wash = useTransform(scrollYProgress, [0, .28, .52, .72, 1], ["#c8cdcc", "#c8cdcc", "#667b89", "#142636", "#0b1622"]);
  const simple = useTransform(scrollYProgress, [0, .12, .24, 1], [1, 1, 0, 0]);
  const light = useTransform(scrollYProgress, [0, .1, .25, .42, .56, 1], [0, 0, 1, 1, 0, 0]);
  const dark = useTransform(scrollYProgress, [0, .42, .57, .72, .84, 1], [0, 0, 1, 1, 0, 0]);
  const branches = useTransform(scrollYProgress, [0, .72, .86, 1], [0, 0, 1, 1]);
  const simpleY = useTransform(scrollYProgress, [0, .24, 1], [0, -36, -36]);
  const lightY = useTransform(scrollYProgress, [0, .1, .25, .56, 1], [50, 50, 0, -40, -40]);
  const darkY = useTransform(scrollYProgress, [0, .42, .57, .84, 1], [60, 60, 0, -44, -44]);
  const branchY = useTransform(scrollYProgress, [0, .72, .86, 1], [70, 70, 0, 0]);
  const [progress, setProgress] = useState(0);
  usePreviewReceiver(embed);

  useMotionValueEvent(scrollYProgress, "change", (value) => setProgress(value));
  const name = progress < .22 ? "signal" : progress < .5 ? "field" : progress < .78 ? "control" : "branches";
  const theme = progress < .5 ? "light" : "dark";

  return (
    <motion.div className="sys" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      {!embed && (
        <button type="button" className="world-return sys-return" onClick={() => (onClose ? onClose() : ctx.leave())}>
          <i aria-hidden="true">←</i> Main menu
        </button>
      )}

      <div className="sys-utility" data-sync="utility">
        <span>Inspection dashboards · Monitoring walls · Consoles</span>
        <span>Kuala Lumpur · Remote</span>
      </div>

      <motion.main id="sys-top" className="sys-main" style={reduced ? undefined : { backgroundColor: wash }}>
        <section
          ref={stage}
          className="sys-story"
          data-sync="journey"
          data-stage={name}
          data-theme={theme}
          data-progress={progress.toFixed(3)}
        >
          <div className="sys-story-sticky">
            <div className="sys-atmosphere" aria-hidden="true" />
            <div className="sys-story-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }} /></div>

            <motion.div className="sys-scene sys-scene-simple" style={reduced ? undefined : { opacity: simple, y: simpleY }}>
              <div className="sys-scene-copy">
                <p>02 · Systems</p>
                <h1>Start with<br />one signal.</h1>
                <span>I begin with the decision someone has to make. Scroll and the interface adds only what that decision needs.</span>
              </div>
              <div className="sys-signal" aria-hidden="true">
                <div className="sys-dash-top"><i />Unit 2 · Mock feed<em>14:32</em></div>
                <small>OUTPUT</small><b>904<em>MWe</em></b>
                <svg viewBox="0 0 300 84" preserveAspectRatio="none">
                  <line x1="0" x2="300" y1="54" y2="54" stroke="rgba(16,36,58,.12)" strokeWidth="1" />
                  <Draw d={line(output, { w: 300, h: 84, l: 0, r: 0, t: 4, b: 0, min: 580, max: 950 })} stroke="#477da2" width={2} />
                </svg>
                <span>Above target since 09:40</span>
              </div>
            </motion.div>

            <motion.div className="sys-scene sys-scene-console" style={reduced ? undefined : { opacity: light, y: lightY }}>
              <div className="sys-scene-head">
                <div><p>Field console</p><h2>Add detail for the person doing the check.</h2></div>
                <span>Trend, target, zone, cable fitness, and equipment status. Labels and shapes carry severity; colour supports them.</span>
              </div>
              <div className="sys-face-panel">
                <div className="sys-dash-top"><i />Field console · Unit 2<em>Mock · 14:32</em></div>
                <LightConsole />
              </div>
            </motion.div>

            <motion.div className="sys-scene sys-scene-wall" style={reduced ? undefined : { opacity: dark, y: darkY }}>
              <div className="sys-scene-head">
                <div><p>Control room</p><h2>The same data changes when the risk changes.</h2></div>
                <span>Tray heat, load against the alarm line, and the event log move forward. The background gets quieter so alarms stay legible.</span>
              </div>
              <div className="sys-face-panel">
                <div className="sys-dash-top"><i />Monitoring wall · Unit 2<em>Mock · 14:32:05</em></div>
                <DarkWall />
              </div>
            </motion.div>

            <motion.div className="sys-scene sys-scene-branches" style={reduced ? undefined : { opacity: branches, y: branchY }}>
              <div className="sys-scene-head">
                <div><p>Other systems</p><h2>Different work needs a different surface.</h2></div>
                <span>These are coded interface studies for tools I am building. They are not screenshots or finished products.</span>
              </div>
              <div className="sys-branch-grid">
                {more.map((item) => (
                  <article key={item.number} className="sys-branch" data-dir={item.style}>
                    <div className="sys-dash-top"><i />{item.style}</div>
                    <div className="sys-dash-body">
                      {item.style === "Memory inspector" && <MemoryMock />}
                      {item.style === "Workflow board" && <KanbanMock />}
                      {item.style === "Router console" && <RouterMock />}
                    </div>
                    <small>{item.number}</small><h3>{item.title}</h3><b>{item.line}</b><p>{item.text}</p>
                  </article>
                ))}
              </div>
            </motion.div>

            <div className="sys-story-step"><b>{name}</b><span>scroll to unfold</span></div>
          </div>
        </section>

        <section className="sys-contact" id="sys-contact" data-sync="contact">
          <span>I build the interface around the work.</span>
          <h2>Show me the system.<br />I'll make it readable.</h2>
          <a href="mailto:tuancookiez@gmail.com">Write to Tuan ↗</a>
        </section>
      </motion.main>

      <footer className="sys-footer" data-sync="footer">
        <b>TUAN DEV · SYSTEMS</b><span>Kuala Lumpur · Malaysia</span><span>GitHub · Contact</span>
      </footer>
      {!embed && <DevicePreview world="systems" />}
    </motion.div>
  );
}
