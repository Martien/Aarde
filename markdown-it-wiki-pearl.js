// - render wikilinks according to
//   https://www.mediawiki.org/wiki/Help:Links#Internal_links
// - render {name} in small caps and link to corresponding
//   page; used for pattern language and pearl language

import markdownItWikilinks from "@ig3/markdown-it-wikilinks";

const htmlAttributes = { class: "pearl" };

const postProcessPageName = (pageName) => {
  pageName = pageName.trim();
  pageName = pageName.replace(/\s+/g, "-");
  return pageName;
};

const postProcessLabel = (label) => {
  label = label.trim();
  return label;
};

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
    );
