---
title: Wiki
---

This site supports Wikimedia-style links in Markdown.

So,
```md run=false
   Click [[wiki links|here]] to learn about [[/Wiki]] links.
```

results in:

> Click [[wiki links|here]] to learn about [[/Wiki]] links.


Also, text in curly brackets, like:
```md run=false
  {pearl}, {pearl language}, {closure}, and {pure function}
```
result in:
> {pearl}, {pearl language}, {closure}, and {pure function}

and their corresponding link, allowing you to grow a {pearl language}.

Some references are *dead links* or *yearning pages*, or, as Wikipedia calls them: <span style="color:red;">red links</span>.

## Wiki links in Observable Framework – a challenge
- enabling wiki links in Framework is straightforward;
- using Wikilinks can be very convenient:
  - `[[wiki links]]` results in a link to <code>https://<i>domain</i>/wiki-links</code>;
  - `[[/Wiki]]` results in a link to <code>https://<i>domain</i>/Wiki</code>;

However, if you have organized your pages into [sections](https://observablehq.com/framework/config#pages) like so:
~~~ js run=false
export default {
  pages: [
    {
      name: "Section 1",
      path: "/s01/",
      pages: [
        {name: "Page 1", path: "/s01/page1"},
        {name: "Page 2", path: "/s01/page2"}
      ]
    },
    {
      name: "Section 2",
      open: false,
      pages: [
        {name: "Page 3", path: "/s02/page3"},
        {name: "Page 4", path: "/s02/page4"}
      ]
    }
  ]
}
~~~

- Within `Section 1`, `[[page1]]` refers to `/s01/page1`; this works fine.
- Likewise, within `Section 2`, `[[page1]]` refers to `/s02/page1`; this is problematic if you expect it to refer to `/s01/page1`, assuming that page names are unique within the same site; just as they are in a Mediawiki wiki.

- [[wiki]]