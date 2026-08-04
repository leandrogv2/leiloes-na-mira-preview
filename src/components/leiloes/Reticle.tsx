import { cn } from "@/lib/utils";

/**
 * Retícula holográfica — elemento proprietário recorrente.
 * SVG puro, decorativo, substituível pelo SVG final da marca.
 */
export function Reticle({
  className,
  strokeWidth = 2,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("text-focus", className)}
      style={{ filter: "drop-shadow(0 0 6px color-mix(in oklab, currentColor 55%, transparent))" }}
    >
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt">
        <path d="M50 6 A44 44 0 0 1 94 50" opacity="0.95" />
        <path d="M50 94 A44 44 0 0 1 6 50" opacity="0.6" />
        <path d="M50 2 v12" />
        <path d="M50 86 v12" />
        <path d="M2 50 h12" />
        <path d="M86 50 h12" />
      </g>
      <circle cx="50" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}

/** Cantos de enquadramento (crop marks). */
export function FrameCorners({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-current" />
      <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-current" />
      <span className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-current" />
      <span className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-current" />
    </span>
  );
}
