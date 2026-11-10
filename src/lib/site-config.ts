// Official contact channels. `team` is the single source of truth: phone in
// international format, email exactly as supplied by the team.
export type TeamMember = { name: string; phone: string; email: string };

const lulenio: TeamMember = { name: "Lulénio", phone: "+244 933 745 645", email: "lulenioa@gmail.com" };

export const team: TeamMember[] = [
  lulenio,
  { name: "Príncipe", phone: "+244 935 496 242", email: "Principefrederico@hotmail.com" },
  { name: "Antonela", phone: "+244 928 344 129", email: "antonellatucayana@gmail.com" },
  { name: "Obama", phone: "+244 933 623 141", email: "obamaribeiro26@gmail.com" },
];

/** Digits only: "+244 933 745 645" -> "244933745645". */
function waDigits(p: string) {
  return p.replace(/\D/g, "");
}

export const siteConfig = {
  team,
  // Generic channel used by the contact form: the first team member.
  whatsapp: waDigits(lulenio.phone),
  email: lulenio.email,
};

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

/** tel: link, e.g. "tel:+244933745645". */
export const telHref = (p: string) => `tel:${p.replace(/\s+/g, "")}`;

/** wa.me link, e.g. "https://wa.me/244933745645". */
export const waHref = (p: string, text?: string) =>
  `https://wa.me/${waDigits(p)}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

/** mailto: link, optionally with a subject. */
export const mailtoHref = (email: string, subject?: string) =>
  `mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
