import { method } from "@/content/leiloes";
import { Reveal, AnalysisLine } from "./Reveal";

export function Method() {
  return (
    <section
      aria-labelledby="metodo"
      className="chapter-paper texture-paper relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <p className="label-mono text-muted-foreground">03 · Método</p>
        <Reveal>
          <h2
            id="metodo"
            className="mt-6 max-w-[26ch] font-sans text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] sm:text-5xl"
          >
            {method.title}
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="editorial mt-6 max-w-[46ch] text-xl sm:text-3xl">{method.opening}</p>
        </Reveal>

        <AnalysisLine className="mt-12 w-full" />

        <ol className="relative mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7">
          {method.steps.map((step, i) => (
            <Reveal
              as="li"
              key={step.name}
              delay={i * 70}
              className="relative border-b border-foreground/15 py-7 lg:border-b-0 lg:border-r lg:border-foreground/15 lg:px-4 lg:last:border-r-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 hidden h-px w-full bg-foreground/15 lg:block"
              />
              <span
                aria-hidden="true"
                className="absolute -top-[3px] left-0 hidden size-[6px] bg-focus lg:block"
              />
              <p className="label-mono text-foreground/60">
                Passo {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-sans text-lg font-bold uppercase tracking-[-0.01em] sm:text-xl">
                {step.name}
              </p>
              <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 border-t border-foreground/20 pt-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <p className="max-w-[68ch] text-sm leading-relaxed sm:text-base">{method.closing}</p>
          <div className="lg:justify-self-end">
            <a
              href="#inscricao"
              className="label-mono inline-flex min-h-12 items-center bg-ink px-6 py-4 text-paper transition-colors hover:bg-ink/85"
            >
              {method.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
