"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { kineticPhrases } from "@/lib/data";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

export function KineticBand() {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // The row holds two copies of the phrase set, so sliding by -50% is seamless.
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-50%"]);

  // Two copies for the seamless slide.
  const items = [...kineticPhrases, ...kineticPhrases];

  return (
    <section
      ref={ref}
      aria-hidden
      className="relative z-[1] overflow-hidden border-y border-white/[0.06] bg-surface py-11"
    >
      <motion.div
        className="flex w-max will-change-transform"
        style={reduced ? undefined : { x }}
      >
        {items.map((k, i) => (
          <span
            key={i}
            className="whitespace-nowrap px-[30px] font-heading text-[clamp(40px,7vw,96px)] font-bold tracking-[-0.02em]"
            style={
              k.outline
                ? { color: "transparent", WebkitTextStroke: "1.4px #ff8f3a" }
                : { color: "#f3f6fc" }
            }
          >
            {k.text}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
