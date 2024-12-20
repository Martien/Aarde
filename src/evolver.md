---
title: Evolver
index: true
---
# How did this site evolve?
1. Clean install of Observable Framework.
1. Extract CSS into own file `aarde.css`.
1. Added this page – about this site’s evolution.
1. Extract Observable Framework into own file `observable-framework-examples.md`.
1. Changed default footer to include:
    1. link to page source; and
    1. link to this page.
1. Added `pages[]` to `observable-config.js` so sidebar and footer have no duplicates.
`npm run build` and committed to main and pushed to github.
1. `npm --save install @ig3/markdown-it-wikilinks` so you can specify the wikilinks syntax and add multiple parsers – needed for pattern and pear languages.
1. Added `./markdown-it-wiki-pearl.js`.
1. Extended `observable-config.js`:
    1. Added `import { markdownIt } from "./markdown-it-wiki-pearl.js";`
    1. Added `markdownIt` to configuration object: Wiki markup is now converted to proper intra-site links.
1. Added `pearl { font-variant: small-caps; }` to `aarde.css` so patterns and pearls show as small-caps in text.
1. **DEPLOYED**
1. Added a {page loader} for [[pattern list]].
1. Added `markdown-it-container` for {pattern}s and {pearl}s.
