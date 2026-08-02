import { method } from "@/content/leiloes";
import { useScrollProgress } from "@/hooks/use-reveal";
import { Reveal, Coords } from "./Reveal";
import { Reticle, ReticleProgress } from "./Reticle";

/**
 * Método Mira — percurso contínuo, não sete tópicos.
 * A trajetória atravessa o monitor (busca/observação) e entra no papel
 * (decisão/registro): a materialidade explica a etapa da operação.
 */

const PATH_Y = [86, 58, 66, 22, 50, 40, 34];
const PAPER_FROM = 3; // passo 04 em diante: registro sobre papel

function stepMode(i: number) {
  if (i === 3) return "lock" as const;
  if (i < 3) return "scan" as const;
  return "axes" as const;
}

export function Method() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();

  const points = PATH_Y.map((y, i) => `${100 + i * 200},${y}`).join(" ");

  return (
    <section aria-labelledby="metodo" className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="texture-microgrid-wide pointer-events-none absolute inset-0 opacity-50"
      />




      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="lg:max-w-[46%]">
          <p className="label-mono text-focus">03 · Método</p>
          <Reveal>
            <h2
              id="metodo"
              className="mt-7 max-w-[20ch] font-sans text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.04em] text-paper sm:text-[3rem]"
            >
              {method.title}
            </h2>
          </Reveal>
          <Reveal delay={70} variant="rack">
            <p className="editorial mt-7 max-w-[34ch] text-[1.5rem] leading-[1.12] text-paper/90 sm:text-[2rem]">
              {method.opening}
            </p>
          </Reveal>
        </div>

        {/* ——— Desktop: trajetória horizontal ——— */}
        <div ref={ref} className="relative mt-16 hidden lg:block">
          {/* Faixa de papel: a partir do passo 04 a operação passa de observação a registro */}
          <div
            aria-hidden="true"
            className="texture-fiber pointer-events-none absolute -top-10 bottom-[-2.5rem] left-[42.857%] w-screen bg-paper"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 bottom-[-2.5rem] left-[42.857%] w-px bg-focus/50"
          />

          <svg
            viewBox="0 0 1400 120"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="relative z-10 h-24 w-full"

          >
            <polyline
              points={points}
              fill="none"
              stroke="oklch(0.7 0 0 / 35%)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
            <polyline
              points={points}
              fill="none"
              stroke="var(--focus)"
              strokeWidth="2.5"
              pathLength={1}
              strokeDasharray={1}
              strokeDashoffset={1 - progress}
              vectorEffect="non-scaling-stroke"
              style={{ transition: "stroke-dashoffset 140ms linear" }}
            />
            {/* conexão de retorno: o destino do imóvel realimenta a leitura inicial */}
            <path
              d={`M1300,${PATH_Y[6]} C1340,150 200,168 100,${PATH_Y[0]! + 14}`}
              fill="none"
              stroke="oklch(0.7 0 0 / 28%)"
              strokeWidth="1"
              strokeDasharray="3 5"
              vectorEffect="non-scaling-stroke"
            />
            {PATH_Y.map((y, i) => (
              <circle
                key={i}
                cx={100 + i * 200}
                cy={y}
                r={i === PAPER_FROM ? 5 : 3}
                fill={progress > (i + 0.4) / 7 ? "var(--focus)" : "oklch(0.7 0 0 / 45%)"}
              />
            ))}
          </svg>

          <ol className="relative z-10 grid grid-cols-7 gap-x-5">
            {method.steps.map((step, i) => {
              const onPaper = i >= PAPER_FROM;
              return (
                <Reveal
                  as="li"
                  key={step.name}
                  delay={i * 55}
                  className="relative"
                  variant="settle"
                >
                  <div style={{ paddingTop: `${(PATH_Y[i]! - 22) / 2}px` }}>
                    <span
                      aria-hidden="true"
                      className={onPaper ? "block h-4 w-px bg-ink/30" : "block h-4 w-px bg-paper/25"}
                    />
                    <Reticle
                      mode={stepMode(i)}
                      className={i === PAPER_FROM ? "mt-3 size-8" : "mt-3 size-5"}
                      strokeWidth={i === PAPER_FROM ? 3 : 4}
                    />
                    <p
                      className={`label-mono mt-4 ${onPaper ? "text-ink/50" : "text-paper/50"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p
                      className={`mt-2 font-sans text-[1.05rem] font-extrabold uppercase tracking-[-0.03em] ${
                        onPaper ? "text-ink" : "text-paper"
                      }`}
                    >
                      {step.name}
                    </p>
                    <p
                      className={`mt-2.5 text-[0.82rem] leading-[1.55] ${
                        onPaper ? "text-ink/65" : "text-paper/55"
                      }`}
                    >
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>

          <div className="relative z-10 mt-10 flex items-center justify-between">
            <Coords items={["Monitor · busca e observação"]} className="!text-paper/40" />
            <Coords items={["Papel · cálculo, decisão e registro"]} className="!text-ink/60" />
          </div>
        </div>

        {/* ——— Mobile: sequência vertical dedicada ——— */}
        <MethodVertical />

        <div className="relative mt-24 grid gap-8 lg:mt-28 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <p className="max-w-[64ch] text-sm leading-[1.7] text-paper/70 sm:text-base">
            {method.closing}
          </p>

          <div className="lg:justify-self-end lg:self-end">
            <a
              href="#inscricao"
              className="btn-decision inline-flex min-h-13 items-center gap-4 bg-focus px-6 py-4 font-sans text-[0.9rem] font-bold uppercase tracking-[0.02em] text-primary-foreground"
            >
              {method.cta}
              <span aria-hidden="true" className="h-px w-7 bg-current opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodVertical() {
  const { ref, progress } = useScrollProgress<HTMLOListElement>();

  return (
    <ol ref={ref} className="relative mt-12 lg:hidden">
      <span
        aria-hidden="true"
        className="absolute left-[0.72rem] top-2 h-[calc(100%-3rem)] w-px bg-paper/15"
      />
      <span
        aria-hidden="true"
        className="absolute left-[0.72rem] top-2 w-px bg-focus"
        style={{
          height: `calc(${Math.round(progress * 100)}% - 3rem)`,
          transition: "height 160ms linear",
          maxHeight: "calc(100% - 3rem)",
        }}
      />

      {method.steps.map((step, i) => {
        const onPaper = i >= PAPER_FROM;
        return (
          <Reveal
            as="li"
            key={step.name}
            delay={i * 45}
            className={`relative pl-11 ${onPaper ? "" : ""}`}
          >
            <span
              aria-hidden="true"
              className={`absolute left-0 top-1 flex size-6 items-center justify-center ${
                onPaper ? "bg-paper" : "bg-ink"
              }`}
            >
              <Reticle
                mode={stepMode(i)}
                className={i === PAPER_FROM ? "size-6" : "size-4"}
                strokeWidth={4}
              />
            </span>

            <div
              className={
                onPaper
                  ? "texture-fiber -mr-5 bg-paper py-5 pl-1 pr-5 text-ink sm:-mr-8 sm:pr-8"
                  : "py-5"
              }
            >
              <p className={`label-mono ${onPaper ? "text-ink/50" : "text-paper/50"}`}>
                Passo {String(i + 1).padStart(2, "0")}
                {i === PAPER_FROM ? " · decisão" : ""}
              </p>
              <p
                className={`mt-2 font-sans text-lg font-extrabold uppercase tracking-[-0.03em] ${
                  onPaper ? "text-ink" : "text-paper"
                }`}
              >
                {step.name}
              </p>
              <p
                className={`mt-1.5 max-w-[40ch] text-sm leading-[1.65] ${
                  onPaper ? "text-ink/70" : "text-paper/60"
                }`}
              >
                {step.text}
              </p>
            </div>
          </Reveal>
        );
      })}

      <li className="relative pl-11 pt-6">
        <ReticleProgress progress={progress} className="absolute left-0 top-6 size-6" />
        <Coords
          items={["07 → 01 · o destino realimenta a leitura inicial"]}
          className="!text-paper/40"
        />
      </li>
    </ol>
  );
}
