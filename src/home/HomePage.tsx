import { useEffect, useRef, useState } from "react";

const EMAIL = "tabdullahrashid@tuandev.app";
const WAITLIST = `mailto:${EMAIL}?subject=${encodeURIComponent("HyAtlas Cloud early access")}`;
const REPO = "https://github.com/tuancookiez-hub/HyAtlas-Memory";
const DOCS = "https://hermes-agent.nousresearch.com/docs/plugins/hyatlas";
const GITHUB = "https://github.com/tuancookiez-hub";
const X_URL = "https://x.com/TunaCookie_";
// Fill in after SSM registration, e.g. "202603123456 (1234567-X)". Rendered only when non-empty.
const COMPANY_REG = "";

type Tone = "lite" | "pro" | "ultra";

const PRODUCT: { name: string; tone: Tone; tag: string; count: string; text: string }[] = [
  {
    name: "Lite",
    tone: "lite",
    tag: "No LLM",
    count: "1 / 7",
    text: "No extraction call is made, so conversation text never leaves the machine. Raw trace and local BGE embeddings only.",
  },
  {
    name: "Pro",
    tone: "pro",
    tag: "Per turn",
    count: "5 / 7",
    text: "One extraction call per write. Fills profile, facts, summaries and intentions from what each turn actually says.",
  },
  {
    name: "Ultra",
    tone: "ultra",
    tag: "Default",
    count: "7 / 7",
    text: "Adds a slow path that reasons across memories and time: it merges contradictions, keeps relations corroborated by more than one turn, and generalises recurring patterns.",
  },
];

const LAYERS: { code: string; name: string; text: string }[] = [
  { code: "L1", name: "Profile", text: "Who the user is and what they prefer." },
  { code: "L2", name: "Raw", text: "The full trace of every turn, always kept." },
  { code: "L3", name: "Fact", text: "Discrete facts extracted from a turn." },
  { code: "L4", name: "Summary", text: "Compressed recaps of a conversation." },
  {
    code: "L5",
    name: "Knowledge",
    text: "Relations corroborated across turns, in a bitemporal graph with source citations.",
  },
  { code: "L6", name: "Schema", text: "Recurring patterns across memories." },
  { code: "L7", name: "Intention", text: "Goals and plans the user has stated." },
];

const CHIPS = [
  "Single Go binary",
  "In-process BGE-small embeddings",
  "Embedded vector store",
  "Loopback-only, no telemetry",
  "Linux · macOS · Windows",
];

const ROADMAP: { stage: string; status: string; tone: Tone; text: string }[] = [
  {
    stage: "Now",
    status: "Shipping",
    tone: "lite",
    text: "Open-source memory server and the Hermes Agent plugin, with releases for Linux, macOS and Windows.",
  },
  {
    stage: "Next",
    status: "In development",
    tone: "pro",
    text: "HyAtlas Cloud: hosted, multi-tenant memory for teams and agent platforms, built on Cloudflare Workers, Durable Objects, Vectorize, D1 and Workers AI.",
  },
  {
    stage: "Later",
    status: "Planned",
    tone: "ultra",
    text: "A memory API and SDKs for agent frameworks beyond Hermes.",
  },
];

