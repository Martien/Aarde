export const money = {
  name: "Money",
  children: [
    { name: "De centimeters zijn op" },
    { name: "Serieus Gek Geld Spel" },
    { name: "De toekomst van gratis" },
    { name: "A flaw in the monetary system" },
  ],
};
export const community = {
  name: "Community",
  children: [{ name: "Vriendkunst" }, { name: "Duizend echte fans" }],
};
export const business = {
  name: "Business",
  children: [{ name: "De toekomst van gratis" }, { name: "Made to stick" }],
};
export const spirit = {
  name: "Spirit",
  children: [{ name: "The soul hypothesis" }],
};
export const aardbron = {
  name: "Aardbron",
  open: true,
  children: [money, community, business, spirit],
};

import { toc as index, section2 } from "/components/aids.js";
export const toc = index()(aardbron);

export const c = { data: community, toc: section2(community) };
