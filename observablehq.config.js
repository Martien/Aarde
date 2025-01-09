import { markdownIt } from "./markdown-it-wiki-pearl.js";
import { pages } from "./src/zones/zones.js";

const revision = ((now) =>
  new Date(now - 60000 * now.getTimezoneOffset()).toISOString().slice(0, -1))(
  new Date(),
);
const output = `/Users/martien/Documents/nl.aardrock.aarde/${revision}`;
const head = [
  '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  '<meta name="google-site-verification" content="k0VpC-XMlpvTPUxvunYE2t7OC4K51eNGBoB2EtNLbGE" />',
].join("\n");

export default {
  title: "Aarde",
  pages,
  head,
  root: "src",
  search: true,
  style: "style.css",
  output,
  footer: ({ path }) =>
    `Built with <a href="https://observablehq.com/">Observable</a> – <a href="https://github.com/Martien/aarde/blob/main/src/${path}.md?plain=1">view page source</a> – ${revision}`,
  markdownIt,
};
