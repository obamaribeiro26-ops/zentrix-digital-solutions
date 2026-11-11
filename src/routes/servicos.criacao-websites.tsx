import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";

const t = "Criação de websites e lojas online — ZENTRIX";
const d = "Sites institucionais, landing pages e lojas online responsivos, com manutenção e SEO técnico básico.";
export const Route = createFileRoute("/servicos/criacao-websites")({
  head: () => ({ links: [{ rel: "canonical", href: "https://zentrix-web-and-software.lovable.app/servicos/criacao-websites" }], meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "https://zentrix-web-and-software.lovable.app/servicos/criacao-websites" }, { property: "og:image", content: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=75" }, { name: "twitter:image", content: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=630&q=75" }] }),
  component: () => (
    <ServicePage c={{
      crumb: "Criação de websites", eyebrow: "Desenvolvimento web",
      title: <>Websites que explicam<br />o seu negócio <span className="text-primary">e vendem.</span></>,
      lead: "Sites institucionais, landing pages e lojas online, rápidos, legíveis no telemóvel e fáceis de actualizar.",
      photo: "1498050108023-c5249f4df085", alt: "Portátil com código numa secretária",
      introTitle: "Muitos clientes vão conhecê-lo primeiro pelo seu site.", intro: "Começamos pela estrutura e pelo conteúdo: o que o visitante precisa de saber, e que acção deve tomar. O design vem a seguir, ao serviço dessa mensagem.",
      introPhoto: "1522542550221-31fd19575a2d", introAlt: "Esboços de wireframes de páginas web",
      offerTitle: "Do primeiro site à loja online.",
      scope: "Definimos por escrito as páginas, funcionalidades, conteúdos e acessos necessários. Domínio, alojamento, serviços de pagamento e manutenção são identificados na proposta, sem pressupor que estão incluídos em qualquer pedido.",
      useCases: [
        { t: "Apresentar uma empresa", d: "Organizar serviços, informação institucional e contactos para ajudar o visitante a perceber a oferta e pedir uma proposta." },
        { t: "Divulgar uma campanha", d: "Uma página com mensagem focada e formulário de contacto, sem dispersar a atenção por conteúdos secundários." },
        { t: "Vender um catálogo online", d: "Estruturar produtos, variantes e encomendas; escolher pagamentos e regras de entrega adequados ao negócio." },
        { t: "Actualizar um site existente", d: "Rever navegação, leitura em telemóvel, acessibilidade e conteúdos, preservando o que já funciona." },
      ],
      offer: [
        { t: "Sites institucionais", d: "Apresentação da empresa, serviços, equipa e contactos." },
        { t: "Landing pages", d: "Páginas focadas numa campanha, produto ou pedido de contacto." },
        { t: "Lojas online", d: "Catálogo, carrinho, pagamentos e gestão de encomendas." },
        { t: "Design responsivo", d: "Experiência pensada para telemóvel, tablet e computador." },
        { t: "Manutenção", d: "Actualizações, cópias de segurança e pequenas alterações." },
        { t: "SEO técnico básico", d: "Títulos, descrições, velocidade e estrutura legível pelos motores de pesquisa." },
      ],
      deliverables: ["Mapa do site e estrutura de conteúdo", "Design aprovado por si", "Site publicado no seu domínio", "Painel para editar conteúdos, quando aplicável", "Configuração básica de SEO", "Sessão de explicação de uso"],
      steps: [
        { t: "Descoberta", d: "Objectivos, público e conteúdos disponíveis." },
        { t: "Planeamento", d: "Estrutura, âmbito, prazos e orçamento por escrito." },
        { t: "Desenvolvimento", d: "Design e construção com revisões suas." },
        { t: "Lançamento e suporte", d: "Publicação, testes e manutenção contínua." },
      ],
      ctaTitle: "Vamos planear o seu site?", ctaLead: "Diga-nos o que precisa e enviamos uma proposta.", ctaPhoto: "1517694712202-14dd9538aa97",
    }} />
  ),
});
