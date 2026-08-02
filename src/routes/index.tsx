import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/leiloes/Hero";
import { Reframe, Lessons } from "@/components/leiloes/Chapters";
import { Method } from "@/components/leiloes/Method";
import { Outcomes, Fit } from "@/components/leiloes/Outcomes";
import { Professor, Faq, Closing, SiteFooter } from "@/components/leiloes/Sections";

const title = "Leilões na Mira | 3 aulas gratuitas com o Professor Mira";
const description =
  "Aprenda os fundamentos de uma operação de leilão de imóveis, da busca à escolha entre vender, alugar ou manter no patrimônio.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#conteudo"
        className="label-mono sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-focus focus:px-4 focus:py-3 focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>
      <Hero />
      <main id="conteudo">
        <Reframe />
        <Lessons />
        <Method />
        <Outcomes />
        <Fit />
        <Professor />
        <Faq />
        <Closing />
      </main>
      <SiteFooter />
    </div>
  );
}
