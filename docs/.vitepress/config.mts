import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JA Trials",
  lang: "pt-BR",
  description: "Desafios para o JA da valtech",
  base: "/ja-trials/",
  themeConfig: {
    docFooter: {
      prev: "Página anterior",
      next: "Próxima página",
    },
    outlineTitle: "Nesta página",
    nav: [
      { text: "Home", link: "/" },
      { text: "Desafios", link: "/challenges" },
      { text: "Code Review Invertido", link: "/reversed-code-review" },
    ],

    sidebar: [
      {
        text: "Conteúdo",
        items: [
          { text: "Importante antes de começar", link: "/important-to-know" },
          {
            text: "Desafios",
            link: "/challenges",
            items: [
              { text: "Variáveis", link: "/challenges/variables" },
              { text: "Objetos", link: "/challenges/objects" },
              { text: "Arrays", link: "/challenges/arrays" },
              { text: "Funções", link: "/challenges/functions" },
            ],
          },
          {
            text: "Code Review Invertido",
            link: "/reversed-code-review",
            items: [
              { text: "Variáveis", link: "/reversed-code-review/variables" },
              { text: "Objetos", link: "/reversed-code-review/objects" },
              { text: "Arrays", link: "/reversed-code-review/arrays" },
              { text: "Funções", link: "/reversed-code-review/functions" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
