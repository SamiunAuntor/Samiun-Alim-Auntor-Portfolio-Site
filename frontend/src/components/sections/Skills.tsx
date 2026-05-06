"use client";

import Marquee from "react-fast-marquee";
import { motion, useReducedMotion } from "framer-motion";
import { Code2, Database, Rocket, Shield, Workflow } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechBadge } from "@/components/shared/TechBadge";
import { skillCategories, stackTicker } from "@/data/skills";

const orbitIcons = [Code2, Workflow, Database, Shield, Rocket];

export function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Stack"
            title="Modern frontend, dependable backend, and software foundations that support scale."
            description="This stack reflects how I think about products: not just the UI layer, but the data, workflows, deployment, and engineering tradeoffs behind it."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="overflow-hidden rounded-full border border-white/10 bg-white/[0.04] py-3">
            <Marquee autoFill gradient={false} speed={reduceMotion ? 18 : 34}>
              {stackTicker.map((tech) => (
                <div key={tech} className="mx-3">
                  <TechBadge label={tech} className="px-4 py-2 text-sm" />
                </div>
              ))}
            </Marquee>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal delay={0.08}>
            <div className="relative flex min-h-[28rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_30%),linear-gradient(180deg,rgba(15,23,42,0.85),rgba(2,6,23,0.96))] p-8">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:34px_34px] opacity-20" />
              <motion.div
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: "linear" }}
                className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-300/15"
              >
                <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-slate-950/80 text-center shadow-[0_0_80px_rgba(34,211,238,0.12)]">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-cyan-300/90">
                      My Engineering Stack
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">Frontend + Backend + Systems</p>
                  </div>
                </div>

                {stackTicker.slice(0, 10).map((item, index) => {
                  const angle = (index / 10) * Math.PI * 2;
                  const x = Math.cos(angle) * 132;
                  const y = Math.sin(angle) * 132;
                  const Icon = orbitIcons[index % orbitIcons.length];

                  return (
                    <motion.div
                      key={item}
                      className="absolute left-1/2 top-1/2"
                      style={{ x, y }}
                      animate={reduceMotion ? undefined : { rotate: -360 }}
                      transition={
                        reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: "linear" }
                      }
                    >
                      <div className="flex min-w-[6.8rem] -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/10 bg-slate-950/85 px-3 py-2 text-xs text-slate-200 shadow-[0_10px_35px_rgba(2,6,23,0.35)]">
                        <Icon className="h-3.5 w-3.5 text-cyan-300" />
                        {item}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Reveal key={category.title} delay={0.08 + index * 0.04}>
                <article className="h-full rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_48px_rgba(2,6,23,0.22)]">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <p className="text-sm leading-7 text-slate-400">{category.description}</p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <TechBadge key={item} label={item} />
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
