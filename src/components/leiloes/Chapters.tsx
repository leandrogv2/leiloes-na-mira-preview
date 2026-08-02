import documents from "@/assets/ad-documents.jpg";
import monitor from "@/assets/ad-monitor.jpg";
import trajectory from "@/assets/ad-trajectory.jpg";
import { reframe, lessons } from "@/content/leiloes";
import { Reveal, AnalysisLine, Coords } from "./Reveal";
import { Reticle, FrameCorners } from "./Reticle";

/**
 * Reenquadramento: demonstração visual de que o preço é apenas a primeira camada.
 * As etiquetas das camadas usam exclusivamente palavras já presentes na copy.
 */
export function Reframe() {
  const layers = ["Imóvel", "Edital", "Matrícula", "Custos", "Ocupação", "Tempo", "Objetivo"];

  return (
    <section
      aria-labelledby="reenquadramento"
      className="chapter-paper texture-fiber relative overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="paper-fold pointer-events-none absolute inset-y-0 left-[18%] hidden w-1 lg:block"
      />
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="lg:pt-4">
            <p className="label-mono text-muted-foreground">01 · Reenquadramento</p>
            <Reveal>
              <h2
                id="reenquadramento"
                className="editorial mt-7 max-w-[22ch] text-[2.1rem] leading-[1.02] sm:text-[3rem] lg:text-[3.6rem]"
              >
                {reframe.title}
              </h2>
            </Reveal>
            <AnalysisLine className="mt-10 w-48" />

            <div className="mt-9 max-w-[52ch]">
              {reframe.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 70} variant="rise">
                  <p
                    className={
                      i === 0
                        ? "text-[1.12rem] leading-[1.6] sm:text-[1.2rem]"
                        : "mt-6 text-base leading-[1.7] text-foreground/80"
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <a
              href="#inscricao"
              className="btn-decision label-mono mt-10 inline-flex min-h-12 items-center gap-3 border-b-2 border-focus px-1 py-3 text-foreground"
            >
              {reframe.cta}
              <span aria-hidden="true" className="h-px w-8 bg-current opacity-50" />
            </a>
          </div>

          {/* Composição analítica: camadas de documento sob o mesmo enquadramento */}
          <Reveal variant="rack" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-ink sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={documents}
                alt="Folhas de documentos de imóvel sobrepostas, com dobras e recortes, sob luz dirigida"
                width={1280}
                height={1024}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div aria-hidden="true" className="frame-vignette absolute inset-0 opacity-70" />

              {/* Camadas anotadas, reveladas em sequência */}
              <ul aria-hidden="true" className="absolute inset-0">
                {layers.map((layer, i) => (
                  <li
                    key={layer}
                    className="absolute left-0"
                    style={{ top: `${9 + i * 12}%` }}
                  >
                    <Reveal
                      variant="layer"
                      delay={140 + i * 85}
                      tilt={i % 2 === 0 ? -0.4 : 0.5}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="block h-[2px] bg-focus/70"
                        style={{ width: `${1.6 + i * 0.9}rem` }}
                      />
                      <span className="label-mono whitespace-nowrap bg-ink/75 px-2 py-1 text-paper">
                        {layer}
                      </span>
                    </Reveal>
                  </li>
                ))}
              </ul>

              <span aria-hidden="true" className="absolute inset-5 text-focus/50">
                <FrameCorners />
              </span>
              <Reticle mode="lock" className="absolute right-6 top-6 size-12" strokeWidth={3} />
            </div>
            <Coords
              className="mt-3 flex justify-between !text-foreground/45"
              items={["Camadas 07", "Foco var.", "Papel 100%"]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function LessonMeta({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <p className="font-sans text-[2.6rem] font-extrabold leading-none tracking-[-0.05em] text-focus sm:text-[3.4rem]">
        {index}
      </p>
      <p className="label-mono text-muted-foreground">{label}</p>
    </div>
  );
}

/** As três aulas — três atos com composição dominante própria. */
export function Lessons() {
  const [a1, a2, a3] = lessons.items as [
    (typeof lessons.items)[number],
    (typeof lessons.items)[number],
    (typeof lessons.items)[number],
  ];

  // Aula 2: a descrição já enumera as camadas; o layout as separa em pilha.
  const [a2Head, ...a2Rest] = a2.description.split(/:\s*/);
  const a2Tokens = a2Rest
    .join(": ")
    .replace(/\.$/, "")
    .split(/,\s*|\se\s/)
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <section aria-labelledby="aulas" className="relative bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-4 pt-20 sm:px-8 lg:pt-32">
        <p className="label-mono text-focus">02 · As três aulas</p>
        <Reveal>
          <h2
            id="aulas"
            className="mt-7 max-w-[26ch] font-sans text-[2rem] font-extrabold uppercase leading-[0.98] tracking-[-0.035em] sm:text-[3.2rem]"
          >
            {lessons.title}
          </h2>
        </Reveal>
        <Reveal delay={70} variant="rise">
          <p className="mt-7 max-w-[58ch] text-base leading-[1.7] text-muted-foreground sm:text-[1.05rem]">
            {lessons.intro}
          </p>
        </Reveal>
      </div>

      <ol className="relative">
        {/* ATO 1 — LOCALIZAR: muitas possibilidades fora de foco */}
        <li className="relative overflow-hidden border-t border-border">
          <div
            aria-hidden="true"
            className="texture-ledmatrix pointer-events-none absolute inset-0 opacity-25"
          />
          <div className="relative mx-auto grid w-full max-w-[1400px] gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16 lg:py-24">
            <Reveal variant="rack" className="relative order-2 lg:order-1">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={monitor}
                  alt="Grade de miniaturas desfocadas em um monitor, com apenas uma delas iluminada em amarelo"
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div aria-hidden="true" className="frame-vignette absolute inset-0 opacity-60" />
                <Reticle
                  mode="soft"
                  className="absolute left-[16%] top-[24%] size-16"
                  strokeWidth={3}
                />
                <Reticle mode="lock" className="absolute bottom-[18%] right-[14%] size-14" />
                <span aria-hidden="true" className="absolute inset-4 text-focus/40">
                  <FrameCorners size="sm" />
                </span>
              </div>
              <Coords
                className="mt-3 flex justify-between"
                items={["Fontes múltiplas", "Foco 01 de N"]}
              />
            </Reveal>

            <div className="order-1 lg:order-2">
              <LessonMeta index={a1.index} label={a1.label} />
              <h3 className="editorial mt-6 max-w-[20ch] text-[1.9rem] leading-[1.04] text-paper sm:text-[2.6rem]">
                {a1.title}
              </h3>
              <p className="mt-6 max-w-[46ch] text-[1.05rem] leading-[1.6] sm:text-[1.15rem]">
                {a1.promise}
              </p>
              <p className="mt-5 max-w-[56ch] text-sm leading-[1.7] text-muted-foreground sm:text-base">
                {a1.description}
              </p>
              <p className="label-mono mt-8 inline-flex items-center gap-3 border-l-2 border-focus pl-3 text-focus">
                Material
                <span className="text-muted-foreground">{a1.material}</span>
              </p>
            </div>
          </div>
        </li>

        {/* ATO 2 — REVELAR: as camadas do custo aparecem sobre papel */}
        <li className="chapter-paper texture-fiber relative overflow-hidden">
          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
            <div>
              <LessonMeta index={a2.index} label={a2.label} />
              <h3 className="mt-6 max-w-[18ch] font-sans text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.035em] sm:text-[2.9rem]">
                {a2.title}
              </h3>
              <p className="mt-6 max-w-[44ch] text-[1.05rem] leading-[1.6] sm:text-[1.15rem]">
                {a2.promise}
              </p>
              <p className="label-mono mt-8 inline-flex items-center gap-3 border-l-2 border-focus pl-3 text-foreground">
                Material
                <span className="text-muted-foreground">{a2.material}</span>
              </p>
            </div>

            <div className="lg:pt-2">
              <p className="max-w-[48ch] text-sm leading-[1.7] text-foreground/80 sm:text-base">
                {a2Head}:
              </p>
              {/* As camadas listadas na copy, separadas como folhas empilhadas */}
              <ul className="mt-6 border-t border-foreground/15">
                {a2Tokens.map((token, i) => (
                  <Reveal
                    as="li"
                    key={token}
                    variant="layer"
                    delay={i * 55}
                    className="flex items-center gap-4 border-b border-foreground/12 py-2.5"
                  >
                    <span aria-hidden="true" className="label-mono w-7 text-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-[3px] shrink-0 bg-foreground/70"
                      style={{ width: `${8 + i * 4}%` }}
                    />
                    <span className="text-sm sm:text-base">{token}</span>
                  </Reveal>
                ))}
              </ul>
              <div className="relative mt-8 h-24 overflow-hidden sm:h-28">
                <img
                  src={documents}
                  alt=""
                  aria-hidden="true"
                  width={1280}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover object-[60%_70%]"
                />
              </div>
            </div>
          </div>
        </li>

        {/* ATO 3 — CONECTAR: a operação inteira como uma trajetória */}
        <li className="relative overflow-hidden bg-background">
          <Reveal variant="frame" className="relative h-52 sm:h-64 lg:h-80">
            <img
              src={trajectory}
              alt="Linha de luz amarela atravessando papel rasgado e um painel de LED, com pontos brilhantes ao longo do percurso"
              width={1600}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div aria-hidden="true" className="frame-vignette absolute inset-0 opacity-70" />
          </Reveal>

          <div className="relative mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
            <div>
              <LessonMeta index={a3.index} label={a3.label} />
              <h3 className="mt-6 max-w-[16ch] font-sans text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.035em] sm:text-[3rem]">
                {a3.title}
              </h3>
            </div>
            <div className="lg:border-l lg:border-border lg:pl-16">
              <p className="editorial max-w-[30ch] text-[1.55rem] leading-[1.1] text-paper sm:text-[2rem]">
                {a3.promise}
              </p>
              <p className="mt-6 max-w-[56ch] text-sm leading-[1.7] text-muted-foreground sm:text-base">
                {a3.description}
              </p>
              <p className="label-mono mt-8 inline-flex items-center gap-3 border-l-2 border-focus pl-3 text-focus">
                Material
                <span className="text-muted-foreground">{a3.material}</span>
              </p>
            </div>
          </div>
        </li>
      </ol>
    </section>
  );
}
