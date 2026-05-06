import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { profile } from "@/data/site";

const focusAreas = [
  "Authentication and role-based access systems",
  "Booking, payment, dashboard, and notification workflows",
  "Clean backend structure with modular full-stack architecture",
  "SaaS-style product thinking beyond basic CRUD"
];

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="A software engineering student building serious product systems early."
            description={profile.intro}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_70px_rgba(2,6,23,0.32)]">
            <p className="text-base leading-8 text-slate-300">
              I&apos;m a Software Engineering student at Islamic University of Technology and a
              full-stack developer focused on building real-world platforms. My work usually goes
              beyond basic CRUD. I enjoy turning authentication, dashboards, bookings, payments,
              notifications, role-based permissions, and scalable backend structure into clean,
              usable products.
            </p>

            <div className="mt-8 grid gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-slate-950/55 px-4 py-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-7 text-slate-300">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
