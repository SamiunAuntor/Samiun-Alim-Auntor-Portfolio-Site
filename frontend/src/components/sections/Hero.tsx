import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { TechBadge } from "@/components/shared/TechBadge";
import { heroStats, profile } from "@/data/site";
import { stackTicker } from "@/data/skills";
import { socialLinks } from "@/data/socialLinks";

export function Hero() {
  const githubLink = socialLinks.find((link) => link.label === "GitHub");
  const linkedInLink = socialLinks.find((link) => link.label === "LinkedIn");

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div className="absolute inset-x-0 top-8 -z-10 mx-auto h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-[130px]" />

      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-8">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              Full Stack Developer & Software Engineering Student
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Hi, I&apos;m {profile.name}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                I build scalable web platforms with modern frontend, clean backend architecture,
                and real-world product workflows.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                {profile.heroDescription}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/25 hover:bg-white/[0.08]"
            >
              Contact Me
              <Mail className="h-4 w-4" />
            </Link>
            {githubLink ? (
              <Link
                href={githubLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm text-slate-200 transition hover:border-cyan-300/25 hover:text-white"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            ) : null}
            {linkedInLink ? (
              <Link
                href={linkedInLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3.5 text-sm text-slate-200 transition hover:border-cyan-300/25 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            ) : null}
          </Reveal>

          <Reveal delay={0.16} className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_12px_40px_rgba(2,6,23,0.25)] backdrop-blur"
              >
                <p className="text-sm font-medium text-cyan-200">{stat.label}</p>
                <h2 className="mt-3 text-lg font-semibold text-white">{stat.value}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-400">{stat.detail}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.22} className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <MapPin className="h-4 w-4 text-cyan-300" />
              {profile.location}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              {profile.graduation}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/12 via-transparent to-indigo-500/12 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.85),rgba(2,6,23,0.98))] p-6 shadow-[0_32px_120px_rgba(2,6,23,0.45)]">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-400">
                engineering profile
              </span>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-slate-950/70 p-5">
              <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
                <code>{`const developer = {
  name: "Samiun Alim Auntor",
  role: "Full Stack Developer",
  focus: ["Next.js", "Backend", "System Design"],
  mindset: "Build systems that scale",
  currentTrajectory: "Internship-ready engineering depth"
};`}</code>
              </pre>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Core stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stackTicker.slice(0, 8).map((item) => (
                    <TechBadge key={item} label={item} />
                  ))}
                </div>
              </div>
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Mindset</p>
                <p className="mt-4 text-base leading-8 text-slate-300">
                  I don&apos;t just build apps. I design product systems with roles, workflows,
                  data flow, and production behavior in mind.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
