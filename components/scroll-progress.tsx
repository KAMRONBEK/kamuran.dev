"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

/** Thin gradient progress bar pinned to the top of the viewport. */
export function ScrollProgress() {
  const reduced = useReducedMotionSafe();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.2,
  });

  return (
    <motion.div
      aria-hidden
      // Under reduced-motion, track scroll position directly (no spring easing).
      style={{ scaleX: reduced ? scrollYProgress : scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-accent to-accent-deep shadow-[0_0_12px_rgba(255,143,58,0.7)]"
    />
  );
}
