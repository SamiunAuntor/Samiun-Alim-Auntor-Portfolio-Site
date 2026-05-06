import Link from "next/link";
import { profile } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-white">{profile.name}</p>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Full Stack Developer focused on MERN, Next.js, backend engineering, SaaS
            architecture, and real product workflows.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          {socialLinks.map((link) => (
            <Link key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 text-sm text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <p>(c) 2026 Samiun Alim Auntor. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <p>Designed to reflect full-stack systems thinking and production-ready engineering.</p>
        </div>
      </div>
    </footer>
  );
}
