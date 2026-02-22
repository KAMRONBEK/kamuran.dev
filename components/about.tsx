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
          subtitle="Building digital experiences across platforms"
        />

        <BlurIn className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-muted">
          <p>{personalInfo.summary}</p>
        </BlurIn>

        <div className="grid gap-6 md:grid-cols-2">
          <ScaleIn delay={0.1}>
            <TiltCard>
              <div className="rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-accent-violet/40 hover:shadow-lg hover:shadow-accent-violet/10">
                <h3 className="mb-3 text-lg font-semibold text-foreground">Education</h3>
                <p className="font-medium text-foreground">{education.school}</p>
                <p className="text-sm text-muted">{education.degree}</p>
                <p className="text-sm text-muted">{education.period}</p>
                <p className="mt-2 text-sm font-medium text-accent-cyan">GPA: {education.gpa}</p>
              </div>
            </TiltCard>
          </ScaleIn>
          <ScaleIn delay={0.2}>
            <TiltCard>
              <div className="rounded-2xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-accent-violet/40 hover:shadow-lg hover:shadow-accent-violet/10">
                <h3 className="mb-3 text-lg font-semibold text-foreground">Languages</h3>
                <ul className="space-y-2">
                  {languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between">
                      <span className="font-medium text-foreground">{lang.name}</span>
                      <span className="text-sm text-accent-cyan">{lang.level}</span>
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
