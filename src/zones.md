---
title: Zones
index: true
---
# Zones
With hundreds of posts, a long list of post titles is not the way forward. What is a good way to organize them into specific clusters or categories. What is a proper collective term for these specific areas of interest?

Going back and forth with ChatGPT, it suggests:

> The collective term for these areas can depend on the tone or theme of the site. Here are some fitting options:

> - **Lands** – Classic and immersive, like in Disneyland.
> - **Realms** – Evokes a sense of fantasy and grandeur, like in [Efteling](https://en.wikipedia.org/wiki/Efteling#The_Park).
> - **Zones** – Neutral and functional, often used in futuristic or sci-fi contexts.
> - **Terras** – A unique twist with a Latin-inspired flair.
> - **Spheres** – Suggests conceptual or abstract areas of interest.
> - **Domains** – Feels authoritative and expansive.
> - **Frontiers** – Perfect for adventure- or exploration-themed areas.
> - **Havens** – Gentle and inviting, ideal for tranquil or magical themes.
> - **Sanctums** – Mystical and secretive, for areas of focus or deep interest.
> - **Vistas** – Evokes beautiful or imaginative spaces for discovery.

> For example, if your theme leans toward fantasy, *realms* might work best. If it’s adventurous, *frontiers* could be more suitable.

Despite the fact that both *lands* and *realms* appeal a lot to me, they’re too ‘fantasy’. Instead, I pick ***zones*** (even over *domains*).

Top level zones like:
- **money** – about money, monetary systems, and their effect on human behavior and our economy;
- **dna** - about values and code of conduct when working and living with others;
- …

::: todo
- extend list above
- generate above section from `zones/zones.js`.
:::


A `Zone`:
- `name`: the zone’s name, used in sidebar and TOCs;
- `open`: **`true`**: unfolded; `false`: folded;
- `children`: `[Zone]` (optional); any subzones;
- `pages`: `[Page]` for the sidebar; to be used in `observable.config.js`;
- `toc`: html DOM, ready to `display` in <code><var>zone</var>.md</code>

## Take `dna.js` for example

If you have:

`./src/zones/dna.js`:
~~~js run=false
const children: [thuiskomen, principes, kernzaken, ondersteunen, meta];

export const dna = {
  name: "DNA",
  open: true,
  children, // source data
  pages: pager(children), // ready for observable.config.js
  toc: toc(children), // ready for display() in .md file
}
~~~
This assumes `dna.js` also defines Zones `thuiskomen`, `principes`, `kernzaken`, `ondersteunen`, and `meta`.

A <code><var>zone</var>.js</code> file derives and includes all data for instant use elsewhere, e.g. in `observable.config.js` and the zone’s page.

`./src/zones/zones.js`:
~~~js run=false
import { dna } from "./dna.js";
import { pager, toc } from "../components/aids.js";

export const zones = {
  pages: [ … dna, … ].map(pager),
  toc: toc()(dna)
}
~~~

To include the pages defined in `zones.js` in the sidebar:

`observable.config.js`:
~~~js run=false
import { zones } from "./src/zones/zones.js";

export default { … pages: zones.pages, …};
~~~
