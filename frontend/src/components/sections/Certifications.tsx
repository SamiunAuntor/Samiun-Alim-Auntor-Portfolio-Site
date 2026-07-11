import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";
import { Reveal } from "@/components/shared/Reveal";
import { certifications } from "@/data/certifications";
import ibmLogo from "@/assets/certification/ibm_logo.png";
import phitronLogo from "@/assets/certification/phitron_logo.png";
import programmingHeroLogo from "@/assets/certification/programminghero_logo.jpg";
import simplilearnLogo from "@/assets/certification/simplilearn_logo.jpg";

const providerLogos: Record<string, StaticImageData> = {
  "Programming Hero": programmingHeroLogo,
  "IBM Skills Network": ibmLogo,
  Simplilearn: simplilearnLogo,
  Phitron: phitronLogo,
};

const completedCertifications = certifications.filter(
  (certification) =>
    certification.status === "Completed" &&
    certification.title !== "Next Level Web Development"
);
const ongoingCertifications = certifications.filter(
  (certification) =>
    certification.status === "Ongoing" ||
    certification.title === "Next Level Web Development"
);

export function Certifications() {
  return (
    <section id="certifications" className="py-16 lg:py-24">
      <PageContainer className="flex flex-col gap-10">
        <Reveal>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
              Certifications
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Certifications and{" "}
              <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Learning.
              </span>
            </h2>
            <p className="text-base leading-8 text-slate-300">
              Completed and ongoing learning paths that support my engineering growth.
            </p>
          </div>
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
      <article className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_56px_rgba(2,6,23,0.22)] backdrop-blur sm:rounded-[1.8rem] sm:p-5">
        <div className="flex flex-col gap-4 min-[420px]:flex-row min-[420px]:items-start">
          <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.08]">
            <Image
              src={providerLogos[certification.provider]}
              alt={`${certification.provider} logo`}
              fill
              sizes="48px"
              className={
                certification.provider === "IBM Skills Network"
                  ? "object-contain p-1.5"
                  : "object-cover"
              }
            />
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

            <h3 className="mt-4 text-lg font-semibold text-white sm:text-xl">{certification.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{certification.summary}</p>

            {certification.track || certification.note || certification.certificateNote ? (
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
                {certification.certificateNote ? (
                  <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs text-amber-100">
                    {certification.certificateNote}
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm font-medium text-white transition hover:border-sky-300/30 hover:bg-white/[0.08] sm:w-auto"
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
