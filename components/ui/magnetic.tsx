"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
  ariaLabel?: string;
  /** How strongly the element is pulled toward the cursor (0–1). */
  strength?: number;
}

/**
 * A link that magnetically drifts toward the pointer on hover, then springs
 * back on leave. Falls back to a plain anchor under reduced-motion / touch.
 */
export function MagneticLink({
  href,
  children,
  className,
  target,
  ariaLabel,
  strength = 0.28,
}: MagneticLinkProps) {
  const reduced = useReducedMotionSafe();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 15, mass: 0.4 });

  const rel = target === "_blank" ? "noopener noreferrer" : undefined;

  function handleMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength * 1.15);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduced ? undefined : { x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.a>
  );
}
