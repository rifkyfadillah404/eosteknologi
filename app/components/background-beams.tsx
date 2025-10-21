type BackgroundBeamsProps = {
  className?: string;
};

// Lightweight Aceternity-style background beams (CSS-only)
export function BackgroundBeams({ className }: BackgroundBeamsProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className ?? ""}`} aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(700px_320px_at_50%_10%,rgba(59,130,246,0.18),transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(520px_260px_at_20%_65%,rgba(139,92,246,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(460px_220px_at_80%_50%,rgba(14,165,233,0.15),transparent_75%)]" />
    </div>
  );
}