const RECALL: { code: string; name: string; tone: Tone; text: string; score: string }[] = [
  {
    code: "L1",
    name: "Profile",
    tone: "pro",
    text: "Prefers small static sites with no server to babysit.",
    score: "0.91",
  },
  {
    code: "L3",
    name: "Fact",
    tone: "pro",
    text: "Ships the portfolio as a Vite build on a custom domain.",
    score: "0.86",
  },
  {
    code: "L5",
    name: "Knowledge",
    tone: "ultra",
    text: "HyAtlas → runs on → one Go binary · cited in 3 turns",
    score: "0.80",
  },
  {
    code: "L7",
    name: "Intention",
    tone: "pro",
    text: "Launch HyAtlas Cloud on Cloudflare Workers.",
    score: "0.74",
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable: do nothing.
    }
  }

  return (
    <button type="button" className="copy-btn" onClick={handleCopy}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="code-block">
      <div className="code-head">
        <span className="code-label">{label}</span>
        <CopyButton text={code} />
      </div>
      <pre className="code">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function RecallDemo() {
  return (
    <figure className="recall" aria-label="Illustrative example of a HyAtlas recall">
      <div className="recall-box">
        <div className="recall-bar">
          <span className="recall-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>hyatlas · recall</span>
        </div>
        <p className="recall-q">
          <span className="recall-caret">›</span> hyatlas_search "how does Tuan like to ship?"
        </p>
        <ol className="recall-list">
          {RECALL.map((r) => (
            <li key={r.code} className="recall-row">
              <span className={`pill tone-${r.tone}`}>
                {r.code} {r.name}
              </span>
              <span className="recall-text">{r.text}</span>
              <span className="recall-score">{r.score}</span>
            </li>
          ))}
        </ol>
        <p className="recall-foot">
          4 memories · local BGE embeddings · no data left the machine
        </p>
      </div>
      <figcaption className="recall-cap">Illustrative example.</figcaption>
    </figure>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function toggleMenu() {
    setMenuOpen((open) => !open);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header id="top" className="site-header" data-scrolled={scrolled}>
        <div className="bar">
          <a className="wordmark" href="#top">
            TuanDev
          </a>
          <nav id="site-nav" aria-label="Primary" className={`nav${menuOpen ? " is-open" : ""}`}>
            <a href="#product" onClick={closeMenu}>
              Product
            </a>
            <a href="#how" onClick={closeMenu}>
              How it works
            </a>
            <a href="#roadmap" onClick={closeMenu}>
              Roadmap
            </a>
            <a href="#founder" onClick={closeMenu}>
              Founder
            </a>
            <a href={REPO} target="_blank" rel="noreferrer" onClick={closeMenu}>
              GitHub ↗
            </a>
          </nav>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={toggleMenu}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <a className="btn btn-primary btn-sm header-cta" href={WAITLIST}>
            Get early access
          </a>
        </div>
      </header>

      <main id="main">
        <section id="hero" className="hero" aria-labelledby="hero-title">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">HyAtlas · v4.5.0 · Open source (Apache-2.0)</p>
              <h1 id="hero-title">
                Long-term memory for AI <span className="grad">agents</span>.
              </h1>
              <p className="lede">
                HyAtlas gives an agent a seven-layer memory it keeps across sessions: who you are,
                what was said, the facts behind it, and a knowledge graph with source citations. One
                Go binary with local embeddings. No Python, no GPU.
              </p>
              <div className="cta">
                <a className="btn btn-primary" href="#install">
                  Install HyAtlas
                </a>
                <a className="btn btn-ghost" href={WAITLIST}>
                  Join the HyAtlas Cloud waitlist
                </a>
              </div>
              <p className="proof">
                Live today as a memory provider in the{" "}
                <a href={DOCS} target="_blank" rel="noreferrer">
                  Hermes Agent plugin catalog ↗
                </a>{" "}
                by Nous Research.
              </p>
            </div>
            <RecallDemo />
          </div>
        </section>

        <section id="product" className="section" aria-labelledby="product-title">
          <div className="wrap">
            <h2 id="product-title">Agents forget. HyAtlas remembers, on your terms.</h2>
            <p className="intro">
              Pick how much the memory reasons. Every mode keeps the raw trace and searches it with
              local embeddings.
            </p>
            <div className="cards">
              {PRODUCT.map((p) => (
                <article key={p.name} className={`card product tone-${p.tone}`}>
                  <div className="card-top">
                    <h3 className="card-name">{p.name}</h3>
                    <span className="pill">{p.tag}</span>
                  </div>
                  <div className="count">{p.count}</div>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how" className="section" aria-labelledby="how-title">
          <div className="wrap">
            <h2 id="how-title">Seven layers, one memory.</h2>
            <ol className="layers">
              {LAYERS.map((l) => (
                <li key={l.code} className="layer">
                  <span className="layer-code">{l.code}</span>
                  <div>
                    <strong>{l.name}</strong>
                    <p>{l.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="chips">
              {CHIPS.map((c) => (
                <span key={c} className="pill">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="install" className="section" aria-labelledby="install-title">
          <div className="wrap">
            <h2 id="install-title">Running in two commands.</h2>
            <CodeBlock
              label="1 · Install the server"
              code="curl -fsSL https://raw.githubusercontent.com/tuancookiez-hub/HyAtlas-Memory/main/scripts/install.sh | bash"
            />
            <CodeBlock
              label="2 · Add it to Hermes Agent"
              code="hermes plugins install tuancookiez-hub/HyAtlas-Memory/plugins/hyatlas"
            />
            <p className="below">
              <a href={REPO} target="_blank" rel="noreferrer">
                Read the docs on GitHub ↗
              </a>
            </p>
          </div>
        </section>

        <section id="roadmap" className="section" aria-labelledby="roadmap-title">
          <div className="wrap">
            <h2 id="roadmap-title">Where HyAtlas is going.</h2>
            <p className="intro">
              The local server stays open source. HyAtlas Cloud is the hosted, paid product.
            </p>
            <ul className="roadmap">
              {ROADMAP.map((r) => (
                <li key={r.stage} className="card road">
                  <div className="road-head">
                    <span className="stage">{r.stage}</span>
                    <span className={`pill tone-${r.tone}`}>{r.status}</span>
                  </div>
                  <p>{r.text}</p>
                </li>
              ))}
            </ul>
            <p className="below">
              <a className="btn btn-ghost" href={WAITLIST}>
                Join the HyAtlas Cloud waitlist
              </a>
            </p>
          </div>
        </section>

        <section id="lab" className="section" aria-labelledby="lab-title">
          <div className="wrap">
            <h2 id="lab-title">Also from TuanDev.</h2>
            <div className="cards lab">
              <article className="card">
                <h3 className="card-name">
                  <a href="https://github.com/tuancookiez-hub/AriadFabrication" target="_blank" rel="noreferrer">
                    Ariad ↗
                  </a>
                </h3>
                <p>One sentence in, a checked fabrication bundle out.</p>
              </article>
              <article className="card">
                <h3 className="card-name">
                  <a href="https://github.com/tuancookiez-hub/SparkEnhance" target="_blank" rel="noreferrer">
                    SparkEnhance ↗
                  </a>
                </h3>
                <p>Rewrite any text in any Windows app into a clear agent brief, from the tray.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="founder" className="section" aria-labelledby="founder-title">
          <div className="wrap founder">
            <h2 id="founder-title">Built by Tuan.</h2>
            <p>
              I'm Tuan, founder of TuanDev and a product engineer in Kuala Lumpur. I build agent
              infrastructure, data-heavy interfaces and interactive systems. HyAtlas started as the
              memory I wanted for my own agents.
            </p>
            <div className="links">
              <a href="/work/">Earlier work →</a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={X_URL} target="_blank" rel="noreferrer">
                X ↗
              </a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <div className="foot-row">
            <div>
              <p className="foot-name">TuanDev</p>
              <p>Kuala Lumpur, Malaysia</p>
              {COMPANY_REG.length > 0 && <p>Reg. no. {COMPANY_REG}</p>}
            </div>
            <div className="foot-links">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href={GITHUB} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a href={X_URL} target="_blank" rel="noreferrer">
                X ↗
              </a>
            </div>
          </div>
          <p className="copyright">© 2026 TuanDev. HyAtlas is open source under Apache-2.0.</p>
        </div>
      </footer>
    </>
  );
}
