import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const username = "SamiunAuntor";

const cards = [
  {
    title: "Contribution streak",
    src: `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&hide_border=true&stroke=94a3b8&ring=22d3ee&fire=38bdf8&currStreakLabel=f8fafc&sideLabels=94a3b8&currStreakNum=f8fafc&dates=64748b&sideNums=e2e8f0`
  },
  {
    title: "GitHub stats",
    src: `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&hide_border=true&theme=transparent&title_color=f8fafc&text_color=94a3b8&icon_color=22d3ee`
  },
  {
    title: "Top languages",
    src: `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&hide_border=true&theme=transparent&title_color=f8fafc&text_color=94a3b8`
  }
] as const;

export function GitHubStats() {
  return (
    <section id="github" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="GitHub Signal"
            title="Consistency, iteration, and public engineering proof."
            description="I want the portfolio to show not only polished presentation, but also visible development consistency through public GitHub activity, language distribution, and contribution momentum."
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5">
            <p className="max-w-2xl text-sm leading-7 text-slate-300">
              Current streak and longest streak matter here because they communicate consistency.
              This section is intentionally framed as engineering proof, not decoration.
            </p>
            <Link
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/25 hover:bg-white/[0.08]"
            >
              <Github className="h-4 w-4" />
              View GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={0.06 + index * 0.05}>
              <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.94))] p-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
                  {card.title}
                </p>
                <img
                  src={card.src}
                  alt={`${card.title} for ${username}`}
                  loading="lazy"
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.94))] p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/90">
              Contribution Graph
            </p>
            <img
              src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github_dark`}
              alt={`GitHub contribution graph summary for ${username}`}
              loading="lazy"
              className="h-auto w-full rounded-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
