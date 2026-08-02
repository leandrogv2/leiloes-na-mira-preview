import { outcomes, fit } from "@/content/leiloes";
import { Reveal } from "./Reveal";

export function Outcomes() {
  return (
    <section aria-labelledby="resultados" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="texture-scanlines pointer-events-none absolute inset-0 opacity-30"
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="label-mono text-focus">04 · Resultados de aprendizagem</p>
            <Reveal>
              <h2
                id="resultados"
                className="editorial mt-6 max-w-[24ch] text-[2rem] text-paper sm:text-5xl"
              >
                {outcomes.title}
              </h2>
            </Reveal>
          </div>

          <div>
            <ul className="divide-y divide-border border-y border-border">
              {outcomes.items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 60} className="flex gap-5 py-5">
                  <span className="label-mono shrink-0 pt-1 text-focus">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base leading-relaxed sm:text-lg">{item}</span>
                </Reveal>
              ))}
            </ul>
            <p className="mt-8 max-w-[64ch] text-sm leading-relaxed text-muted-foreground">
              {outcomes.limit}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Fit() {
  return (
    <section
      aria-labelledby="adequacao"
      className="chapter-paper texture-paper relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <p className="label-mono text-muted-foreground">05 · Adequação</p>
        <Reveal>
          <h2
            id="adequacao"
            className="mt-6 max-w-[26ch] font-sans text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] sm:text-5xl"
          >
            {fit.title}
          </h2>
        </Reveal>
        <Reveal delay={70}>
          <p className="mt-6 max-w-[62ch] text-base leading-relaxed sm:text-lg">{fit.text}</p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="border-l-2 border-focus pl-6">
            <h3 className="editorial text-2xl sm:text-3xl">{fit.forTitle}</h3>
            <ul className="mt-6 space-y-4">
              {fit.forItems.map((item) => (
                <li key={item} className="flex gap-4 text-base leading-relaxed">
                  <span aria-hidden="true" className="mt-[0.6em] h-px w-5 shrink-0 bg-focus" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={90} className="border-l border-foreground/25 pl-6">
            <h3 className="editorial text-2xl text-foreground/70 sm:text-3xl">
              {fit.againstTitle}
            </h3>
            <ul className="mt-6 space-y-4">
              {fit.againstItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-base leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.6em] h-px w-5 shrink-0 bg-foreground/35"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
