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
    <section id="certifications" className="py-20 lg:py-28">
      <PageContainer className="flex flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications"
            title="Structured learning that supports my hands-on full-stack work."
            description="I keep the certifications section focused and honest: three completed credentials, plus the ongoing paths that are actively shaping my next engineering step."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <CertificationGroup
            title="Completed"
            description="Finished certifications that already support the current portfolio."
            items={completedCertifications}
          />
          <CertificationGroup
            title="Ongoing"
            description="Current learning paths that extend the foundation into deeper engineering work."
            items={ongoingCertifications}
          />
        </div>
      </PageContainer>
    </section>
  );
}

function CertificationGroup({
  title,
  description,
  items
}: {
  title: string;
  description: string;
  items: typeof certifications;
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(2,6,23,0.94))] p-6 shadow-[0_18px_56px_rgba(2,6,23,0.26)]">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
          {title}
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
      </div>

      <div className="mt-6 grid gap-4">
        {items.map((certification, index) => (
          <Reveal key={`${title}-${certification.title}`} delay={0.04 * index}>
            <article className="h-full rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
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
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
