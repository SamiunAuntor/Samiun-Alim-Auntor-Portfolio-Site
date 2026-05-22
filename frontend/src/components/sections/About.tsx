import Image from "next/image";
import { BarChart3, Code2, Layers, ShieldCheck, Zap } from "lucide-react";
import aboutPhoto from "@/assets/icon_1.png";
import { PageContainer } from "@/components/shared/PageContainer";
import { Reveal } from "@/components/shared/Reveal";
import { profile } from "@/data/site";

const focusPoints = [
  {
    text: "Full-stack development from UI to backend architecture",
    icon: Layers
  },
  {
    text: "Secure systems with authentication, RBAC, and clean APIs",
    icon: ShieldCheck
  },
  {
    text: "Real-world workflows : bookings, payments, dashboards, notifications",
    icon: BarChart3
  },
  {
    text: "System-level thinking focused on reliability and maintainability",
    icon: Code2
  }
] as const;

const stats = [
  {
    value: "10+",
    label: "Projects Built",
    icon: Layers
  },
  {
    value: "Next.js + TS + SQL",
    label: "Core Stack",
    icon: Code2
  },
  {
    value: "DevOps & Go",
    label: "Currently Learning",
    icon: Zap
  }
] as const;

export function About() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <PageContainer>
        <div className="grid w-full gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto aspect-[0.78] w-full max-w-[27rem] lg:ml-3 lg:mr-0">
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
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
                  About Me
                </p>
                <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Full-stack engineer building{" "}
                  <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                    scalable web systems.
                  </span>
                </h2>
                <p className="max-w-2xl text-base leading-8 text-slate-300">
                  I&apos;m a full-stack software engineer who builds product systems from frontend
                  experience to backend architecture. I focus on creating scalable,
                  production-ready applications with clean APIs, role-based workflows, normalized
                  databases, payment flows, dashboards, and system-level thinking.
                </p>
                <p className="max-w-2xl text-base leading-8 text-slate-300">
                  I enjoy building practical systems around real user workflows, including
                  authentication, RBAC, booking, payments, notifications, analytics, and
                  deployment-ready backend structure.
                </p>
              </div>

              <div className="grid gap-3">
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

              <div className="grid gap-3 sm:grid-cols-[minmax(10rem,0.82fr)_minmax(18rem,1.28fr)_minmax(13rem,1fr)]">
                {stats.map((stat) => {
                  const Icon = stat.icon;

                  return (
                    <div
                      key={stat.label}
                      className="flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] backdrop-blur"
                    >
                      <div>
                        <div className="whitespace-nowrap text-lg font-semibold leading-none text-sky-300 sm:text-xl xl:text-[1.35rem]">
                          {stat.value}
                        </div>
                        <p className="mt-1.5 text-sm font-medium leading-5 text-slate-300">
                          {stat.label}
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/50 text-slate-200">
                        <Icon className="h-5 w-5" />
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </PageContainer>
    </section>
  );
}
