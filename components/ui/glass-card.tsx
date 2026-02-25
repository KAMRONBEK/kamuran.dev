import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`surface-glass rounded-2xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
