import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechBadge } from "@/components/shared/TechBadge";
import { education } from "@/data/site";

export function Education() {
  return (
    <section id="education" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic grounding that strengthens my engineering direction."
            description="I&apos;m currently pursuing Software Engineering at IUT while actively building real projects, deepening backend skills, and preparing for internships through DSA and systems practice."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.94))] p-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
                {education.range}
              </p>
              <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
              <p className="text-base text-slate-300">{education.institution}</p>
              <p className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                {education.status}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {education.areas.map((area) => (
                <TechBadge key={area} label={area} />
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
