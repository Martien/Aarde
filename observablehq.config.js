import { markdownIt } from "./markdown-it-wiki-pearl.js";
import { href, pages } from "./src/components/aids2.js";

import { dnaTree } from "./src/dna.js";
import { pl } from "./src/pearl-language.js";
import { apl } from "./src/a-pattern-language.js";
import { observableFramework } from "./src/observable-framework.js";
import { engineRoom } from "./src/engine-room.js";
import { contact } from "./src/contact.js";

export default {
  title: "Aarde",
  pages: [apl, pl, observableFramework, dnaTree, engineRoom, contact].map(
    pages,
  ),
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  root: "src",
  style: "style.css",
  footer: ({ path }) =>
    `Built with <a href="https://observablehq.com/">Observable</a> – <a href="https://github.com/Martien/aarde/blob/main/src/${path}.md?plain=1">view source</a> – <a href="./evolver">view site’s evolution</a>`,
  markdownIt,
};
