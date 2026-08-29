import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import GooeyNavButton from "../components/GooeyNavButton";
import { useActiveWorld } from "../context/ActiveWorldContext";
import "../styles/robotics.css";

/**
 * Robotics world — retro-futurist hero.
 * Pattern (not assets) referenced from a MotionSites "Mainframe" demo prompt:
 * mouse-scrub video background, blurred intro label, typewriter line, pill CTAs.
 * Video is a third-party CDN clip per Tuna's call; swap VIDEO_SRC to replace.
 * The scrub never autoplays; on error the scene falls back to a static CSS stage.
 */

// Scrub-optimized local encode (keyframe every 2 frames, 1280px, 2.3MB).
// The original CDN clip had ONE keyframe for the whole 4s — every seek
// decoded from frame 0, which read as teleporting/laggy. Remote kept as
// fallback; swap REMOTE_FALLBACK to VIDEO_SRC to revert to CDN hosting.
const VIDEO_SRC = "./assets/gateway/robotics-scrub.mp4";
const REMOTE_FALLBACK =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4";

const JOURNEY = [
  { id: "idea", label: "Idea", note: "A plain-language brief captured and checksum-bound" },
  { id: "confirm", label: "Confirm", note: "You approve the PartSpec; an R0 revision is frozen" },
  { id: "components", label: "Components", note: "Real hardware envelopes — Pi Zero 2 W, servos, camera" },
  { id: "blueprint", label: "Blueprint", note: "A visual plan you approve before any geometry exists" },
  { id: "cad", label: "CAD", note: "Closed CSG interpreted by CadQuery into STEP, STL, GLB" },
  { id: "verify", label: "Verify", note: "Kernel-valid solids, envelope fits, deterministic checks" },
  { id: "slice", label: "Slice", note: "Real PrusaSlicer G-code with a per-part layer player" },
  { id: "package", label: "Package", note: "A downloadable, checksum-verified fabrication bundle" },
] as const;

const MACHINE = [
  { k: "Body shell", v: "112 × 58 × 92 mm, kernel-valid single solid" },
  { k: "Limbs", v: "Two 105 mm flat-print parts on a two-servo drive" },
  { k: "Brain", v: "Pi Zero 2 W carrier on the official 58 × 23 mm pattern" },
  { k: "Eyes", v: "Camera board locating bezel + service panel" },
  { k: "Joints", v: "Servo cradle tray and two keyed adapters" },
  { k: "Artifacts", v: "Nine parts, each with SHA-256 content identities" },
] as const;

const PILLS = [
  { label: "See the journey", href: "#bot-journey" },
  { label: "Meet the first machine", href: "#bot-machine" },
  { label: "Read the boundaries", href: "#bot-boundaries" },
  { label: "Follow the build log", href: "https://github.com/tuancookiez-hub", external: true },
] as const;

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(text.length);
      return;
    }
    let timer: ReturnType<typeof setInterval> | null = null;
    const kick = setTimeout(() => {
      timer = setInterval(() => {
        setShown((n) => {
          if (n >= text.length) {
            if (timer) clearInterval(timer);
            return n;
          }
          return n + 1;
        });
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(kick);
      if (timer) clearInterval(timer);
    };
  }, [text, speed, startDelay]);
  return { out: text.slice(0, shown), done: shown >= text.length };
}

function useScrub(video: React.RefObject<HTMLVideoElement | null>, failed: boolean) {
  useEffect(() => {
    const el = video.current;
    if (!el || failed) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.loop = true;
      void el.play().catch(() => undefined);
      return;
    }
    // Absolute scrub with an eased render loop: pointer events only set the
    // target; one rAF glides the playhead toward it, at most one seek per
    // frame and none while the decoder is busy (el.seeking). The loop stops
    // entirely once converged, so an idle pointer costs nothing. Event-per-
    // -seek on a long-GOP remote clip is what makes naive scrubbing laggy.
    let target = 0;
    let frac = 0;
    let raf = 0;
    let running = false;
    const span = () => {
      const d = el.duration;
      return Number.isFinite(d) && d > 0 ? d - 0.05 : 0;
    };
    const frame = () => {
      const d = span();
      if (d <= 0) {
        running = false;
        return;
      }
      const diff = target - frac;
      if (Math.abs(diff) < 0.0008 && !el.seeking) {
        running = false;
        return;
      }
      frac += diff * 0.16;
      if (!el.seeking && Math.abs(el.currentTime - frac * d) > 0.033) {
        el.currentTime = Math.min(d, Math.max(0, frac * d));
      }
      raf = requestAnimationFrame(frame);
    };
    const wake = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    };
    const onMove = (event: PointerEvent) => {
      const d = span();
      if (d <= 0) return;
      target = Math.min(1, Math.max(0, event.clientX / window.innerWidth));
      wake();
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [video, failed]);
}

