"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { StaggerContainer, StaggerItem } from "./animation";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="A curated selection from 20+ shipped applications"
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.name}>
              <div className="group relative flex h-full flex-col rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent-violet/30 hover:shadow-lg hover:shadow-accent-violet/5">
                {/* Type badge */}
                <span
                  className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    project.type === "mobile"
                      ? "bg-accent-cyan/10 text-accent-cyan"
                      : "bg-accent-violet/10 text-accent-violet"
                  }`}
                >
                  {project.type === "mobile" ? "Mobile App" : "Web App"}
                </span>

                <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent-cyan">
                  {project.name}
                </h3>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-card-border bg-background px-2.5 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
