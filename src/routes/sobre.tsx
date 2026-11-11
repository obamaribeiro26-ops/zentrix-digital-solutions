import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Ledger, PageHero, PrimaryLink, SectionHead, useReveal } from "@/components/site/blocks";

const t = "Sobre a ZENTRIX — Technology & Digital Solutions";
const d = "A ZENTRIX junta desenvolvimento digital e suporte técnico num só parceiro.";
export const Route = createFileRoute("/sobre")({
  head: () => ({ links: [{ rel: "canonical", href: "https://zentrix-web-and-software.lovable.app/sobre" }], meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "https://zentrix-web-and-software.lovable.app/sobre" }, { property: "og:image", content: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=630&q=75" }, { name: "twitter:image", content: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&h=630&q=75" }] }),
  component: Page,
});

function Page() {
  useReveal();
  return (
    <>
      <PageHero photo="1600880292203-757bb62b4baf" alt="Duas pessoas a celebrar numa reunião de trabalho" eyebrow="Sobre a ZENTRIX"
        title={<>Do código ao<br /><span className="text-primary">computador na secretária.</span></>}
        lead="Um só parceiro para o digital e para o técnico: ouvimos, propomos soluções práticas e acompanhamos depois da entrega." crumbs={[{ label: "Sobre" }]}>
        <PrimaryLink to="/contactos">Falar connosco</PrimaryLink>
      </PageHero>
      <section className="paper">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <SectionHead eyebrow="Como trabalhamos" title="Innovation · Technology · Excellence — na prática." />
          <Ledger items={[
            { t: "Ouvir antes de propor", d: "Cada pedido começa por entender o problema real." },
            { t: "Transparência", d: "Âmbito, custos e prazos combinados por escrito antes de começar." },
            { t: "Tecnologia com critério", d: "Ferramentas modernas, escolhidas pela adequação e não pela moda." },
            { t: "Acompanhamento", d: "Suporte e manutenção depois da entrega." },
          ]} />
        </div>
      </section>
      <CtaBand photo="1556761175-b413da4baf72" title="Tem um projecto ou um problema técnico?" lead="Fale connosco — começamos por ouvir." />
    </>
  );
}
