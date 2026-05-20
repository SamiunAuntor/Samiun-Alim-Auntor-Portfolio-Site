"use client";

import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiBetterauth,
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGo,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRender,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod
} from "react-icons/si";
import { Braces, Cpu, Database, GraduationCap, Layers, ShieldCheck } from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";
import { Reveal } from "@/components/shared/Reveal";
import { skillCategories } from "@/data/skills";

type SkillIcon = {
  icon: IconType;
  color: string;
};

const iconMap: Record<string, SkillIcon> = {
  PostgreSQL: { icon: SiPostgresql, color: "text-[#4169E1]" },
  Prisma: { icon: SiPrisma, color: "text-white" },
  "Better Auth": { icon: SiBetterauth, color: "text-white" },
  Zod: { icon: SiZod, color: "text-[#3068B7]" },
  Stripe: { icon: SiStripe, color: "text-[#635BFF]" },
  React: { icon: SiReact, color: "text-[#61DAFB]" },
  "Next.js": { icon: SiNextdotjs, color: "text-white" },
  TypeScript: { icon: SiTypescript, color: "text-[#3178C6]" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-[#38BDF8]" },
  MongoDB: { icon: SiMongodb, color: "text-[#47A248]" },
  "Node.js": { icon: SiNodedotjs, color: "text-[#8CC84B]" },
  "Express.js": { icon: SiExpress, color: "text-white" },
  Firebase: { icon: SiFirebase, color: "text-[#FFCA28]" },
  JavaScript: { icon: SiJavascript, color: "text-[#F7DF1E]" },
  Git: { icon: SiGit, color: "text-[#F05032]" },
  GitHub: { icon: SiGithub, color: "text-white" },
  MySQL: { icon: SiMysql, color: "text-[#4479A1]" },
  Python: { icon: SiPython, color: "text-[#3776AB]" },
  Docker: { icon: SiDocker, color: "text-[#2496ED]" },
  CSS: { icon: SiCss, color: "text-[#663399]" },
  HTML: { icon: SiHtml5, color: "text-[#E34F26]" },
  Java: { icon: FaJava, color: "text-[#F89820]" },
  "C++": { icon: SiCplusplus, color: "text-[#00599C]" },
  C: { icon: SiC, color: "text-[#A8B9CC]" },
  "Oracle SQL": { icon: Database, color: "text-red-300" },
  "SQL basics": { icon: Database, color: "text-sky-300" },
  Vercel: { icon: SiVercel, color: "text-white" },
  Render: { icon: SiRender, color: "text-[#46E3B7]" },
  OOP: { icon: Layers, color: "text-cyan-300" },
  "Design Patterns": { icon: Cpu, color: "text-indigo-300" },
  "Data Structures": { icon: Braces, color: "text-sky-300" },
  Algorithms: { icon: Cpu, color: "text-blue-300" },
  "Digital Design": { icon: Cpu, color: "text-emerald-300" },
  DBMS: { icon: Database, color: "text-cyan-300" },
  "System Design": { icon: Layers, color: "text-indigo-300" },
  "DSA / Competitive Programming": { icon: Braces, color: "text-sky-300" },
  Cybersecurity: { icon: ShieldCheck, color: "text-emerald-300" },
  Networking: { icon: Cpu, color: "text-cyan-300" },
  Linux: { icon: SiLinux, color: "text-[#FCC624]" },
  "Cloud / DevOps": { icon: SiGooglecloud, color: "text-[#4285F4]" },
  Go: { icon: SiGo, color: "text-[#00ADD8]" },
  "Advanced Backend Engineering": { icon: GraduationCap, color: "text-indigo-300" }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28">
      <PageContainer className="flex flex-col gap-10">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
              Skills
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              My{" "}
              <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Engineering Stack.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Technologies I use to build full-stack products, backend workflows, and
              production-ready web systems.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Reveal key={category.title} delay={0.08 + index * 0.035}>
              <article className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_48px_rgba(2,6,23,0.22),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => {
                    const skill = iconMap[item];
                    const Icon = skill?.icon ?? Braces;

                    return (
                      <div
                        key={item}
                        className="flex w-fit items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/45 px-3 py-2.5 text-xs font-medium text-slate-200"
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${skill?.color ?? "text-sky-300"}`} />
                        <span className="whitespace-nowrap">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
