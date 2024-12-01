export const zones = {
  name: "Zones",
  tagline: "immerse yourself in a specific area",
};

export const engineRoom = {
  name: "Engine Room",
  children: [
    zones,
    {
      name: "Wiki markup",
      path: "wiki",
    },
    {
      name: "Markdown-it-container",
      path: "markdown-it-container",
    },
  ],
};
