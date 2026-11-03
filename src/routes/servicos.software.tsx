import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";

const t = "Software à medida e automação — ZENTRIX";
const d = "Sistemas internos, automação de processos e soluções de software à medida para empresas.";
export const Route = createFileRoute("/servicos/software")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }] }),
  component: () => (
    <ServicePage c={{
      crumb: "Software à medida", eyebrow: "Software Development",
      title: <>Software feito para<br /><span className="text-primary">a forma como trabalha.</span></>,
      lead: "Sistemas internos e automações que substituem folhas de cálculo dispersas e tarefas repetitivas.",
      photo: "1461749280684-dccba630e2f6", alt: "Código-fonte num monitor",
      introTitle: "Quando as ferramentas genéricas já não chegam.", intro: "Mapeamos o processo actual, identificamos onde se perde tempo e construímos uma solução ajustada à sua equipa — sem funcionalidades que ninguém usa.",
      introPhoto: "1580894894513-541e068a3e2b", introAlt: "Programador a trabalhar com vários monitores",
      offerTitle: "Soluções à medida do processo.",
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
        { t: "Discover", d: "Entrevistas e análise do processo." },
        { t: "Plan", d: "Âmbito, prioridades e orçamento." },
        { t: "Build", d: "Desenvolvimento iterativo com testes." },
        { t: "Support", d: "Formação, ajustes e evolução." },
      ],
      ctaTitle: "Qual processo quer simplificar?", ctaLead: "Descreva-o e analisamos a melhor solução.", ctaPhoto: "1518770660439-4636190af475",
    }} />
  ),
});
