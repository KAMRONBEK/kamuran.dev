"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { useParallax } from "./parallax-provider";

type Filter = "all" | "mobile" | "web";

export function Projects() {
  const orb = useParallax(30);
  const cards = useParallax(4);
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
      <motion.div
        style={{ x: orb.x, y: orb.y }}
        className="pointer-events-none absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-accent-violet/5 blur-[100px]"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="All shipped applications — mobile and web"
        />

        {/* Filter tabs */}
        <div className="mb-10 flex justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === f.key
                  ? "bg-gradient-to-r from-accent-cyan to-accent-violet text-white"
                  : "border border-card-border text-muted hover:border-accent-cyan/30 hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div style={{ x: cards.x, y: cards.y }} className="h-full">
                  <div className="group relative flex h-full flex-col rounded-2xl border border-card-border bg-card p-6 transition-all hover:border-accent-violet/30 hover:shadow-lg hover:shadow-accent-violet/5">
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

                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-card-border bg-background px-2.5 py-0.5 text-xs text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 border-t border-card-border pt-4">
                        {project.links.map((link) => (
                          <a
                            key={link.url}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-cyan transition-colors hover:text-foreground"
                          >
                            <LinkIcon type={link.label} />
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function LinkIcon({ type }: { type: string }) {
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
