import { createFileRoute } from "@tanstack/react-router";
import { Crumbs, Photo } from "@/components/site/blocks";
import { ContactCards } from "@/components/site/contact-cards";
import { ContactForm } from "@/components/site/contact-form";

const t = "Contactos e pedido de orçamento — ZENTRIX";
const d = "Peça um orçamento à ZENTRIX para websites, aplicações, software ou manutenção de computadores.";
export const Route = createFileRoute("/contactos")({
  head: () => ({ links: [{ rel: "canonical", href: "https://zentrix-web-and-software.lovable.app/contactos" }], meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "https://zentrix-web-and-software.lovable.app/contactos" }, { property: "og:image", content: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&h=630&q=75" }, { name: "twitter:image", content: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1200&h=630&q=75" }] }),
  component: Page,
});

function Page() {
  return (
    <section className="relative pt-16">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <Crumbs items={[{ label: "Contactos" }]} />
          <p className="eyebrow mt-10">Pedido de orçamento</p>
          <h1 className="mt-5 font-display text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-[1.05] tracking-tight">Conte-nos o que precisa.</h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">Preencha o formulário com o máximo de detalhe. Respondemos com perguntas ou uma proposta clara.</p>
          <div className="mt-10 aspect-[4/3] overflow-hidden"><Photo id="1606857521015-7f9fcf423740" alt="Escritório com postos de trabalho" eager /></div>
          <ContactCards className="mt-12" />
          <p className="mt-6 text-sm text-muted-foreground">
            Ligue, envie WhatsApp ou escreva para um dos emails — ou use o formulário.
          </p>
        </div>
        <div className="paper self-start border border-border p-6 md:p-10"><ContactForm /></div>
      </div>
    </section>
  );
}
