"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { useReducedMotionSafe } from "@/lib/use-reduced-motion-safe";
import { MagneticLink } from "./ui/magnetic";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  tx: number;
  ty: number;
  c: string;
  s: number;
  ph: number;
  active: boolean;
}

export function Hero() {
  const reduced = useReducedMotionSafe();
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progRef = useRef(0);

  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, (v) => (reduced ? 0 : v * 0.1));

  // ---- Particle-name canvas -------------------------------------------------
  useEffect(() => {
    if (reduced) return;
    const canvas = canvasRef.current;
    const wrap = heroRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const off = document.createElement("canvas");
    const octx = off.getContext("2d");
    if (!octx) return;

    const fam =
      getComputedStyle(canvas).getPropertyValue("--font-space-grotesk").trim() ||
      "'Space Grotesk', sans-serif";

    let W = 0;
    let H = 0;
    let lastW = -1;
    let lastH = -1;
    const particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let running = false;
    let cancelled = false;
    let visible = true;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;

    const buildParticles = () => {
      const r = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width;
      H = r.height;
      if (W === 0 || H === 0) return;
      if (W === lastW && H === lastH) return; // skip no-op rebuilds (e.g. mobile URL bar)
      lastW = W;
      lastH = H;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      off.width = W;
      off.height = H;
      octx.clearRect(0, 0, W, H);
      octx.fillStyle = "#fff";
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      const big = Math.min(W * 0.14, 168);
      octx.font = `700 ${big}px ${fam}`;
      const cx = W / 2;
      const cy = H * 0.4;
      octx.fillText(personalInfo.firstName, cx, cy - big * 0.52);
      octx.fillText(personalInfo.lastName, cx, cy + big * 0.52);

      const data = octx.getImageData(0, 0, W, H).data;
      const gap = Math.max(4, Math.round(W / 300));
      const pts: [number, number][] = [];
      for (let y = 0; y < H; y += gap) {
        for (let x = 0; x < W; x += gap) {
          if (data[(y * W + x) * 4 + 3] > 130) pts.push([x, y]);
        }
      }

      for (let i = 0; i < pts.length; i++) {
        if (!particles[i]) {
          particles[i] = {
            x: Math.random() * W,
            y: Math.random() * H,
            vx: 0,
            vy: 0,
            tx: 0,
            ty: 0,
            c:
              Math.random() < 0.24
                ? "#ff8f3a"
                : Math.random() < 0.5
                  ? "#e9eef7"
                  : "#ffd9b0",
            s: Math.random() < 0.15 ? 2.2 : 1.5,
            ph: Math.random() * 6.28,
            active: true,
          };
        }
        particles[i].tx = pts[i][0];
        particles[i].ty = pts[i][1];
        particles[i].active = true;
      }
      for (let i = pts.length; i < particles.length; i++) particles[i].active = false;
    };

    const render = () => {
      if (cancelled) {
        running = false;
        return;
      }
      const now = performance.now() * 0.001;
      ctx.clearRect(0, 0, W, H);
      const rise = progRef.current * 80;
      const alpha = Math.max(0, 1 - progRef.current * 1.4);
      if (alpha > 0) {
        ctx.globalAlpha = alpha;
        for (const p of particles) {
          if (!p.active) continue;
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < 96 && d > 0) {
            const f = (96 - d) / 96;
            p.vx += (dx / d) * f * 4.2;
            p.vy += (dy / d) * f * 4.2;
          }
          const wob = Math.sin(now * 1.25 + p.ph) * 1.15;
          p.vx += (p.tx - p.x) * 0.022;
          p.vy += (p.ty + wob - p.y) * 0.022;
          p.vx *= 0.85;
          p.vy *= 0.85;
          p.x += p.vx;
          p.y += p.vy;
          if (Math.random() < 0.0016) {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(p.x - 0.6, p.y - rise - 0.6, p.s + 1.7, p.s + 1.7);
          } else {
            ctx.fillStyle = p.c;
            ctx.fillRect(p.x, p.y - rise, p.s, p.s);
          }
        }
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (cancelled || running || !visible) return;
      running = true;
      render();
    };
    const stopLoop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      running = false;
    };

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onScroll = () => {
      progRef.current = Math.min(1, Math.max(0, window.scrollY / (wrap.offsetHeight || 1)));
    };
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(buildParticles, 150);
    };

    // Pause all physics/draw work whenever the hero is off-screen.
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) startLoop();
        else stopLoop();
      },
      { threshold: 0 }
    );
    io.observe(wrap);

    const init = () => {
      if (cancelled) return;
      buildParticles();
      onScroll();
      startLoop();
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(init);
    } else {
      fallbackTimer = setTimeout(init, 300);
    }

    return () => {
      cancelled = true;
      stopLoop();
      io.disconnect();
      clearTimeout(resizeTimer);
      clearTimeout(fallbackTimer);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [reduced]);

  return (
    <section id="top">
      <header
        ref={heroRef}
        id="hero"
        className="relative h-svh min-h-[660px] overflow-hidden"
      >
        {/* Masked grid with parallax */}
        <motion.div
          aria-hidden
          style={{
            y: gridY,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.025) 1px,transparent 1px)",
            backgroundSize: "74px 74px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 65% at 50% 42%, #000 20%, transparent 75%)",
            maskImage:
              "radial-gradient(ellipse 80% 65% at 50% 42%, #000 20%, transparent 75%)",
          }}
          className="pointer-events-none absolute inset-0"
        />

        {/* Warm top glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-10%] -translate-x-1/2"
          style={{
            width: 1000,
            height: 560,
            background: "radial-gradient(ellipse, rgba(255,143,58,0.14), transparent 66%)",
          }}
        />

        {/* Canonical heading for a11y / SEO */}
        <h1 className="sr-only">
          {personalInfo.name} — {personalInfo.title}
        </h1>

        {/* The name: particles, or a static gradient wordmark under reduced-motion */}
        {reduced ? (
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 z-[2] flex h-[80%] items-center justify-center px-5"
          >
            <span className="text-center font-heading text-[clamp(40px,12vw,150px)] font-bold leading-[0.92] tracking-[-0.03em] text-gradient-accent">
              {personalInfo.firstName}
              <br />
              {personalInfo.lastName}
            </span>
          </div>
        ) : (
          <canvas ref={canvasRef} aria-hidden className="absolute inset-0 z-[2]" />
        )}

        {/* Badge */}
        <div className="pointer-events-none absolute inset-x-0 top-[15.5%] z-[3] px-5 text-center">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-accent/30 bg-accent/[0.06] px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-accent sm:gap-2.5 sm:px-3.5 sm:text-[12px] sm:tracking-[0.24em]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {personalInfo.tagline}
          </span>
        </div>

        {/* Subtitle + CTAs */}
        <div className="absolute inset-x-0 top-[63%] z-[3] px-5 text-center">
          <p className="mx-auto max-w-[560px] text-[17px] leading-[1.6] text-[#aab4c6] sm:text-[18px]">
            I turn ideas into fast, reliable products.{" "}
            <span className="text-foreground">6+ years</span>,{" "}
            <span className="text-foreground">20+ apps</span> live on the App Store &amp;
            Google Play.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <MagneticLink
              href="#work"
              className="inline-flex items-center gap-2.5 rounded-[11px] bg-accent px-6 py-3.5 font-heading text-[15px] font-semibold text-ink transition-shadow duration-200 hover:shadow-[0_10px_30px_-8px_rgba(255,143,58,0.55)]"
            >
              See the work <span className="font-mono">→</span>
            </MagneticLink>
            <MagneticLink
              href={personalInfo.resume}
              target="_blank"
              className="inline-flex items-center gap-2.5 rounded-[11px] border border-white/12 bg-white/[0.04] px-6 py-3.5 font-heading text-[15px] font-semibold text-foreground transition-shadow duration-200 hover:shadow-[0_10px_30px_-8px_rgba(255,143,58,0.35)]"
            >
              Resume
            </MagneticLink>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="pointer-events-none absolute inset-x-0 bottom-6 z-[3] flex flex-col items-center gap-2">
          <span className="font-mono text-[10.5px] tracking-[0.3em] text-faint">SCROLL</span>
          <span className="text-[15px] text-accent animate-bob">↓</span>
        </div>
      </header>
    </section>
  );
}
