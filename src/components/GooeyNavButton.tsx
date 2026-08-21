"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function GooeyNavButton({
  label = "Main menu",
  onClick,
  collapsedWidth = 44,
  expandedWidth = 152,
  gooeyBlur = 5,
}: {
  label?: string;
  onClick?: () => void;
  collapsedWidth?: number;
  expandedWidth?: number;
  gooeyBlur?: number;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="sys-gooey"
      data-open={String(open)}
      style={
        {
          ["--sys-goo-blur" as string]: `${gooeyBlur}px`,
          ["--sys-goo-w0" as string]: `${collapsedWidth}px`,
          ["--sys-goo-w1" as string]: `${expandedWidth}px`,
        } as React.CSSProperties
      }
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <motion.div
        className="sys-gooey-track"
        animate={{ width: open ? expandedWidth : collapsedWidth }}
        transition={{ type: "spring", stiffness: 380, damping: 26, mass: 0.6 }}
      >
        <motion.button
          type="button"
          className="sys-gooey-pill"
          onClick={() => {
            if (!open) {
              setOpen(true);
              return;
            }
            if (onClick) onClick();
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          whileTap={{ scale: 0.985 }}
          aria-expanded={open}
          aria-label={label}
        >
          <span className="sys-gooey-arrow" aria-hidden="true">
            ←
          </span>
          <AnimatePresence>
            {open && (
              <motion.span
                className="sys-gooey-text"
                initial={{ opacity: 0, x: -8, filter: "blur(2px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -8, filter: "blur(2px)" }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                {label}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
    </div>
  );
}
