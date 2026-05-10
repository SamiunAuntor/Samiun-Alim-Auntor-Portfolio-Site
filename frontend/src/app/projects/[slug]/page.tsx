import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CircleDot, Github, Link2 } from "lucide-react";
import { TechBadge } from "@/components/shared/TechBadge";
import { projectDetails } from "@/data/projectDetails";
import { projectImages, projects } from "@/data/projects";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Samiun Alim Auntor"
    };
  }

  return {
    title: `${project.title} | Samiun Alim Auntor`,
    description: project.description
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const detail = projectDetails.find((item) => item.slug === slug);

  if (!project || !detail) {
    notFound();
  }

  const previewImage = projectImages[project.slug as keyof typeof projectImages];

  return (
    <main className="min-h-screen px-3 py-10 sm:px-5 lg:py-14 xl:px-6">
      <div className="mx-auto w-full max-w-[calc(80rem-1.5rem)] sm:max-w-[calc(80rem-2.5rem)] xl:max-w-[calc(80rem-3rem)]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
        >
          <ArrowLeft className="h-4 w-4" />
          All Projects
        </Link>

        <section className="grid gap-10 pt-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
              {project.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{detail.tagline}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.links.live ? (
                <Link
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Live Preview
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              ) : null}

              {project.links.github ? (
                <Link
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
                >
                  <Github className="h-4 w-4" />
                  Frontend Repo
                </Link>
              ) : null}

              {project.links.backend ? (
                <Link
                  href={project.links.backend}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
                >
                  <Github className="h-4 w-4" />
                  Backend Repo
                </Link>
              ) : null}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_56px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
            <div className="relative aspect-[3/2] bg-[radial-gradient(circle_at_25%_15%,rgba(56,189,248,0.16),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
              <div className="absolute inset-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/45">
                {previewImage ? (
                  <Image
                    src={previewImage}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-fill"
                  />
                ) : null}
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.18))]" />
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 py-12 md:grid-cols-2 xl:grid-cols-4">
          {detail.quickFacts.map((fact) => (
            <article
              key={fact.label}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
                {fact.label}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200">{fact.value}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300/85">
                Case Study Map
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {detail.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/8 bg-slate-950/35 px-3 py-3 text-sm text-slate-300 transition hover:border-sky-300/20 hover:text-white"
                  >
                    <Link2 className="h-4 w-4 text-sky-300/80" />
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-5">
            {detail.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_56px_rgba(2,6,23,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur sm:p-7"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.07]">
                    <CircleDot className="h-4 w-4 text-sky-300" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
                    {section.intro ? (
                      <p className="mt-3 text-sm leading-7 text-slate-300">{section.intro}</p>
                    ) : null}
                  </div>
                </div>

                {section.facts?.length ? (
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.facts.map((fact) => (
                      <div
                        key={`${section.id}-${fact.label}`}
                        className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 px-4 py-4"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                          {fact.label}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-200">{fact.value}</p>
                      </div>
                    ))}
                  </div>
                ) : null}

                {section.groups?.length ? (
                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {section.groups.map((group) => (
                      <article
                        key={`${section.id}-${group.label}`}
                        className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-5"
                      >
                        <h3 className="text-base font-semibold text-white">{group.label}</h3>
                        <ul className="mt-4 space-y-3">
                          {group.items.map((item) => (
                            <li
                              key={`${section.id}-${group.label}-${item}`}
                              className="flex gap-3 text-sm leading-7 text-slate-300"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                ) : null}

                {section.bullets?.length ? (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li
                        key={`${section.id}-${bullet}`}
                        className="flex gap-3 rounded-[1.4rem] border border-white/10 bg-slate-950/35 px-4 py-4 text-sm leading-7 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {section.code ? (
                  <pre className="mt-6 overflow-x-auto rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-5 text-xs leading-6 text-slate-300">
                    <code>{section.code}</code>
                  </pre>
                ) : null}
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
