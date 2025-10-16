import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  invert?: boolean;
};

export function SectionHeader({
  overline,
  title,
  description,
  align = "left",
  invert = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" ? "text-center mx-auto" : "text-left"
      )}
    >
      {overline ? (
        <span className={cn(
          "inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.35em]",
          invert ? "text-slate-200" : "text-slate-400"
        )}>
          {overline}
        </span>
      ) : null}
      <h2 className={cn(
        "text-3xl font-semibold leading-tight md:text-4xl",
        invert ? "text-white" : "text-slate-900"
      )}>
        {title}
      </h2>
      <div className="mx-auto h-0.5 w-12 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
      {description ? (
        <p className={cn(
          "text-base md:text-lg",
          invert ? "text-slate-200" : "text-slate-500"
        )}>{description}</p>
      ) : null}
    </div>
  );
}
