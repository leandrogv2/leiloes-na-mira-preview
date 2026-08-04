import { reframe, lessons } from "@/content/leiloes";
import { Reveal, AnalysisLine } from "./Reveal";
import { Reticle } from "./Reticle";

export function Reframe() {
  return (
    <section
      aria-labelledby="reenquadramento"
      className="chapter-paper texture-paper relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="label-mono text-muted-foreground">01 · Reenquadramento</p>
            <Reveal>
              <h2
                id="reenquadramento"
                className="editorial mt-6 max-w-[24ch] text-[2rem] sm:text-5xl lg:text-[3.4rem]"
              >
                {reframe.title}
              </h2>
            </Reveal>
            <AnalysisLine className="mt-8 w-40" />
          </div>

          <div className="max-w-[58ch]">
            {reframe.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="mt-6 text-base leading-relaxed sm:text-lg">{p}</p>
              </Reveal>
            ))}

            <a
              href="#inscricao"
              className="label-mono mt-10 inline-flex min-h-12 items-center border-b-2 border-foreground px-1 py-3 text-foreground transition-colors hover:bg-foreground/10"
            >
              {reframe.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Lessons() {
  return (
    <section aria-labelledby="aulas" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="texture-microgrid pointer-events-none absolute inset-0 opacity-25"
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <p className="label-mono text-focus">02 · As três aulas</p>
        <Reveal>
          <h2
            id="aulas"
            className="mt-6 max-w-[30ch] font-sans text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] sm:text-5xl"
          >
            {lessons.title}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
            {lessons.intro}
          </p>
        </Reveal>

        <ol className="relative mt-16 space-y-0">
          <span
            aria-hidden="true"
            className="absolute left-[0.6rem] top-2 hidden h-[calc(100%-4rem)] w-px bg-focus/30 sm:block"
          />
          {lessons.items.map((item, i) => (
            <Reveal
              as="li"
              key={item.index}
              delay={i * 90}
              className="relative border-t border-border py-10 sm:pl-16"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-10 hidden size-[1.2rem] items-center justify-center sm:flex"
              >
                <Reticle className="size-full" strokeWidth={6} />
              </span>

              <div
                className="grid gap-6 lg:grid-cols-[8rem_1fr_18rem] lg:gap-10"
                style={{ opacity: 1 - i * 0.0 }}
              >
                <div>
                  <p className="font-sans text-4xl font-extrabold leading-none text-focus sm:text-5xl">
                    {item.index}
                  </p>
                  <p className="label-mono mt-3 text-muted-foreground">{item.label}</p>
                </div>

                <div>
                  <h3 className="editorial text-2xl text-paper sm:text-4xl">{item.title}</h3>
                  <p className="mt-4 max-w-[52ch] text-base leading-relaxed sm:text-lg">
                    {item.promise}
                  </p>
                  <p className="mt-4 max-w-[62ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>

                <div className="border-l border-focus/40 pl-5">
                  <p className="label-mono text-focus">Material</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.material}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
