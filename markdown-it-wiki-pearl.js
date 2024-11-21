// - render wikilinks according to
//   https://www.mediawiki.org/wiki/Help:Links#Internal_links
// - render {name} in small caps and link to corresponding
//   page; used for pattern language and pearl language

import markdownItWikilinks from "@ig3/markdown-it-wikilinks";
import MarkdownItContainer from "markdown-it-container";

const htmlAttributes = { class: "pearl" };
const postProcessPageName = (pageName) => pageName.trim().replace(/\s+/g, "-");
const postProcessLabel = (label) => label.trim();
export const markdownIt = (md) =>
  md
    .use(
      // wikilinks default: [[...]]
      markdownItWikilinks({
        uriSuffix: "",
      }),
    )
    .use(
      markdownItWikilinks({
        linkPattern: /\{\{?([-\w\s/]+)(\|([-\w\s/]+))?\}\}?/,
        uriSuffix: "",
        htmlAttributes,
        postProcessPageName,
        postProcessLabel,
      }),
    )
    .use(MarkdownItContainer, "card")
    .use(MarkdownItContainer, "name")
    .use(MarkdownItContainer, "hero")
    .use(MarkdownItContainer, "context")
    .use(MarkdownItContainer, "wish")
    .use(MarkdownItContainer, "therefore")
    .use(MarkdownItContainer, "sketch")
    .use(MarkdownItContainer, "photo")
    .use(MarkdownItContainer, "constitution")
    .use(MarkdownItContainer, "rationale")
    .use(MarkdownItContainer, "quotation");