import Link from "next/link";
import { ArrowUpRight, Layers3 } from "lucide-react";
import type { Project } from "@/data/types";
import { cn } from "@/lib/utils";
import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.92),rgba(7,10,20,0.92))] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.48)] transition duration-300 hover:border-cyan-300/30 hover:shadow-[0_28px_100px_rgba(34,211,238,0.14)]",
        priority ? "lg:p-8" : ""
      )}
    >
      <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <div className="absolute -right-12 top-8 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative space-y-6">
        <div className="rounded-[1.6rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_35%),linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.95))] p-5">
          <div className="mb-8 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-200">
              <Layers3 className="h-3.5 w-3.5" />
              {project.eyebrow}
            </span>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
              {project.featured ? "Flagship Build" : "Case Study"}
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.slice(0, 4).map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
              {project.featured ? "Featured project" : "Selected work"}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3>
            <p className="text-base leading-8 text-slate-300">{project.description}</p>
            <p className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-7 text-slate-300">
              {project.impact}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <TechBadge key={tech} label={tech} />
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {project.links.live ? (
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Preview
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : null}

            {project.links.github ? (
              <Link
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/[0.08]"
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ) : null}

            {project.links.caseStudy ? (
              <span className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-slate-300">
                {project.links.caseStudy}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
