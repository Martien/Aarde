// See https://observablehq.com/framework/config for documentation.

import { markdownIt } from "./markdown-it-wiki-pearl.js";

export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Aarde",

  pages: [
    {
      name: "A Pattern Language",
      path: "a-pattern-language",
      open: false,
      pages: [
        {
          name: "Pattern list",
          path: "pattern-list",
        },
        {
          name: "Independent regions",
          path: "independent-regions",
        },
        {
          name: "The distribution of towns",
          path: "the-distribution-of-towns",
        },
        {
          name: "City country fingers",
          path: "city-country-fingers",
        },
      ],
    },
    {
      name: "Pearl Language",
      path: "pearl-language",
      open: false,
      pages: [
        {
          name: "Wiki markup",
          path: "wiki",
        },
        {
          name: "Markdown-it-container",
          path: "markdown-it-container",
        },
      ],
    },
    {
      name: "Observable Framework",
      path: "observable-framework-examples",
      open: false,
      pages: [
        {
          name: "Example dashboard",
          path: "example-dashboard",
        },
        {
          name: "Example report",
          path: "example-report",
        },
      ],
    },
  ],

  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  root: "src",
  style: "aarde.css",
  footer: ({ path }) =>
    `Built with <a href="https://observablehq.com/">Observable</a> – <a href="https://github.com/Martien/aarde/blob/main/src/${path}.md?plain=1">view source</a> – <a href="./evolver">view site’s evolution</a>`,
  markdownIt,
};
