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

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260530_042513_df96a13b-6155-4f6e-8b93-c9dee66fba08.mp4";
const SCRUB_SENSITIVITY = 0.8;

const STUDIES = [
  { id: "chassis", label: "Chassis", note: "Frames, mounts, and the parts that hold everything else" },
  { id: "gimbal", label: "Gimbal", note: "Two-axis motion studies for steady cameras and pointers" },
  { id: "sensors", label: "Sensor bar", note: "Distance, light, and touch — the machine noticing the room" },
  { id: "drive", label: "Drive", note: "Steppers and servos under real load, tuned by hand" },
  { id: "power", label: "Power", note: "Batteries, rails, and the arithmetic of staying alive" },
] as const;

const PILLS = [
  { label: "See the studies", href: "#lab-studies" },
  { label: "Follow the build log", href: "https://github.com/tuancookiez-hub", external: true },
  { label: "Peek the workshop", href: "#lab-approach" },
  { label: "Read the approach", href: "#lab-approach" },
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
    // Scrub: horizontal mouse movement maps to timeline position. Seeks are
    // queued through onseeked so a fast mouse never floods the decoder.
    let prevX: number | null = null;
    let want = -1;
    let seeking = false;
    const drain = () => {
      seeking = false;
      if (want < 0) return;
      const next = want;
      want = -1;
      if (Math.abs(el.currentTime - next) > 0.01) {
        seeking = true;
        el.currentTime = next;
      }
    };
    el.addEventListener("seeked", drain);
    const onMove = (event: MouseEvent) => {
      if (prevX === null) {
        prevX = event.clientX;
        return;
      }
      const delta = event.clientX - prevX;
      prevX = event.clientX;
      const span = el.duration;
      if (!Number.isFinite(span) || span <= 0) return;
      const shifted = el.currentTime + (delta / window.innerWidth) * SCRUB_SENSITIVITY * span;
      const target = Math.min(span - 0.05, Math.max(0, shifted));
      if (seeking) {
        want = target;
        return;
      }
      seeking = true;
      el.currentTime = target;
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("seeked", drain);
      window.removeEventListener("mousemove", onMove);
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
  const [failed, setFailed] = useState(false);
  const [pillsIn, setPillsIn] = useState(false);
  useScrub(video, failed);

  const intro = useTypewriter("Glad you stopped in. The bench is messy but the ideas are load-bearing. What should we build first?");

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
          src={VIDEO_SRC}
          muted
          playsInline
          preload="auto"
          onError={() => setFailed(true)}
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
            Hey there, this is the Lab,
            <br />
            Tuan&apos;s robotics and 3D studies bench
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

      <section className="bot-sec" id="lab-studies">
        <p className="bot-eyebrow">01 · Studies</p>
        <h2 className="bot-sec-title">Five benches, one lab</h2>
        <ul className="bot-tiles">
          {STUDIES.map((study, index) => (
            <li key={study.id} className="bot-tile" style={{ "--part": index } as CSSProperties}>
              <i aria-hidden="true" />
              <strong>{study.label}</strong>
              <span>{study.note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bot-sec" id="lab-approach">
        <p className="bot-eyebrow">02 · Approach</p>
        <h2 className="bot-sec-title">Learn in public, build in the open</h2>
        <p className="bot-copy">
          Physical computing and 3D studies in progress — motion, sensors, and machines that answer back.
          The lab is a workbench, not a showcase: each bench above is a running study with real parts,
          real failure modes, and notes committed along the way on GitHub.
        </p>
      </section>

      <footer className="bot-foot" id="lab-contact">
        <p className="bot-eyebrow">03 · Contact</p>
        <a className="bot-foot-mail" href="mailto:tuancookiez@gmail.com">tuancookiez@gmail.com</a>
        <a className="bot-foot-gh" href="https://github.com/tuancookiez-hub" target="_blank" rel="noreferrer">GitHub ↗</a>
      </footer>
    </div>
  );
}
