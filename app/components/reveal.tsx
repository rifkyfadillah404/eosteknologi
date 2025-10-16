"use client";
import { ReactNode, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "down" | "left" | "right" | "fade" | "scale";
  delayMs?: number;
};

export function Reveal({ children, className, variant = "up", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Fallback immediate reveal if already in view
    const isInView = () => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > window.innerHeight * 0.08;
    };

    if (isInView()) {
      // slight delay for mount paint
      requestAnimationFrame(() => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className ?? ""}`}
      data-variant={variant}
      style={{ transitionDelay: `${Math.max(0, delayMs)}ms` }}
    >
      {children}
    </div>
  );
}
