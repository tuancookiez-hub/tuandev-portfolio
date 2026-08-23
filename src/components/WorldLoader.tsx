import { motion } from "motion/react";

export default function WorldLoader({ label = "Loading world" }: { label?: string }) {
  return (
    <div className="world-loader" role="status" aria-live="polite" aria-label={`${label} is loading`}>
      <motion.div className="world-loader-dot" aria-hidden="true" animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} />
      <span className="world-loader-text">{label}</span>
    </div>
  );
}
