import { cn } from "@/lib/cn";

type BackgroundRippleProps = {
  className?: string;
};

const rings = [320, 500, 720, 960];

export function BackgroundRipple({ className }: BackgroundRippleProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 flex items-center justify-center", className)}>
      <div className="relative flex items-center justify-center">
        {rings.map((size, idx) => (
          <span
            key={size}
            className="ripple-ring"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${idx * 1.25}s`,
              animationDuration: `${10 + idx * 2.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
