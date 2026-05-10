import Link from "next/link";
import { ArrowUpRight, Github, ImageIcon } from "lucide-react";
import type { Project } from "@/data/types";
import { TechBadge } from "./TechBadge";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_56px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur transition duration-300 hover:border-sky-300/25 hover:bg-white/[0.055]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_25%_15%,rgba(56,189,248,0.16),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
        <div className="absolute inset-5 flex items-center justify-center rounded-[1.4rem] border border-white/10 bg-slate-950/40">
          <div className="text-center">
            <ImageIcon className="mx-auto h-8 w-8 text-sky-300/80" />
            <p className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-500">
              Screenshot Slot
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
            {project.eyebrow}
          </p>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="line-clamp-3 text-sm leading-7 text-slate-300">{project.description}</p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            View Details
            <ArrowUpRight className="h-4 w-4" />
          </Link>

          {project.links.live ? (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
            >
              Live
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          ) : null}

          {project.links.github ? (
            <Link
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
            >
              <Github className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
