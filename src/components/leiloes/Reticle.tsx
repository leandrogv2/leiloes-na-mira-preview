import { cn } from "@/lib/utils";

type Mode = "lock" | "scan" | "soft" | "axes";

/**
 * Retícula — comportamento proprietário do Leilões na Mira.
 * lock → decisão tomada: anel completo, traço firme, ponto central
 * scan → seleção em curso: anel parcial, marcas de eixo
 * soft → antes da clareza: anel desfocado, sem centro
 * axes → registro técnico: apenas eixos e ticks
 * SVG puro, decorativo, substituível pelo SVG final da marca.
 */
export function Reticle({
  className,
  mode = "scan",
  strokeWidth = 2.6,
}: {
  className?: string;
  mode?: Mode;
  strokeWidth?: number;
}) {
  const glow =
    mode === "soft"
      ? "blur(2.2px) drop-shadow(0 0 10px color-mix(in oklab, currentColor 40%, transparent))"
      : "drop-shadow(0 0 7px color-mix(in oklab, currentColor 50%, transparent))";

  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={cn("text-focus", className)}
      style={{ filter: glow, opacity: mode === "soft" ? 0.6 : 1 }}
    >
      <g fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="butt">
        {mode === "lock" && (
          <>
            <circle cx="50" cy="50" r="42" opacity="0.9" />
            <path d="M50 2 v11 M50 87 v11 M2 50 h11 M87 50 h11" />
            <path d="M26 14 h-12 v12 M74 14 h12 v12 M26 86 h-12 v-12 M74 86 h12 v-12" opacity="0.55" />
          </>
        )}

        {mode === "scan" && (
          <>
            <path d="M50 8 A42 42 0 0 1 92 50" opacity="0.95" />
            <path d="M50 92 A42 42 0 0 1 8 50" opacity="0.5" />
            <path d="M50 2 v11 M50 87 v11 M2 50 h11 M87 50 h11" />
          </>
        )}

        {mode === "soft" && (
          <>
            <path d="M50 8 A42 42 0 0 1 92 50" opacity="0.8" />
            <path d="M50 92 A42 42 0 0 1 8 50" opacity="0.35" />
          </>
        )}

        {mode === "axes" && (
          <>
            <path d="M50 0 v100 M0 50 h100" opacity="0.35" strokeWidth={strokeWidth * 0.5} />
            <path d="M30 46 v8 M70 46 v8 M46 30 h8 M46 70 h8" />
          </>
        )}
      </g>
      {(mode === "lock" || mode === "axes") && <circle cx="50" cy="50" r="4.5" fill="currentColor" />}
      {mode === "scan" && <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.85" />}
    </svg>
  );
}

/** Cantos de enquadramento (crop marks). */
export function FrameCorners({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const s = { sm: "h-3 w-3", md: "h-4 w-4", lg: "h-7 w-7" }[size];

  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute inset-0", className)}>
      <span className={cn("absolute left-0 top-0 border-l border-t border-current", s)} />
      <span className={cn("absolute right-0 top-0 border-r border-t border-current", s)} />
      <span className={cn("absolute bottom-0 left-0 border-b border-l border-current", s)} />
      <span className={cn("absolute bottom-0 right-0 border-b border-r border-current", s)} />
    </span>
  );
}

/**
 * Anel de progresso da operação: a retícula fecha conforme o percurso avança.
 * progress: 0 → 1
 */
export function ReticleProgress({
  progress,
  className,
}: {
  progress: number;
  className?: string;
}) {
  const p = Math.min(1, Math.max(0, progress));

  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={cn("text-focus", className)}>
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.18"
      />
      <circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        pathLength={1}
        strokeDasharray={1}
        strokeDashoffset={1 - p}
        transform="rotate(-90 50 50)"
        style={{
          transition: "stroke-dashoffset 120ms linear",
          filter: "drop-shadow(0 0 6px color-mix(in oklab, currentColor 55%, transparent))",
        }}
      />
      <circle cx="50" cy="50" r={p > 0.98 ? 4.5 : 2.4} fill="currentColor" opacity={0.4 + p * 0.6} />
    </svg>
  );
}
