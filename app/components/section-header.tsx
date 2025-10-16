import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  overline,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        align === "center" ? "text-center mx-auto" : "text-left"
      )}
    >
      {overline ? (
        <span className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.35em] text-slate-400">
          {overline}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      <div className="mx-auto h-0.5 w-12 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
      {description ? (
        <p className="text-base text-slate-500 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
