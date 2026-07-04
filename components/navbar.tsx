"use client";

import { useEffect, useState } from "react";
import { navSections, personalInfo } from "@/lib/data";
import { MagneticLink } from "./ui/magnetic";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 40);

      // Scrollspy: the most-recently-entered section — the crossed one whose top
      // is closest to the 40% line. Order-independent (navSections is not in DOM order).
      const vh = window.innerHeight;
      let current = "";
      let best = -Infinity;
      for (const s of navSections) {
        const el = document.getElementById(s.href.slice(1));
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top < vh * 0.4 && top > best) {
          best = top;
          current = s.href.slice(1);
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-60 flex items-center justify-between gap-4 px-5 transition-all duration-300 sm:px-8 ${
        scrolled
          ? "border-b border-white/10 bg-background/85 py-3 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-4"
      }`}
    >
      {/* Brand */}
      <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-accent to-accent-deep font-heading text-[14px] font-bold text-ink shadow-[0_4px_14px_-4px_rgba(255,143,58,0.6)]">
          {personalInfo.initials}
        </span>
        <span className="font-heading text-[15px] font-semibold tracking-[-0.01em]">
          {personalInfo.name}
        </span>
      </a>

      {/* Center nav */}
      <div className="hidden items-center gap-1 font-mono text-[12.5px] md:flex">
        {navSections.map((s) => {
          const isActive = active === s.href.slice(1);
          return (
            <a
              key={s.href}
              href={s.href}
              aria-current={isActive ? "location" : undefined}
              className={`rounded-md px-3 py-2 transition-colors duration-200 hover:text-foreground ${
                isActive ? "font-medium text-accent" : "text-muted"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </div>

      {/* Right cluster */}
      <div className="flex items-center gap-3.5">
        <span className="hidden items-center gap-2 font-mono text-[11.5px] text-muted sm:flex">
          <span className="h-2 w-2 rounded-full bg-accent animate-dot-pulse" />
          Available
        </span>
        <MagneticLink
          href="#contact"
          className="rounded-lg bg-accent px-4 py-2 font-mono text-[12.5px] font-medium text-ink transition-shadow duration-200 hover:shadow-[0_10px_30px_-8px_rgba(255,143,58,0.55)]"
        >
          Get in touch
        </MagneticLink>
      </div>
    </nav>
  );
}
