"use client";

import { useEffect, useRef } from "react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

const SIZE = 680;
const HALF = SIZE / 2;

/**
 * A soft accent glow that trails the cursor. The element is always rendered
 * (off-screen and invisible) so server and client markup match; it only reveals
 * itself once a real mouse moves, so touch devices and reduced-motion users
 * never see it.
 */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotionSafe();

  useEffect(() => {
    if (reduced) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let tx = -HALF;
    let ty = -HALF;
    let shown = false;

    const apply = () => {
      raf = 0;
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      if (!shown) {
        el.style.opacity = "1";
        shown = true;
      }
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX - HALF;
      ty = e.clientY - HALF;
      if (!raf) raf = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
      if (el) el.style.opacity = "0";
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0"
      style={{
        width: SIZE,
        height: SIZE,
        borderRadius: "50%",
        opacity: 0,
        transform: `translate3d(${-HALF}px, ${-HALF}px, 0)`,
        transition: "opacity 0.4s ease",
        background: "radial-gradient(circle, rgba(255,143,58,0.08), transparent 62%)",
      }}
    />
  );
}
