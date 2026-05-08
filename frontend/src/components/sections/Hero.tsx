import Link from "next/link";
import { ArrowRight, Code2, Github, Linkedin, Mail } from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTypescript,
  SiVercel
} from "react-icons/si";
import { Reveal } from "@/components/shared/Reveal";
import { profile } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";

const coreSkills = [
  {
    label: "MongoDB",
    icon: SiMongodb,
    className: "text-[#47A248]"
  },
  {
    label: "PostgreSQL",
    icon: SiPostgresql,
    className: "text-[#4169E1]"
  },
  {
    label: "Express.js",
    icon: SiExpress,
    className: "text-white"
  },
  {
    label: "Node.js",
    icon: SiNodedotjs,
    className: "text-[#8CC84B]"
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
    className: "text-white"
  },
  {
    label: "React",
    icon: SiReact,
    className: "text-[#61DAFB]"
  },
  {
    label: "Prisma",
    icon: SiPrisma,
    className: "text-white"
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    className: "text-[#3178C6]"
  },
  {
    label: "Docker",
    icon: SiDocker,
    className: "text-[#2496ED]"
  },
  {
    label: "Firebase",
    icon: SiFirebase,
    className: "text-[#FFCA28]"
  },
  {
    label: "Vercel",
    icon: SiVercel,
    className: "text-white"
  }
] as const;

export function Hero() {
  const githubLink = socialLinks.find((link) => link.label === "GitHub");
  const linkedInLink = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/10 pb-16 pt-16 lg:pb-20 lg:pt-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid w-full gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-7">
            <Reveal className="space-y-7">
              <div className="inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-sky-300/[0.055] px-4 py-2 text-[10px] font-semibold uppercase text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(125,211,252,0.9)]" />
                Full Stack Software Engineer
              </div>

              <div className="space-y-5">
                <h1 className="max-w-[48rem] text-4xl font-semibold leading-[1.12] text-white sm:text-5xl lg:text-[3.95rem] xl:text-[4.2rem]">
                  I build{" "}
                  <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                    scalable
                  </span>{" "}
                  web platforms with modern{" "}
                  <span className="bg-gradient-to-r from-cyan-200 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                    frontend
                  </span>{" "}
                  and robust{" "}
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    backend systems.
                  </span>
                </h1>
                <p className="max-w-[44rem] text-base leading-8 text-slate-300">
                  I design and build production-ready applications with clean architecture,
                  real-world workflows, and a focus on performance, security, and great UX.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center gap-3 rounded-2xl border border-sky-200/28 bg-gradient-to-r from-sky-300 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(56,189,248,0.16)] transition hover:translate-y-[-1px]"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 rounded-2xl border border-white/16 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(2,6,23,0.16)] backdrop-blur transition hover:border-sky-300/28 hover:bg-white/[0.07]"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </Link>
            </Reveal>

            <Reveal delay={0.14} className="flex flex-wrap gap-4">
              {githubLink ? (
                <SocialIcon href={githubLink.href} label="GitHub profile">
                  <Github className="h-5 w-5" />
                </SocialIcon>
              ) : null}
              {linkedInLink ? (
                <SocialIcon href={linkedInLink.href} label="LinkedIn profile">
                  <Linkedin className="h-5 w-5" />
                </SocialIcon>
              ) : null}
              <SocialIcon href={`mailto:${profile.email}`} label="Email Samiun Alim Auntor">
                <Mail className="h-5 w-5" />
              </SocialIcon>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <EngineeringProfileCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function EngineeringProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-[42rem]">
      <div className="relative min-h-[38rem] rounded-[2rem] border border-sky-200/20 bg-[radial-gradient(circle_at_12%_0%,rgba(96,165,250,0.22),transparent_32%),linear-gradient(180deg,rgba(10,18,36,0.9),rgba(4,9,20,0.96))] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_26px_100px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:p-8">
        <div className="relative">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-[11px] font-semibold uppercase text-sky-200">
              <span className="rounded-full border border-sky-200/15 bg-sky-300/[0.1] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <Code2 className="inline h-3.5 w-3.5" />
              </span>
              Engineering Profile
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-slate-400">
              TypeScript
            </span>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-[#050914]/88 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="mb-5 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
            <pre className="overflow-visible whitespace-pre text-[10.5px] leading-8 min-[1180px]:text-[11px] xl:text-[11.5px]">
              <code>
                <CodeLine number="01">
                  <span className="text-[#C586C0]">const</span>{" "}
                  <span className="text-[#9CDCFE]">developer</span>{" "}
                  <span className="text-[#D4D4D4]">=</span>{" "}
                  <span className="text-[#D4D4D4]">{"{"}</span>
                </CodeLine>
                <CodeLine number="02">
                  {"  "}
                  <span className="text-[#9CDCFE]">name</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#CE9178]">&quot;Samiun Alim Auntor&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>
                </CodeLine>
                <CodeLine number="03">
                  {"  "}
                  <span className="text-[#9CDCFE]">role</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#CE9178]">&quot;Full Stack Software Engineer&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>
                </CodeLine>
                <CodeLine number="04">
                  {"  "}
                  <span className="text-[#9CDCFE]">focus</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#D4D4D4]">[</span>
                  <span className="text-[#CE9178]">&quot;Backend&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>{" "}
                  <span className="text-[#CE9178]">&quot;System Design&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>{" "}
                  <span className="text-[#CE9178]">&quot;Frontend&quot;</span>
                  <span className="text-[#D4D4D4]">],</span>
                </CodeLine>
                <CodeLine number="05">
                  {"  "}
                  <span className="text-[#9CDCFE]">mindset</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#CE9178]">&quot;Build systems that scale.&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>
                </CodeLine>
                <CodeLine number="06">
                  {"  "}
                  <span className="text-[#9CDCFE]">currentTrajectory</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#CE9178]">&quot;Engineering depth -&gt; Real impact&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>
                </CodeLine>
                <CodeLine number="07">
                  {"  "}
                  <span className="text-[#9CDCFE]">stack</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#D4D4D4]">[</span>
                  <span className="text-[#CE9178]">&quot;Next.js&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>{" "}
                  <span className="text-[#CE9178]">&quot;PostgreSQL&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>{" "}
                  <span className="text-[#CE9178]">&quot;Express.js&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>{" "}
                  <span className="text-[#CE9178]">&quot;Node.js&quot;</span>
                  <span className="text-[#D4D4D4]">],</span>
                </CodeLine>
                <CodeLine number="08">
                  <span className="text-[#D4D4D4]">{"};"}</span>
                </CodeLine>
              </code>
            </pre>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase text-slate-500">
              Core Skills
            </p>
            <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6 xl:grid-cols-8">
              {coreSkills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.label}
                    title={skill.label}
                    aria-label={skill.label}
                    className="flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-[#070b14]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_26px_rgba(2,6,23,0.28)]"
                  >
                    <Icon className={`h-6 w-6 ${skill.className}`} />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function CodeLine({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <span className="block">
      <span className="mr-4 select-none text-slate-600">{number}</span>
      {children}
    </span>
  );
}

function SocialIcon({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("https://");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur transition hover:border-sky-300/25 hover:bg-white/[0.07]"
    >
      {children}
    </Link>
  );
}
