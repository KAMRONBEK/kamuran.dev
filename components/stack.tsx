import { skillGroups } from "@/lib/data";
import { SectionLabel } from "./ui/section-label";
import { Reveal } from "./ui/reveal";

export function Stack() {
  return (
    <section id="stack" className="relative z-[1] px-5 pb-[100px] pt-[60px] sm:px-[34px]">
      <div className="mx-auto max-w-[1240px]">
        <Reveal className="mb-12">
          <SectionLabel className="mb-4">The stack</SectionLabel>
          <h2 className="font-heading text-[clamp(30px,4vw,50px)] font-bold tracking-[-0.03em] text-[#f3f6fc]">
            Everything to ship, end to end.
          </h2>
        </Reveal>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
          {skillGroups.map((g) => (
            <Reveal
              key={g.no}
              className="rounded-[14px] border border-white/[0.07] bg-gradient-to-b from-[#0d1322] to-surface p-[22px]"
            >
              <div className="mb-4 flex items-center gap-2.5">
                <span className="font-mono text-[11px] text-accent">{g.no}</span>
                <span className="font-heading text-[16px] font-semibold text-[#f3f6fc]">
                  {g.name}
                </span>
              </div>
              <div className="flex flex-wrap gap-[7px]">
                {g.skills.map((sk) => (
                  <span
                    key={sk}
                    className="chip whitespace-nowrap rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[12.5px] text-[#aab4c6]"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
