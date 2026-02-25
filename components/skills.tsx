"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeading } from "./section-heading";
import { useParallax } from "./parallax-provider";
import { SectionShell } from "./ui/section-shell";

const categoryColors: Record<
  string,
  { border: string; glow: string; text: string }
> = {
  Mobile: {
    border: "border-cyan-500/30",
    glow: "hover:shadow-cyan-500/20",
    text: "text-cyan-400",
  },
  Frontend: {
    border: "border-violet-500/30",
    glow: "hover:shadow-violet-500/20",
    text: "text-violet-400",
  },
  Languages: {
    border: "border-emerald-500/30",
    glow: "hover:shadow-emerald-500/20",
    text: "text-emerald-400",
  },
  "Tools & Services": {
    border: "border-amber-500/30",
    glow: "hover:shadow-amber-500/20",
    text: "text-amber-400",
  },
};

const defaultColor = {
  border: "border-accent-cyan/30",
  glow: "hover:shadow-accent-cyan/20",
  text: "text-accent-cyan",
};

export function Skills() {
  const orb = useParallax(20);

  return (
    <SectionShell id="skills">
      <motion.div
        style={{ x: orb.x, y: orb.y }}
        className="pointer-events-none absolute -left-40 bottom-10 h-[350px] w-[350px] rounded-full bg-accent-cyan/8 blur-[100px]"
      />

      <div className="mx-auto max-w-4xl">
        <SectionHeading
          title="Skills"
          subtitle="Technologies I work with daily"
        />

        <div className="space-y-10">
          {skillCategories.map((cat, catIdx) => {
            const colors = categoryColors[cat.name] || defaultColor;
            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.6,
                  delay: catIdx * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h3
                  className={`mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest ${colors.text}`}
                >
                  <span className="h-px flex-1 bg-linear-to-r from-current to-transparent opacity-30" />
                  {cat.name}
                  <span className="h-px flex-1 bg-linear-to-l from-current to-transparent opacity-30" />
                </h3>

                <div className="flex flex-wrap justify-center gap-3">
                  {cat.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIdx * 0.08 + i * 0.04,
                      }}
                      className={`pill-chip skill-chip cursor-default border ${colors.border} bg-card px-4 py-2 text-sm font-medium text-foreground hover:shadow-lg ${colors.glow}`}
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
    </SectionShell>
  );
}
