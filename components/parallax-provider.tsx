"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface ParallaxContext {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}

const Ctx = createContext<ParallaxContext | null>(null);

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  function handleMouseMove(e: React.MouseEvent) {
    mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
    mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
  }

  return (
    <Ctx.Provider value={{ smoothX, smoothY }}>
      <div onMouseMove={handleMouseMove}>{children}</div>
    </Ctx.Provider>
  );
}

export function useParallax(intensity: number = 10) {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useParallax must be used within ParallaxProvider");

  const x = useTransform(ctx.smoothX, [-1, 1], [intensity, -intensity]);
  const y = useTransform(ctx.smoothY, [-1, 1], [intensity, -intensity]);
  return { x, y };
}
