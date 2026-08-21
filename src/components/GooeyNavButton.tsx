"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function GooeyNavButton({
  label = "Main menu",
  onClick,
  collapsedWidth = 32,
  expandedWidth = 138,
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
      <svg aria-hidden="true" width={0} height={0} style={{ position: "absolute" }}>
        <defs>
          <filter id="sys-gooey" x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation={gooeyBlur} result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <motion.div
        className="sys-gooey-track"
        animate={{ width: open ? expandedWidth : collapsedWidth }}
        transition={{ type: "spring", stiffness: 420, damping: 30, mass: 0.6 }}
        style={{ filter: "url(#sys-gooey)" }}
      >
        <motion.button
          type="button"
          className="sys-gooey-pill sys-liquid"
          onClick={() => {
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
