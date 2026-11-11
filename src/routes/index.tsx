import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, GhostLink, Photo, PrimaryLink, SectionHead, Steps, useReveal } from "@/components/site/blocks";
import { services } from "@/content/services";

const t = "ZENTRIX Technologies — Websites, aplicações, software e IT Support";
const d = "Criação de websites, aplicações, software à medida e manutenção de computadores. The Center of Digital Solutions.";
export const Route = createFileRoute("/")({
  head: () => ({ links: [{ rel: "canonical", href: "https://zentrix-web-and-software.lovable.app/" }], meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { property: "og:url", content: "https://zentrix-web-and-software.lovable.app/" }, { property: "og:image", content: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&h=630&q=75" }, { name: "twitter:image", content: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&h=630&q=75" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-16">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.1fr_1fr]">
          <div className="animate-rise">
            <p className="eyebrow">Technology & Digital Solutions · Angola</p>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[1.02] tracking-tight">
              Criamos websites, apps e software. <span className="text-primary">E reparamos o seu computador.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A ZENTRIX reúne desenvolvimento digital e suporte técnico: um só contacto para pôr a tecnologia do seu negócio a funcionar.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryLink to="/contactos">Pedir orçamento</PrimaryLink>
              <GhostLink to="/" hash="servicos">Explorar serviços</GhostLink>
            </div>
          </div>
          <div className="relative h-[60vh] min-h-[380px] lg:h-[74vh]">
            <div className="absolute inset-0 overflow-hidden lg:left-10"><Photo id="1573164713988-8665fc963095" alt="Profissional a trabalhar num portátil numa sala de servidores" w={1400} eager className="animate-ken" /></div>
            <div className="absolute -bottom-6 left-0 hidden w-48 overflow-hidden border-4 border-background sm:block lg:w-56"><Photo id="1563770660941-20978e870e26" alt="Reparação de uma placa electrónica" w={500} eager /></div>
            <p className="absolute right-0 top-4 bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Web · Apps · Software · IT Support</p>
          </div>
        </div>
      </section>

      <section id="servicos" className="paper scroll-mt-16">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <SectionHead eyebrow="Serviços" title="Quatro áreas, cada uma com a sua página." />
          <ul className="mt-14 border-t border-border">
            {services.map((s) => (
              <li key={s.slug} className="reveal">
                <Link to={s.slug} className="group grid items-center gap-6 border-b border-border py-8 md:grid-cols-[4rem_1fr_1fr_9rem]">
                  <span className="font-mono text-sm text-primary">{s.code}</span>
                  <span>
                    <span className="block font-display text-2xl font-semibold transition-colors group-hover:text-primary md:text-3xl">{s.short}</span>
                    <span className="mt-1 block font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.name}</span>
                  </span>
                  <span className="text-muted-foreground">{s.line}</span>
                  <span className="hidden h-24 overflow-hidden md:block"><Photo id={s.photo} alt="" w={400} className="grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHead eyebrow="Como trabalhamos" title="Compromissos que pode verificar." lead="Sem números inventados: estas são as regras que seguimos em todos os pedidos." />
        <Steps steps={[
          { t: "Diagnóstico primeiro", d: "Analisamos antes de propor ou cobrar." },
          { t: "Orçamento por escrito", d: "Sabe o que vai pagar antes de começarmos." },
          { t: "Aprovação sua", d: "Nada avança sem o seu acordo." },
          { t: "Acompanhamento", d: "Continuamos disponíveis depois da entrega." },
        ]} />
      </section>

      <CtaBand photo="1591799264318-7e6ef8ddb7ea" title="Tem um projecto ou um computador com problemas?" lead="Descreva o que precisa e preparamos uma proposta." />
    </>
  );
}
