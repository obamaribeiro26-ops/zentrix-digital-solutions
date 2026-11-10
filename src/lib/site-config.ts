// Official contact channels. Leave empty until real details are supplied —
// the site hides/labels channels that are not configured.
// whatsapp: international format digits only, e.g. "2449XXXXXXXX".
export const siteConfig = {
  whatsapp: "",
  email: "",
  team: [
    { name: "Lulénio", phone: "+244 933 745 645" },
    { name: "Príncipe", phone: "+244 933 745 645" },
    { name: "Antonela", phone: "+244 928 344 129" },
  ],
};

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const telHref = (p: string) => `tel:${p.replace(/\s+/g, "")}`;
