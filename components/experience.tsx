"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { experiences } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { useParallax } from "./parallax-provider";
import { TiltCard } from "./tilt-card";
import { GlassCard } from "./ui/glass-card";
import { SectionShell } from "./ui/section-shell";

function TimelineNode({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`absolute top-2 hidden h-4 w-4 md:block ${
        index % 2 === 0 ? "-right-2" : "-left-2"
      }`}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        className="h-full w-full rounded-full bg-linear-to-br from-accent-cyan to-accent-violet timeline-node-pulse"
      />
    </div>
  );
}

export function Experience() {
  const orb = useParallax(-20);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <SectionShell id="experience">
      <motion.div
        style={{ x: orb.x, y: orb.y }}
        className="pointer-events-none absolute -left-60 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-violet/8 blur-[100px]"
      />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="6+ years of building production-grade applications"
        />

        <div ref={containerRef} className="relative">
          {/* Static track */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-card-border md:left-1/2 md:block md:-translate-x-px" />
          {/* Animated fill */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 hidden w-px bg-linear-to-b from-accent-cyan via-accent-violet to-accent-cyan md:left-1/2 md:block md:-translate-x-px"
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className={`relative mb-12 md:mb-16 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <TimelineNode index={i} />

                <TiltCard>
                  <GlassCard>
                    <p className="mb-1 font-mono text-xs text-accent-cyan">
                      {exp.period}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.company}
                    </h3>
                    <p className="mb-3 text-sm text-accent-violet">
                      {exp.role}
                    </p>

                    <ul className="mb-4 space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-linear-to-br from-accent-cyan to-accent-violet" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="pill-chip px-2.5 py-0.5 text-xs text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </TiltCard>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
