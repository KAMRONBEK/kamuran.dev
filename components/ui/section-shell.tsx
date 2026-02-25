"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type SectionShellProps = HTMLMotionProps<"section"> & {
  children: ReactNode;
  useGrid?: boolean;
};

export function SectionShell({
  children,
  className = "",
  useGrid = false,
  ...props
}: SectionShellProps) {
  return (
    <motion.section
      className={`section-shell ${useGrid ? "section-shell-grid" : ""} ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
}
