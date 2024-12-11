---
title: Wiki, Pearl, and Pattern markup
---
# Wiki, Pearl, and Pattern markup

This site supports markup for [wikilink](https://en.wikipedia.org/wiki/Help:Link)s, {pearl}s, and {pattern}s.

## Wikilinks
For example,
```md run=false
   Click [[about]] to find out how this site emerged.
```

results in:

> Click [[about]] to find out how this site emerged.

You can also provide your own text or ‘alias’, while referring to the same page – a so called “[piped link](https://en.wikipedia.org/wiki/Help:Link#Piped_link)”.

```md run=false
  Learn about the [[about|history of this site]].
```
becomes:
> Learn about the [[about|history of this site]].

## Pearls and patterns

Text in curly brackets, like:
```md run=false
  {pearl}, {pearl language}, {pearl|parel}, and {city country fingers}
```
result in:
> {pearl}, {pearl language}, {pearl|parel}, and {city country fingers}

and their corresponding link, allowing you to grow a {pearl language}.

## Yearning pages
It is often practical to create “wikified” articles – that is, articles containing links to other pertinent subjects—without those other articles being yet in existence. Doing so creates *yearning pages* (rather than *dead links*) – they yearn for their creation. In a proper wiki, these links are [<span style="color:red;">red links</span>](https://en.wikipedia.org/wiki/Wikipedia:Red_link). Some day this site may have these, too.

---
#### Wiki
1. `[[Hello world]]` is a basic [wikilink](https://en.wikipedia.org/wiki/Help:Link#Wikilinks) or internal link, displays [[Hello world]], and links to its page.
1. A [piped link](https://en.wikipedia.org/wiki/Help:Link#Piped_link) or ‘alias’ like `[[Hello world|links to the same page, but with “alternate text”]]` [[Hello world|links to the same page, but with “alternate text”]].
#### Pearl
1. Use `{pearl}` to get {pearl} and its page link.
1. Use `{pearl language|pareltaal, met “alternatieve tekst”}` to link to the same page but show {pearl language|pareltaal, met “alternatieve tekst”}.