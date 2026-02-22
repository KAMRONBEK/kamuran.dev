"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useParallax } from "./parallax-provider";

export function Hero() {
  const orb1 = useParallax(40);
  const orb2 = useParallax(-30);
  const heading = useParallax(12);
  const subtitle = useParallax(6);

  return (
    <section className="dot-pattern relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Parallax gradient orbs */}
      <motion.div
        style={{ x: orb1.x, y: orb1.y }}
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-accent-cyan/10 blur-[120px]"
      />
      <motion.div
        style={{ x: orb2.x, y: orb2.y }}
        className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent-violet/10 blur-[120px]"
      />

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 font-mono text-sm tracking-widest text-muted"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ x: heading.x, y: heading.y }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="gradient-text mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ x: subtitle.x, y: subtitle.y }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 text-lg text-muted sm:text-xl md:text-2xl"
        >
          {personalInfo.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex h-12 items-center rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet px-8 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="gradient-border inline-flex h-12 items-center rounded-full px-8 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-muted">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-muted">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
              <motion.circle
                cx="8" cy="8" r="2" fill="currentColor"
                animate={{ cy: [8, 14, 8] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
