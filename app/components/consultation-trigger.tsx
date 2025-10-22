"use client";

import { ReactNode } from "react";
import { useConsultationModal } from "../providers/consultation-modal";
import { cn } from "@/lib/cn";

type ConsultationTriggerProps = {
  children: ReactNode;
  className?: string;
  source?: string;
  fullWidth?: boolean;
};

export function ConsultationTrigger({ children, className, source, fullWidth = false }: ConsultationTriggerProps) {
  const { open } = useConsultationModal();

  return (
    <button
      type="button"
      onClick={() => open({ source })}
      className={cn("inline-flex items-center justify-center", fullWidth ? "w-full" : "", className)}
    >
      {children}
    </button>
  );
}
