import { markdownIt } from "./markdown-it-wiki-pearl.js";
import { pages } from "./src/zones/zones.js";

const output = `/Users/martien/Documents/nl.aardrock.aarde/${((now) => new Date(now - 60000 * now.getTimezoneOffset()).toISOString().slice(0, -1))(new Date())}`;

export default {
  title: "Aarde",
  pages,
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  root: "src",
  search: true,
  style: "style.css",
  output,
  footer: ({ path }) =>
    `Built with <a href="https://observablehq.com/">Observable</a> – <a href="https://github.com/Martien/aarde/blob/main/src/${path}.md?plain=1">view page source</a>`,
  markdownIt,
};
