import { useId, useState } from "react";
import desk from "@/assets/ad-desk.jpg";
import { professor, faq, closing, footer } from "@/content/leiloes";
import { Reveal, AnalysisLine, Coords } from "./Reveal";
import { Reticle, FrameCorners } from "./Reticle";
import { SignupForm } from "./SignupForm";
import { Wordmark } from "./Wordmark";

/**
 * Professor Mira — autoridade construída por composição, escala e hierarquia.
 * A mídia é uma cena de análise (mesa, planta, monitor), intencional e completa.
 * Slot tecnicamente substituível pela fotografia autorizada: trocar apenas o
 * import `desk` e o texto alternativo. Nenhum rótulo de placeholder é exibido.
 */
export function Professor() {
  return (
    <section aria-labelledby="professor" className="relative overflow-hidden bg-background">
      <div className="relative grid lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal as="figure" variant="rack" className="relative m-0 min-h-[19rem] lg:min-h-[38rem]">
          <img
            src={desk}
            alt="Mesa de análise com planta impressa sob luz dirigida, documentos dobrados e um monitor desfocado ao fundo"
            width={1280}
            height={1024}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div aria-hidden="true" className="frame-vignette absolute inset-0 opacity-60" />
          <div
            aria-hidden="true"
            className="texture-microgrid-fine absolute inset-0 opacity-30"
          />
          <span aria-hidden="true" className="absolute inset-6 text-focus/45">
            <FrameCorners size="md" />
          </span>
          <Reticle mode="axes" className="absolute bottom-6 left-6 size-10" />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 hidden w-24 lg:block"
            style={{
              background:
                "linear-gradient(to right, transparent, color-mix(in oklab, var(--background) 92%, transparent))",
            }}
          />
        </Reveal>

        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 lg:py-28 lg:pl-14 lg:pr-8">
          <p className="label-mono text-focus">06 · Apresentação</p>
          <Reveal>
            <h2
              id="professor"
              className="mt-7 max-w-[14ch] font-sans text-[2rem] font-extrabold uppercase leading-[0.92] tracking-[-0.04em] sm:text-[3.2rem]"
            >
              {professor.title}
            </h2>
          </Reveal>
          <AnalysisLine className="mt-8 w-32 text-focus opacity-60" />
          {professor.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80} variant="rise">
              <p
                className={
                  i === 0
                    ? "mt-8 max-w-[52ch] text-[1.08rem] leading-[1.65]"
                    : "mt-6 max-w-[52ch] text-base leading-[1.7] text-muted-foreground"
                }
              >
                {p}
              </p>
            </Reveal>
          ))}
          <Coords className="mt-10" items={["Apresentador único", "Três aulas ao vivo"]} />
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = useId();
  const buttonId = useId();

  return (
    <li className="border-b border-foreground/12">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex min-h-14 w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-foreground"
        >
          <span className="max-w-[46ch] text-[1.02rem] leading-[1.45] sm:text-[1.1rem]">{q}</span>
          <span
            aria-hidden="true"
            className="relative mt-2 block size-3.5 shrink-0 text-focus transition-transform duration-300 group-hover:scale-110"
          >
            <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
            <span
              className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current transition-transform duration-300"
              style={{ transform: open ? "translateX(-50%) scaleY(0)" : "translateX(-50%) scaleY(1)" }}
            />
          </span>
        </button>
      </h3>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div id={panelId} role="region" aria-labelledby={buttonId} className="overflow-hidden">
          <p className="max-w-[62ch] pb-7 pr-8 text-[0.95rem] leading-[1.75] text-muted-foreground">
            {a}
          </p>
        </div>
      </div>
    </li>
  );
}

/** FAQ — momento de calma: refinamento apenas em espaço, ritmo e resposta. */
export function Faq() {
  return (
    <section aria-labelledby="faq" className="chapter-paper relative bg-paper-2">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
          <div className="lg:sticky lg:top-20 lg:self-start">
            <p className="label-mono text-muted-foreground">07 · Dúvidas</p>
            <h2 id="faq" className="editorial mt-6 max-w-[12ch] text-[2rem] sm:text-[2.6rem]">
              {faq.title}
            </h2>
          </div>
          <ul className="border-t border-foreground/12">
            {faq.items.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Fechamento — convergência: todas as linhas chegam a uma decisão. */
export function Closing() {
  return (
    <section aria-labelledby="fechamento" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="texture-microgrid-fine pointer-events-none absolute inset-0 opacity-40"
      />
      {/* Linhas convergindo para o ponto de decisão */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-focus"
      >
        <g stroke="currentColor" fill="none" strokeWidth="1" opacity="0.22">
          <path d="M0 40 L760 300" />
          <path d="M0 220 L760 300" />
          <path d="M0 420 L760 300" />
          <path d="M0 590 L760 300" />
          <path d="M1200 90 L760 300" />
          <path d="M1200 520 L760 300" />
        </g>
        <circle cx="760" cy="300" r="3" fill="currentColor" opacity="0.8" />
      </svg>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal variant="settle">
              <Reticle mode="lock" className="size-14" strokeWidth={3} />
            </Reveal>
            <Reveal delay={60}>
              <h2
                id="fechamento"
                className="mt-9 max-w-[20ch] font-sans text-[2.1rem] font-extrabold uppercase leading-[0.9] tracking-[-0.045em] sm:text-[3.4rem] lg:text-[4rem]"
              >
                {closing.title}
              </h2>
            </Reveal>
            <AnalysisLine className="my-8 w-full max-w-md text-focus opacity-60" />
            <Reveal delay={110} variant="rise">
              <p className="max-w-[50ch] text-base leading-[1.7] text-muted-foreground sm:text-[1.05rem]">
                {closing.text}
              </p>
            </Reveal>
            <p className="label-mono mt-8 max-w-[46ch] text-focus">{closing.microcopy}</p>
          </div>

          <div className="relative">
            <Reveal variant="frame" className="relative">
              <SignupForm id="inscricao-final" ctaLabel={closing.cta} />
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
          <Wordmark size="sm" />
          <div>
            <nav aria-label="Links legais" className="flex flex-wrap gap-x-8 gap-y-2">
              {footer.links.map((label) => (
                <span
                  key={label}
                  aria-disabled="true"
                  className="label-mono inline-flex min-h-11 items-center text-muted-foreground"
                >
                  {label}
                </span>
              ))}
            </nav>
            <p className="mt-8 max-w-[78ch] text-xs leading-[1.8] text-muted-foreground">
              {footer.disclaimer}
            </p>
            <Coords className="mt-6" items={["Protótipo não publicado", "Marca provisória"]} />
          </div>
        </div>
      </div>
    </footer>
  );
}
