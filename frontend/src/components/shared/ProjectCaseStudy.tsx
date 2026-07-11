import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  ExternalLink,
  Github,
  Layers3,
  ShieldCheck,
  Upload
} from "lucide-react";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  SiAxios,
  SiCloudinary,
  SiExpress,
  SiFirebase,
  SiFramer,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
  SiZod
} from "react-icons/si";
import { BackButton } from "@/components/shared/BackButton";
import { PageContainer } from "@/components/shared/PageContainer";
import { TechBadge } from "@/components/shared/TechBadge";
import type { Project, ProjectDetail } from "@/data/types";

const projectTechIcons: Record<string, { icon: IconType; color: string }> = {
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  React: { icon: SiReact, color: "text-[#61DAFB]" },
  TypeScript: { icon: SiTypescript, color: "text-[#3178C6]" },
  "React 19": { icon: SiReact, color: "text-[#61DAFB]" },
  Vite: { icon: SiVite, color: "text-[#646CFF]" },
  "React Router": { icon: SiReactrouter, color: "text-[#CA4245]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#38BDF8]" },
  "TanStack Query": { icon: SiReactquery, color: "text-[#FF4154]" },
  "Framer Motion": { icon: SiFramer, color: "text-white" },
  "Node.js": { icon: SiNodedotjs, color: "text-[#8CC84B]" },
  "Express.js": { icon: SiExpress, color: "text-white" },
  "Express 5": { icon: SiExpress, color: "text-white" },
  Zod: { icon: SiZod, color: "text-[#3068B7]" },
  MongoDB: { icon: SiMongodb, color: "text-[#47A248]" },
  PostgreSQL: { icon: SiPostgresql, color: "text-[#4169E1]" },
  Prisma: { icon: SiPrisma, color: "text-white" },
  Mongoose: { icon: SiMongoose, color: "text-[#880000]" },
  Firebase: { icon: SiFirebase, color: "text-[#FFCA28]" },
  "Firebase Auth": { icon: SiFirebase, color: "text-[#FFCA28]" },
  "Firebase Admin SDK": { icon: SiFirebase, color: "text-[#FFCA28]" },
  JWT: { icon: SiJsonwebtokens, color: "text-[#D63AFF]" },
  bcryptjs: { icon: ShieldCheck, color: "text-emerald-300" },
  Cloudinary: { icon: SiCloudinary, color: "text-[#3448C5]" },
  Multer: { icon: Upload, color: "text-sky-300" },
  Axios: { icon: SiAxios, color: "text-[#5A29E4]" },
  Vercel: { icon: SiVercel, color: "text-white" }
};
type ProjectCaseStudyProps = {
  project: Project;
  detail: ProjectDetail;
  previewImage?: StaticImageData;
};

const caseStudySections = [
  { id: "overview", label: "Overview" },
  { id: "purpose", label: "Problem / Purpose" },
  { id: "role", label: "My Role" },
  { id: "features", label: "Key Features" },
  { id: "stack", label: "Tech Stack" },
  { id: "architecture", label: "Architecture" },
  { id: "visuals", label: "Visual Walkthrough" },
  { id: "challenges", label: "Challenges" },
  { id: "learnings", label: "What I Learned" }
] as const;

