import { html } from "npm:htl";
import { curry } from "npm:ramda";

// render the first two levels of a toc tree
export const toc = curry(
  ({ columns = 2 } = {}) =>
    (tree) =>
      html`<div class="grid grid-cols-${columns}" style="grid-auto-rows: auto;">
        ${tree?.children.map(section)}
      </div>`,
);

export const pages = ({ name, children }) => ({
  name,
  path: href(name),
  open: true,
  pages: children?.map(({ name }) => ({ name, path: href(name) })),
});

// convert a string to a clean href:
// - spaces → -
const href = (string) => string.toLowerCase().replace(/\s+/, "-");

// render a single toc entry as <li>
const li = ({ name }) =>
  html`<li>
    <a href="${href(name)}">${name}</a>
  </li>`;

// render a section: its name, tagline and children
export const section = ({ name, tagline, children }) =>
  html`<div class="card">
    <h2><a href="${href(name)}">${name}</a></h2>
    <h3>${tagline || ""}</h3>
    <ol>
      ${children?.map(li)}
    </ol>
  </div>`;

export const toc2 = curry(
  ({ columns = 2 } = {}) =>
    (tree) =>
      html`<div class="grid grid-cols-${columns}" style="grid-auto-rows: auto;">
        ${tree?.children.map(section)}
      </div>`,
);
export const section2 = ({ name, tagline, subtitle, children }) =>
  html`<ul>
    ${children?.map(li2)}
  </ul>`;

export const title = ({ name, subtitle }) =>
  html`<a class="observablehq-header-anchor" href="${href(name)}"
    ><h1>${subtitle || name}</h1></a
  >`;

const li2 = ({ name, prompt }) =>
  html`<li><a href="${href(name)}">${name}</a>–${prompt}</li>`;