export default function RoboticsWorld({
  embed = false,
  ready = true,
  showReturn = false,
  onClose,
}: {
  embed?: boolean;
  ready?: boolean;
  showReturn?: boolean;
  onClose?: () => void;
}) {
  const ctx = useActiveWorld();
  const video = useRef<HTMLVideoElement | null>(null);
  const [source, setSource] = useState(VIDEO_SRC);
  const [failed, setFailed] = useState(false);
  const [pillsIn, setPillsIn] = useState(false);
  useScrub(video, failed);

  const intro = useTypewriter("Glad you stopped in. One sentence in, a checked fabrication bundle out — every gate approved by a human. What should we build?");

  useEffect(() => {
    const kick = setTimeout(() => setPillsIn(true), 400);
    return () => clearTimeout(kick);
  }, []);

  return (
    <div className="bot" data-ready={String(ready || showReturn || embed)} data-embed={String(embed)}>
      {!failed ? (
        <video
          ref={video}
          className="bot-scrub"
          src={source}
          muted
          playsInline
          preload="auto"
          onError={() => {
            // local encode missing -> try the CDN clip -> static CSS stage
            if (source !== REMOTE_FALLBACK) setSource(REMOTE_FALLBACK);
            else setFailed(true);
          }}
          aria-hidden="true"
        />
      ) : (
        <div className="bot-scrub bot-scrub-fallback" aria-hidden="true" />
      )}

      <header className="bot-nav">
        <span className="bot-logo">
          Robotics Lab<span className="bot-logo-mark" aria-hidden="true">✳︎</span>
        </span>
        {!embed && (
          <div className="bot-menu" aria-label="Main menu">
            <GooeyNavButton label="Main menu" onClick={() => (onClose ? onClose() : ctx.leave())} />
          </div>
        )}
      </header>

      <section className="bot-hero">
        <div className="bot-hero-inner">
          <p className="bot-blur" aria-hidden="true">
            Hey there, meet Ariad,
            <br />
            Tuan&apos;s idea-to-fabrication pipeline
          </p>
          <p className="bot-type" aria-live="polite">
            {intro.out}
            {!intro.done && <span className="bot-cursor" aria-hidden="true" />}
          </p>
          <div className={`bot-pills${pillsIn ? " bot-pills-in" : ""}`}>
            {PILLS.map((pill) => (
              <a
                key={pill.label}
                className="bot-pill"
                href={pill.href}
                {...("external" in pill && pill.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                {pill.label}
              </a>
            ))}
            <button
              type="button"
              className="bot-pill bot-pill-ghost"
              onClick={() => void navigator.clipboard?.writeText("tuancookiez@gmail.com").catch(() => undefined)}
            >
              Reach us: <span className="bot-mail">tuancookiez@gmail.com</span>
              <svg className="bot-copy" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <rect x="1" y="1" width="7" height="7" fill="none" stroke="currentColor" strokeWidth="1.2" />
                <rect x="4" y="4" width="7" height="7" fill="none" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="bot-sec" id="bot-journey">
        <p className="bot-eyebrow">01 · Ariad</p>
        <h2 className="bot-sec-title">From one sentence to a fabrication bundle</h2>
        <p className="bot-copy">
          Ariad is my fabrication pipeline: a local system that takes a plain-language idea and walks it —
          with you approving every gate — through parts, blueprint, CAD, verification, real slicing, and a
          downloadable package. Codex proposes; a deterministic CadQuery interpreter disposes. The machine
          never runs unreviewed code, and every artifact carries a checksum.
        </p>
        <ol className="bot-flow">
          {JOURNEY.map((stage, index) => (
            <li key={stage.id} className="bot-stage" style={{ "--stage": index } as CSSProperties}>
              <i aria-hidden="true" />
              <strong>{stage.label}</strong>
              <span>{stage.note}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="bot-sec" id="bot-machine">
        <p className="bot-eyebrow">02 · The first machine</p>
        <h2 className="bot-sec-title">Nine parts, zero unverified claims</h2>
        <dl className="bot-specs">
          {MACHINE.map((row) => (
            <div key={row.k} className="bot-spec">
              <dt>{row.k}</dt>
              <dd>{row.v}</dd>
            </div>
          ))}
        </dl>
        <p className="bot-copy">
          The calibration coupon prints first — six kernel-valid specimens, 13.28 g of PETG, about 70 minutes —
          and nothing ships until it passes on the exact machine, material, and process. Digital evidence only
          until then, and the package says so literally.
        </p>
      </section>

      <section className="bot-sec" id="bot-boundaries">
        <p className="bot-eyebrow">03 · Honest boundaries</p>
        <h2 className="bot-sec-title">What this system will not claim</h2>
        <ul className="bot-lines">
          <li>No printer control, no unrestricted generated-code execution, no silent autonomy.</li>
          <li>Fit, motion, balance, and electrical behavior stay unverified until physical parts exist.</li>
          <li>Live general geometry stays digital; it never becomes printability evidence.</li>
        </ul>
      </section>

      <footer className="bot-foot" id="lab-contact">
        <p className="bot-eyebrow">04 · Contact</p>
        <a className="bot-foot-mail" href="mailto:tuancookiez@gmail.com">tuancookiez@gmail.com</a>
        <a className="bot-foot-gh" href="https://github.com/tuancookiez-hub" target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </div>
  );
}