export function ProjectCaseStudy({ project, detail, previewImage }: ProjectCaseStudyProps) {
  const visibleSections = caseStudySections.filter((section) => {
    if (section.id === "role") {
      return Boolean(detail.role);
    }

    if (section.id === "features") {
      return detail.keyFeatures.length > 0;
    }

    if (section.id === "stack") {
      return detail.techStack.length > 0;
    }

    if (section.id === "architecture") {
      return Boolean(detail.architecture);
    }

    if (section.id === "visuals") {
      return detail.visuals.length > 0;
    }

    if (section.id === "challenges") {
      return detail.challenges.length > 0;
    }

    if (section.id === "learnings") {
      return detail.learnings.length > 0;
    }

    return true;
  });

  return (
    <main className="min-h-screen py-8 sm:py-10 lg:py-14">
      <PageContainer>
        <div className="flex flex-wrap items-center gap-3">
          <BackButton />
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08]"
          >
            All Projects
          </Link>
        </div>

        <ProjectHero project={project} detail={detail} previewImage={previewImage} />

        <section className="grid gap-6 py-10 sm:gap-8 sm:py-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <nav className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-300/85">
                Case Study
              </p>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                {visibleSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex shrink-0 items-center gap-2 rounded-2xl border border-white/8 bg-slate-950/35 px-3 py-3 text-sm text-slate-300 transition hover:border-sky-300/20 hover:text-white lg:shrink"
                  >
                    <CircleDot className="h-4 w-4 text-sky-300/80" />
                    <span>{section.label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <div className="space-y-5">
            <CaseStudySection id="overview" eyebrow="Overview" title="What the project is">
              <p className="text-base leading-8 text-slate-300">{detail.overview}</p>
            </CaseStudySection>

            <CaseStudySection id="purpose" eyebrow="Problem / Purpose" title="Why it was built">
              <p className="text-base leading-8 text-slate-300">{detail.purpose}</p>
            </CaseStudySection>

            {detail.role ? (
              <CaseStudySection id="role" eyebrow="My Role / Contribution" title="What I worked on">
                <p className="text-base leading-8 text-slate-300">{detail.role.summary}</p>
                <BulletGrid items={detail.role.contributions} />
              </CaseStudySection>
            ) : null}

            {detail.keyFeatures.length > 0 ? (
              <CaseStudySection id="features" eyebrow="Key Features" title="Important product capabilities">
                <GroupedCards
                  groups={detail.keyFeatures.map((group) => ({
                    title: group.title,
                    items: group.items
                  }))}
                />
              </CaseStudySection>
            ) : null}

            {detail.techStack.length > 0 ? (
              <CaseStudySection id="stack" eyebrow="Tech Stack" title="Technology choices by responsibility">
                <div className="grid gap-4 md:grid-cols-2">
                  {detail.techStack.map((category) => (
                    <article
                      key={category.category}
                      className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4 sm:p-5"
                    >
                      <h3 className="text-base font-semibold text-white">{category.category}</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <ProjectTechBadge key={`${category.category}-${item}`} label={item} />
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </CaseStudySection>
            ) : null}

            {detail.architecture ? (
              <CaseStudySection
                id="architecture"
                eyebrow="Architecture / How It Works"
                title="Simple system flow"
              >
                <p className="text-base leading-8 text-slate-300">{detail.architecture.intro}</p>
                <div className="mt-6 grid gap-4">
                  {detail.architecture.steps.map((step, index) => (
                    <article
                      key={step.title}
                      className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:p-5"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.07] text-sm font-semibold text-sky-200">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-300">{step.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </CaseStudySection>
            ) : null}

            {detail.visuals.length > 0 ? (
              <CaseStudySection
                id="visuals"
                eyebrow="Screenshots / Visual Walkthrough"
                title="A guided look through the experience"
              >
                {previewImage ? (
                  <div className="overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-950/45">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={previewImage}
                        alt={`${project.title} visual preview`}
                        fill
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="object-fill"
                      />
                    </div>
                  </div>
                ) : null}
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {detail.visuals.map((visual) => (
                    <article
                      key={visual.title}
                      className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4 sm:p-5"
                    >
                      <h3 className="text-base font-semibold text-white">{visual.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{visual.description}</p>
                    </article>
                  ))}
                </div>
              </CaseStudySection>
            ) : null}

            {detail.challenges.length > 0 ? (
              <CaseStudySection
                id="challenges"
                eyebrow="Challenges & Solutions"
                title="Engineering decisions that mattered"
              >
                <div className="grid gap-4">
                  {detail.challenges.map((item) => (
                    <article
                      key={item.challenge}
                      className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4 sm:p-5 lg:grid-cols-2"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-200/80">
                          Challenge
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/80">
                          Solution
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.solution}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </CaseStudySection>
            ) : null}

            {detail.learnings.length > 0 ? (
              <CaseStudySection id="learnings" eyebrow="What I Learned" title="Growth from the project">
                <BulletGrid items={detail.learnings} />
              </CaseStudySection>
            ) : null}

            <FinalCta project={project} />
          </div>
        </section>
      </PageContainer>
    </main>
  );
}

function ProjectTechBadge({ label }: { label: string }) {
  const technology = projectTechIcons[label];
  const Icon = technology?.icon ?? ShieldCheck;

  return (
    <span className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/45 px-3 py-2.5 text-xs font-medium text-slate-200">
      <Icon className={`h-4 w-4 shrink-0 ${technology?.color ?? "text-sky-300"}`} />
      <span className="min-w-0 break-words">{label}</span>
    </span>
  );
}
function ProjectHero({ project, detail, previewImage }: ProjectCaseStudyProps) {
  return (
    <section className="grid gap-8 pt-10 sm:gap-10 sm:pt-12 lg:grid-cols-[0.98fr_1.02fr] lg:items-start">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
          {project.eyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{detail.tagline}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          <StatusPill label={detail.type} />
          <StatusPill label={detail.status} />
        </div>

        <ProjectLinks project={project} className="mt-8" />
      </div>

      {project.links.live ? (
        <Link
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          aria-label={"Open live " + project.title + " project"}
          className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_56px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:shadow-[0_24px_70px_rgba(14,165,233,0.16),inset_0_1px_0_rgba(255,255,255,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70"
        >
          <ProjectPreviewContent project={project} previewImage={previewImage} showLiveBadge />
        </Link>
      ) : (
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_18px_56px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
          <ProjectPreviewContent project={project} previewImage={previewImage} />
        </div>
      )}
    </section>
  );
}

function ProjectPreviewContent({
  project,
  previewImage,
  showLiveBadge = false
}: Pick<ProjectCaseStudyProps, "project" | "previewImage"> & { showLiveBadge?: boolean }) {
  return (
    <div className="relative aspect-[3/2] bg-[radial-gradient(circle_at_25%_15%,rgba(56,189,248,0.16),transparent_36%),linear-gradient(135deg,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:28px_28px] opacity-35" />
      <div className="absolute inset-3 overflow-hidden rounded-[1.25rem] border border-white/10 bg-slate-950/45 transition duration-300 group-hover:border-sky-300/20 sm:inset-6 sm:rounded-[1.5rem]">
        {previewImage ? (
          <Image
            src={previewImage}
            alt={project.title + " project thumbnail"}
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-fill transition duration-500 group-hover:scale-[1.02]"
            priority
          />
        ) : null}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.18))] transition group-hover:bg-[linear-gradient(180deg,rgba(2,6,23,0.01),rgba(2,6,23,0.12))]" />
        {showLiveBadge ? <LivePreviewBadge /> : null}
      </div>
    </div>
  );
}

function LivePreviewBadge() {
  return (
    <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-slate-950/72 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-100 shadow-[0_10px_30px_rgba(2,6,23,0.28)] backdrop-blur-md transition duration-300 group-hover:border-emerald-300/40 group-hover:bg-slate-900/85 sm:right-4 sm:top-4 sm:px-3.5 sm:py-2 sm:text-xs">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-45" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.55)]" />
      </span>
      Live
    </span>
  );
}
function CaseStudySection({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_56px_rgba(2,6,23,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur sm:rounded-[2rem] sm:p-7"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.07]">
          <Layers3 className="h-4 w-4 text-sky-300" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{title}</h2>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function GroupedCards({ groups }: { groups: Array<{ title: string; items: string[] }> }) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {groups.map((group) => (
        <article
          key={group.title}
          className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-4 sm:p-5"
        >
          <h3 className="text-base font-semibold text-white">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={`${group.title}-${item}`} className="flex gap-3 text-sm leading-7 text-slate-300">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

function BulletGrid({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-[1.4rem] border border-white/10 bg-slate-950/35 px-4 py-4 text-sm leading-7 text-slate-300"
        >
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-300" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function StatusPill({ label }: { label: string }) {
  return (
    <span className="inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200">
      {label}
    </span>
  );
}

function ProjectLinks({ project, className = "" }: { project: Project; className?: string }) {
  const hasSplitRepos = Boolean(project.links.github && project.links.backend);

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {project.links.live ? (
        <Link
          href={project.links.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
          style={{ color: "#020617" }}
        >
          Live Site
          <ArrowUpRight className="h-4 w-4" style={{ color: "#020617" }} />
        </Link>
      ) : null}

      {project.links.github ? (
        <Link
          href={project.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08] sm:w-auto"
        >
          <Github className="h-4 w-4" />
          {hasSplitRepos ? "Client Repository" : "GitHub Repository"}
        </Link>
      ) : null}

      {project.links.backend ? (
        <Link
          href={project.links.backend}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08] sm:w-auto"
        >
          <Github className="h-4 w-4" />
          Server Repository
        </Link>
      ) : null}
    </div>
  );
}

function FinalCta({ project }: { project: Project }) {
  return (
    <section className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.94))] p-4 shadow-[0_18px_56px_rgba(2,6,23,0.22)] sm:rounded-[2rem] sm:p-7">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300/80">
            Final Links / CTA
          </p>
          <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">Explore {project.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Open the live product, review the repository, or return to the full projects archive.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ProjectLinks project={project} />
          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-sky-300/30 hover:bg-white/[0.08] sm:w-auto"
          >
            Back to Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
