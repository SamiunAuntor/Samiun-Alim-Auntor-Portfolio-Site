import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PageContainer } from "@/components/shared/PageContainer";
import { profile } from "@/data/site";
import { socialLinks } from "@/data/socialLinks";

const footerNavItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
] as const;

const whatsappHref = "https://wa.me/8801988774499";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
} as const;

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[min(62rem,82vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300/65 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[42rem] -translate-x-1/2 rounded-full bg-sky-400/[0.07] blur-[110px]" />

      <PageContainer className="relative pt-10 lg:pt-12">
        <div className="grid gap-9 pb-9 md:grid-cols-2 lg:grid-cols-[minmax(0,1.25fr)_minmax(10rem,0.55fr)_minmax(18rem,0.85fr)] lg:gap-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-300/90">
              Philosophy
            </p>
            <h2 className="mt-4 text-2xl font-semibold leading-tight text-white sm:text-3xl">
              Real Problem + System-Level Thinking + Consistent Execution ={" "}
              <span className="bg-gradient-to-r from-sky-200 via-sky-400 to-indigo-500 bg-clip-text text-transparent">
                Scalable Solution
              </span>
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              I focus on solving real-world problems through disciplined execution and clean system
              design - building production-ready, scalable systems.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.label as keyof typeof iconMap];
                const isExternal = link.href.startsWith("https://");

                return (
                  <FooterSocialIcon
                    key={link.label}
                    href={link.href}
                    label={link.label}
                    external={isExternal}
                  >
                    {Icon ? <Icon className="h-5 w-5" /> : null}
                  </FooterSocialIcon>
                );
              })}
              <FooterSocialIcon href={whatsappHref} label="WhatsApp" external>
                <FaWhatsapp className="h-5 w-5" />
              </FooterSocialIcon>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
              Explore
            </p>
            <nav className="mt-4 grid gap-3 text-sm font-medium text-slate-300">
              {footerNavItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="w-fit transition hover:text-sky-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/80">
              Reach Me
            </p>
            <div className="mt-4 space-y-4">
              <FooterContactLine href={`mailto:${profile.email}`} icon={<Mail className="h-4 w-4" />}>
                {profile.email}
              </FooterContactLine>
              <FooterContactLine href={`tel:${profile.phone}`} icon={<Phone className="h-4 w-4" />}>
                {profile.phone}
              </FooterContactLine>
              <FooterContactLine icon={<MapPin className="h-4 w-4" />}>
                {profile.location}
              </FooterContactLine>
            </div>
          </div>
        </div>

      </PageContainer>

      <div className="relative border-t border-white/10">
        <PageContainer className="py-5">
          <p className="text-center text-sm text-slate-500">
          &copy; 2026 {profile.name}. All rights reserved.
          </p>
        </PageContainer>
      </div>
    </footer>
  );
}

function FooterSocialIcon({
  href,
  label,
  external,
  children
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.045] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] transition hover:-translate-y-0.5 hover:border-sky-300/30 hover:bg-white/[0.08]"
    >
      {children}
    </Link>
  );
}

function FooterContactLine({
  href,
  icon,
  children
}: {
  href?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const content = (
    <span className="flex items-center gap-3 text-sm font-medium text-slate-200">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-sky-300/14 bg-sky-300/[0.07] text-sky-200">
        {icon}
      </span>
      <span className="min-w-0 break-words">{children}</span>
    </span>
  );

  if (!href) {
    return content;
  }

  return (
    <Link href={href} className="block w-fit transition hover:text-sky-100">
      {content}
    </Link>
  );
}
