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
    <BlurIn className="mb-12 text-center md:mb-16">
      <div className="mb-4 flex items-center justify-center gap-3">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent-cyan" />
        <span className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
          {title}
        </span>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent-cyan" />
      </div>
      <h2 className="gradient-text-glow mb-3 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-lg text-muted">{subtitle}</p>
      )}
    </BlurIn>
  );
}
