// this file is used for the sidebar
// it collects all zones into a single list called pages
// ready to import by observable.config.js

// import each page from the source
// NOTA BENE:
import { aardbron, geld, money } from "./aardbron.js";
import { dna } from "./dna.js";
import { pl } from "./pearl-language.js";
import { apl } from "./a-pattern-language.js";
import { observableFramework } from "./observable-framework.js";
import { engineRoom } from "./engine-room.js";
import { contact } from "./contact.js";

// pager converts each page source to Framework’s page format
// page source can have more metadata than Framework’s page needs

const href = (string) =>
  string
    .toLowerCase()
    .replace(/[\s\W]+/g, "-")
    .replace(/[,:]/g, "");

const pager = ({ name, children, open = false, path }) => ({
  name,
  path: path || href(name),
  open,
  pages: children?.map(({ name }) => ({ name, path: href(name) })),
});

// collect all pages
// sidebar has the same order
// observable.config.js can import and use this verbatim
// export const pages = [];
export const pages = [
  apl,
  pl,
  observableFramework,
  dna,
  contact,
  aardbron,
  money,
  geld,
  engineRoom,
].map(pager);
