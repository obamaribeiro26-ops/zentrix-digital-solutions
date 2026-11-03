import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/service-page";
import { HonestNote, Photo, SectionHead } from "@/components/site/blocks";

const t = "Manutenção e reparação de computadores — ZENTRIX";
const d = "Diagnóstico, limpeza interna, substituição de componentes, optimização, remoção de malware e instalação de sistemas para portáteis e desktops.";
export const Route = createFileRoute("/servicos/manutencao-computadores")({
  head: () => ({ meta: [{ title: t }, { name: "description", content: d }, { property: "og:title", content: t }, { property: "og:description", content: d }, { property: "og:type", content: "website" }] }),
  component: Page,
});

const signs = ["Arranque lento ou bloqueios frequentes", "Ventoinha ruidosa e aquecimento excessivo", "Desliga ou reinicia sem aviso", "Ecrã azul ou mensagens de erro", "Publicidade estranha ou programas desconhecidos", "Bateria que dura cada vez menos", "Disco quase cheio e aplicações lentas", "Há mais de um ano sem limpeza interna"];

function Page() {
  return (
    <ServicePage
      c={{
        crumb: "Manutenção de computadores", eyebrow: "IT Support · Portáteis e desktops",
        title: <>O seu computador,<br />diagnosticado e<br /><span className="text-primary">reparado com método.</span></>,
        lead: "Avaliamos o problema antes de mexer, explicamos o que encontrámos e só avançamos com a sua aprovação.",
        photo: "1550041473-d296a3a8a18a", alt: "Técnico a reparar a placa de um equipamento",
        introTitle: "Um computador que falha custa tempo e trabalho.", intro: "Tratamos de portáteis e desktops de uso pessoal e profissional: do aquecimento ao vírus, da peça avariada ao sistema que precisa de ser reinstalado. Trabalho técnico cuidadoso, com explicações claras.",
        introPhoto: "1620283085439-39620a1e21c4", introAlt: "Interior de um portátil aberto com placa-mãe e memória visíveis",
        offerTitle: "Serviços técnicos detalhados.",
        offer: [
          { t: "Diagnóstico", d: "Testes de hardware e software para identificar a causa real da avaria." },
          { t: "Limpeza interna", d: "Remoção de pó, limpeza de ventoinhas e substituição de pasta térmica." },
          { t: "Substituição de componentes", d: "Discos, SSD, memória RAM, ecrãs, teclados, baterias e fontes, além de peças e acessórios." },
          { t: "Optimização e desempenho", d: "Upgrades de SSD e RAM, limpeza de arranque e ajustes ao sistema." },
          { t: "Remoção de malware", d: "Eliminação de vírus, adware e programas indesejados, com reforço da protecção." },
          { t: "Instalação e configuração", d: "Instalação de sistema operativo, drivers, programas e cópias de segurança." },
        ],
        deliverables: ["Relatório do diagnóstico", "Orçamento antes da reparação", "Explicação do trabalho realizado", "Recomendações de manutenção", "Peças substituídas devolvidas, se pretender", "Equipamento testado antes da entrega"],
        steps: [
          { t: "Pedido", d: "Descreve o problema pelo formulário ou contacto directo." },
          { t: "Diagnóstico", d: "Analisamos o equipamento e identificamos a causa." },
          { t: "Orçamento e aprovação", d: "Apresentamos o custo e só avançamos com o seu acordo." },
          { t: "Reparação", d: "Executamos, testamos e devolvemos o equipamento." },
        ],
        ctaTitle: "O seu computador precisa de assistência?", ctaLead: "Descreva o problema e preparamos o diagnóstico.", ctaPhoto: "1591799264318-7e6ef8ddb7ea",
      }}
      extra={
        <section className="border-y border-border bg-surface">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHead eyebrow="Sinais de alerta" title="Quando deve fazer manutenção." />
              <ul className="reveal mt-10 grid gap-x-8 sm:grid-cols-2">
                {signs.map((s) => <li key={s} className="flex gap-3 border-t border-border py-4"><span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />{s}</li>)}
              </ul>
              <HonestNote>Prazos, garantias e preços dependem do diagnóstico e da disponibilidade de peças. Indicamo-los por escrito no orçamento, nunca antes de avaliar o equipamento.</HonestNote>
            </div>
            <div className="reveal grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[16/10] overflow-hidden"><Photo id="1563770660941-20978e870e26" alt="Técnico a usar uma chave de fendas numa placa electrónica" /></div>
              <div className="aspect-square overflow-hidden"><Photo id="1555617981-dac3880eac6e" alt="Socket de processador numa motherboard" w={700} /></div>
              <div className="aspect-square overflow-hidden"><Photo id="1591488320449-011701bb6704" alt="Placas gráficas para upgrade" w={700} /></div>
            </div>
          </div>
        </section>
      }
    />
  );
}
