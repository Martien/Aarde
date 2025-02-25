export const href = (string) =>
  string
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w]*/, "")
    .replace(/[ ]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/[-]+/g, "-");

import { html } from "htl";

// render a section: its name, tagline and children
export const section = ({ name, tagline, children }) =>
  html`<div class="card">
    <h2><a href="${href(name)}">${name}</a></h2>
    <h3>${tagline || ""}</h3>
    <ol>
      ${children?.map(li)}
    </ol>
  </div>`;

const li = ({ name }) =>
  html`<li>
    <a href="${href(name)}">${name}</a>
  </li>`;

// render the first two levels of a toc tree
// export const outliner = () => () => `hoi`;

export const outliner =
  ({ columns = 2 } = {}) =>
  (tree) =>
    html`<div class="grid grid-cols-${columns}" style="grid-auto-rows: auto;">
      ${tree?.children.map(section)}
    </div>`;

const source = ({ url, site, authors, title } = {}) =>
  html`<li>
    <a style="display:block;" href="${url}">${title}</a>
    <div style="margin-top:0px;margin-bottom:6px;font-size:smaller;color:grey;">
      ${authors}${site ? " « " + site : ""}
    </div>
  </li>`;

export const sourceList = (list) =>
  html`<ol>
    ${list.map(source)}
  </ol>`;
