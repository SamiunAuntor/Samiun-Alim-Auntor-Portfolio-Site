import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github, ImageIcon } from "lucide-react";
import { TechBadge } from "@/components/shared/TechBadge";
import { projects } from "@/data/projects";

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

  if (!project) {
    notFound();
  }

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

        <section className="grid gap-10 pt-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
              {project.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-300">{project.description}</p>

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
                  GitHub
                </Link>
              ) : null}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_56px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
            <div className="relative aspect-[16/10] bg-[radial-gradient(circle_at_25%_15%,rgba(56,189,248,0.16),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
              <div className="absolute inset-6 flex items-center justify-center rounded-[1.5rem] border border-white/10 bg-slate-950/40">
                <div className="text-center">
                  <ImageIcon className="mx-auto h-10 w-10 text-sky-300/80" />
                  <p className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-500">
                    Project Visual Placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 py-14 md:grid-cols-2">
          <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Overview</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{project.impact}</p>
          </article>

          <article className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Key Highlights</h2>
            <div className="mt-4 grid gap-3">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-300">
                  {feature}
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
