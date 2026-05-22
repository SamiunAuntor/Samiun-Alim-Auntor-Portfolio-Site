import { GraduationCap } from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechBadge } from "@/components/shared/TechBadge";
import { academicHistory, education } from "@/data/site";

export function Education() {
  return (
    <section id="education" className="py-16 lg:py-24">
      <PageContainer className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Academic Foundation."
            description="Formal background in software engineering, computer science fundamentals, and system-level problem solving."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Reveal delay={0.05}>
            <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.94))] p-6 shadow-[0_18px_56px_rgba(2,6,23,0.26)]">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
                    Current Degree
                  </p>
                  <p className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-100">
                    {education.status}
                  </p>
                </div>
                <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
                <p className="text-base text-slate-300">{education.institution}</p>
                <p className="text-sm text-slate-400">{education.range}</p>
              </div>

              <p className="mt-6 text-sm leading-7 text-slate-300">
                My core academic foundation in software engineering, combining classroom study, lab
                work, software project labs, and design projects. The program strengthens my base
                in software construction, databases, algorithms, operating systems, networking,
                system design, and real-world project development.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {education.areas.map((area) => (
                  <TechBadge key={area} label={area} />
                ))}
              </div>
            </article>
          </Reveal>

          <div className="space-y-4">
            {academicHistory.map((item, index) => (
              <Reveal key={item.degree} delay={0.08 + index * 0.05}>
                <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_56px_rgba(2,6,23,0.22)] backdrop-blur">
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-200">
                      <GraduationCap className="h-5 w-5" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                        <span className="inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                          {item.status}
                        </span>
                      </div>

                      <p className="mt-2 text-base font-medium text-slate-200">{item.degree}</p>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.group} • {item.range}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                          {item.result}
                        </span>
                        <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1 text-xs text-cyan-100">
                          Class of {item.classYear}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
