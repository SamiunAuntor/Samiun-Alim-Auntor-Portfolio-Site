"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const bootLines = [
  "preparing environment...",
  "compiling samiun alim auntor portfolio...",
  "rendering engineering interface...",
  "system ready"
] as const;

export function BootSequence() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [activeLine, setActiveLine] = useState(0);

  const totalDuration = useMemo(() => (reduceMotion ? 700 : 2500), [reduceMotion]);

  useEffect(() => {
    window.__portfolioBootComplete = false;
    setVisible(true);
    setActiveLine(0);

    const lineInterval = window.setInterval(() => {
      setActiveLine((current) => Math.min(current + 1, bootLines.length - 1));
    }, totalDuration / bootLines.length);

    const dismissTimeout = window.setTimeout(() => {
      window.__portfolioBootComplete = true;
      window.dispatchEvent(new Event("portfolio-boot-complete"));
      setVisible(false);
      window.clearInterval(lineInterval);
    }, totalDuration + 250);

    return () => {
      window.clearInterval(lineInterval);
      window.clearTimeout(dismissTimeout);
    };
  }, [totalDuration]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          className="pointer-events-none fixed inset-0 z-[100] overflow-hidden bg-[#02040b]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
          <div className="absolute left-1/2 top-1/4 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

          <div className="relative mx-auto flex min-h-screen w-full max-w-5xl items-center px-6 py-12">
            <div className="w-full rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="mb-8 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-4 font-mono text-sm text-slate-300 sm:text-base">
                {bootLines.map((line, index) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0.25 }}
                    animate={{ opacity: index <= activeLine ? 1 : 0.25 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-cyan-300">{">"}</span>
                    <span>{line}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/8">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: totalDuration / 1000, ease: "easeInOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
