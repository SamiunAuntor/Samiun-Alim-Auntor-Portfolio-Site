import { Blocks, LayoutTemplate, LockKeyhole, PanelsTopLeft, ServerCog, WalletCards } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

const services = [
  {
    title: "Landing Pages",
    description: "Fast, premium pages with clear structure, strong messaging, and polished interactions.",
    icon: LayoutTemplate
  },
  {
    title: "Portfolio Websites",
    description: "Developer and personal brand sites that feel modern, intentional, and recruiter-ready.",
    icon: PanelsTopLeft
  },
  {
    title: "Full-Stack Web Apps",
    description: "Product-focused applications with clean frontend, backend structure, and scalable flows.",
    icon: Blocks
  },
  {
    title: "Authentication & RBAC",
    description: "Secure login, protected routes, and role-aware product behavior across real workflows.",
    icon: LockKeyhole
  },
  {
    title: "REST APIs & Backend",
    description: "Structured APIs, modular services, validation, and database-backed business logic.",
    icon: ServerCog
  },
  {
    title: "Payments & Dashboards",
    description: "Checkout flows, admin panels, role-based dashboards, and production-style operations.",
    icon: WalletCards
  }
] as const;

export function Services() {
  return (
    <section id="services" className="px-3 py-20 sm:px-5 lg:py-28 xl:px-6">
      <div className="mx-auto flex w-full max-w-[calc(80rem-1.5rem)] flex-col gap-10 sm:max-w-[calc(80rem-2.5rem)] xl:max-w-[calc(80rem-3rem)]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
              Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              What I can{" "}
              <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                build for you.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Product-oriented services centered around modern interfaces, backend workflows, and practical full-stack systems.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={0.05 * index}>
                <article className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_56px_rgba(2,6,23,0.28),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sky-300/15 bg-sky-300/[0.07] text-sky-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
