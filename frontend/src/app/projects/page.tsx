import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Samiun Alim Auntor",
  description:
    "All projects by Samiun Alim Auntor, focused on full-stack platforms, backend workflows, dashboards, and scalable product systems."
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-3 py-10 sm:px-5 lg:py-14 xl:px-6">
      <div className="mx-auto w-full max-w-[calc(80rem-1.5rem)] sm:max-w-[calc(80rem-2.5rem)] xl:max-w-[calc(80rem-3rem)]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back Home
        </Link>

        <section className="pt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
            Projects
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Full-stack{" "}
            <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
              systems and builds.
            </span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            A dedicated archive for project cards, screenshots, repositories, live links, and
            detailed case studies as each README is added.
          </p>
        </section>

        <section className="grid gap-5 pt-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}
