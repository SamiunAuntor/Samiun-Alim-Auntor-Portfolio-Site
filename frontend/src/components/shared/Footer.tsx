import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { PageContainer } from "@/components/shared/PageContainer";
import { profile } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <PageContainer className="py-10">
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-8 text-center shadow-[0_18px_56px_rgba(2,6,23,0.22)] backdrop-blur">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-white">{profile.name}</p>
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              Full-stack software engineer focused on product thinking, clean backend structure,
              and production-ready web experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              const isExternal = link.href.startsWith("https://");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-3 text-sm text-white transition hover:border-cyan-300/25 hover:bg-white/[0.08]"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : null}
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </PageContainer>

      <div className="border-t border-white/8">
        <PageContainer className="py-4">
          <p className="text-center text-sm text-slate-500">
            © 2026 {profile.name}. Built with Next.js, TypeScript, Tailwind CSS, and modular
            backend architecture.
          </p>
        </PageContainer>
      </div>
    </footer>
  );
}
