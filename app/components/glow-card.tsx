import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type GlowCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.12)] transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
