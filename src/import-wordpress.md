---
title: Import Wordpress posts and pages
index: true
---
# Import Wordpress posts and pages
- [export WordPress to xml](https://wordpress.org/documentation/article/tools-export-screen/)
  - include pages as well!
- [convert to markdown](https://github.com/lonekorean/wordpress-export-to-markdown)
- for each file:
  - clean up:
    - <code>sed -f /tools/cleanup.sed <var>sourcedir/post-name</var>.md > /src/<var>post-name</var>.md</code>
  - fix any glitches, maybe refresh and refactor text
  - add page name to proper [[zones|zone]] so it shows up in sidebar and/or zone pages
  - [commit to main](https://docs.github.com/en/get-started/learning-about-github/github-glossary#commit), so each substantial change get logged
