import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconBadgeProps = {
  icon: LucideIcon;
  className?: string;
  tone?: "primary" | "slate" | "sky";
};

export function IconBadge({ icon: Icon, className, tone = "primary" }: IconBadgeProps) {
  const palette: Record<"primary" | "slate" | "sky", string> = {
    primary: "bg-[color:var(--accent-soft)] text-[color:var(--accent)] border-[color:var(--accent)]/30",
    slate: "bg-slate-100 text-slate-600 border-slate-200",
    sky: "bg-sky-500/10 text-sky-600 border-sky-200",
  };

  return (
    <span
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl border",
        palette[tone],
        className
      )}
    >
      <Icon className="h-5 w-5" strokeWidth={1.5} />
    </span>
  );
}
