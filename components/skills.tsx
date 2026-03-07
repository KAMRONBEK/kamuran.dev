"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Mobile: "border-cyan-500/30 text-cyan-400",
  Frontend: "border-violet-500/30 text-violet-400",
  Languages: "border-emerald-500/30 text-emerald-400",
  "State Management": "border-amber-500/30 text-amber-400",
  "APIs & Real-time": "border-rose-500/30 text-rose-400",
  "Maps & Location": "border-sky-500/30 text-sky-400",
  "Backend & Cloud": "border-teal-500/30 text-teal-400",
  "Testing & Quality": "border-pink-500/30 text-pink-400",
  "DevOps & Tools": "border-indigo-500/30 text-indigo-400",
};

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_20%,rgba(6,182,212,0.05),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-cyan" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
              Skills
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>
          <h2 className="font-heading gradient-text-glow mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Skills
          </h2>
          <p className="mx-auto max-w-lg text-muted">Technologies I work with daily</p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => {
            const colors = categoryColors[cat.name] || "border-accent-cyan/30 text-accent-cyan";
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.05 }}
              >
                <h3 className={`mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest ${colors}`}>
                  <span className="h-px flex-1 bg-gradient-to-r from-current to-transparent opacity-30" />
                  {cat.name}
                  <span className="h-px flex-1 bg-gradient-to-l from-current to-transparent opacity-30" />
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIdx * 0.05 + i * 0.02 }}
                      className={`cursor-default rounded-xl border bg-white/5 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-200 hover:border-accent-cyan/40 hover:bg-white/10 hover:text-accent-cyan ${colors}`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
