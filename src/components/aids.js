export const href = (string) => string.toLowerCase().replace(/\s+/g, "-");

// DEPRECATED
export const pages = ({ name, children, open = false, path }) => ({
  name,
  path: path || href(name),
  open,
  pages: children?.map(({ name }) => ({ name, path: href(name) })),
});

// turn a SiteMap into a Page
export const pager = ({ name, children, open = false, path }) => ({
  name,
  path: path || href(name),
  open,
  pages: children?.map(({ name }) => ({ name, path: href(name) })),
});

import { html } from "htl";

// render the first two levels of a toc tree
// export const toc = () => [];
export const outliner =
  ({ columns = 2 } = {}) =>
  (tree) =>
    // html`<p>hoi</p>`;
    html`<div class="grid grid-cols-${columns}" style="grid-auto-rows: auto;">
      ${tree?.children.map(section)}
    </div>`;

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
