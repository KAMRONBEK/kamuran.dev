"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { useParallax } from "./parallax-provider";
import { TiltCard } from "./tilt-card";

type Filter = "all" | "mobile" | "web";

const gradients = [
  "from-cyan-500/20 to-blue-600/20",
  "from-violet-500/20 to-purple-600/20",
  "from-emerald-500/20 to-teal-600/20",
  "from-rose-500/20 to-pink-600/20",
  "from-amber-500/20 to-orange-600/20",
  "from-sky-500/20 to-indigo-600/20",
  "from-fuchsia-500/20 to-rose-600/20",
  "from-teal-500/20 to-cyan-600/20",
];

const iconColors = [
  "text-cyan-400",
  "text-violet-400",
  "text-emerald-400",
  "text-rose-400",
  "text-amber-400",
  "text-sky-400",
  "text-fuchsia-400",
  "text-teal-400",
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
  const orb = useParallax(30);
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
    <section id="projects" className="grid-bg relative overflow-hidden px-6 py-24 md:py-32">
      <motion.div
        style={{ x: orb.x, y: orb.y }}
        className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-accent-violet/8 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="All shipped applications — mobile and web"
        />

        <div className="mb-10 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === f.key
                  ? "btn-glow bg-gradient-to-r from-accent-cyan to-accent-violet text-white"
                  : "border border-card-border text-muted hover:border-accent-cyan/30 hover:text-foreground"
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

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const grad = gradients[index % gradients.length];
  const iconColor = iconColors[index % iconColors.length];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.03 }}
    >
      <TiltCard className="h-full">
        <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-card-border bg-card transition-all duration-300 hover:border-accent-violet/40 hover:shadow-lg hover:shadow-accent-violet/10">
          <div
            className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${grad} overflow-hidden`}
          >
            <div className="absolute inset-0 dot-pattern opacity-40" />

            {project.image ? (
              <div className="relative flex items-center justify-center py-4">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-24 w-24 rounded-2xl object-cover shadow-lg ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ) : (
              <div className="relative flex items-center gap-3">
                <span className={`text-5xl font-bold opacity-80 transition-transform duration-300 group-hover:scale-110 ${iconColor}`}>
                  {getInitials(project.name)}
                </span>
                <div className={`${iconColor} opacity-60`}>
                  {project.type === "mobile" ? <PhoneIcon /> : <GlobeIcon />}
                </div>
              </div>
            )}

            <span
              className={`absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-medium backdrop-blur-sm ${
                project.type === "mobile"
                  ? "bg-accent-cyan/20 text-accent-cyan"
                  : "bg-accent-violet/20 text-accent-violet"
              }`}
            >
              {project.type === "mobile" ? "Mobile" : "Web"}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-5">
            <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-accent-cyan">
              {project.name}
            </h3>

            <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-card-border bg-background px-2 py-0.5 text-xs text-muted"
                >
                  {t}
                </span>
              ))}
            </div>

            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-3 border-t border-card-border pt-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan transition-colors hover:text-foreground"
                  >
                    <StoreLinkIcon type={link.label} />
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-4.247m0 0A8.966 8.966 0 013 12c0-1.97.633-3.794 1.716-5.278" />
    </svg>
  );
}

function StoreLinkIcon({ type }: { type: string }) {
  if (type === "iOS") {
    return (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    );
  }
  if (type === "Android") {
    return (
      <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.523 15.341a.996.996 0 0 0 0-1.992.996.996 0 0 0 0 1.992m-11.046 0a.996.996 0 0 0 0-1.992.996.996 0 0 0 0 1.992m11.405-6.02 1.997-3.46a.416.416 0 0 0-.152-.567.416.416 0 0 0-.567.152L17.14 8.95a12.26 12.26 0 0 0-5.14-1.1 12.26 12.26 0 0 0-5.14 1.1L4.84 5.446a.416.416 0 0 0-.567-.152.416.416 0 0 0-.152.567l1.997 3.46C2.688 11.186.343 14.654 0 18.761h24c-.344-4.107-2.689-7.575-6.118-9.44" />
      </svg>
    );
  }
  return (
    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  );
}
