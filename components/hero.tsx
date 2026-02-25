"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import { useParallax } from "./parallax-provider";
import { ParticleNetwork } from "./particle-network";

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
  const orb1 = useParallax(40);
  const orb2 = useParallax(-30);
  const heading = useParallax(12);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32 md:pt-36">
      <ParticleNetwork />

      <motion.div
        style={{ x: orb1.x, y: orb1.y }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-accent-cyan/15 blur-[150px]"
      />
      <motion.div
        style={{ x: orb2.x, y: orb2.y }}
        animate={{
          x: [0, -30, 20, 0],
          y: [0, 20, -30, 0],
        }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-32 -right-32 h-[600px] w-[600px] rounded-full bg-accent-violet/15 blur-[150px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-card-border bg-card/70 px-4 py-2 font-mono text-xs tracking-[0.24em] text-accent-cyan"
          >
            SYSTEM ONLINE
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            style={{ x: heading.x, y: heading.y }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6 text-5xl font-black tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Building
            <span className="gradient-text-glow block">high-impact products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mb-4 text-base text-muted sm:text-lg md:text-xl"
          >
            <TypingText text={personalInfo.title} delay={0.6} />
          </motion.p>
          <p className="mb-10 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            I design and ship polished mobile and web experiences with strong architecture,
            fast performance, and product-level attention to detail.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#projects"
              className="btn-glow futuristic-cta inline-flex h-12 items-center justify-center rounded-full bg-linear-to-r from-accent-cyan to-accent-violet px-8 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Explore Projects
            </a>
            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-border inline-flex h-12 items-center justify-center gap-2 rounded-full bg-card/65 px-8 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.4 11.3l16.9-7.2c.8-.3 1.5.4 1.2 1.2l-7.2 16.9c-.3.8-1.4.7-1.6-.1l-2.1-6.4-6.4-2.1c-.8-.3-.9-1.4-.1-1.7zM10.6 15.4l3.3-3.3"
                />
              </svg>
              Start a Conversation
            </a>
          </motion.div>

          <div className="flex flex-wrap gap-2">
            <span className="pill-chip px-3 py-1.5 text-xs text-muted">Next.js + React Native</span>
            <span className="pill-chip px-3 py-1.5 text-xs text-muted">Fintech, Logistics, E-commerce</span>
            <span className="pill-chip px-3 py-1.5 text-xs text-muted">UX + Performance Focused</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="surface-glass glow rounded-3xl p-6 md:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-accent-cyan">Profile Snapshot</p>
            <span className="pill-chip px-3 py-1 text-xs text-muted">Available for projects</span>
          </div>

          <h2 className="mb-1 text-2xl font-bold text-foreground">{personalInfo.name}</h2>
          <p className="mb-5 text-sm text-muted">{personalInfo.location}</p>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-card-border bg-card/70 p-4">
                <p className="text-2xl font-black text-foreground">{item.value}</p>
                <p className="mt-1 text-xs text-muted">{item.label}</p>
              </div>
            ))}
          </div>

          <a
            href={`mailto:${personalInfo.email}`}
            className="mt-6 inline-flex w-full items-center justify-center rounded-xl border border-accent-cyan/40 bg-accent-cyan/10 px-4 py-3 text-sm font-semibold text-accent-cyan transition-colors hover:bg-accent-cyan/20"
          >
            {personalInfo.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
