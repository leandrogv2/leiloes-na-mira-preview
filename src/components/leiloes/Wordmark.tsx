import { cn } from "@/lib/utils";
import { Reticle } from "./Reticle";

/**
 * Wordmark provisório "Leilões na Mira".
 * Tipografia bold de largura normal + retícula holográfica amarela.
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
    sm: "text-lg leading-[0.92]",
    md: "text-2xl leading-[0.9] sm:text-3xl",
    lg: "text-4xl leading-[0.86] sm:text-5xl",
  }[size];

  const mark = { sm: "size-7", md: "size-10 sm:size-12", lg: "size-14 sm:size-16" }[size];

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        className={cn(
          "font-sans font-extrabold uppercase tracking-[-0.02em]",
          type,
        )}
      >
        <span className="block">Leilões</span>
        <span className="block">na Mira</span>
      </span>
      <Reticle className={mark} />
      <span className="sr-only">Leilões na Mira</span>
    </span>
  );
}
