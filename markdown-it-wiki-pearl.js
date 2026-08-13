// - render wikilinks according to
//   https://www.mediawiki.org/wiki/Help:Links#Internal_links
// - render {name} in small caps and link to corresponding
//   page; used for pattern language and pearl language

import markdownItContainer from "markdown-it-container";
import markdownItWikilinks from "@ig3/markdown-it-wikilinks";
import markdownItVideo from "markdown-it-video";

const uriSuffix = "";

const postProcessPageName = (string) =>
  string
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w]*/, "")
    .replace(/[ ]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/[-]+/g, "-");

// {pearl} or {pearl|appearance}
const pearlLanguageLinks = markdownItWikilinks({
  linkPattern: /{([^}|]*)(\|([^}]+))?}/,
  htmlAttributes: { class: "pearl" },
  uriSuffix,
  postProcessPageName,
});

// «pattern» or «pattern|appearance» for references to https://patternlanguage.cc
const patternLanguageLinks = markdownItWikilinks({
  linkPattern: /«([-\w\s/]+)(\|([-\w\s/]+))?»/u,
  linkPattern: /«([^»|]+)(?:\|([^»]+))?»/u,
  linkPattern: /!([^!|]*)(\|([^!]+))?!/,
  uriSuffix,
  baseURL: "https://patternlanguage.cc/Patterns/",
  makeAllLinksAbsolute: true,
  postProcessPageName: (name) => name,
});

// [[text]] or [[text|appearance]]
const wikiLinks = markdownItWikilinks({
  linkPattern: /\[\[([^\]|]*)(\|([^\]]+))?\]\]/,
  uriSuffix,
  postProcessPageName,
});

export const markdownIt = (md) =>
  md
    .use(wikiLinks)
    .use(markdownItWikilinks)
    .use(pearlLanguageLinks)
    .use(patternLanguageLinks)
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
    .use(markdownItContainer, "daarom")
    .use(markdownItContainer, "sketch")
    .use(markdownItContainer, "photo")
    .use(markdownItContainer, "constitution")
    .use(markdownItContainer, "rationale")
    .use(markdownItContainer, "quotation");
