# Module Federation Test - VR

O projeto segue o conceito de module federation, sendo composto por quatro aplicações: 1 host e 3 remotos (header, cards e footer).

## Detalhes das aplicações

Todas tiveram como base Vite + React + Typescript, tendo como gerenciador de pacotes e workspaces o PNPM.

Para o consumo de API, utilizei o Tanstack Query.

Para gerenciamento de estando, utilizei o Jotai.

Para o CSS achei legal fazer cada uma utilizando uma ferramenta diferente, então para cada remote utilizei: css modules, tailwindcss e styled components.

Para os testes utilizei o Cypress para e2e e o vitest para os unitários.

## 📋 Pré-requisitos

- [PNPM](https://pnpm.io/pt/installation)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress)

## 🔧 Comandos

Para instalação

```
pnpm install
```

### HOST / RAIZ

Para rodar o host em modo preview com todos os remotes

```
pnpm start:preview
```

Para rodar os testes do cypress, precisa estar com o **preview do host rodando** e na **raiz do projeto** rodar

```
pnpm test
```

Para rodar o host no modo dev, é preciso estar na **raiz do projeto** e rodar

```
pnpm start
```

### REMOTES

Para rodar cada remote individualmente em desenvolvimento, é preciso entrar na **respectiva pasta** e rodar

```
pnpm dev
```

Para os testes unitários, é preciso entrar na **respectiva pasta** e rodar

```
pnpm test
```

Para o preview de cada um basta entrar na **respectiva pasta** e rodar

```
pnpm preview
```

Obs.: Todos tem o build caso seja necessário rodá-lo sozinho, porém quando necessário o dev e/ou preview rodam ele antes.

## 🛠️ Construído com

- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Vite](https://vitejs.dev/)
- [PNPM](https://pnpm.io/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Jotai](https://jotai.org/)
- [Tailwindcss](https://tailwindcss.com/)
- [Styled Components](https://styled-components.com/)
- [Cypress](https://www.cypress.io/)
- [Vitest](https://vitest.dev/)
- [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

## 🖇️ Considerações finais

Vale mencionar alguns padrões de organização de código utilizado como o prettier, eslint, commit conventional e o editorconfig.
