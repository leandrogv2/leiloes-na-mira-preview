import { cn } from "@/lib/utils";
import { Reticle } from "./Reticle";

/**
 * Wordmark provisório "Leilões na Mira".
 * Sans bold condensada em duas linhas + retícula de seleção.
 * Componente isolado: substituir por SVG final quando disponível.
 */
export function Wordmark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const type = {
    sm: "text-[0.94rem] leading-[0.94]",
    md: "text-xl leading-[0.92] sm:text-2xl",
    lg: "text-3xl leading-[0.9] sm:text-4xl",
  }[size];

  const mark = { sm: "size-6", md: "size-8 sm:size-9", lg: "size-12 sm:size-14" }[size];

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Reticle className={mark} mode="lock" strokeWidth={4} />
      <span className={cn("font-sans font-extrabold uppercase tracking-[-0.035em]", type)}>
        <span className="block">Leilões</span>
        <span className="block">na Mira</span>
      </span>
    </span>
  );
}
