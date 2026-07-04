import { personalInfo } from "@/lib/data";
import { MagneticLink } from "./ui/magnetic";
import { Reveal } from "./ui/reveal";

export function Contact() {
  return (
    <section id="contact" className="relative z-[1] px-5 pb-[120px] pt-10 sm:px-[34px]">
      <div className="relative mx-auto max-w-[1000px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-gradient-to-b from-[#0e1526] to-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-[-120px] -translate-x-1/2"
          style={{
            width: 700,
            height: 400,
            background: "radial-gradient(ellipse, rgba(255,143,58,0.16), transparent 66%)",
          }}
        />
        <div className="relative px-6 py-[72px] text-center sm:px-10">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.06] px-3.5 py-1.5 font-mono text-[11.5px] text-accent">
              <span className="h-[7px] w-[7px] rounded-full bg-accent animate-dot-pulse" />
              Available for new work
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-[22px] font-heading text-[clamp(34px,5vw,62px)] font-bold leading-[1.04] tracking-[-0.03em] text-[#f3f6fc]">
              Let&apos;s build something
              <br />
              that ships.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-[22px] max-w-[480px] text-[17px] leading-[1.6] text-[#9aa4b8]">
              Got a product to build or a team to strengthen? I&apos;m quick to reply and easy
              to work with.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <MagneticLink
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2.5 rounded-[11px] bg-accent px-6 py-[15px] font-heading text-[15px] font-semibold text-ink transition-shadow duration-200 hover:shadow-[0_10px_30px_-8px_rgba(255,143,58,0.55)]"
              >
                {personalInfo.email}
              </MagneticLink>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-6 font-mono text-[13px]">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-muted transition-colors duration-200 hover:text-accent"
              >
                GitHub ↗
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center text-muted transition-colors duration-200 hover:text-accent"
              >
                LinkedIn ↗
              </a>
              <span className="text-faint">
                {personalInfo.location} · {personalInfo.timezone}
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-[34px] flex max-w-[1000px] flex-wrap items-center justify-between gap-4 font-mono text-[11.5px] text-faint">
        <span>© 2026 {personalInfo.name}</span>
        <span>Designed &amp; built with obsessive attention to detail.</span>
      </div>
    </section>
  );
}
