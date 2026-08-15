import { motion } from "motion/react";
import { useActiveWorld } from "../context/ActiveWorldContext";

/* Systems world — a design-directions gallery.
   Each mockup is a distinct front-end interface style, built in code (no chart
   library, no screenshots — crisp at any size). Shown like hospitality's concept
   directions: here's the range of what I can build for data-heavy interfaces. */

type Dir = {
  number: string;
  style: string;
  title: string;
  line: string;
  text: string;
  accent: string;
};

const directions: Dir[] = [
  {
    number: "01",
    style: "Dark ops",
    title: "Control-room monitoring",
    line: "Dense, dark, measurable at a glance.",
    text: "A monitoring surface for systems that run around the clock. Tight stat tiles, a live line, and high contrast so the numbers lead. Works when the data has to feel serious.",
    accent: "#0d1b2a",
  },
  {
    number: "02",
    style: "Light SaaS",
    title: "A clean product dashboard",
    line: "Pale slate, soft cards, quiet confidence.",
    text: "The everyday analog to the dark control room. Enough structure to feel like a real product, light enough to not feel corporate. A default for client-facing tools.",
    accent: "#eef2f5",
  },
  {
    number: "03",
    style: "Memory inspector",
    title: "Inspectable agent memory",
    line: "What the system knows, made visible.",
    text: "A view into the layers a memory system keeps — what it recalls, how it's scored, where it's stored. Built to make an invisible process inspectable.",
    accent: "#10243a",
  },
  {
    number: "04",
    style: "Workflow board",
    title: "Operational queue",
    line: "Columns, lanes, throughput.",
    text: "A board for moving work through stages. Cards, columns, status — the pattern for any pipeline you want to watch without a wall of tables.",
    accent: "#355070",
  },
  {
    number: "05",
    style: "Router console",
    title: "Provider routing & cost",
    line: "One door, many models, costs you can see.",
    text: "A console that pools providers, routes each call, and shows what it costs. Built for answering one question: which model is actually worth it.",
    accent: "#1d4a6b",
  },
];

export default function SystemsWorld({ onClose }: { onClose?: () => void }) {
  const ctx = useActiveWorld();

  return (
    <motion.div className="sys" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <button type="button" className="world-return" onClick={() => (onClose ? onClose() : ctx.leave())}>
        <i aria-hidden="true">←</i> Surface
      </button>

      <div className="sys-utility">
        <span>Front-end design directions for systems</span>
        <span>Kuala Lumpur · Remote</span>
      </div>

      <main id="sys-top">
        <section className="sys-hero">
          <div className="sys-hero-copy">
            <p>02 · Systems</p>
            <h1>The range of what<br />I build for data.</h1>
            <span>Dashboards, consoles, and workflow interfaces — each direction a different way to make data feel clear. Built in code, no chart library, no stock screens.</span>
          </div>
          <div className="sys-hero-dash" aria-hidden="true">
            <div className="sys-dash-top"><i />Design directions</div>
            <div className="sys-dash-stats">
              <b><small>Styles</small>05</b>
              <b><small>Code built</small>100%</b>
              <b><small>Libs</small>0</b>
            </div>
            <svg viewBox="0 0 300 80" preserveAspectRatio="none" aria-hidden="true">
              <path d="M4 66C40 60 52 40 78 44s46 4 64-6 40-16 68-8 38 8 66-2 20-6 20-6" fill="none" stroke="#477da2" strokeWidth="2" />
            </svg>
          </div>
        </section>

        <section className="sys-list" data-sync="work">
          <div className="sys-list-head">
            <p>What I can build</p>
            <h2>Five ways to make<br />data feel clear.</h2>
            <span>Each one is a complete interface direction, not a fill-in-the-blank template. Pick a mood for your product and I build that surface for your data.</span>
          </div>

          {directions.map((d) => (
            <article key={d.number} className="sys-card">
              <div className="sys-card-dash" data-dir={d.style} aria-hidden="true">
                <div className="sys-dash-top"><i />{d.title}</div>
                <div className="sys-dash-body">
                  {d.style === "Dark ops" && <DarkOpsMock />}
                  {d.style === "Light SaaS" && <SaaSMock />}
                  {d.style === "Memory inspector" && <MemoryMock />}
                  {d.style === "Workflow board" && <KanbanMock />}
                  {d.style === "Router console" && <RouterMock />}
                </div>
              </div>
              <div className="sys-card-copy">
                <span className="sys-card-num">{d.number}</span>
                <p className="sys-card-tag">{d.style}</p>
                <h3>{d.title}</h3>
                <p className="sys-card-summary">{d.line}</p>
                <p className="sys-card-text">{d.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="sys-contact" id="sys-contact">
          <span>Have a product that needs a face?</span>
          <h2>Tell me what it does,<br />I'll shape the surface.</h2>
          <a href="mailto:tuancookiez@gmail.com">Write to Tuan ↗</a>
        </section>
      </main>

      <footer className="sys-footer">
        <b>TUAN DEV · SYSTEMS</b><span>Kuala Lumpur · Malaysia</span><span>GitHub · Contact</span>
      </footer>
    </motion.div>
  );
}

/* ── Mockup pieces ───────────────────────────── */

function Stat({ k, v }: { k: string; v: string }) {
  return <b className="sys-stat"><small>{k}</small>{v}</b>;
}

function DarkOpsMock() {
  return (
    <>
      <div className="sys-rows">
        <Stat k="Uptime" v="99.98%" />
        <Stat k="P95" v="212ms" />
        <Stat k="Nodes" v="14" />
      </div>
      <svg viewBox="0 0 260 70" preserveAspectRatio="none"><path d="M4 58C26 50 34 30 54 34s30 10 48 0 36-14 58-4 28 8 52-6 10-2 10-2" fill="none" stroke="#5eead4" strokeWidth="2" strokeLinecap="round" /></svg>
    </>
  );
}

function SaaSMock() {
  return (
    <>
      <div className="sys-rows sys-rows-w">
        <Stat k="Active" v="1,284" />
        <Stat k="MRR" v="$48k" />
        <Stat k="Churn" v="1.2%" />
      </div>
      <svg viewBox="0 0 260 70" preserveAspectRatio="none"><path d="M4 64C28 56 44 46 64 48s26-8 44-14 34 2 56-8 26-6 52 2 14-4 14-4" fill="none" stroke="#477da2" strokeWidth="2" strokeLinecap="round" /></svg>
    </>
  );
}

function MemoryMock() {
  return (
    <>
      <div className="sys-mem">
        {["L1 profile", "L3 fact", "L5 working"].map((tag, i) => (
          <span key={tag}><i style={{ background: ["#7cc47a", "#477da2", "#f2a33a"][i] }} />{tag}<em>{[".94", ".82", ".68"][i]}</em></span>
        ))}
      </div>
    </>
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
            <span key={ri} className="sys-kan-card" style={{ height: `${22 + col.hs[ri] * 12}px` }}>
              <i />{label}
            </span>
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