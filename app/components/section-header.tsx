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
        "max-w-3xl space-y-6",
        align === "center" ? "text-center mx-auto" : "text-left"
      )}
    >
      {overline ? (
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 backdrop-blur-sm">
          <span className={cn(
            "text-xs font-semibold uppercase tracking-wider",
            invert ? "text-blue-300" : "text-blue-600"
          )}>
            {overline}
          </span>
        </div>
      ) : null}
      <h2 className={cn(
        "text-4xl font-bold leading-tight tracking-tight md:text-5xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 bg-clip-text text-transparent",
        invert ? "from-white via-slate-100 to-slate-200" : ""
      )}>
        {title}
      </h2>
      <div className={cn(
        "h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500",
        align === "center" ? "mx-auto" : ""
      )} />
      {description ? (
        <p className={cn(
          "text-lg md:text-xl leading-relaxed",
          invert ? "text-slate-300" : "text-slate-600"
        )}>{description}</p>
      ) : null}
    </div>
  );
}
