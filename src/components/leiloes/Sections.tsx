import { useId, useState } from "react";
import authorityImage from "@/assets/authority-slot.jpg";
import { professor, faq, closing, footer } from "@/content/leiloes";
import { Reveal, AnalysisLine } from "./Reveal";
import { Reticle, FrameCorners } from "./Reticle";
import { SignupForm } from "./SignupForm";
import { Wordmark } from "./Wordmark";

export function Professor() {
  return (
    <section aria-labelledby="professor" className="relative overflow-hidden bg-background">
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Slot de mídia substituível: nenhuma imagem sintética de pessoa. */}
          <Reveal as="figure" className="relative m-0 order-2 lg:order-1">
            <div className="relative overflow-hidden border border-white/10">
              <img
                src={authorityImage}
                alt="Documentos de imóvel e desenho arquitetônico sobre mesa iluminada por um monitor"
                width={1200}
                height={1200}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="texture-microgrid pointer-events-none absolute inset-0 opacity-30"
              />
              <div className="pointer-events-none absolute inset-4 text-focus/60">
                <FrameCorners />
              </div>
            </div>
          </Reveal>


          <div className="order-1 lg:order-2">
            <p className="label-mono text-focus">06 · Apresentação</p>
            <Reveal>
              <h2
                id="professor"
                className="mt-6 font-sans text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] sm:text-5xl"
              >
                {professor.title}
              </h2>
            </Reveal>
            <AnalysisLine className="mt-8 w-32" />
            {professor.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 90}>
                <p className="mt-6 max-w-[58ch] text-base leading-relaxed sm:text-lg">{p}</p>
              </Reveal>
            ))}
          </div>
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
    <li className="border-b border-foreground/15">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-14 w-full items-start justify-between gap-6 py-5 text-left"
        >
          <span className="text-base font-medium sm:text-lg">{q}</span>
          <span
            aria-hidden="true"
            className="relative mt-2 block size-4 shrink-0 text-foreground"
          >
            <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
            <span
              className="absolute left-1/2 top-0 h-full w-px bg-current transition-transform duration-300 ease-out"
              style={{ transform: open ? "scaleY(0)" : "scaleY(1)" }}
            />
          </span>
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        aria-hidden={!open}
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[64ch] pb-6 pr-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {a}
          </p>
        </div>
      </div>

    </li>
  );
}

export function Faq() {
  return (
    <section
      aria-labelledby="faq"
      className="chapter-paper texture-paper relative overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="label-mono text-muted-foreground">07 · Dúvidas</p>
            <h2 id="faq" className="editorial mt-6 text-[2rem] sm:text-5xl">
              {faq.title}
            </h2>
          </div>
          <ul className="border-t border-foreground/15">
            {faq.items.map((item, i) => (
              <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section aria-labelledby="fechamento" className="relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="texture-microgrid pointer-events-none absolute inset-0 opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 size-[24rem] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "var(--focus)" }}
      />
      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reticle className="size-16" />
            <Reveal>
              <h2
                id="fechamento"
                className="mt-8 max-w-[24ch] font-sans text-3xl font-extrabold uppercase leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-6xl"
              >
                {closing.title}
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                {closing.text}
              </p>
            </Reveal>
            
          </div>

          <div>
            <SignupForm id="inscricao-final" ctaLabel={closing.cta} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-[1400px] px-5 py-14 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <Wordmark size="sm" />
          <nav aria-label="Links legais" className="flex flex-wrap gap-x-8 gap-y-3">
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
        </div>
        <p className="mt-10 max-w-[80ch] text-xs leading-relaxed text-muted-foreground">
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
