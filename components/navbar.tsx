"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/lib/data";
import { AnimatedK } from "./animated-k";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full px-4 pt-4"
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 md:px-6 ${
          scrolled
            ? "border-card-border bg-background/80 shadow-[0_14px_34px_-22px_rgba(34,211,238,0.7)] backdrop-blur-xl"
            : "border-slate-400/15 bg-background/55 backdrop-blur-lg"
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-card-border bg-card/70">
            <AnimatedK />
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:block">
            Kamronbek Juraev
          </span>
        </a>

        <ul className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="pill-chip inline-flex items-center px-4 py-2 text-sm text-muted transition-all hover:-translate-y-0.5 hover:border-accent-cyan/50 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={personalInfo.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow futuristic-cta inline-flex h-10 items-center gap-1.5 rounded-full bg-linear-to-r from-accent-cyan to-accent-violet px-5 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.4 11.3l16.9-7.2c.8-.3 1.5.4 1.2 1.2l-7.2 16.9c-.3.8-1.4.7-1.6-.1l-2.1-6.4-6.4-2.1c-.8-.3-.9-1.4-.1-1.7zM10.6 15.4l3.3-3.3"
                />
              </svg>
              Telegram
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-card-border bg-card/70 md:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-foreground"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-foreground"
          />
        </button>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-x-4 top-20 z-40 rounded-2xl border border-card-border bg-background/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col gap-3">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="pill-chip block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:border-accent-cyan/45 hover:text-accent-cyan"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <a
                    href={personalInfo.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="btn-glow mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-accent-cyan to-accent-violet px-4 py-3 text-base font-semibold text-slate-950"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.4 11.3l16.9-7.2c.8-.3 1.5.4 1.2 1.2l-7.2 16.9c-.3.8-1.4.7-1.6-.1l-2.1-6.4-6.4-2.1c-.8-.3-.9-1.4-.1-1.7zM10.6 15.4l3.3-3.3"
                      />
                    </svg>
                    Telegram
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
