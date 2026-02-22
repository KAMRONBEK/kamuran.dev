"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "./animation";
import { useParallax } from "./parallax-provider";

export function Skills() {
  const orb = useParallax(20);
  const cards = useParallax(5);

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:py-32">
      <motion.div
        style={{ x: orb.x, y: orb.y }}
        className="pointer-events-none absolute -left-40 bottom-10 h-[350px] w-[350px] rounded-full bg-accent-cyan/5 blur-[100px]"
      />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies I work with daily"
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <StaggerItem key={cat.name}>
              <FadeIn delay={i * 0.1}>
                <motion.div style={{ x: cards.x, y: cards.y }}>
                  <div className="rounded-2xl border border-card-border bg-card p-6">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-violet">
                      {cat.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-card-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent-cyan/50 hover:text-accent-cyan"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
