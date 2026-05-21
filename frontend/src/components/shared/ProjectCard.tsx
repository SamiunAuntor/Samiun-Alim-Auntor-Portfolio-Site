import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Images } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiBetterauth,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRender,
  SiSocketdotio,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from "react-icons/si";
import type { Project } from "@/data/types";
import { projectImages } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

const stackIconMap: Record<string, { icon: IconType; color: string }> = {
  React: { icon: SiReact, color: "text-[#61DAFB]" },
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#38BDF8]" },
  TypeScript: { icon: SiTypescript, color: "text-[#3178C6]" },
  "Node.js": { icon: SiNodedotjs, color: "text-[#8CC84B]" },
  "Express.js": { icon: SiExpress, color: "text-white" },
  MongoDB: { icon: SiMongodb, color: "text-[#47A248]" },
  PostgreSQL: { icon: SiPostgresql, color: "text-[#4169E1]" },
  Prisma: { icon: SiPrisma, color: "text-white" },
  Firebase: { icon: SiFirebase, color: "text-[#FFCA28]" },
  "Better Auth": { icon: SiBetterauth, color: "text-white" },
  Stripe: { icon: SiStripe, color: "text-[#635BFF]" },
  Vercel: { icon: SiVercel, color: "text-white" },
  "Socket.io": { icon: SiSocketdotio, color: "text-white" },
  Render: { icon: SiRender, color: "text-[#46E3B7]" },
  ImageBB: { icon: Images, color: "text-sky-300" }
};

export function ProjectCard({ project }: ProjectCardProps) {
  const liveLink = project.links.live;
  const githubLink = project.links.github;
  const topStack = project.stack.slice(0, 9);
  const previewImage = projectImages[project.slug as keyof typeof projectImages];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_56px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur transition duration-300 hover:border-sky-300/25 hover:bg-white/[0.055]">
      <div className="relative aspect-[3/2] overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_25%_15%,rgba(56,189,248,0.16),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
        <div className="absolute inset-4 overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/55">
          {previewImage ? (
            <Image
              src={previewImage}
              alt={`${project.title} project preview`}
              fill
              sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="object-fill transition duration-500 group-hover:scale-[1.01]"
            />
          ) : null}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.06),rgba(2,6,23,0.24))]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="space-y-2.5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
            {project.eyebrow}
          </p>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {topStack.map((tech) => {
            const skill = stackIconMap[tech];
            const Icon = skill?.icon;

            if (!Icon) {
              return null;
            }

            return (
              <div
                key={tech}
                title={tech}
                aria-label={tech}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/45"
              >
                <Icon className={`h-[18px] w-[18px] ${skill.color}`} />
              </div>
            );
          })}
        </div>

        <div className="mt-auto grid grid-cols-[1.45fr_0.95fr_0.95fr] gap-2.5 pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-cyan-300 px-4 py-2.5 text-sm font-semibold text-[#020617] transition hover:bg-cyan-200"
            style={{ color: "#020617" }}
          >
            View Details
            <ArrowUpRight className="h-4 w-4" color="#020617" />
          </Link>

          {liveLink ? (
            <Link
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.05] px-3 py-2.5 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
            >
              <ExternalLink className="h-4 w-4" />
              Live
            </Link>
          ) : (
            <span className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm font-semibold text-slate-500">
              <ExternalLink className="h-4 w-4" />
              Live
            </span>
          )}

          {githubLink ? (
            <Link
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} repository`}
              className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/12 bg-white/[0.05] px-3 py-2.5 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
            >
              <Github className="h-4 w-4" />
              Repo
            </Link>
          ) : (
            <span className="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm font-semibold text-slate-500">
              <Github className="h-4 w-4" />
              Repo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
