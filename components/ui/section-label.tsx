import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
}

/** Mono eyebrow label with a leading accent rule — used above section headings. */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3.5 font-mono text-xs uppercase tracking-[0.2em] text-accent ${
        className ?? ""
      }`}
    >
      <span className="h-px w-[30px] bg-accent" />
      {children}
    </div>
  );
}
