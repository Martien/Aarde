// this file is used for the sidebar
// it collects all zones into a single list called pages
//
// import each page from the source
import { aardbron } from "./aardbron.js";
import { dna } from "./dna.js";
import { pl } from "./pearl-language.js";
import { apl } from "./a-pattern-language.js";
import { observableFramework } from "./observable-framework.js";
import { engineRoom } from "./engine-room.js";
import { contact } from "./contact.js";

// pager converts each page source to Framework’s page format
// page source can have more metadata than Framework’s page needs
import { pager } from "../components/aids.js";

// collect all pages
// observable.config.js can import and use this verbatim
export const pages = [
  apl,
  pl,
  observableFramework,
  dna,
  contact,
  aardbron,
  engineRoom,
].map(pager);
