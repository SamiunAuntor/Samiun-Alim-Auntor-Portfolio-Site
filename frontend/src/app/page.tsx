const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" }
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-12">
      <nav className="mb-16 flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur">
        <span className="text-lg font-semibold tracking-wide text-white">SA</span>
        <div className="flex gap-5 text-sm text-slate-300">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="grid flex-1 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Portfolio v2 initialized</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white lg:text-7xl">
            Full-stack products with a premium, animated portfolio experience.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Placeholder-first foundation for your new portfolio. We can now layer the hero,
            featured projects, services, 3D skills globe, code snippets, and mail backend on top
            of this structure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white"
              href="/projects"
            >
              View Structure
            </a>
            <a
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100"
              href="/contact"
            >
              Contact Page
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(79,124,255,0.18)] backdrop-blur">
          <div className="mb-4 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
          </div>
          <pre className="overflow-hidden rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-5 text-sm leading-7 text-slate-300">
            <code>{`> booting portfolio/frontend
> loading placeholder assets
> preparing animated sections
> waiting for final images...`}</code>
          </pre>
        </div>
      </section>
    </main>
  );
}
