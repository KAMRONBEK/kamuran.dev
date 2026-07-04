"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { featuredApps, moreAppsCount, type FeaturedApp } from "@/lib/data";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";
import { SectionLabel } from "./ui/section-label";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function WorkHeader({ hint }: { hint: string }) {
  return (
    <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-end justify-between gap-5 px-5 pb-[26px] sm:px-[34px]">
      <div>
        <SectionLabel className="mb-4">Selected work</SectionLabel>
        <h2 className="font-heading text-[clamp(30px,4vw,50px)] font-bold tracking-[-0.03em] text-[#f3f6fc]">
          Apps in production.
        </h2>
      </div>
      <p className="m-0 max-w-[320px] text-[14.5px] leading-[1.55] text-muted">{hint}</p>
    </div>
  );
}

function WorkCard({
  app,
  index,
  total,
  className,
  tilt = false,
}: {
  app: FeaturedApp;
  index: number;
  total: number;
  className?: string;
  /** Enable the pointer-driven 3D tilt (desktop track only, not touch carousel). */
  tilt?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 7}deg) rotateY(${
      (px - 0.5) * 7
    }deg) translateY(-6px)`;
    card.style.borderColor = "rgba(255,143,58,0.42)";
    const glow = glowRef.current;
    if (glow) {
      glow.style.left = `${px * 100 - 30}%`;
      glow.style.top = `${py * 100 - 40}%`;
      glow.style.right = "auto";
    }
  }

  function handleLeave() {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    card.style.borderColor = "";
    const glow = glowRef.current;
    if (glow) {
      glow.style.left = "";
      glow.style.top = "";
      glow.style.right = "";
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={tilt ? handleMove : undefined}
      onMouseLeave={tilt ? handleLeave : undefined}
      className={`relative flex flex-col overflow-hidden rounded-[20px] border border-white/[0.08] bg-gradient-to-b from-[#0e1524] to-surface p-[30px] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)] transition-[transform,border-color] duration-200 ${
        className ?? ""
      }`}
    >
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none absolute h-[340px] w-[340px] rounded-full"
        style={{
          top: "-40%",
          right: "-20%",
          background: "radial-gradient(circle, rgba(255,143,58,0.12), transparent 62%)",
        }}
      />

      <div className="flex items-start justify-between">
        <Image
          src={app.image}
          alt={`${app.name} app icon`}
          width={76}
          height={76}
          className="h-[76px] w-[76px] rounded-[18px] border border-white/[0.09] object-cover shadow-[0_12px_28px_-10px_rgba(0,0,0,0.8)]"
        />
        <span className="font-mono text-[12px] text-muted">
          {pad(index + 1)} / {pad(total)}
        </span>
      </div>

      <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
        {app.kind}
      </div>
      <h3 className="mt-2 font-heading text-[32px] font-bold tracking-[-0.02em] text-[#f3f6fc]">
        {app.name}
      </h3>
      <p className="mt-3.5 flex-1 text-[15px] leading-[1.6] text-muted">{app.blurb}</p>

      <div className="my-5 flex flex-wrap gap-1.5">
        {app.tech.map((t) => (
          <span
            key={t}
            className="whitespace-nowrap rounded-[7px] border border-white/[0.06] bg-white/[0.035] px-2.5 py-[5px] font-mono text-[10.5px] text-[#9aa4b8]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {app.links.map((lk) => (
          <a
            key={lk.label}
            href={lk.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-accent/[0.28] bg-accent/[0.06] px-3 py-2 font-mono text-[11.5px] font-medium text-accent transition-colors duration-200 hover:bg-accent/[0.14]"
          >
            {lk.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}

function MoreCard({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[20px] border border-dashed border-white/[0.14] p-[30px] text-center ${
        className ?? ""
      }`}
    >
      <div className="font-heading text-[48px] font-bold text-accent">+{moreAppsCount}</div>
      <div className="mt-2 text-[15px] text-muted">
        more apps shipped across
        <br />
        fintech, logistics &amp; retail
      </div>
      <a
        href="#morework"
        className="mt-[22px] rounded-lg border border-white/12 bg-white/[0.05] px-[18px] py-2.5 font-mono text-[12px] text-foreground transition-shadow duration-200 hover:shadow-[0_10px_30px_-8px_rgba(255,143,58,0.4)]"
      >
        See the full list ↓
      </a>
    </div>
  );
}

export function Work() {
  const reduced = useReducedMotionSafe();
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      // Only meaningful when the desktop track is actually laid out (md+).
      const extra = Math.max(0, track.scrollWidth - window.innerWidth + 68);
      setMaxX(extra);
    };
    measure();
    window.addEventListener("resize", measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="work" className="relative z-[1]">
      {/* Desktop: pinned horizontal gallery (motion-driven; skipped under reduced-motion
          and on short viewports via the .work-pinned media rule). */}
      <div className={`work-pinned ${reduced ? "hidden" : "hidden md:block"}`}>
        <div
          ref={wrapRef}
          className="relative"
          style={{ height: `calc(100vh + ${maxX}px)` }}
        >
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <WorkHeader hint="Keep scrolling — the shelf moves sideways. Real products, live links." />
            <div className="overflow-hidden py-2.5">
              <motion.div
                ref={trackRef}
                style={{ x }}
                className="flex w-max gap-[26px] px-[34px] will-change-transform"
              >
                {featuredApps.map((app, i) => (
                  <WorkCard
                    key={app.name}
                    app={app}
                    index={i}
                    total={featuredApps.length}
                    tilt
                    className="w-[430px] flex-[0_0_430px]"
                  />
                ))}
                <MoreCard className="w-[430px] flex-[0_0_430px]" />
              </motion.div>
            </div>
            <div className="mx-auto mt-[30px] w-full max-w-[1240px] px-[34px]">
              <div className="h-[3px] overflow-hidden rounded-[3px] bg-white/[0.08]">
                <motion.div
                  style={{ width: barWidth }}
                  className="h-full rounded-[3px] bg-gradient-to-r from-accent to-accent-deep"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (and reduced-motion / short-viewport desktop): swipeable carousel */}
      <div className={`work-carousel px-5 pb-6 pt-16 ${reduced ? "block" : "md:hidden"}`}>
        <WorkHeader hint="Swipe through — real products, live links." />
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {featuredApps.map((app, i) => (
            <WorkCard
              key={app.name}
              app={app}
              index={i}
              total={featuredApps.length}
              className="w-[82vw] max-w-[360px] flex-[0_0_82vw] snap-start"
            />
          ))}
          <MoreCard className="w-[82vw] max-w-[360px] flex-[0_0_82vw] snap-start" />
        </div>
      </div>
    </section>
  );
}
