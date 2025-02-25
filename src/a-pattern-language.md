---
title: A Pattern Language
index: true
---
# A Pattern Language

```js
import { FileAttachment } from "observablehq:stdlib";
const n = await FileAttachment("pattern-names.txt").text();
const patternNames = n.split("\n");
const slice = (l) => (first, last) => l.slice(first - 1, last);
const li = (l) => l.map(d => html`<li>${d}</li>`);
const patternList = (l) => (first, last) => html`<ol class="pearl", start=${first}>${li(slice(l)(first, last))}</ol>`
```

_We begin with that part of the language which defines a town or community. These patterns can never be designed or built in one fell swoop — but patient piecemeal growth, designed in such a way that every individual act is always helping to create or generate these larger global patterns, will, slowly and surely, over the years, make a community that has these global patterns in it._

1. {independent regions}

   within each region work toward those regional policies which will protect the land and mark the limits of the cities;

1. {the distribution of towns}
1. {city country fingers}
1. agricultural valleys
1. lace of country street
1. country towns
1. the countryside

   through city policies, encourage the piecemeal formation of those major structures which define the city;

1. mosaic of subcultures
1. scattered work
1. magic of the city
1. local transport areas

   build up these larger city patterns from the grass roots, through action essentially controlled by two levels of self-governing communities, which exist as physically identifiable places;

1. …

${patternList(patternNames)(3, 10)}