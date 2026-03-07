"use client";

import { motion } from "framer-motion";
import { personalInfo, education, languages } from "@/lib/data";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_20%,rgba(6,182,212,0.06),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Building digital experiences across platforms"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-muted"
        >
          {personalInfo.summary}
        </motion.p>

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-200 hover:border-accent-violet/30 hover:bg-white/10"
          >
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">Education</h3>
            <p className="font-medium text-foreground">{education.school}</p>
            <p className="text-sm text-muted">{education.degree}</p>
            <p className="text-sm text-muted">{education.period}</p>
            <p className="mt-3 text-sm font-medium text-accent-cyan">GPA: {education.gpa}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-200 hover:border-accent-cyan/30 hover:bg-white/10"
          >
            <h3 className="mb-4 font-heading text-xl font-semibold text-foreground">Languages</h3>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-accent-cyan">{lang.level}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
