import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { bh, stops } from "../components/creative-black-hole";
import RaymarchedBlackHole from "../components/RaymarchedBlackHole";
import { useActiveWorld } from "../context/ActiveWorldContext";
import "../styles/creative.css";
import "../styles/device-preview.css";

/* Creative world — one continuous long-form document scroll.
   Each section gives the raymarched phenomenon room to arrive and breathe.
   The side navigation can jump directly to any scene. */

const deck = [
  { label: "Gravitational lens", note: "Starlight bends around the mass. I wrote that warp. It is not a picture." },
  { label: "Accretion disk", note: "Hot gas spinning in. The bright side is coming toward you." },
  { label: "Photon ring", note: "Light that looped the hole before it reached you." },
  { label: "Event horizon", note: "Past this, light cannot climb back out. The black is a shadow." },
  { label: "Singularity", note: "The part the math cannot describe. I left it as a pinch of light." },
];

const names = ["Approach", "Exploded overview", ...deck.map((item) => item.label), "Finale"];

const videos = [
  {
    title: "Seedance / Proxifai",
    note: "My Seedance submission for the Proxifai hackathon.",
    duration: "0:47",
    src: "./assets/creative/adventure.mp4",
    poster: "./assets/creative/adventure-poster.webp",
    format: "vertical",
  },
  {
    title: "Pain / FLUX 3",
    note: "My medieval submission for the Nous FLUX 3 hackathon.",
    duration: "1:54",
    src: "./assets/creative/pain.mp4",
    poster: "./assets/creative/pain-poster.webp",
    format: "wide",
  },
] as const;

