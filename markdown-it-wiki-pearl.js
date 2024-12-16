// - render wikilinks according to
//   https://www.mediawiki.org/wiki/Help:Links#Internal_links
// - render {name} in small caps and link to corresponding
//   page; used for pattern language and pearl language

import markdownItContainer from "markdown-it-container";
import markdownItWikilinks from "@ig3/markdown-it-wikilinks";
import markdownItVideo from "markdown-it-video";

// [[text]] or [[text|appearance]]
const wikilinksRE = /\[\[([^\]|]*)(\|([^\]]+))?\]\]/;

// {pearl} or {pearl|appearance}
const pearlRE = /{([^}|]*)(\|([^}]+))?}/;

const uriSuffix = "";
const href = (string) =>
  string
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w]*/, "")
    .replace(/[ ]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/[-]+/g, "-");
const postProcessPageName = href;
// (pageName) =>
// pageName.trim().toLowerCase().replace(/\s+/g, "-").replace(/,/, "");

export const markdownIt = (md) =>
  md
    .use(
      markdownItWikilinks({
        linkPattern: wikilinksRE,
        uriSuffix,
        postProcessPageName,
      }),
    )
    .use(
      markdownItWikilinks({
        linkPattern: pearlRE,
        htmlAttributes: { class: "pearl" },
        uriSuffix,
        postProcessPageName,
      }),
    )
    .use(markdownItVideo)
    .use(markdownItContainer, "card")
    .use(markdownItContainer, "tip")
    .use(markdownItContainer, "todo")
    .use(markdownItContainer, "nota-bene")
    .use(markdownItContainer, "warning")
    .use(markdownItContainer, "pas-op")
    .use(markdownItContainer, "name")
    .use(markdownItContainer, "hero")
    .use(markdownItContainer, "as-is")
    .use(markdownItContainer, "vista")
    .use(markdownItContainer, "context")
    .use(markdownItContainer, "wish")
    .use(markdownItContainer, "therefore")
    .use(markdownItContainer, "sketch")
    .use(markdownItContainer, "photo")
    .use(markdownItContainer, "constitution")
    .use(markdownItContainer, "rationale")
    .use(markdownItContainer, "quotation");
