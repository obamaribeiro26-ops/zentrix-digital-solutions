import { type ReactNode } from "react";
import { CtaBand, GhostLink, Ledger, PageHero, Photo, PrimaryLink, SectionHead, Steps, useReveal } from "./blocks";

export type ServiceContent = {
  crumb: string; eyebrow: string; title: ReactNode; lead: string; photo: string; alt: string;
  introTitle: string; intro: string; introPhoto: string; introAlt: string;
  offerTitle: string; offer: { t: string; d: string }[];
  deliverables: string[];
  steps: { t: string; d: string }[];
  ctaTitle: string; ctaLead: string; ctaPhoto: string;
};

export function ServicePage({ c, extra }: { c: ServiceContent; extra?: ReactNode }) {
  useReveal();
  return (
    <>
      <PageHero photo={c.photo} alt={c.alt} eyebrow={c.eyebrow} title={c.title} lead={c.lead} crumbs={[{ label: "Serviços" }, { label: c.crumb }]}>
        <PrimaryLink to="/contactos">Pedir orçamento</PrimaryLink>
        <GhostLink to="." hash="oferta">Ver o que inclui</GhostLink>
      </PageHero>

      <section className="paper">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-2">
          <div className="reveal aspect-[4/3] overflow-hidden"><Photo id={c.introPhoto} alt={c.introAlt} /></div>
          <div><SectionHead eyebrow="Porquê" title={c.introTitle} lead={c.intro} /></div>
        </div>
      </section>

      <section id="oferta" className="mx-auto max-w-7xl scroll-mt-20 px-5 py-24 md:px-8 md:py-32">
        <SectionHead eyebrow="O que fazemos" title={c.offerTitle} />
        <Ledger items={c.offer} />
      </section>

      {extra}

      <section className="paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:px-8 md:py-28 lg:grid-cols-[1fr_1.4fr]">
          <SectionHead eyebrow="Entregáveis" title="O que recebe no fim." />
          <ul className="reveal grid gap-3 sm:grid-cols-2">
            {c.deliverables.map((d) => <li key={d} className="flex gap-3 border-b border-border pb-3"><span className="text-primary" aria-hidden>—</span>{d}</li>)}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead eyebrow="Como funciona" title="Um processo simples e transparente." />
        <Steps steps={c.steps} />
      </section>

      <CtaBand photo={c.ctaPhoto} title={c.ctaTitle} lead={c.ctaLead} />
    </>
  );
}
