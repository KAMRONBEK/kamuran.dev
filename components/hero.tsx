"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <ParticleNetwork />

      {/* Gradient orbs with autonomous drift */}
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

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="mb-4 font-mono text-sm tracking-widest text-accent-cyan"
        >
          &lt;Hello World /&gt;
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          style={{ x: heading.x, y: heading.y }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="gradient-text-glow mb-4 text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mb-10 text-lg text-muted sm:text-xl md:text-2xl"
        >
          <TypingText text={personalInfo.title} delay={0.6} />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="btn-glow inline-flex h-12 items-center rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet px-8 text-sm font-medium text-white transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={personalInfo.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-border btn-glow inline-flex h-12 items-center gap-2 rounded-full px-8 text-sm font-medium text-foreground transition-all hover:scale-105 hover:bg-card"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.4 11.3l16.9-7.2c.8-.3 1.5.4 1.2 1.2l-7.2 16.9c-.3.8-1.4.7-1.6-.1l-2.1-6.4-6.4-2.1c-.8-.3-.9-1.4-.1-1.7zM10.6 15.4l3.3-3.3"
              />
            </svg>
            @kamuranizer
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
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
