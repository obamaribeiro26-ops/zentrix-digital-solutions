import { createFileRoute } from "@tanstack/react-router";
import { Crumbs, PrimaryLink, useReveal } from "@/components/site/blocks";
import { journey } from "@/content/journey";

const title = "A Nossa Jornada — ZENTRIX";
const description = "As etapas de criação da ZENTRIX: da oportunidade de negócio ao planeamento, implementação, crescimento e inovação.";
export const Route = createFileRoute("/jornada")({
  head: () => ({
    meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary" }, { property: "og:url", content: "https://zentrix-web-and-software.lovable.app/jornada" }],
    links: [{ rel: "canonical", href: "https://zentrix-web-and-software.lovable.app/jornada" }],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  useReveal();
  return <>
    <section className="border-b border-border pt-16">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Crumbs items={[{ label: "A Nossa Jornada" }]} />
        <p className="eyebrow mt-12">Da ideia à construção</p>
        <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">A Nossa <span className="text-primary">Jornada.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">Uma visão das etapas de criação da ZENTRIX, da identificação de uma necessidade ao desenvolvimento de soluções digitais e suporte informático.</p>
        <p className="mt-6 max-w-2xl border-l-2 border-primary pl-4 text-sm leading-relaxed text-muted-foreground">Esta sequência apresenta o percurso de construção da empresa. Não atribui datas, estados de conclusão ou resultados às etapas, nem comprova a sua constituição legal.</p>
      </div>
    </section>
    <section className="paper">
      <div className="mx-auto max-w-5xl px-5 py-20 md:px-8 md:py-24">
        <ol className="journey-timeline">
          {journey.map((stage, index) => <li key={stage.title} className="reveal relative grid grid-cols-[3rem_1fr] gap-5 pb-12 last:pb-0 md:grid-cols-[5rem_1fr] md:gap-10">
            <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary bg-background font-mono text-sm text-primary md:h-16 md:w-16">{String(index + 1).padStart(2, "0")}</span>
            <div className="border-t border-border pt-4 md:pt-5"><h2 className="text-xl font-semibold md:text-2xl">{stage.title}</h2><p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{stage.description}</p></div>
          </li>)}
        </ol>
      </div>
    </section>
    <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
      <h2 className="max-w-xl font-display text-2xl font-semibold leading-snug">Conheça as soluções que queremos construir consigo.</h2>
      <PrimaryLink to="/contactos">Falar com a equipa</PrimaryLink>
    </section>
  </>;
}