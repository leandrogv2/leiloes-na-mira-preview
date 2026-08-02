import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "header" | "figure";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref as never}
      data-visible={visible ? "true" : "false"}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

/** Linha de análise que se desenha ao entrar no viewport. */
export function AnalysisLine({
  className,
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
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
    />
  );
}
