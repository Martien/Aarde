---
title: Observable Framework quirks
index: true
date: 2024-12-16
---
# Observable Framework quirks
### 2024-12-16

## Set `index: true` for all pages
[framework/config#pages](https://observablehq.com/framework/config#pages) says,
> “(Sections can only contain pages; nested sections are not currently supported.)”

Forces:
- Framework ignores pages beyond level two.
- Intermediate levels to structure hundreds of pages and make them more accessible result in more than two layers.

Therefore: add `index: true` to its front matter to ensure the page is indexed and therefore searchable.

Also see the discussion [Search all pages in Pages[] by default](https://github.com/observablehq/framework/discussions/1882) on Github.