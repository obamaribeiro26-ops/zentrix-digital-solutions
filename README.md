# ZENTRIX — Technology & Digital Solutions

**The Center of Digital Solutions** · Inovação · Tecnologia · Excelência

ZENTRIX é uma empresa de tecnologia e soluções digitais. Constrói websites, aplicações e software à medida, e presta assistência informática a particulares e empresas — do diagnóstico à reparação.

Este repositório contém o código-fonte completo do site institucional da ZENTRIX.

## O que o site faz

- Apresentação da empresa e das quatro áreas de serviço
- Uma página própria para cada serviço, com hero, conteúdo e pedido de orçamento
- Formulário de pedido de orçamento com validação no navegador
- Layout responsivo (desktop, tablet e telemóvel), navegação por teclado e suporte a `prefers-reduced-motion`

> O formulário **não envia nada automaticamente**: prepara o texto do pedido e oferece os canais de contacto quando estes estiverem configurados. Não existem envios simulados nem backend de email ligado.

## Rotas

| Rota | Página |
| --- | --- |
| `/` | Início |
| `/servicos/manutencao-computadores` | Manutenção e reparação de computadores |
| `/servicos/criacao-websites` | Criação de websites e lojas online |
| `/servicos/aplicacoes` | Aplicações web e mobile |
| `/servicos/software` | Software à medida e automação |
| `/sobre` | Sobre a ZENTRIX |
| `/contactos` | Contactos e pedido de orçamento |

## Stack

- [TanStack Start](https://tanstack.com/start) (React 19 + Vite)
- TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com)
- Vitest (testes de rotas)

## Desenvolvimento local

Pré-requisitos: Node.js e npm (ou [Bun](https://bun.sh)).

```sh
git clone <url-deste-repositorio>
cd zentrix
npm install
npm run dev
```

O site fica disponível em `http://localhost:8080`.

```sh
npm run build     # build de produção
npm run test      # testes
```

## Configuração de contactos

Os canais oficiais (WhatsApp e email) vivem num único ficheiro: `src/lib/site-config.ts`. Enquanto estiverem vazios, o site não mostra nem simula contactos — basta preencher esse ficheiro para que o rodapé e o formulário passem a oferecer o envio.

## Conteúdo

Todo o texto em português está centralizado em `src/content/services.ts` e nas próprias rotas, de forma a permitir uma versão em inglês sem reescrever os componentes.
