import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { engineeringHighlights } from "@/data/site";

export function EngineeringHighlights() {
  return (
    <section id="engineering" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Beyond The Interface"
            title="I think in product workflows, permissions, system behavior, and scale."
            description="My projects are not only frontend interfaces. I work with real application workflows such as authentication, role-based permissions, payment confirmation, background reminders, realtime communication, database modeling, and deployment architecture."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {engineeringHighlights.map((highlight, index) => (
            <Reveal key={highlight.title} delay={0.05 * index}>
              <article className="h-full rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.9))] p-6">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
                    {highlight.title}
                  </p>
                  <p className="text-sm leading-7 text-slate-300">{highlight.description}</p>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-400">
                    {highlight.outcome}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
