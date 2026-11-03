// Portuguese (Angola) copy. Add an `en.ts` with the same shape for an English version.
export const pt = {
  nav: [
    { id: "inicio", label: "Início" },
    { id: "servicos", label: "Serviços" },
    { id: "sobre", label: "Sobre" },
    { id: "processo", label: "Processo" },
    { id: "contacto", label: "Contacto" },
  ],
  cta: "Pedir Orçamento",
  hero: {
    eyebrow: "Technology & Digital Solutions",
    title: ["O centro das", "suas soluções", "digitais."],
    lead: "Da página web ao suporte técnico do seu computador, a ZENTRIX desenha, desenvolve e mantém a tecnologia de que o seu negócio precisa para crescer — com rigor e acompanhamento próximo.",
    primary: "Pedir Orçamento",
    secondary: "Explorar Serviços",
    tags: ["Web", "Apps", "Software", "IT Support"],
  },
  services: {
    eyebrow: "01 — Serviços",
    title: "Quatro áreas. Uma só equipa a pensar no seu projecto.",
    items: [
      { code: "WEB", title: "Web Development", desc: "Websites profissionais, landing pages, lojas online e plataformas web rápidas, seguras e preparadas para converter visitantes em clientes.", points: ["Websites institucionais", "E-commerce", "Landing pages", "Plataformas web"] },
      { code: "APP", title: "App Development", desc: "Aplicações móveis e web pensadas para quem as usa: interfaces claras, desempenho fiável e espaço para evoluir com o seu negócio.", points: ["Apps Android & iOS", "Web apps", "UX/UI", "Integrações"] },
      { code: "SFT", title: "Software Development", desc: "Software à medida, sistemas de gestão e automação de processos que eliminam tarefas repetitivas e dão controlo real sobre a operação.", points: ["Sistemas de gestão", "Automação", "Ferramentas internas", "Dashboards"] },
      { code: "ITS", title: "IT Support", desc: "Manutenção, diagnóstico e reparação de computadores, upgrades de hardware e venda de peças e acessórios para manter tudo a funcionar.", points: ["Manutenção & reparação", "Diagnóstico", "Upgrades", "Peças & acessórios"] },
    ],
  },
  about: {
    eyebrow: "02 — Sobre",
    title: "Tecnologia que resolve, não que complica.",
    body: [
      "A ZENTRIX nasce de uma ideia simples: as empresas e os profissionais precisam de um parceiro que entenda tanto o código como o computador em cima da secretária.",
      "Por isso juntamos desenvolvimento digital e suporte técnico no mesmo lugar. Ouvimos primeiro, propomos soluções práticas e entregamos trabalho em que pode confiar.",
    ],
    values: [
      { k: "Innovation", v: "Procuramos a solução certa, não a mais complicada." },
      { k: "Technology", v: "Ferramentas modernas, escolhidas com critério." },
      { k: "Excellence", v: "Atenção ao detalhe do primeiro contacto à entrega." },
    ],
  },
  process: {
    eyebrow: "03 — Processo",
    title: "Um método claro, do primeiro contacto ao suporte contínuo.",
    steps: [
      { n: "01", t: "Discover", d: "Ouvimos os seus objectivos, analisamos o contexto e identificamos o problema real a resolver." },
      { n: "02", t: "Plan", d: "Definimos âmbito, prazos e orçamento com transparência, antes de escrever uma linha de código." },
      { n: "03", t: "Build", d: "Desenvolvemos por etapas, com revisões regulares para que acompanhe cada avanço." },
      { n: "04", t: "Support", d: "Depois da entrega continuamos ao seu lado: manutenção, melhorias e assistência técnica." },
    ],
  },
  contact: {
    eyebrow: "04 — Contacto",
    title: "Vamos construir o próximo passo do seu negócio.",
    lead: "Conte-nos o que precisa. Respondemos com uma proposta clara e sem compromisso.",
    demo: "Formulário em modo demonstração: as mensagens ainda não são enviadas.",
    fields: { name: "Nome", email: "Email", service: "Serviço de interesse", message: "Mensagem", choose: "Seleccione um serviço", other: "Outro / Ainda não sei" },
    submit: "Enviar pedido",
    errors: { name: "Indique o seu nome (mín. 2 caracteres).", email: "Indique um email válido.", service: "Seleccione um serviço.", message: "Descreva o pedido (mín. 10 caracteres)." },
    success: "Obrigado! O seu pedido foi validado com sucesso. Como este é um formulário de demonstração, nada foi enviado — em breve estará ligado ao canal oficial da ZENTRIX.",
    again: "Enviar outro pedido",
  },
  footer: {
    tagline: "The Center of Digital Solutions",
    line: "INNOVATION · TECHNOLOGY · EXCELLENCE",
    nav: "Navegação",
    services: "Serviços",
    contact: "Contacto",
    contactNote: "Os canais oficiais (email, telefone e redes sociais) serão publicados aqui em breve.",
    rights: "Todos os direitos reservados.",
  },
};
export type Content = typeof pt;
