"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import iconAvatar from "@/assets/icon_1.png";
import { profile } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" }
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [avatarFailed, setAvatarFailed] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6">
      <nav className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/70 px-4 py-3 shadow-[0_14px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:px-6">
        <Link href="#home" className="flex items-center gap-3">
          <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),rgba(15,23,42,0.92))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            {avatarFailed ? (
              <span className="text-base font-semibold tracking-[0.18em] text-slate-100">S</span>
            ) : (
              <Image
                src={iconAvatar}
                alt="Samiun Alim Auntor avatar"
                fill
                sizes="48px"
                className="object-cover"
                onError={() => setAvatarFailed(true)}
              />
            )}
          </span>
          <div className="hidden min-[880px]:block">
            <p className="text-sm font-semibold text-white">{profile.name}</p>
            <p className="text-xs text-slate-400">Full-stack software engineer</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 min-[880px]:flex">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-slate-300 transition hover:text-white",
                activeSection === item.id && "bg-white/[0.06] text-white"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 min-[880px]:flex">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/25 hover:bg-white/[0.08]"
          >
            Email
          </a>
          <span className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">
            Resume Soon
          </span>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white min-[880px]:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="mt-3 rounded-[1.8rem] border border-white/10 bg-slate-950/95 p-4 shadow-[0_24px_70px_rgba(2,6,23,0.48)] backdrop-blur min-[880px]:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]",
                  activeSection === item.id && "bg-white/[0.06] text-white"
                )}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
