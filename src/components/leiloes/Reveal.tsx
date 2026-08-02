import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type Variant = "rise" | "rack" | "settle" | "frame" | "layer";

const VARIANT_CLASS: Record<Variant, string> = {
  rise: "reveal",
  rack: "rack",
  settle: "settle",
  frame: "frame-open",
  layer: "layer-in",
};

type Tag = "div" | "section" | "li" | "ol" | "ul" | "header" | "figure" | "aside" | "span";

/**
 * Entrada de foco. Cada variante tem função distinta:
 * rack   → imagem/enquadramento entra desfocado e estabiliza
 * settle → títulos e nós de decisão assentam em curso curto
 * frame  → o quadro abre por recorte (não por fade)
 * layer  → camada de documento sobreposta
 * rise   → texto corrido (uso comedido)
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "settle",
  tilt,
  as: Element = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  tilt?: number;
  as?: Tag;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const style: Record<string, string> = {};
  if (delay) style["transitionDelay"] = `${delay}ms`;
  if (tilt !== undefined) style["--layer-tilt"] = `${tilt}deg`;

  return (
    <Element
      ref={ref as never}
      data-visible={visible ? "true" : "false"}
      className={cn(VARIANT_CLASS[variant], className)}
      style={style}
    >
      {children}
    </Element>
  );
}

/** Linha de análise que se desenha ao entrar no viewport. */
export function AnalysisLine({
  className,
  vertical = false,
  delay = 0,
}: {
  className?: string;
  vertical?: boolean;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLSpanElement>();

  return (
    <span
      ref={ref}
      aria-hidden="true"
      data-visible={visible ? "true" : "false"}
      className={cn(
        vertical ? "draw-line-y w-px" : "draw-line h-px",
        "block bg-current opacity-30",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    />
  );
}

/** Coordenadas/metadados técnicos de canto. Decorativo. */
export function Coords({ items, className }: { items: string[]; className?: string }) {
  return (
    <p aria-hidden="true" className={cn("label-mono text-muted-foreground/60", className)}>
      {items.join(" · ")}
    </p>
  );
}
