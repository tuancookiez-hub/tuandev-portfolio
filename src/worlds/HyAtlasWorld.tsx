import type { CSSProperties } from "react";
import GooeyNavButton from "../components/GooeyNavButton";
import { useActiveWorld } from "../context/ActiveWorldContext";
import "../styles/hyatlas-world.css";

/**
 * HyAtlas world — flagship product page, one scrolling dark page.
 * Opens from the HyAtlas card on /work/. Pure HTML/CSS, no new dependencies.
 */

type Mode = "lite" | "pro" | "ultra";

const LAYERS: { label: string; mode: Mode }[] = [
  { label: "L1 Profile", mode: "pro" },
  { label: "L2 Raw", mode: "lite" },
  { label: "L3 Fact", mode: "pro" },
  { label: "L4 Summary", mode: "pro" },
  { label: "L5 Knowledge", mode: "ultra" },
  { label: "L6 Schema", mode: "ultra" },
  { label: "L7 Intention", mode: "pro" },
];

const MODES: { mode: Mode; name: string; count: string; text: string }[] = [
  { mode: "lite", name: "Lite", count: "1/7", text: "No LLM call; text never leaves the machine." },
  { mode: "pro", name: "Pro", count: "5/7", text: "One extraction per write." },
  { mode: "ultra", name: "Ultra", count: "7/7", text: "Reasons across memories and time." },
];

export default function HyAtlasWorld({
  ready = true,
  embed = false,
  onClose,
}: {
  ready?: boolean;
  embed?: boolean;
  onClose?: () => void;
}) {
  const ctx = useActiveWorld();

  return (
    <div className="hya" data-ready={String(ready || embed)}>
      {!embed && (
        <div className="hya-back" aria-label="Main menu">
          <GooeyNavButton label="Main menu" onClick={() => (onClose ? onClose() : ctx.leave())} />
        </div>
      )}

      <div className="hya-topbar">
        <span>HYATLAS · MEMORY FOR AGENTS</span>
        <span>v4.5.0 · APACHE-2.0</span>
      </div>

      <div className="hya-wrap">
        <section className="hya-hero">
          <div className="hya-hero-copy">
            <p className="hya-eyebrow hya-reveal">00 — Flagship product</p>
            <h1 className="hya-h1 hya-reveal">
              <span className="hya-grad">HyAtlas</span>
            </h1>
            <p className="hya-lede hya-reveal">
              Long-term memory for AI agents. A seven-layer memory an agent keeps across sessions, in one Go binary
              with local embeddings.
            </p>
            <div className="hya-links hya-reveal">
              <a className="hya-btn hya-btn-primary" href="/">
                Visit the HyAtlas site →
              </a>
              <a
                className="hya-btn hya-btn-ghost"
                href="https://github.com/tuancookiez-hub/HyAtlas-Memory"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="hya-stack" aria-hidden="true">
            {LAYERS.map((layer, i) => (
              <div
                key={layer.label}
                className={`hya-bar hya-bar-${layer.mode}`}
                style={{ animationDelay: `${i * 60}ms` } as CSSProperties}
              >
                {layer.label}
              </div>
            ))}
          </div>
        </section>

        <section className="hya-modes" aria-label="Modes">
          {MODES.map((m) => (
            <article key={m.mode} className={`hya-card hya-mode hya-mode-${m.mode}`}>
              <h3 className="hya-mode-name">{m.name}</h3>
              <p className="hya-mode-count">{m.count}</p>
              <p className="hya-mode-text">{m.text}</p>
            </article>
          ))}
        </section>

        <p className="hya-proof">
          Live as a memory provider in the{" "}
          <a
            href="https://hermes-agent.nousresearch.com/docs/plugins/hyatlas"
            target="_blank"
            rel="noreferrer"
          >
            Hermes Agent plugin catalog ↗
          </a>{" "}
          by Nous Research.
        </p>
      </div>
    </div>
  );
}
