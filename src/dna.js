export const thuiskomen = {
  name: "Thuiskomen",
  tagline: "wat gij wilt dat u geschied, doe dat ook een ander",
  children: [
    { name: "Principes" },
    { name: "Kernzaken" },
    { name: "Ondersteunen" },
    { name: "Meta" },
  ],
};
export const principes = {
  name: "Principes",
  tagline: "beginselen die al ons handelen drijven",
  children: [
    { name: "Identificeren" },
    { name: "Ecosofie" },
    { name: "Floreren" },
    { name: "Systeem" },
  ],
};
export const kernzaken = {
  name: "Kernzaken",
  subtitle: "Kernstructuur en -praktijken", // has preference over name
  tagline: "praktijken geënt op onze principes",
  children: [
    { name: "Geluksindex", prompt: "hoe weten we dat we succesvol zijn?" },
    {
      name: "Bezitten",
      prompt:
        "hoe worden mensen mede-eigenaar en wat betekent eigenaarschap werkelijk?",
    },
    { name: "Huishouden", prompt: "concrete economische voorbeelden." },
    {
      name: "Beslissen",
      prompt: "hoe maken wij keuzes als we geen managers hebben?",
    },
    { name: "Werven", prompt: "hoe komen er nieuwe mensen bij?" },
    {
      name: "Warme broodjesprotocol",
      prompt:
        "hoe gaan we om met vragen van klanten en hoe routeren we die naar de juiste persoon?",
    },
    {
      name: "Dashboard",
      prompt: "hoe zien wij de grote plaat en houden we overzicht?",
    },
    {
      name: "Besturen",
      prompt: "hoe zit dat met de wettelijke eis voor een Raad van Bestuur?",
    },
    {
      name: "Ondernemen",
      prompt: "wat voor werk doen wij?",
    },
    {
      name: "Voorzien",
      prompt:
        "hoe bereik je met een hele bos autonome adviseurs - overeenstemming over de visie?",
    },
    { name: "Verkopen", prompt: "hoe verkopen we onze adviseurs eigenlijk?" },
    {
      name: "Onconferentie",
      prompt: "hoe onze halfjaarlijkse onconferentie werkt.",
    },
  ],
};
export const ondersteunen = {
  name: "Ondersteunen",
  tagline: "belangrijk spul, maar geen kernzaken",
  children: [
    { name: "E-mail conventies" },
    { name: "Handsignalen" },
    { name: "Ontwijken" },
    { name: "Ontwikkelen" },
    { name: "Opstijgen" },
    { name: "Conflicthanteren" },
    { name: "Contracteren" },
    { name: "Curssusen en evenementen" },
    { name: "Sterk merk" },
  ],
};
export const meta = {
  name: "Meta",
  tagline: "maak je eigen unieke versie",
  children: [{ name: "Klonen" }, { name: "Crisps deltas" }],
};
export const dnaTree = {
  name: "DNA",
  open: true,
  children: [thuiskomen, principes, kernzaken, ondersteunen, meta],
};
