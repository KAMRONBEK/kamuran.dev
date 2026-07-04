"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { counters, type Counter } from "@/lib/data";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";

function CounterCell({ counter }: { counter: Counter }) {
  const reduced = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const [animated, setAnimated] = useState(0);

  useEffect(() => {
    if (reduced || !inView) return;
    let raf = 0;
    const duration = 1400;
    const startTime = performance.now();
    const step = (t: number) => {
      const p = Math.min(1, (t - startTime) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setAnimated(Math.round(counter.value * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, counter.value]);

  // Reduced-motion (and the server / first client render) show the final value
  // directly; otherwise show the animated count-up.
  const display = reduced ? counter.value : animated;

  return (
    <div ref={ref} className="bg-surface px-6 py-[30px] sm:px-[26px]">
      <div className="font-heading text-[clamp(34px,4vw,54px)] font-bold leading-none tracking-[-0.03em] text-[#f3f6fc]">
        {display}
        {counter.suffix}
      </div>
      <div className="mt-[9px] font-mono text-[11.5px] tracking-[0.06em] text-muted">
        {counter.label}
      </div>
    </div>
  );
}

export function Counters() {
  return (
    <section
      id="stats"
      className="relative z-[1] mx-auto mb-5 mt-20 max-w-[1240px] px-5 sm:px-[34px]"
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
        {counters.map((c) => (
          <CounterCell key={c.label} counter={c} />
        ))}
      </div>
    </section>
  );
}
