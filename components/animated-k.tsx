"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type KVariant = {
  id: string;
  content: React.ReactNode;
};

function GradientDefs() {
  return (
    <svg width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="kg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-accent-cyan)" />
          <stop offset="100%" stopColor="var(--color-accent-violet)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const variants: KVariant[] = [
  {
    id: "bold",
    content: (
      <span className="gradient-text text-2xl font-black leading-none">
        K
      </span>
    ),
  },
  {
    id: "bracket",
    content: (
      <span className="gradient-text text-lg font-mono font-semibold leading-none">
        {"<K/>"}
      </span>
    ),
  },
  {
    id: "thin",
    content: (
      <span className="gradient-text text-2xl font-extralight leading-none tracking-widest">
        K
      </span>
    ),
  },
  {
    id: "boxed",
    content: (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-accent-cyan/40">
        <span className="gradient-text text-base font-bold leading-none">
          K
        </span>
      </span>
    ),
  },
  {
    id: "italic-serif",
    content: (
      <span className="gradient-text text-2xl font-bold italic leading-none" style={{ fontFamily: "Georgia, serif" }}>
        K
      </span>
    ),
  },
  {
    id: "tag",
    content: (
      <span className="flex items-center gap-0.5 text-lg leading-none">
        <span className="text-accent-cyan/50 font-mono">{"<"}</span>
        <span className="gradient-text font-black">K</span>
        <span className="text-accent-violet/50 font-mono">{">"}</span>
      </span>
    ),
  },
  {
    id: "underline",
    content: (
      <span className="flex flex-col items-center gap-0.5">
        <span className="gradient-text text-2xl font-bold leading-none">
          K
        </span>
        <span className="h-0.5 w-5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet" />
      </span>
    ),
  },
  {
    id: "mono",
    content: (
      <span className="gradient-text text-xl font-mono font-bold leading-none">
        K_
      </span>
    ),
  },
  {
    id: "circle",
    content: (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-accent-violet/40">
        <span className="gradient-text text-sm font-black leading-none">
          K
        </span>
      </span>
    ),
  },
  {
    id: "stacked",
    content: (
      <span className="flex flex-col items-center leading-none">
        <span className="gradient-text text-[10px] font-mono font-medium opacity-50">
          {"///"}
        </span>
        <span className="gradient-text text-xl font-black leading-none -mt-0.5">
          K
        </span>
      </span>
    ),
  },
];

export function AnimatedK() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % variants.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const variant = variants[index];

  return (
    <>
      <GradientDefs />
      <span className="relative inline-flex h-8 w-12 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={variant.id}
            className="absolute flex items-center justify-center"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {variant.content}
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
