import { ParallaxProvider } from "@/components/parallax-provider";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kamronbek Juraev",
  url: "https://kamuran.dev",
  jobTitle: "React Native / React Developer",
  description:
    "Full-stack developer with 6+ years of experience building cross-platform mobile and web applications.",
  sameAs: [
    "https://github.com/kamuran",
    "https://linkedin.com/in/kamuran",
  ],
};

export default function Home() {
  return (
    <ParallaxProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </ParallaxProvider>
  );
}
