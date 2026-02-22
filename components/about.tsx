"use client";

import { personalInfo, stats, education, languages } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "./animation";

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Building digital experiences across platforms"
        />

        <FadeIn className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-muted">
          <p>{personalInfo.summary}</p>
        </FadeIn>

        {/* Stats */}
        <StaggerContainer className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="glow rounded-2xl border border-card-border bg-card p-6 text-center">
                <p className="gradient-text text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Education & Languages */}
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-card-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Education</h3>
              <p className="font-medium text-foreground">{education.school}</p>
              <p className="text-sm text-muted">{education.degree}</p>
              <p className="text-sm text-muted">{education.period}</p>
              <p className="mt-2 text-sm text-accent-cyan">GPA: {education.gpa}</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="rounded-2xl border border-card-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Languages</h3>
              <ul className="space-y-2">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{lang.name}</span>
                    <span className="text-sm text-muted">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
