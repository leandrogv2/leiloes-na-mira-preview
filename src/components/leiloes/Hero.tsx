import heroImage from "@/assets/hero-focus.jpg";
import { hero } from "@/content/leiloes";
import { SignupForm } from "./SignupForm";
import { Wordmark } from "./Wordmark";
import { Reticle, FrameCorners } from "./Reticle";
import { Reveal, AnalysisLine } from "./Reveal";

export function Hero() {
  return (
    <header className="texture-dark-paper relative overflow-hidden bg-background">
      <div
        aria-hidden="true"
        className="texture-microgrid pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/3 size-[26rem] rounded-full opacity-[0.16] blur-3xl"
        style={{ background: "var(--focus)" }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-6 sm:px-8 lg:pb-24">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <Wordmark size="sm" />
        </div>

        <div className="grid gap-12 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pt-16">
          <div>
            <Reveal>
              <p className="label-mono inline-flex items-center gap-2 border border-focus/45 px-3 py-2 text-focus">
                {hero.badge}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 max-w-[22ch] font-sans text-[2.4rem] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
                Leilões
                <br />
                na Mira
              </h1>
            </Reveal>

            <AnalysisLine className="my-7 w-full max-w-md" />

            <Reveal delay={140}>
              <p className="editorial max-w-[34ch] text-2xl text-paper sm:text-[2rem] sm:leading-[1.08]">
                {hero.headline}
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                {hero.subheadline}
              </p>
            </Reveal>

            <dl
              className="mt-12 hidden max-w-xl grid-cols-3 border-t border-border pt-6 lg:grid"
              aria-label="Formato do evento"
            >
              {[
                ["Formato", "Online e ao vivo"],
                ["Aulas", "Três encontros"],
                ["Investimento", "Gratuito"],
              ].map(([term, value]) => (
                <div key={term} className="pr-6">
                  <dt className="label-mono text-muted-foreground">{term}</dt>
                  <dd className="mt-2 text-sm text-paper">{value}</dd>
                </div>
              ))}
            </dl>

          </div>

          <div className="lg:pt-4">
            <SignupForm id="inscricao" />

            <Reveal delay={120} className="relative mt-10 hidden lg:block">
              <div className="relative overflow-hidden border border-white/10">
                <img
                  src={heroImage}
                  alt="Composição abstrata de arquitetura em monitor sobre documentos de imóvel"
                  width={1280}
                  height={1600}
                  className="h-[22rem] w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="texture-scanlines pointer-events-none absolute inset-0 opacity-50"
                />
                <div className="pointer-events-none absolute inset-4 text-focus/70">
                  <FrameCorners />
                </div>
                <Reticle className="pointer-events-none absolute bottom-5 right-5 size-14" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  );
}
