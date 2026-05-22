import Link from "next/link";
import { ArrowUpRight, Award } from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { certifications } from "@/data/certifications";

const completedCertifications = certifications.filter(
  (certification) => certification.status === "Completed"
);
const ongoingCertifications = certifications.filter(
  (certification) => certification.status === "Ongoing"
);

export function Certifications() {
  return (
    <section id="certifications" className="py-16 lg:py-24">
      <PageContainer className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Certifications and learning."
            description="Completed and ongoing learning paths that support my engineering growth."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            {completedCertifications.map((certification, index) => (
              <CertificationCard
                key={`completed-${certification.title}`}
                certification={certification}
                delay={0.03 + index * 0.05}
              />
            ))}
          </div>

          <div className="space-y-4">
            {ongoingCertifications.map((certification, index) => (
              <CertificationCard
                key={`ongoing-${certification.title}`}
                certification={certification}
                delay={0.03 + index * 0.05}
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}

function CertificationCard({
  certification,
  delay
}: {
  certification: (typeof certifications)[number];
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_56px_rgba(2,6,23,0.22)] backdrop-blur">
        <div className="flex items-start gap-4">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-200">
            <Award className="h-5 w-5" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
                {certification.provider}
              </p>
              <span
                className={
                  certification.status === "Completed"
                    ? "inline-flex rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200"
                    : "inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-100"
                }
              >
                {certification.status}
              </span>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">{certification.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{certification.summary}</p>

            {certification.track || certification.note ? (
              <div className="mt-4 flex flex-wrap gap-2">
                {certification.track ? (
                  <span className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {certification.track}
                  </span>
                ) : null}
                {certification.note ? (
                  <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-1 text-xs text-cyan-100">
                    {certification.note}
                  </span>
                ) : null}
              </div>
            ) : null}

            {certification.href ? (
              <div className="mt-5">
                <Link
                  href={certification.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
                >
                  View Certificate
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
