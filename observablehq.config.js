// See https://observablehq.com/framework/config for documentation.

import { markdownIt } from "./markdown-it-wiki-pearl.js";

export default {
  // The app’s title; used in the sidebar and webpage titles.
  title: "Aarde",

  pages: [
    {
      name: "Wiki markup",
      path: "/wiki",
    },
    {
      name: "A Pattern Language",
      path: "/a-pattern-language/index",
    },
    {
      name: "Pattern list",
      path: "pl",
    },
    {
      name: "Markdown-it-container",
      path: "pl-container",
    },
    {
      name: "Observable Framework examples",
      path: "/observable-framework-examples",
    },
  ],

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',

  // The path to the source root.
  root: "src",

  // theme: "light",
  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // footer: "Built with Observable.", // what to show in the footer (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // preserveExtension: false, // drop .html from URLs
  // preserveIndex: false, // drop /index from URLs

  style: "aarde.css",

  // footer: "Built with Observable",
  footer: ({ path }) =>
    `Built with <a href="https://observablehq.com/">Observable</a> – <a href="https://github.com/Martien/aarde/blob/main/src/${path}.md?plain=1">view source</a> – <a href="./evolver">view site’s evolution</a>`,

  markdownIt,
};
