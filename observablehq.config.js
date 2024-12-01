import { markdownIt } from "./markdown-it-wiki-pearl.js";
import { pages } from "./src/zones/zones.js";

export default {
  title: "Aarde",
  pages,
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  root: "src",
  style: "style.css",
  footer: ({ path }) =>
    `Built with <a href="https://observablehq.com/">Observable</a> – <a href="https://github.com/Martien/aarde/blob/main/src/${path}.md?plain=1">view source</a> – <a href="./evolver">view site’s evolution</a>`,
  markdownIt,
};
