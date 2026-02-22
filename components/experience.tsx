"use client";

import { experiences } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { FadeIn } from "./animation";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="6+ years of building production-grade applications"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent md:left-1/2 md:block md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <FadeIn key={exp.company} delay={i * 0.1}>
              <div
                className={`relative mb-12 md:mb-16 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-2 hidden h-3 w-3 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet md:block ${
                    i % 2 === 0 ? "-right-1.5" : "-left-1.5"
                  }`}
                />

                <div className="rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent-cyan/30 hover:shadow-lg hover:shadow-accent-cyan/5">
                  <p className="mb-1 font-mono text-xs text-accent-cyan">{exp.period}</p>
                  <h3 className="text-lg font-semibold text-foreground">{exp.company}</h3>
                  <p className="mb-3 text-sm text-muted">{exp.role}</p>

                  <ul className="mb-4 space-y-1.5">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-violet" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-card-border bg-background px-2.5 py-0.5 text-xs text-muted"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
