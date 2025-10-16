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
        "rounded-3xl border border-[rgba(15,23,42,0.08)] bg-white p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1",
        className
      )}
      style={{ boxShadow: "0 24px 60px rgba(108,206,245,0.20)", outline: "1px solid rgba(108,206,245,0.25)" }}
    >
      {children}
    </div>
  );
}
