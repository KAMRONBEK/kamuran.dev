import { moreApps } from "@/lib/data";
import { Reveal } from "./ui/reveal";

export function MoreWork() {
  return (
    <section id="morework" className="relative z-[1] px-5 pb-5 pt-[70px] sm:px-[34px]">
      <Reveal className="mx-auto max-w-[1240px] rounded-2xl border border-dashed border-white/10 bg-white/[0.012] px-[30px] py-7">
        <div className="mb-4 font-mono text-[11.5px] uppercase tracking-[0.16em] text-faint">
          Also shipped
        </div>
        <div className="flex flex-wrap gap-2.5">
          {moreApps.map((m) => (
            <span
              key={m}
              className="whitespace-nowrap rounded-[9px] border border-white/[0.06] bg-white/[0.03] px-3.5 py-2 font-heading text-[14px] font-medium text-[#aab4c6]"
            >
              {m}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
