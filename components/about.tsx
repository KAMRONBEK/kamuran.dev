"use client";

import { motion } from "framer-motion";
import { personalInfo, education, languages } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { BlurIn, ScaleIn } from "./animation";
import { useParallax } from "./parallax-provider";
import { TiltCard } from "./tilt-card";

export function About() {
  const orb = useParallax(25);

  return (
    <section id="about" className="grid-bg relative overflow-hidden px-6 py-24 md:py-32">
      <motion.div
        style={{ x: orb.x, y: orb.y }}
        className="pointer-events-none absolute -right-60 top-20 h-[400px] w-[400px] rounded-full bg-accent-cyan/8 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Product-minded engineering with clean architecture and premium UX"
        />

        <BlurIn className="mx-auto mb-12 max-w-3xl text-center text-base leading-relaxed text-slate-300 md:text-lg">
          <p>{personalInfo.summary}</p>
        </BlurIn>

        <div className="grid gap-6 md:grid-cols-2">
          <ScaleIn delay={0.1}>
            <TiltCard>
              <div className="surface-glass h-full rounded-3xl p-6 transition-all duration-300 hover:border-accent-violet/35">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-accent-cyan">
                  Education
                </p>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{education.school}</h3>
                <p className="text-sm text-muted">{education.degree}</p>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.18em] text-muted">{education.period}</p>
                  <span className="pill-chip px-3 py-1 text-xs font-medium text-accent-cyan">
                    GPA {education.gpa}
                  </span>
                </div>
              </div>
            </TiltCard>
          </ScaleIn>
          <ScaleIn delay={0.2}>
            <TiltCard>
              <div className="surface-glass h-full rounded-3xl p-6 transition-all duration-300 hover:border-accent-cyan/35">
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-accent-violet">
                  Languages
                </p>
                <ul className="space-y-3">
                  {languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="rounded-xl border border-card-border bg-card/60 px-4 py-3"
                    >
                      <p className="text-sm font-semibold text-foreground">{lang.name}</p>
                      <p className="mt-1 text-xs text-muted">{lang.level}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          </ScaleIn>
        </div>
      </div>
    </section>
  );
}
