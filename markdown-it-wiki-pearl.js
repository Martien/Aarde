// - render wikilinks according to
//   https://www.mediawiki.org/wiki/Help:Links#Internal_links
// - render {name} in small caps and link to corresponding
//   page; used for pattern language and pearl language

import markdownItContainer from "markdown-it-container";
import markdownItWikilinks from "@ig3/markdown-it-wikilinks";
import markdownItVideo from "markdown-it-video";

const htmlAttributes = { class: "pearl" };
const postProcessPageName = (pageName) =>
  pageName.trim().toLowerCase().replace(/\s+/g, "-");
const postProcessLabel = (label) => label.trim();
export const markdownIt = (md) =>
  md
    .use(
      // [[text]] or [[text|link]]
      markdownItWikilinks({
        linkPattern: /\[\[([^\]|]+)(\|([^\]]+))?\]\]/,
        uriSuffix: "",
        postProcessPageName,
      }),
    )
    .use(
      // {pearl}
      markdownItWikilinks({
        linkPattern: /\{([^\}]*)\}/,
        uriSuffix: "",
        htmlAttributes,
        postProcessPageName,
        postProcessLabel,
      }),
    )
    .use(markdownItVideo)
    .use(markdownItContainer, "card")
    .use(markdownItContainer, "tip")
    .use(markdownItContainer, "todo")
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
