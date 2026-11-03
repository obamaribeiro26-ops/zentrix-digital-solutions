// Portuguese (Angola) copy. An English version can mirror this shape.
export const services = [
  { code: "01", slug: "/servicos/manutencao-computadores", short: "Manutenção de computadores", name: "IT Support", line: "Diagnóstico, limpeza, reparação e upgrades de portáteis e desktops.", photo: "1550041473-d296a3a8a18a" },
  { code: "02", slug: "/servicos/criacao-websites", short: "Criação de websites", name: "Web Development", line: "Sites institucionais, landing pages e lojas online.", photo: "1522542550221-31fd19575a2d" },
  { code: "03", slug: "/servicos/aplicacoes", short: "Aplicações web e mobile", name: "App Development", line: "Apps, dashboards, portais de cliente e integrações.", photo: "1512941937669-90a1b58e7e9c" },
  { code: "04", slug: "/servicos/software", short: "Software à medida", name: "Software Development", line: "Sistemas internos e automação de processos.", photo: "1461749280684-dccba630e2f6" },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];
