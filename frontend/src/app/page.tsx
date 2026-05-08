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
import { SectionDivider } from "@/components/shared/SectionDivider";

export default function HomePage() {
  return (
    <>
      <BootSequence />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <EngineeringHighlights />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <GitHubStats />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Education />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
