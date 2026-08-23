"use client";
import { useEffect, useRef, useState, type RefObject } from "react";

export default function useNearViewport<T extends HTMLElement>(options?: {
  bufferPx?: number;
  disabled?: boolean;
}): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    if (options?.disabled === true) { setNear(false); return; }
    const node = ref.current;
    if (!node) return;
    const margin = options?.bufferPx ?? 800;
    if (typeof IntersectionObserver === "undefined") { setNear(true); return; }
    const obs = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) setNear(true);
    }, { root: null, rootMargin: `${margin}px 0px ${margin}px 0px` });
    obs.observe(node);
    return () => obs.disconnect();
  }, [options?.bufferPx, options?.disabled]);

  return [ref, near];
}
