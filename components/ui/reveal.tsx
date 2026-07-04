"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Vertical offset the element rises from. */
  y?: number;
}

/**
 * Scroll-triggered reveal: fades + rises + de-blurs into place once, when it
 * enters the viewport. Honors prefers-reduced-motion by rendering statically.
 */
export function Reveal({ children, className, delay = 0, y = 32 }: RevealProps) {
  const reduced = useReducedMotionSafe();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(7px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
