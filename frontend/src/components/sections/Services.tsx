import { Blocks, LayoutTemplate, LockKeyhole, PanelsTopLeft, ServerCog, WalletCards } from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";
import { Reveal } from "@/components/shared/Reveal";

const services = [
  {
    title: "Full Stack Web Development",
    description:
      "Building complete web applications with modern frontend, backend architecture, databases, and real product workflows.",
    icon: LayoutTemplate
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces with React, Next.js, Tailwind CSS, and production-focused component systems.",
    icon: PanelsTopLeft
  },
  {
    title: "Backend Development",
    description:
      "Designing structured backend systems with Node.js, Express.js, REST APIs, validation, and clean service architecture.",
    icon: Blocks
  },
  {
    title: "Landing Page Development",
    description:
      "Building responsive, conversion-focused landing pages that present products clearly and create strong first impressions.",
    icon: LockKeyhole
  },
  {
    title: "SaaS Product Development",
    description:
      "Developing scalable SaaS-style applications with complete frontend and backend systems, strong workflows, and maintainable architecture.",
    icon: ServerCog
  },
  {
    title: "Admin Panel Development",
    description:
      "Creating practical admin dashboards and control panels for managing users, content, workflows, analytics, and operations.",
    icon: WalletCards
  },
  {
    title: "Authentication with RBAC",
    description:
      "Implementing secure authentication and role-based access control for apps that need protected routes, user roles, and permission-aware behavior.",
    icon: LockKeyhole
  },
  {
    title: "Database Design",
    description:
      "Designing efficient database schemas and relational or document data models with PostgreSQL, MongoDB, MySQL, Oracle SQL, and Prisma.",
    icon: ServerCog
  },
  {
    title: "Deployment",
    description:
      "Deploying applications on platforms like Vercel, Firebase, Render, and Cloudflare with production-minded configuration and performance.",
    icon: WalletCards
  }
] as const;

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28">
      <PageContainer className="flex flex-col gap-10">
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
      </PageContainer>
    </section>
  );
}
