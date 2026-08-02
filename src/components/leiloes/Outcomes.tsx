import { outcomes, fit, method } from "@/content/leiloes";
import { Reveal, AnalysisLine, Coords } from "./Reveal";
import { Reticle, FrameCorners } from "./Reticle";

/**
 * Resultados: a lista passa a existir como matriz anotada — o participante
 * termina com um mapa mental organizado, não com uma lista de benefícios.
 */
export function Outcomes() {
  const axis = method.steps.slice(0, 4).map((s) => s.name);

  return (
    <section aria-labelledby="resultados" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="texture-microgrid-wide pointer-events-none absolute inset-0 opacity-70"
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-16 lg:self-start">
            <p className="label-mono text-focus">04 · Resultados de aprendizagem</p>
            <Reveal>
              <h2
                id="resultados"
                className="editorial mt-7 max-w-[20ch] text-[2.1rem] leading-[1.03] text-paper sm:text-[3rem]"
              >
                {outcomes.title}
              </h2>
            </Reveal>
            <AnalysisLine className="mt-9 w-40 text-focus opacity-60" />
            <p className="mt-9 max-w-[46ch] text-sm leading-[1.7] text-muted-foreground">
              {outcomes.limit}
            </p>
          </div>

          {/* Matriz de decisão: eixos técnicos + pontos anotados */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden sm:block"
            >
              <span className="absolute left-0 top-0 h-full w-px bg-border" />
              <span className="absolute left-1/2 top-0 h-full w-px bg-border/60" />
              <span className="absolute bottom-0 left-0 h-px w-full bg-border" />
              <Reticle mode="axes" className="absolute -left-3 bottom-[-0.75rem] size-6" />
            </div>

            <ul className="relative grid gap-x-10 sm:grid-cols-2">
              {outcomes.items.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 60}
                  variant="settle"
                  className="relative py-6 pl-6 sm:pl-8"
                  // deslocamentos irregulares: leitura de mapa, não de tabela
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[2.1rem] h-px w-4 bg-focus/70 sm:w-5"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-[2.1rem] size-1.5 -translate-x-1/2 -translate-y-1/2 bg-focus"
                  />
                  <p className="label-mono text-muted-foreground/60">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    className="mt-2 max-w-[34ch] text-[1.02rem] leading-[1.55] sm:text-[1.08rem]"
                    style={{ marginTop: `${8 + (i % 3) * 6}px` }}
                  >
                    {item}
                  </p>
                </Reveal>
              ))}
            </ul>

            <Coords className="mt-6 flex flex-wrap gap-x-6 gap-y-1" items={axis} />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Adequação: seleção por critério. O que faz sentido permanece dentro do
 * enquadramento; o que não é uma proposta aparece fora do campo de foco.
 * Nenhum alerta, nenhuma dramatização.
 */
export function Fit() {
  return (
    <section
      aria-labelledby="adequacao"
      className="chapter-paper texture-fiber relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="label-mono text-muted-foreground">05 · Adequação</p>
            <Reveal>
              <h2
                id="adequacao"
                className="mt-7 max-w-[16ch] font-sans text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] sm:text-[3rem]"
              >
                {fit.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={70} variant="rise">
            <p className="max-w-[58ch] text-[1.05rem] leading-[1.65] lg:pb-2">{fit.text}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Dentro do enquadramento */}
          <Reveal variant="frame" className="relative">
            <div className="relative border border-focus/45 bg-ink/[0.04] px-6 py-8 sm:px-9 sm:py-10">
              <span aria-hidden="true" className="absolute inset-3 text-focus/70">
                <FrameCorners size="sm" />
              </span>
              <div
                aria-hidden="true"
                className="texture-ledmatrix pointer-events-none absolute inset-0 opacity-40"
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <h3 className="editorial max-w-[16ch] text-[1.7rem] leading-[1.06] sm:text-[2.1rem]">
                    {fit.forTitle}
                  </h3>
                  <Reticle mode="lock" className="mt-1 size-9 shrink-0" strokeWidth={3.4} />
                </div>
                <ul className="mt-8 space-y-5">
                  {fit.forItems.map((item, i) => (
                    <Reveal
                      as="li"
                      key={item}
                      delay={i * 55}
                      className="flex gap-4 text-[1rem] leading-[1.6]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.72em] h-[2px] w-5 shrink-0 bg-focus"
                      />
                      <span>{item}</span>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
            <Coords items={["Dentro do enquadramento"]} className="mt-3 !text-foreground/45" />
          </Reveal>

          {/* Fora do campo de foco */}
          <div className="relative lg:pt-10">
            <span
              aria-hidden="true"
              className="absolute -left-7 top-0 hidden h-full w-px bg-foreground/12 lg:block"
            />
            <h3 className="label-mono text-muted-foreground">{fit.againstTitle}</h3>
            <ul className="mt-7 space-y-5">
              {fit.againstItems.map((item, i) => (
                <Reveal
                  as="li"
                  key={item}
                  delay={i * 50}
                  variant="rise"
                  className="flex gap-4 text-[0.95rem] leading-[1.6] text-muted-foreground/85"
                  // recuo progressivo: possibilidades que saem do quadro
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.72em] h-px w-5 shrink-0 bg-foreground/25"
                  />
                  <span style={{ opacity: 1 - i * 0.06 }}>{item}</span>
                </Reveal>
              ))}
            </ul>
            <Reticle
              mode="soft"
              className="mt-9 size-10 opacity-60"
              strokeWidth={3}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
