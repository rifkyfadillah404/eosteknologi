import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type BentoItem = {
  title: string;
  description?: string;
  icon?: ReactNode;
  media?: ReactNode;
  className?: string;
};

type BentoGridProps = {
  items: BentoItem[];
  className?: string;
};

export function BentoGrid({ items, className }: BentoGridProps) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-6 gap-4", className)}>
      {items.map((it, i) => (
        <div
          key={i}
          className={cn(
            "relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5",
            "shadow-[0_18px_45px_rgba(15,23,42,0.12)]",
            it.className
          )}
        >
          {it.media && (
            <div className="-m-5 mb-4 overflow-hidden rounded-t-2xl">{it.media}</div>
          )}
          <div className="flex items-start gap-3">
            {it.icon && <div className="mt-0.5">{it.icon}</div>}
            <div>
              <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
              {it.description && (
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{it.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

