### Context
…you are evolving a web of semantic notes written in Markdown. Links to pages are shared, bookmarked, and integrated into other resources as if they were URIs with permanence and immutability.
### Problem/Wish
Dead ends – link rot – in a web are frustrating and stifle its use and evolution. In a network of hyperlinks every removed path weakens the whole. Likewise, healthy links strengthen the web. Link rot is a service failure; fighting it keeps the web healthy and useful. The source must remain human-readable and highly evolvable, using {wikilinks} like `[[the distribution of towns]]`) while producing valid slugs.
### Forces
- Site maintainers and operators are mortal and come and go.
- Domains are ephemeral namespace *leases*.
- Over time, pages are renamed.
- Correct slugs improve evolvability even when content delivery methods change.
- External URLs are cleaner when normalized (eg. `independent-regions`).
- Site can be statically or dynamically generated and hosted with a range of tools each with their own capabilities and limitations.
- The manner and intensity by which the site is designed and operated will have an impact on the overall reliability and availability of the resources within it.
### Solution
Define a canonical slug to which others can reference. Preserve an existing path by turning it into a threshold that leads to another. Place within it a mechanism that causes an immediate transition with as little friction as possible.