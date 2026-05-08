export function SectionDivider() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative mx-auto h-10 w-full max-w-7xl px-4 sm:px-6">
      <div className="absolute left-1/2 top-1/2 h-18 w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/[0.032] blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-8 w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.038] blur-2xl" />
    </div>
  );
}
