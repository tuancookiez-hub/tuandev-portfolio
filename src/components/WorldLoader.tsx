import { motion } from "motion/react";

/* A single quiet pulsing dot, centred in whatever frame holds it. The label is
   screen-reader only so nothing leaks into the corner of an expanding card. */
export default function WorldLoader({ label = "Loading world" }: { label?: string }) {
  return (
    <div className="world-loader" role="status" aria-live="polite" aria-label={`${label} is loading`}>
      <motion.div className="world-loader-dot" aria-hidden="true" animate={{ opacity: [0.25, 0.8, 0.25] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
      <span className="world-loader-text">{label}</span>
    </div>
  );
}
