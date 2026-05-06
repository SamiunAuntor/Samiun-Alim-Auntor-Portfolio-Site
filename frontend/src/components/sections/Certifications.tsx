import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { certifications } from "@/data/certifications";

export function Certifications() {
  return (
    <section id="certifications" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Structured learning that supports my hands-on full-stack work."
            description="These certifications are not the main story of the portfolio, but they do reinforce the breadth of my learning across web development, SQL, TypeScript, and system design foundations."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <Reveal key={certification.title} delay={0.04 * index}>
              <article className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
                    {certification.provider}
                  </p>
                  <h3 className="text-xl font-semibold text-white">{certification.title}</h3>
                  <p className="text-sm leading-7 text-slate-300">{certification.summary}</p>
                  <p className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
                    {certification.status}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
