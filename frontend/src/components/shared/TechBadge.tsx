import { cn } from "@/lib/utils";

type TechBadgeProps = {
  label: string;
  className?: string;
};

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-xs font-medium text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur",
        className
      )}
    >
      {label}
    </span>
  );
}
