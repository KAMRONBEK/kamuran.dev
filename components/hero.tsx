"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";

function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[2px] h-[1em] ml-0.5 bg-accent-cyan align-middle"
      />
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Animated gradient mesh - Stitch-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent-violet/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_100%_50%,rgba(139,92,246,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_0%_100%,rgba(6,182,212,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:items-center md:justify-between md:gap-16 lg:gap-24">
        {/* Left: Content - Stitch split layout */}
        <div className="flex flex-1 flex-col text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 font-mono text-sm font-medium uppercase tracking-[0.4em] text-accent-cyan"
          >
            Available for new projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mb-8 max-w-xl text-lg text-muted sm:text-xl md:text-2xl"
          >
            <TypingText text={personalInfo.title} delay={0.4} />
            {" "}
            crafting seamless mobile experiences with performance and precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center gap-4 sm:flex-row md:items-start"
          >
            <a
              href="#projects"
              className="cursor-pointer inline-flex h-14 items-center gap-2 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-violet px-8 text-base font-semibold text-white shadow-lg shadow-accent-cyan/25 transition-all duration-200 hover:shadow-xl hover:shadow-accent-cyan/30 hover:translate-y-[-2px]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
              </svg>
              View Work
            </a>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex h-14 items-center gap-2 rounded-2xl border-2 border-white/20 bg-white/5 px-8 text-base font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:border-accent-cyan/50 hover:bg-white/10"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </a>
          </motion.div>

          {/* Stats - Stitch-style cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 md:mt-20"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm transition-all duration-200 hover:border-accent-cyan/30 hover:bg-white/10"
              >
                <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Abstract visual - Stitch split layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative hidden flex-1 md:block"
        >
          <div className="relative aspect-square max-w-md lg:max-w-lg">
            {/* Gradient orb */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-cyan/20 via-accent-violet/10 to-transparent blur-3xl" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-violet/20 via-transparent to-accent-cyan/10 blur-2xl" />
            {/* Geometric shape */}
            <div className="absolute inset-8 flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <div className="grid grid-cols-3 gap-2 p-8">
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="aspect-square rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-violet/20"
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
              cx="8"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ cy: [8, 14, 8] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
