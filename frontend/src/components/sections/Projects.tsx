import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { Reveal } from "@/components/shared/Reveal";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 lg:py-24">
      <PageContainer className="flex flex-col gap-10">
        <Reveal>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
                Featured Projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Selected{" "}
                <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                  Product Systems.
                </span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                A focused look at the full-stack projects that best represent my current
                engineering direction.
              </p>
            </div>

            <Link
              href="/projects"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={0.05 * index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
