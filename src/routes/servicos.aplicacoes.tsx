import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";

const t = "Aplicações web e mobile — ZENTRIX";
const d = "Desenvolvimento de aplicações web e mobile, dashboards, portais de cliente e integrações.";
export const Route = createFileRoute("/servicos/aplicacoes")({
  head: () => ({ links: [{ rel: "canonical", href: "https://zentrix-web-and-software.lovable.app/servicos/aplicacoes" }], meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "https://zentrix-web-and-software.lovable.app/servicos/aplicacoes" }, { property: "og:image", content: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=75" }, { name: "twitter:image", content: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=630&q=75" }] }),
  component: () => (
    <ServicePage c={{
      crumb: "Aplicações", eyebrow: "Desenvolvimento de aplicações",
      title: <>Aplicações que as<br />pessoas <span className="text-primary">querem usar.</span></>,
      lead: "Apps web e mobile, dashboards e portais de cliente, desenhados à volta de tarefas reais.",
      photo: "1551288049-bebda4e38f71", alt: "Dashboard com gráficos num ecrã",
      introTitle: "Uma boa aplicação poupa passos.", intro: "Ajudamos a transformar uma ideia ou um processo manual numa aplicação clara: definimos o essencial para a primeira versão e deixamos espaço para crescer.",
      introPhoto: "1512941937669-90a1b58e7e9c", introAlt: "Smartphone com aplicações no ecrã",
      offerTitle: "Web, mobile e tudo o que os liga.",
      scope: "A primeira versão é definida pelas tarefas essenciais. A proposta esclarece plataformas, perfis de acesso, integrações, testes e condições de publicação; custos de serviços externos e evolução são avaliados separadamente quando aplicável.",
      useCases: [
        { t: "Portal de pedidos", d: "Permitir que clientes consultem o estado de pedidos e partilhem documentos, com acessos definidos por perfil." },
        { t: "Painel de acompanhamento", d: "Reunir indicadores e filtros para tornar os dados úteis à equipa, de acordo com as fontes disponíveis." },
        { t: "Aplicação para tarefas no terreno", d: "Registar informações no telemóvel; avaliar sincronização e necessidades de funcionamento sem ligação." },
        { t: "Reservas e marcações", d: "Organizar disponibilidade, pedidos e notificações conforme as regras reais de cada negócio." },
      ],
      offer: [
        { t: "Aplicações web", d: "Ferramentas acessíveis no browser, sem instalação." },
        { t: "Aplicações mobile", d: "Apps para Android e iOS." },
        { t: "Dashboards", d: "Indicadores e relatórios do seu negócio num só ecrã." },
        { t: "Portais de cliente", d: "Área reservada para pedidos, documentos e acompanhamento." },
        { t: "Integrações", d: "Ligação a pagamentos, email, mapas e outros sistemas." },
        { t: "UX/UI", d: "Fluxos e interfaces testados com quem as vai usar." },
      ],
      deliverables: ["Especificação funcional da primeira versão", "Protótipo navegável", "Aplicação publicada", "Documentação técnica", "Acessos e código entregues", "Plano de evolução"],
      steps: [
        { t: "Descoberta", d: "Utilizadores, tarefas e problemas a resolver." },
        { t: "Protótipo", d: "Ecrãs principais validados antes de programar." },
        { t: "Desenvolvimento", d: "Entregas por etapas com revisões." },
        { t: "Suporte", d: "Correcções, melhorias e novas funções." },
      ],
      ctaTitle: "Tem uma aplicação em mente?", ctaLead: "Conte-nos a ideia; ajudamos a definir a primeira versão.", ctaPhoto: "1603302576837-37561b2e2302",
    }} />
  ),
});
