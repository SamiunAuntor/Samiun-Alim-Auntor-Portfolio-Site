"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Code2, Github, Linkedin, Mail } from "lucide-react";
import {
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGithub,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
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
    label: "Node.js",
    icon: SiNodedotjs,
    className: "text-[#8CC84B]"
  },
  {
    label: "Express.js",
    icon: SiExpress,
    className: "text-white"
  },
  {
    label: "React",
    icon: SiReact,
    className: "text-[#61DAFB]"
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
    className: "text-white"
  },
  {
    label: "Tailwind CSS",
    icon: SiTailwindcss,
    className: "text-[#38BDF8]"
  },
  {
    label: "Docker",
    icon: SiDocker,
    className: "text-[#2496ED]"
  },
  {
    label: "Vercel",
    icon: SiVercel,
    className: "text-white"
  },
  {
    label: "Firebase",
    icon: SiFirebase,
    className: "text-[#FFCA28]"
  },
  {
    label: "GitHub",
    icon: SiGithub,
    className: "text-white"
  },
  {
    label: "C++",
    icon: SiCplusplus,
    className: "text-[#00599C]"
  }
] as const;

export function Hero() {
  const githubLink = socialLinks.find((link) => link.label === "GitHub");
  const linkedInLink = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-14 pt-12 sm:pb-16 sm:pt-16 lg:pb-18 lg:pt-18 xl:pb-20 xl:pt-20"
    >
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-5 xl:px-6">
        <div className="grid w-full gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center xl:grid-cols-2">
          <div className="space-y-6 sm:space-y-7">
            <Reveal className="space-y-7">
              <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-sky-300/20 bg-sky-300/[0.055] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur sm:px-4 sm:text-[10px]">
                <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(125,211,252,0.9)]" />
                <span className="truncate">Full Stack Software Engineer</span>
              </div>

              <div className="space-y-5">
                <p className="text-lg font-medium text-slate-300 sm:text-xl lg:text-2xl">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text font-semibold text-transparent">
                    Samiun Alim Auntor
                  </span>
                  .
                </p>
                <h1 className="max-w-[48rem] text-[clamp(2.65rem,12vw,4.2rem)] font-semibold leading-[1.08] text-white sm:text-[4rem] lg:text-[3.25rem] xl:text-[4.2rem]">
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
                <p className="max-w-[44rem] text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 lg:max-w-[35rem] xl:max-w-[44rem]">
                  I design and build production-ready applications with clean architecture,
                  real-world workflows, and a focus on performance, security, and great UX.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="flex flex-col gap-3 min-[440px]:flex-row min-[440px]:flex-wrap sm:gap-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-sky-200/28 bg-gradient-to-r from-sky-300 to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(56,189,248,0.16)] transition hover:translate-y-[-1px]"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/16 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(2,6,23,0.16)] backdrop-blur transition hover:border-sky-300/28 hover:bg-white/[0.07]"
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
  const reduceMotion = useReducedMotion();
  const [bootReady, setBootReady] = useState(false);

  useEffect(() => {
    if (window.__portfolioBootComplete) {
      setBootReady(true);
      return;
    }

    const handleBootComplete = () => {
      setBootReady(true);
    };

    window.addEventListener("portfolio-boot-complete", handleBootComplete);

    return () => {
      window.removeEventListener("portfolio-boot-complete", handleBootComplete);
    };
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[42rem] lg:mr-0">
      <div className="relative rounded-[1.6rem] border border-sky-200/20 bg-[radial-gradient(circle_at_12%_0%,rgba(96,165,250,0.22),transparent_32%),linear-gradient(180deg,rgba(10,18,36,0.9),rgba(4,9,20,0.96))] p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_26px_100px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl sm:rounded-[2rem] sm:p-6 lg:min-h-[34rem] lg:p-5 xl:min-h-[38rem] xl:p-8">
        <div className="relative">
          <div className="mb-5 flex items-center justify-between gap-3 sm:mb-6 sm:gap-4">
            <div className="flex min-w-0 items-center gap-2 text-[10px] font-semibold uppercase text-sky-200 sm:gap-3 sm:text-[11px]">
              <span className="rounded-full border border-sky-200/15 bg-sky-300/[0.1] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                <Code2 className="inline h-3.5 w-3.5" />
              </span>
              <span className="truncate">Engineering Profile</span>
            </div>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-400 sm:text-[11px] sm:tracking-[0.26em]">
              TypeScript
            </span>
          </div>

          <div className="rounded-[1.35rem] border border-white/10 bg-[#050914]/88 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:rounded-[1.5rem] sm:p-6 lg:p-4 xl:p-6">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <pre className="overflow-hidden whitespace-pre-wrap break-words text-[9px] leading-6 min-[420px]:text-[10px] sm:whitespace-pre sm:text-[10.5px] sm:leading-8 lg:text-[9px] lg:leading-7 min-[1180px]:text-[10px] xl:text-[11.5px]">
              <code>
                <CodeLine number="01" active={bootReady}>
                  <span className="text-[#C586C0]">const</span>{" "}
                  <span className="text-[#9CDCFE]">developer</span>{" "}
                  <span className="text-[#D4D4D4]">=</span>{" "}
                  <span className="text-[#D4D4D4]">{"{"}</span>
                </CodeLine>
                <CodeLine number="02" delay={0.29} active={bootReady}>
                  {"  "}
                  <span className="text-[#9CDCFE]">name</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#CE9178]">&quot;Samiun Alim Auntor&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>
                </CodeLine>
                <CodeLine number="03" delay={0.58} active={bootReady}>
                  {"  "}
                  <span className="text-[#9CDCFE]">role</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#CE9178]">&quot;Full Stack Software Engineer&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>
                </CodeLine>
                <CodeLine number="04" delay={0.86} active={bootReady}>
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
                <CodeLine number="05" delay={1.15} active={bootReady}>
                  {"  "}
                  <span className="text-[#9CDCFE]">mindset</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#CE9178]">&quot;Build systems that scale.&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>
                </CodeLine>
                <CodeLine number="06" delay={1.44} active={bootReady}>
                  {"  "}
                  <span className="text-[#9CDCFE]">currentTrajectory</span>
                  <span className="text-[#D4D4D4]">:</span>{" "}
                  <span className="text-[#CE9178]">&quot;Engineering depth -&gt; Real impact&quot;</span>
                  <span className="text-[#D4D4D4]">,</span>
                </CodeLine>
                <CodeLine number="07" delay={1.73} active={bootReady}>
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
                <CodeLine number="08" delay={2.02} active={bootReady}>
                  <span className="text-[#D4D4D4]">{"};"}</span>
                </CodeLine>
              </code>
            </pre>
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold uppercase text-slate-500">
              Core Skills
            </p>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur">
              <Marquee autoFill gradient={false} speed={reduceMotion ? 18 : 28}>
                {coreSkills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div key={skill.label} className="mx-2">
                      <div
                        title={skill.label}
                        aria-label={skill.label}
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#070b14]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_10px_26px_rgba(2,6,23,0.28)]"
                      >
                        <Icon className={`h-6 w-6 ${skill.className}`} />
                      </div>
                    </div>
                  );
                })}
              </Marquee>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function CodeLine({
  number,
  children,
  delay = 0,
  active = false
}: {
  number: string;
  children: React.ReactNode;
  delay?: number;
  active?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className="block origin-left overflow-hidden"
      initial={reduceMotion ? false : { opacity: 0, y: 8, clipPath: "inset(0 100% 0 0)" }}
      animate={
        reduceMotion
          ? undefined
          : active
            ? { opacity: 1, y: 0, clipPath: "inset(0 0% 0 0)" }
            : { opacity: 0, y: 8, clipPath: "inset(0 100% 0 0)" }
      }
      transition={reduceMotion ? undefined : { duration: 1.92, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="mr-4 select-none text-slate-600">{number}</span>
      {children}
    </motion.span>
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
