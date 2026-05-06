import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { EngineeringHighlights } from "@/components/sections/EngineeringHighlights";
import { GitHubStats } from "@/components/sections/GitHubStats";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { BootSequence } from "@/components/shared/BootSequence";
import { Footer } from "@/components/shared/Footer";
import { Navbar } from "@/components/shared/Navbar";

export default function HomePage() {
  return (
    <>
      <BootSequence />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <EngineeringHighlights />
        <Projects />
        <GitHubStats />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
