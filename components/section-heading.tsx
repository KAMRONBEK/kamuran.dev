"use client";

import { FadeIn } from "./animation";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <FadeIn className="mb-12 text-center md:mb-16">
      <h2 className="gradient-text mb-3 text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-lg text-muted">{subtitle}</p>
      )}
    </FadeIn>
  );
}