export default function CreativeWorld({ ready = true }: { ready?: boolean }) {
  const ctx = useActiveWorld();
  const [step, setStep] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const [reel, setReel] = useState<number | null>(null);
  const lenis = useRef<Lenis | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 700px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reel === null) return;
    const overflow = document.body.style.overflow;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setReel(null);
    };
    document.body.style.overflow = "hidden";
    lenis.current?.stop();
    window.addEventListener("keydown", close);
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = overflow;
      lenis.current?.start();
    };
  }, [reel]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const max = () => Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const instance = reduced ? null : new Lenis({
      duration: 1.25,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      touchMultiplier: 1,
    });
    lenis.current = instance;
    let frame = 0;

    if (instance !== null) {
      const loop = (time: number) => {
        instance.raf(time);
        frame = requestAnimationFrame(loop);
      };
      frame = requestAnimationFrame(loop);
    }

    const update = () => {
      const t = Math.min(1, Math.max(0, window.scrollY / max()));
      const next = stops.reduce((active, stop, i) => t >= stop - 0.001 ? i : active, 0);
      bh.raw = t;
      bh.step = next;
      setStep(next);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    // Soft magnetic catch. While the pointer is idle inside a stop's catch
    // zone, scroll eases toward that stop. Any wheel/touch marks the user as
    // driving and the magnet lets go immediately.
    let driving = 0;
    let magnet = 0;
    const mark = () => { driving = performance.now(); };
    window.addEventListener("wheel", mark, { passive: true });
    window.addEventListener("touchstart", mark, { passive: true });
    window.addEventListener("touchmove", mark, { passive: true });

    const zone = 0.06;
    let catching = false;
    let armed = true;
    const pull = () => {
      if (reduced || instance === null) return;
      const idle = performance.now() - driving > 200;
      if (!idle) {
        catching = false;
        armed = true;
      }
      if (idle && armed && !catching && Math.abs(instance.velocity) < 0.4) {
        const t = Math.min(1, Math.max(0, window.scrollY / max()));
        let near = -1;
        let gap = Infinity;
        stops.forEach((stop, i) => {
          const d = t - stop;
          if (Math.abs(d) < zone && Math.abs(d) < gap) { gap = Math.abs(d); near = i; }
        });
        if (near >= 0 && gap > 0.0015) {
          catching = true;
          armed = false;
          const target = stops[near] * max();
          instance.scrollTo(target, {
            duration: 0.55,
            easing: (x) => x * x * (3 - 2 * x),
            onComplete: () => { catching = false; },
          });
        }
      }
      magnet = requestAnimationFrame(pull);
    };
    if (instance !== null) magnet = requestAnimationFrame(pull);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("wheel", mark);
      window.removeEventListener("touchstart", mark);
      window.removeEventListener("touchmove", mark);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(magnet);
      instance?.destroy();
      lenis.current = null;
      bh.raw = 0;
      bh.step = 0;
    };
  }, []);

  const go = (next: number) => {
    const top = stops[next] * Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    if (lenis.current !== null) {
      lenis.current.scrollTo(top, {
        duration: 2.2,
        force: true,
        easing: (t: number) => t * t * (3 - 2 * t),
      });
      return;
    }
    window.scrollTo({ top, behavior: "smooth" });
  };

  const card = step >= 2 && step <= 6 ? deck[step - 2] : null;
  const done = step === stops.length - 1;

  return (
    <div className="creative" data-narrow={String(narrow)} data-step={step} data-ready={String(ready)}>
      <RaymarchedBlackHole />

      <div className="creative-grade" aria-hidden="true" />

      <button type="button" className="world-return creative-return" onClick={() => ctx.leave()}>
        <i aria-hidden="true">↑</i> Main menu
      </button>

      <div className="bh-caption" data-show={step === 0}>
        <span>I wrote this black hole. No pictures. Scroll and it comes apart.</span>
      </div>
      <div className="bh-caption bh-caption-top" data-show={step === 1}>
        <span>Same scene, five parts. Stay on this bit. Then keep going.</span>
      </div>

      {card !== null && (
        <div className="bh-focus-card" data-mobile={String(narrow)} data-show="true">
          <b>{card.label}</b>
          <span>{card.note}</span>
        </div>
      )}

      {step === 1 && (
        <>
          <div className="bh-overview">
            {deck.map((item, i) => <span key={item.label}><i>{String(i + 1).padStart(2, "0")}</i>{item.label}</span>)}
          </div>
          <div className="bh-markers" aria-hidden="true">
            <span className="bh-whole"><i /><b /><em>Exploded view<br />one system / five live phenomena</em></span>
            <span className="bh-ripple" />
            <span className="bh-shadow" />
            {deck.map((item, i) => <i key={item.label} data-index={i}>{String(i + 1).padStart(2, "0")}</i>)}
            {deck.map((item, i) => <b key={item.label} data-line={i} />)}
          </div>
        </>
      )}

      <div className="bh-shot" data-show={step >= 2 && step <= 6}>
        <small>{String(Math.min(5, Math.max(1, step - 1))).padStart(2, "0")} / 05</small>
        {step <= 6 && <span>Continue downward ↓</span>}
      </div>

      <div className="bh-finale" data-show={done}>
        <span className="bh-finale-kicker">Finale</span>
        <p>I built the whole site myself. This page is the part that asks: can a website do this with no assets?</p>
        <h2>
          <span className="creative-mask"><span className="creative-mask-line" data-show={done}>I wanted you</span></span>
          <span className="creative-mask"><span className="creative-mask-line" data-show={done} style={{ transitionDelay: ".14s" }}><em>to meet me here.</em></span></span>
        </h2>
        <span className="creative-body">Mind Palace, HyAtlas, the API console, a peptide tracker. Two media pipelines that already make things, even if they do not have a pretty screen yet. I start with a question and build until I can see the answer.</span>
        <div className="creative-reels">
          <small>Two hackathon submissions</small>
          <div>
            {videos.map((video, i) => (
              <button key={video.title} type="button" className="creative-reel" data-format={video.format} onClick={() => setReel(i)} aria-label={`Play ${video.title}`}>
                <img src={video.poster} alt="" loading="lazy" />
                <span><b>{video.title}</b><em>{video.duration}</em></span>
              </button>
            ))}
          </div>
        </div>
        <a href="mailto:tuancookiez@gmail.com">
          <span className="cta-full">Write to Tuan ↗</span>
          <span className="cta-short">Say hello ↗</span>
        </a>
      </div>

      {reel !== null && (
        <div className="creative-player" role="dialog" aria-modal="true" aria-labelledby="creative-player-title" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setReel(null);
        }}>
          <section className="creative-player-shell">
            <button type="button" className="creative-player-close" onClick={() => setReel(null)}>Close ×</button>
            <div className="creative-player-copy">
              <small>Hackathon edit {String(reel + 1).padStart(2, "0")}</small>
              <h3 id="creative-player-title">{videos[reel].title}</h3>
              <span>{videos[reel].note}</span>
            </div>
            <video key={videos[reel].src} controls autoPlay playsInline preload="metadata" poster={videos[reel].poster} data-format={videos[reel].format}>
              <source src={videos[reel].src} type="video/mp4" />
            </video>
          </section>
        </div>
      )}

      <nav className="creative-depth" aria-label={`Creative journey: ${names[step]}`}>
        {stops.map((_, dot) => (
          <button
            type="button"
            key={names[dot]}
            aria-label={`Go to ${names[dot]}`}
            aria-current={dot === step ? "step" : undefined}
            data-active={dot <= step}
            data-current={dot === step}
            onClick={() => go(dot)}
          >
            <i aria-hidden="true" />
            <span>{names[dot]}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
