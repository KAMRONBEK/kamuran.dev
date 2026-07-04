"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";

export function Path() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.55", "end 0.6"],
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="path" className="relative z-[1] px-5 py-[100px] sm:px-[34px]">
      <div className="mx-auto max-w-[920px]">
        <Reveal className="mb-14">
          <SectionLabel className="mb-4">The path</SectionLabel>
          <h2 className="font-heading text-[clamp(30px,4vw,50px)] font-bold tracking-[-0.03em] text-[#f3f6fc]">
            Six years, six teams.
          </h2>
        </Reveal>

        <div ref={ref} className="relative pl-10">
          <div className="absolute bottom-1.5 left-[7px] top-1.5 w-0.5 bg-white/[0.08]" />
          <motion.div
            style={{ height: fillHeight }}
            className="absolute left-[7px] top-1.5 w-0.5 bg-gradient-to-b from-accent to-accent-deep shadow-[0_0_12px_rgba(255,143,58,0.6)]"
          />

          {experiences.map((job) => (
            <Reveal key={job.company} className="relative pb-11">
              <span className="absolute -left-10 top-1 h-4 w-4 rounded-full border-2 border-accent bg-surface animate-node-pulse" />
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <h3 className="font-heading text-[21px] font-semibold text-[#f3f6fc]">
                  {job.role} <span className="text-accent">· {job.company}</span>
                </h3>
                <span className="whitespace-nowrap font-mono text-[12px] text-muted">
                  {job.period}
                </span>
              </div>
              <ul className="my-3.5 list-disc pl-[18px] text-[14.5px] leading-[1.7] text-muted">
                {job.highlights.map((h) => (
                  <li key={h} className="mb-1.5">
                    {h}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className="whitespace-nowrap rounded-md border border-white/[0.06] bg-white/[0.035] px-2.5 py-1 font-mono text-[10.5px] text-[#9aa4b8]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
