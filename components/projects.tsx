"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./section-heading";

type Filter = "all" | "mobile" | "web";

const gradients = [
  "from-cyan-500/20 to-blue-600/20",
  "from-violet-500/20 to-purple-600/20",
  "from-emerald-500/20 to-teal-600/20",
  "from-rose-500/20 to-pink-600/20",
  "from-amber-500/20 to-orange-600/20",
  "from-sky-500/20 to-indigo-600/20",
];

const iconColors = [
  "text-cyan-400",
  "text-violet-400",
  "text-emerald-400",
  "text-rose-400",
  "text-amber-400",
  "text-sky-400",
];

function getInitials(name: string) {
  return name
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = filter === "all" ? projects : projects.filter((p) => p.type === filter);
  const mobileCount = projects.filter((p) => p.type === "mobile").length;
  const webCount = projects.filter((p) => p.type === "web").length;

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: `All (${projects.length})` },
    { key: "mobile", label: `Mobile (${mobileCount})` },
    { key: "web", label: `Web (${webCount})` },
  ];

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(139,92,246,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="All shipped applications — mobile and web"
        />

        <div className="mb-12 flex justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`cursor-pointer rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 ${
                filter === f.key
                  ? "bg-gradient-to-r from-accent-cyan to-accent-violet text-white shadow-lg shadow-accent-cyan/20"
                  : "border border-white/10 bg-white/5 text-muted hover:border-accent-cyan/30 hover:bg-white/10 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const grad = gradients[index % gradients.length];
  const iconColor = iconColors[index % iconColors.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-200 hover:border-accent-violet/30 hover:bg-white/10"
    >
      <div className={`flex h-36 items-center justify-center bg-gradient-to-br ${grad}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent)]" />
        {project.image ? (
          <img
            src={project.image}
            alt={project.name}
            className="relative h-20 w-20 rounded-xl object-cover shadow-lg ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110"
          />
        ) : (
          <div className="relative flex items-center gap-3">
            <span className={`text-4xl font-bold opacity-80 ${iconColor}`}>
              {getInitials(project.name)}
            </span>
            {project.type === "mobile" ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-4.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.794 1.716-5.278" />
              </svg>
            )}
          </div>
        )}
        <span
          className={`absolute right-3 top-3 rounded-lg px-2.5 py-1 text-xs font-medium backdrop-blur-sm ${
            project.type === "mobile"
              ? "bg-accent-cyan/20 text-accent-cyan"
              : "bg-accent-violet/20 text-accent-violet"
          }`}
        >
          {project.type === "mobile" ? "Mobile" : "Web"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">
          {project.name}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 border-t border-white/10 pt-4">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
