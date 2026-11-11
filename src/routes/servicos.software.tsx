import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";

const t = "Software à medida e automação — ZENTRIX";
const d = "Sistemas internos, automação de processos e soluções de software à medida para empresas.";
export const Route = createFileRoute("/servicos/software")({
  head: () => ({ links: [{ rel: "canonical", href: "https://zentrix-web-and-software.lovable.app/servicos/software" }], meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }, { property: "og:url", content: "https://zentrix-web-and-software.lovable.app/servicos/software" }, { property: "og:image", content: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=75" }, { name: "twitter:image", content: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=75" }] }),
  component: () => (
    <ServicePage c={{
      crumb: "Software à medida", eyebrow: "Desenvolvimento de software",
      title: <>Software feito para<br /><span className="text-primary">a forma como trabalha.</span></>,
      lead: "Sistemas internos e automações que substituem folhas de cálculo dispersas e tarefas repetitivas.",
      photo: "1461749280684-dccba630e2f6", alt: "Código-fonte num monitor",
      introTitle: "Quando as ferramentas genéricas já não chegam.", intro: "Mapeamos o processo actual, identificamos onde se perde tempo e construímos uma solução ajustada à sua equipa — sem funcionalidades que ninguém usa.",
      introPhoto: "1580894894513-541e068a3e2b", introAlt: "Programador a trabalhar com vários monitores",
      offerTitle: "Soluções à medida do processo.",
      scope: "O levantamento define regras, permissões e prioridades antes do desenvolvimento. Migração de dados, licenças, integrações, formação e suporte são acordados conforme a qualidade dos dados e o âmbito do sistema.",
      useCases: [
        { t: "Gestão de stock", d: "Organizar entradas, saídas e consultas de produtos, com regras adequadas ao processo da equipa." },
        { t: "Aprovação de pedidos", d: "Substituir trocas dispersas de mensagens por um fluxo com responsáveis, estados e histórico." },
        { t: "Consolidação de relatórios", d: "Reunir dados de fontes compatíveis e reduzir operações manuais de preparação de informação." },
        { t: "Substituição de folhas de cálculo", d: "Centralizar registos e validar informação para evitar duplicações e facilitar a consulta." },
      ],
      offer: [
        { t: "Sistemas de gestão", d: "Clientes, stock, encomendas, faturação interna ou recursos." },
        { t: "Automação de processos", d: "Tarefas repetitivas executadas automaticamente." },
        { t: "Ferramentas internas", d: "Aplicações simples para necessidades específicas da equipa." },
        { t: "Relatórios", d: "Dados reunidos e apresentados de forma útil." },
        { t: "Migração de dados", d: "Passagem de folhas de cálculo ou sistemas antigos." },
        { t: "Manutenção evolutiva", d: "O sistema acompanha as mudanças do negócio." },
      ],
      deliverables: ["Mapa do processo actual e proposto", "Sistema instalado e configurado", "Migração dos dados existentes", "Formação da equipa", "Documentação", "Plano de suporte"],
      steps: [
        { t: "Descoberta", d: "Entrevistas e análise do processo." },
        { t: "Planeamento", d: "Âmbito, prioridades e orçamento." },
        { t: "Desenvolvimento", d: "Desenvolvimento iterativo com testes." },
        { t: "Suporte", d: "Formação, ajustes e evolução." },
      ],
      ctaTitle: "Qual processo quer simplificar?", ctaLead: "Descreva-o e analisamos a melhor solução.", ctaPhoto: "1518770660439-4636190af475",
    }} />
  ),
});
