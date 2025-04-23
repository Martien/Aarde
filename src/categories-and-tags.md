---
title: Categories and tags
date: 2025-04-07
index: true
tags:
  - obsidian
---
# Obsidian Categories and tags

Compare Obsidian Vaults and Categories for grouping.

| Aspect             | Categories (Folders)                | Tags                           |
| -----------------: | ----------------------------------- | ------------------------------ |
| **Type**           | Physical (file system)              | Logical (metadata)             |
| **Location**       | One note, one folder                | One note, many tags            |
| **Structure**      | Hierarchical (e.g., `Work/Tasks`)   | Flat (e.g., `#work`, `#tasks`) |
| **Creation**       | File Explorer or disk               | In-note (#tag or YAML)         |
| **Grouping**       | Static, location-based              | Dynamic, theme-based           |
| **Linking Impact** | Optional in links (if unique names) | No direct impact on links      |
| **Discovery**      | File Explorer, folder navigation    | Tag Pane, search               |
| **GitHub**         | Maps to repo folders                | Embedded in file content       |

---

In Obsidian, you have two primary ways to group Markdown files:
1. **Vaults** – separate Obsidian databases; and
2. **Categories** – folders within a single vault. 

Each approach has distinct implications for organization, linking, performance, and workflow, especially given a two-level hierarchy with a flat URL-like structure. Let’s compare them head-to-head.

## Categories

**Definition**: Categories in Obsidian are implemented as physical folders in the file system within your vault. They represent a structural, hierarchical way to group notes.
#### Characteristics
- **Physical Structure**: Categories are directories on disk (e.g., `Work/Meetings/File1.md`). They’re part of the vault’s folder hierarchy.
- **Location-Based**: A note belongs to one category at a time because it can only exist in one folder (e.g., `Work/Meetings/` or `Personal/Journal/`).
- **Hierarchy**: Supports nesting (e.g., `Category/Subcategory`), aligning with your two-level hierarchy idea.
- **Visibility**: Visible in Obsidian’s File Explorer pane and on disk (e.g., in Finder on macOS or GitHub).
- **Management**: Created, moved, or renamed via file operations (drag-and-drop in Obsidian or manually on disk).

#### Usage
- **Grouping**: Use categories to organize notes by broad topics, projects, or contexts (e.g., `Work`, `Personal`, `Projects`).
- **Linking**: Folder paths can be part of links (e.g., `[[Work/Meetings/File1]]`), though with unique names, you can use flat links (e.g., `[[File1]]`).
- **Example**:
```
Vault/
  Work/
    Meetings/
      MeetingNotes001.md
  Personal/
    Journal/
      Journal20250407.md
```
#### In Your Context (1,000 Files)
- **Two-Level Hierarchy**: Categories fit your plan perfectly (e.g., `Category/Subcategory/File.md`). For 1,000 files, 10 categories with 10 subcategories each (10 files per subfolder) keeps it tidy.
- **GitHub**: Folders map directly to the repo’s directory structure, making it intuitive for version control.
---
## Tags
**Definition**: Tags are metadata labels embedded in your Markdown files using the `#tag` syntax. They’re a flexible, non-hierarchical way to group notes conceptually.
### Characteristics
- **Metadata-Based**: Tags live inside the file content or YAML frontmatter (e.g., `#meeting` or `tags: [meeting]`), not as folders.
- **Multiple per Note**: A single note can have multiple tags (e.g., `#work #meeting #urgent`), allowing overlap across categories.
- **Flat Structure**: Tags don’t nest natively (e.g., `#work/meeting` is a single tag, not a hierarchy), though you can simulate hierarchy with naming (e.g., `#work-meeting`).
- **Visibility**: Shown in Obsidian’s Tag Pane or searchable via the search bar (e.g., `tag:#meeting`).
- **Management**: Added or edited within the note’s text; no file system changes required.
### Usage
- **Cross-Cutting Themes**: Use tags to mark themes, statuses, or attributes that span folders (e.g., `#urgent`, `#idea`, `#review`).
- **Filtering**: Combine with search or plugins (e.g., Dataview) to dynamically group notes (e.g., all `#meeting` notes across `Work` and `Personal`).
- **Example**:

### In Your Context (1,000 Files)
- **Flat URLs**: Tags don’t affect linking directly but enhance discoverability without altering your folder-based flat URL goal (e.g., `[[MeetingNotes001]]` still works).
- **GitHub**: Tags are embedded in file content, so they’re preserved in the repo but don’t influence the directory structure.
---
## How They Work Together
For your 1,000 Markdown files:
- **Categories**: Provide the structural backbone (e.g., `Work/Meetings/`, `Personal/Journal/`). They align with your two-level hierarchy and keep files organized in Obsidian and GitHub.
- **Tags**: Add flexibility for cross-referencing and filtering (e.g., `#urgent` on notes across `Work` and `Personal`). They let you group conceptually without moving files.

### Example Workflow
- File: `Work/Meetings/MeetingNotes001.md`
- **Category Use**: `Work/Meetings/` and `Personal/Journal/` keep files physically grouped.
- **Tag Use**: Search `tag:#urgent` to find all urgent notes, regardless of folder.
---
### Which to Use for Grouping?
- **Categories**: Best for your primary organization (e.g., two-level hierarchy like `Category/Subcategory`). They’re ideal for a structured, scalable setup with 1,000 files and integrate naturally with GitHub.
- **Tags**: Best for secondary, flexible grouping (e.g., themes or statuses). They enhance a folder structure without disrupting your flat URL linking goal.
#### Recommendation
Use **categories** for your two-level hierarchy (e.g., `Work/Meetings/File.md`) to manage the 1,000 files structurally in Obsidian and GitHub. Supplement with **tags** (e.g., `#work #urgent`) to add dynamic, cross-folder connections. This combo gives you the best of both: a clean hierarchy and a flat, flexible linking system!