import facade from "@/assets/ad-facade.jpg";
import { hero } from "@/content/leiloes";
import { SignupForm } from "./SignupForm";
import { Wordmark } from "./Wordmark";
import { Reticle, FrameCorners } from "./Reticle";
import { Reveal, AnalysisLine, Coords } from "./Reveal";

/**
 * Hero: cena única de foco. Texto, formulário e imagem partilham o mesmo quadro.
 * Mobile mantém headline → subheadline → formulário antes de qualquer composição.
 */
export function Hero() {
  return (
    <header className="relative overflow-hidden bg-background">
      {/* Cena de fundo: fachada observada através da malha do monitor */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <img
            src={facade}
            alt=""
            width={1024}
            height={1408}
            className="h-full w-full object-cover object-[38%_center] opacity-[0.85]"
          />
          <div className="texture-microgrid-fine absolute inset-0 opacity-70" />
          <div className="frame-vignette absolute inset-0" />
          <div
            className="absolute inset-y-0 left-0 w-[38%]"
            style={{
              background:
                "linear-gradient(to right, var(--background) 6%, color-mix(in oklab, var(--background) 55%, transparent) 62%, transparent)",
            }}
          />
        </div>
        <div className="texture-microgrid-wide absolute inset-0 opacity-60" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-6 sm:px-8 lg:pb-28">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border pb-6">
          <Wordmark size="sm" />
          <p className="label-mono shrink-0 text-muted-foreground">Protótipo · Não publicado</p>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14 lg:pt-20">
          <div className="lg:pr-6">
            <Reveal>
              <p className="label-mono inline-flex items-center gap-2.5 border-l-2 border-focus pl-3 text-focus">
                {hero.badge}
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-9 font-sans text-[2.85rem] font-extrabold uppercase leading-[0.86] tracking-[-0.045em] sm:text-[5.4rem] lg:text-[6.6rem]">
                <span className="block">Leilões</span>
                <span className="relative inline-flex items-center gap-4">
                  <span>na Mira</span>
                  <Reticle
                    mode="lock"
                    className="hidden size-11 shrink-0 sm:block lg:size-14"
                    strokeWidth={3.4}
                  />
                </span>
              </h1>
            </Reveal>

            <AnalysisLine className="my-8 w-full max-w-sm text-focus opacity-60" delay={120} />

            <Reveal delay={120} variant="rack">
              <p className="editorial max-w-[30ch] text-[1.6rem] leading-[1.1] text-paper sm:text-[2.25rem]">
                {hero.headline}
              </p>
            </Reveal>

            <Reveal delay={180} variant="rise">
              <p className="mt-7 max-w-[48ch] text-base leading-[1.65] text-muted-foreground sm:text-[1.05rem]">
                {hero.subheadline}
              </p>
            </Reveal>

            <dl
              className="mt-14 hidden max-w-2xl grid-cols-3 border-t border-border pt-6 lg:grid"
              aria-label="Formato do evento"
            >
              {[
                ["Formato", "Online e ao vivo"],
                ["Aulas", "Três encontros"],
                ["Investimento", "Gratuito"],
              ].map(([term, value]) => (
                <div key={term} className="pr-6">
                  <dt className="label-mono text-muted-foreground/70">{term}</dt>
                  <dd className="mt-2 text-sm text-paper">{value}</dd>
                </div>
              ))}
            </dl>

            <Coords
              className="mt-8 hidden lg:block"
              items={["Foco 00.85", "Zoom 1.7x", "Res 1920×1080"]}
            />
          </div>

          {/* Formulário: painel de decisão apoiado sobre a cena */}
          <div className="relative lg:pt-6">
            <Reveal variant="frame" className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-3 -top-3 hidden text-focus/50 lg:block"
                style={{ width: "calc(100% + 1.5rem)", height: "calc(100% + 1.5rem)" }}
              >
                <FrameCorners size="lg" />
              </span>
              <SignupForm id="inscricao" />
            </Reveal>

            {/* Recorte de papel: o documento entra na mesma cena do monitor */}
            <div className="relative mt-8 hidden items-end gap-4 lg:flex">
              <AnalysisLine vertical className="h-16 text-focus opacity-50" />
              <Coords
                items={["Camada 01 monitor", "Camada 02 papel"]}
                className="pb-1 !text-muted-foreground/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Faixa da cena no mobile: enquadramento vertical, sem competir com o formulário */}
      <div className="relative lg:hidden">
        <div className="relative h-40 overflow-hidden border-y border-border sm:h-52">
          <img
            src={facade}
            alt="Fragmento de fachada de concreto observado através da malha de um monitor"
            width={1024}
            height={1408}
            className="h-full w-full object-cover object-[42%_38%]"
          />
          <div aria-hidden="true" className="texture-microgrid-fine absolute inset-0 opacity-60" />
          <div aria-hidden="true" className="frame-vignette absolute inset-0 opacity-80" />
          <span aria-hidden="true" className="absolute inset-4 text-focus/60">
            <FrameCorners size="sm" />
          </span>
          <Reticle mode="scan" className="absolute bottom-4 right-4 size-9" />
        </div>
      </div>
    </header>
  );
}
