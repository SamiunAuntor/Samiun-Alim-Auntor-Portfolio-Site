"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import iconAvatar from "@/assets/icon_1.png";
import { PageContainer } from "@/components/shared/PageContainer";
import { profile } from "@/data/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Services", id: "services" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" }
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [avatarFailed, setAvatarFailed] = useState(false);
  const navScrollLockUntilRef = useRef(0);

  useEffect(() => {
    const updateActiveSection = () => {
      if (Date.now() < navScrollLockUntilRef.current) {
        return;
      }

      const navElement = document.querySelector("header nav");
      const navHeight =
        navElement instanceof HTMLElement ? navElement.getBoundingClientRect().height : 76;
      const marker = window.scrollY + navHeight + window.innerHeight * 0.2;
      const viewportBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight - 4;

      if (viewportBottom >= pageBottom) {
        setActiveSection(navItems.at(-1)?.id ?? "");
        return;
      }

      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id);

          if (!element) {
            return null;
          }

          return {
            id: item.id,
            top: element.getBoundingClientRect().top + window.scrollY
          };
        })
        .filter((section): section is { id: (typeof navItems)[number]["id"]; top: number } =>
          Boolean(section)
        )
        .sort((first, second) => first.top - second.top);

      let currentSection: string = sections[0]?.id ?? "";

      for (const section of sections) {
        if (marker >= section.top) {
          currentSection = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleSectionNavigate = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    const contentTarget =
      section.firstElementChild instanceof HTMLElement ? section.firstElementChild : section;
    const navElement = document.querySelector("header nav");
    const navHeight = navElement instanceof HTMLElement ? navElement.getBoundingClientRect().height : 76;
    const targetOffset = -(navHeight + 60);

    setMenuOpen(false);
    setActiveSection(sectionId);
    navScrollLockUntilRef.current = Date.now() + 1400;
    const lenis = window.__portfolioLenis;
    window.history.replaceState(null, "", window.location.pathname);

    if (lenis) {
      lenis.scrollTo(contentTarget, {
        offset: targetOffset,
        duration: 1.15,
        lerp: 0.12
      });
      return;
    }

    const targetY = Math.max(
      contentTarget.getBoundingClientRect().top + window.scrollY + targetOffset,
      0
    );
    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });
  };

  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-4">
      <PageContainer>
        <nav className="flex min-w-0 items-center justify-between gap-3 rounded-full border border-white/10 bg-slate-950/70 px-3 py-2.5 shadow-[0_14px_40px_rgba(2,6,23,0.35)] backdrop-blur-xl sm:px-5 sm:py-3 xl:px-6">
          <Link href="/" className="flex min-w-0 flex-1 items-center gap-2.5 sm:gap-3 lg:flex-none">
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),rgba(15,23,42,0.92))] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] min-[390px]:h-11 min-[390px]:w-11 sm:h-12 sm:w-12">
              {avatarFailed ? (
                <span className="text-base font-semibold tracking-[0.18em] text-slate-100">S</span>
              ) : (
                <Image
                  src={iconAvatar}
                  alt="Samiun Alim Auntor avatar"
                  fill
                  sizes="(min-width: 640px) 48px, 40px"
                  className="object-cover"
                  onError={() => setAvatarFailed(true)}
                />
              )}
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-white min-[390px]:text-xs sm:text-sm">{profile.name}</p>
              <p className="truncate text-[10px] text-slate-400 min-[390px]:text-[11px] sm:text-xs">
                Full-stack software engineer
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                  onClick={() => handleSectionNavigate(item.id)}
                  className={cn(
                    "rounded-full px-3 py-2 text-xs text-slate-300 transition hover:text-white xl:px-4 xl:text-sm",
                    activeSection === item.id && "bg-white/[0.06] text-white"
                  )}
                >
                  <span
                    className={cn(
                      activeSection === item.id &&
                        "bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent"
                    )}
                  >
                    {item.label}
                  </span>
                </button>
            ))}
          </div>

          <div className="hidden items-center gap-2 lg:flex xl:gap-3">
            <button
              type="button"
              onClick={() => handleSectionNavigate("contact")}
              className="rounded-full bg-cyan-300 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200 xl:px-4 xl:text-sm"
            >
              Hire Me
            </button>
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white sm:h-11 sm:w-11 lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen ? (
          <div className="mt-3 rounded-[1.8rem] border border-white/10 bg-slate-950/95 p-4 shadow-[0_24px_70px_rgba(2,6,23,0.48)] backdrop-blur lg:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                    type="button"
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]",
                      activeSection === item.id && "bg-white/[0.06] text-white"
                    )}
                    onClick={() => handleSectionNavigate(item.id)}
                  >
                    <span
                      className={cn(
                        activeSection === item.id &&
                          "bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent"
                      )}
                    >
                      {item.label}
                    </span>
                  </button>
              ))}
              <button
                type="button"
                className="mt-2 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                onClick={() => handleSectionNavigate("contact")}
              >
                Hire Me
              </button>
            </div>
          </div>
        ) : null}
      </PageContainer>
    </header>
  );
}
