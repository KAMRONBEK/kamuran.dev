"use client";

import { BlurIn } from "./animation";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <BlurIn className="mb-14 text-center md:mb-16">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span className="h-2 w-2 rounded-full bg-accent-cyan shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
        <span className="pill-chip px-3 py-1 font-mono text-[10px] uppercase tracking-[0.26em] text-accent-cyan">
          {title}
        </span>
        <span className="h-2 w-2 rounded-full bg-accent-violet shadow-[0_0_14px_rgba(167,139,250,0.8)]" />
      </div>
      <h2 className="gradient-text-glow mb-3 text-3xl font-black tracking-tight md:text-5xl">
        {title}
      </h2>
      {subtitle && <p className="mx-auto max-w-2xl text-sm text-muted md:text-base">{subtitle}</p>}
    </BlurIn>
  );
}
