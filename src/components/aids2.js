// import html from "npm:htl";
// import { curry } from "npm:ramda";

export const href = (string) => string.toLowerCase().replace(/\s+/g, "-");

export const pages = ({ name, children, open = false, path }) => ({
  name,
  path: path || href(name),
  open,
  pages: children?.map(({ name }) => ({ name, path: href(name) })),
});

const li = ({ name }) =>
  html`<li>
    <a href="${href(name)}">${name}</a>
  </li>`;

// // render a section: its name, tagline and children
// const section = ({ name, tagline, children }) =>
//   html`<div class="card">
//     <h2><a href="${href(name)}">${name}</a></h2>
//     <h3>${tagline || ""}</h3>
//     <ol>
//       ${children?.map(li)}
//     </ol>
//   </div>`;
