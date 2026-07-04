import { ScrollProgress } from "@/components/scroll-progress";
import { CursorGlow } from "@/components/cursor-glow";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { KineticBand } from "@/components/kinetic-band";
import { Counters } from "@/components/counters";
import { Craft } from "@/components/craft";
import { Work } from "@/components/work";
import { MoreWork } from "@/components/more-work";
import { Path } from "@/components/path";
import { Stack } from "@/components/stack";
import { Contact } from "@/components/contact";
import { personalInfo } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  url: "https://kamuran.dev",
  email: personalInfo.email,
  jobTitle: personalInfo.title,
  description:
    "Software engineer with 6+ years of experience building cross-platform mobile and web applications. 20+ apps shipped to the App Store and Google Play.",
  sameAs: [personalInfo.github, personalInfo.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-[13px] focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main id="main" tabIndex={-1} className="relative z-10 outline-none">
        <Hero />
        <KineticBand />
        <Counters />
        <Craft />
        <Work />
        <MoreWork />
        <Path />
        <Stack />
        <Contact />
      </main>
    </>
  );
}
