import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MonitorSmartphone,
  Orbit,
  Sparkles,
  Target
} from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { TechBadge } from "@/components/shared/TechBadge";
import { heroStats, profile } from "@/data/site";
import { stackTicker } from "@/data/skills";
import { socialLinks } from "@/data/socialLinks";

const statStyles = [
  {
    border: "border-cyan-300/20",
    glow: "from-cyan-400/12 via-cyan-300/8 to-transparent",
    icon: MonitorSmartphone,
    iconColor: "text-cyan-300"
  },
  {
    border: "border-emerald-300/20",
    glow: "from-emerald-400/12 via-emerald-300/8 to-transparent",
    icon: Orbit,
    iconColor: "text-emerald-300"
  },
  {
    border: "border-violet-300/20",
    glow: "from-violet-400/12 via-violet-300/8 to-transparent",
    icon: Sparkles,
    iconColor: "text-violet-300"
  }
] as const;

const badgeStyles = [
  "border-cyan-300/15 bg-cyan-300/8 text-cyan-100",
  "border-sky-300/15 bg-sky-300/8 text-sky-100",
  "border-indigo-300/15 bg-indigo-300/8 text-indigo-100",
  "border-emerald-300/15 bg-emerald-300/8 text-emerald-100",
  "border-amber-300/15 bg-amber-300/8 text-amber-100",
  "border-fuchsia-300/15 bg-fuchsia-300/8 text-fuchsia-100"
] as const;

const insightCards = [
  {
    title: "Mindset",
    icon: BrainCircuit,
    iconColor: "text-cyan-300",
    border: "border-cyan-300/18",
    glow: "from-cyan-400/12 via-cyan-300/6 to-transparent",
    description:
      "I do not just build apps. I design product systems with roles, workflows, data flow, and production behavior in mind."
  },
  {
    title: "Focus",
    icon: Target,
    iconColor: "text-indigo-300",
    border: "border-indigo-300/18",
    glow: "from-indigo-400/12 via-violet-300/7 to-transparent",
    description:
      "Authentication, RBAC, bookings, payments, notifications, dashboards, and scalable backend structure."
  }
] as const;

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

      <div className="mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div className="space-y-8 pt-2">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
              Full Stack Developer & Software Engineering Student
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
                Hi, I&apos;m {profile.name}
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.4rem] lg:leading-[1.02]">
                I build scalable web platforms with modern frontend, clean backend
                architecture, and real-world product workflows.
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
                {profile.heroDescription}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.2)] transition hover:from-sky-300 hover:to-cyan-200"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            {githubLink ? (
              <Link
                href={githubLink.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/25 hover:bg-white/[0.08]"
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
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-indigo-300/25 hover:bg-white/[0.08]"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            ) : null}
          </Reveal>

          <Reveal delay={0.16} className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat, index) => {
              const style = statStyles[index % statStyles.length];
              const Icon = style.icon;

              return (
                <div
                  key={stat.label}
                  className={`relative overflow-hidden rounded-[1.6rem] border ${style.border} bg-white/[0.04] p-5 shadow-[0_12px_40px_rgba(2,6,23,0.25)] backdrop-blur`}
                >
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${style.glow}`} />
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-2.5">
                      <Icon className={`h-4.5 w-4.5 ${style.iconColor}`} />
                    </div>
                    <p className="text-sm font-medium text-slate-200">{stat.label}</p>
                  </div>
                  <h2 className="mt-4 text-lg font-semibold text-white">{stat.value}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{stat.detail}</p>
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.22} className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <MapPin className="h-4 w-4 text-cyan-300" />
              {profile.location}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
              <BriefcaseBusiness className="h-4 w-4 text-violet-300" />
              {profile.graduation}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-6 rounded-[2.6rem] bg-gradient-to-br from-cyan-400/12 via-indigo-400/8 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.3rem] border border-cyan-300/22 bg-[linear-gradient(180deg,rgba(7,14,29,0.95),rgba(4,9,20,0.98))] p-6 shadow-[0_30px_120px_rgba(2,6,23,0.55)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.08),transparent_26%)]" />
            <div className="relative">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
                  <span className="rounded-full border border-cyan-300/15 bg-cyan-300/8 px-2.5 py-1">
                    {"</>"}
                  </span>
                  Engineering Profile
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-slate-400">
                  TypeScript
                </span>
              </div>

              <div className="rounded-[1.8rem] border border-white/10 bg-[#020817]/85 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                <div className="mb-5 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>

                <pre className="overflow-x-auto text-[13px] leading-8">
                  <code>
                    <span className="text-[#C586C0]">const</span>{" "}
                    <span className="text-[#9CDCFE]">developer</span>{" "}
                    <span className="text-[#D4D4D4]">=</span>{" "}
                    <span className="text-[#D4D4D4]">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#9CDCFE]">name</span>
                    <span className="text-[#D4D4D4]">:</span>{" "}
                    <span className="text-[#CE9178]">&quot;Samiun Alim Auntor&quot;</span>
                    <span className="text-[#D4D4D4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#9CDCFE]">role</span>
                    <span className="text-[#D4D4D4]">:</span>{" "}
                    <span className="text-[#CE9178]">&quot;Full Stack Developer&quot;</span>
                    <span className="text-[#D4D4D4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#9CDCFE]">focus</span>
                    <span className="text-[#D4D4D4]">:</span>{" "}
                    <span className="text-[#D4D4D4]">[</span>
                    <span className="text-[#CE9178]">&quot;Next.js&quot;</span>
                    <span className="text-[#D4D4D4]">,</span>{" "}
                    <span className="text-[#CE9178]">&quot;Backend&quot;</span>
                    <span className="text-[#D4D4D4]">,</span>{" "}
                    <span className="text-[#CE9178]">&quot;System Design&quot;</span>
                    <span className="text-[#D4D4D4]">],</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#9CDCFE]">mindset</span>
                    <span className="text-[#D4D4D4]">:</span>{" "}
                    <span className="text-[#CE9178]">&quot;Build systems that scale&quot;</span>
                    <span className="text-[#D4D4D4]">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-[#9CDCFE]">currentTrajectory</span>
                    <span className="text-[#D4D4D4]">:</span>{" "}
                    <span className="text-[#CE9178]">
                      &quot;Internship-ready engineering depth&quot;
                    </span>
                    {"\n"}
                    <span className="text-[#D4D4D4]">{"};"}</span>
                  </code>
                </pre>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-500">
                  Core Skills
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {stackTicker.slice(0, 8).map((item, index) => (
                    <TechBadge
                      key={item}
                      label={item}
                      className={badgeStyles[index % badgeStyles.length]}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {insightCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className={`relative overflow-hidden rounded-[1.7rem] border ${card.border} bg-white/[0.04] p-5`}
                    >
                      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${card.glow}`} />
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl border border-white/10 bg-slate-950/65 p-2.5">
                          <Icon className={`h-5 w-5 ${card.iconColor}`} />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
                          {card.title}
                        </p>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-slate-300">{card.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
