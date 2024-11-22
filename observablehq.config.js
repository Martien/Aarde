// See https://observablehq.com/framework/config for documentation.

import { markdownIt } from "./markdown-it-wiki-pearl.js";

export default {
  title: "Aarde",
  pages: [
    {
      // A Pattern Language
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
      // Pearl Language
      name: "Pearl Language",
      path: "pearl-language",
      open: false,
      pages: [
        {
          name: "Pearl",
          path: "pearl",
        },
      ],
    },
    {
      // Observable Framework
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
    {
      // DNA
      name: "DNA",
      open: false,
      pages: [
        {
          name: "Kernzaken",
          path: "kernzaken",
        },
        {
          name: "Geluksindex",
          path: "geluksindex",
        },
        {
          name: "Bezitten",
          path: "bezitten",
        },
        {
          name: "Huishouden",
          path: "huishouden",
        },
        {
          name: "Klonen",
          path: "klonen",
        },
      ],
    },
    {
      // Engine Room
      name: "Engine Room",
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
  ],
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  root: "src",
  style: "style.css",
  footer: ({ path }) =>
    `Built with <a href="https://observablehq.com/">Observable</a> – <a href="https://github.com/Martien/aarde/blob/main/src/${path}.md?plain=1">view source</a> – <a href="./evolver">view site’s evolution</a>`,
  markdownIt,
};
