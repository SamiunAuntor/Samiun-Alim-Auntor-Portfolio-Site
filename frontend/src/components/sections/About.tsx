import Image from "next/image";
import { BarChart3, Code2, Rocket, ShieldCheck, Zap } from "lucide-react";
import aboutPhoto from "@/assets/icon_1.png";
import { Reveal } from "@/components/shared/Reveal";
import { profile } from "@/data/site";

const focusPoints = [
  {
    text: "Clean, maintainable code with scalable architecture",
    icon: Code2
  },
  {
    text: "Security-first approach with role-based access and best practices",
    icon: ShieldCheck
  },
  {
    text: "Data-driven features, dashboards, and real-time experiences",
    icon: BarChart3
  },
  {
    text: "Ship focused. Learn fast. Solve meaningful problems.",
    icon: Rocket
  }
] as const;

const stats = [
  {
    value: "5+",
    label: "Projects Completed"
  },
  {
    value: "3+",
    label: "Technologies Mastered"
  },
  {
    value: "100%",
    label: "Passion for Building"
  },
  {
    value: <Zap className="h-7 w-7 text-yellow-300" />,
    label: "Always Learning"
  }
] as const;

export function About() {
  return (
    <section id="about" className="py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="grid w-full gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-[0.76] w-full max-w-[28rem]">
              <div className="absolute -inset-3 rounded-[2.3rem] border border-sky-200/12 bg-white/[0.025] shadow-[0_20px_90px_rgba(37,99,235,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl" />
              <div className="relative h-full overflow-hidden rounded-[2rem] border border-sky-200/20 bg-[radial-gradient(circle_at_50%_18%,rgba(125,211,252,0.18),transparent_34%),linear-gradient(180deg,rgba(15,23,42,0.72),rgba(2,6,23,0.96))] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_30px_100px_rgba(2,6,23,0.5),inset_0_1px_0_rgba(255,255,255,0.12)]">
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.16),transparent_24%,transparent_76%,rgba(125,211,252,0.12))]" />
                <Image
                  src={aboutPhoto}
                  alt={`${profile.name} portrait`}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 28rem, 90vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
                    Open to Opportunities
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
                  About Me
                </p>
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-5xl">
                  Building serious product systems early.
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-300">
                  I&apos;m a Software Engineering student with a strong focus on building
                  high-quality, end-to-end systems that solve real-world problems. I care about
                  writing clean code, solid architecture, and delivering impactful user
                  experiences.
                </p>
              </div>

              <div className="grid gap-4">
                {focusPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <div key={point.text} className="flex items-center gap-4 text-sm text-slate-300">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-300/15 bg-sky-300/[0.06] text-sky-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      {point.text}
                    </div>
                  );
                })}
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/12 to-transparent" />

              <div className="grid gap-4 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur"
                  >
                    <div className="flex min-h-9 items-center justify-center text-3xl font-semibold text-sky-300">
                      {stat.value}
                    </div>
                    <p className="mt-3 text-xs leading-5 text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
