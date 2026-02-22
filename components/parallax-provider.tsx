"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

interface ParallaxContext {
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

const Ctx = createContext<ParallaxContext | null>(null);

export function ParallaxProvider({ children }: { children: ReactNode }) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  function handleMouseMove(e: React.MouseEvent) {
    rawX.set((e.clientX / window.innerWidth - 0.5) * 2);
    rawY.set((e.clientY / window.innerHeight - 0.5) * 2);
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }

  return (
    <Ctx.Provider value={{ smoothX, smoothY, mouseX, mouseY }}>
      <div onMouseMove={handleMouseMove} className="relative">
        {children}
        <CursorGlow mouseX={mouseX} mouseY={mouseY} />
      </div>
    </Ctx.Provider>
  );
}

function CursorGlow({ mouseX, mouseY }: { mouseX: MotionValue<number>; mouseY: MotionValue<number> }) {
  const springCfg = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springCfg);
  const y = useSpring(mouseY, springCfg);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 hidden md:block"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, rgba(139, 92, 246, 0.04) 40%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
}

export function useParallax(intensity: number = 10) {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useParallax must be used within ParallaxProvider");

  const x = useTransform(ctx.smoothX, [-1, 1], [intensity, -intensity]);
  const y = useTransform(ctx.smoothY, [-1, 1], [intensity, -intensity]);
  return { x, y };
}
