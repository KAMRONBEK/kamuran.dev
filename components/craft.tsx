"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { craftStatement } from "@/lib/data";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";

const WORDS = craftStatement.split(" ");

export function Craft() {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    if (reduced) return;
    const next = Math.round(p * WORDS.length);
    setActive((prev) => (prev === next ? prev : next));
  });

  return (
    <section id="craft" className="relative z-[1] px-5 py-[120px] sm:px-[34px]">
      <div className="mx-auto max-w-[1040px]">
        <h2 className="sr-only">How I work</h2>
        <Reveal className="mb-10">
          <SectionLabel>How I work</SectionLabel>
        </Reveal>
        <p
          ref={ref}
          className="m-0 font-heading text-[clamp(28px,4.4vw,54px)] font-semibold leading-[1.28] tracking-[-0.02em]"
        >
          {WORDS.map((w, i) => (
            <span
              key={i}
              className="transition-colors duration-300"
              style={{ color: reduced || i < active ? "#eef2f9" : "#252e3f" }}
            >
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
