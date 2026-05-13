/**
 * Single source of truth for all owner-specific content.
 * Edit values here — no need to touch components.
 */

export const site = {
  name: "Martín Coll",
  domain: "martincoll.dev",
  email: "martin@commercy.com.ar",
  whatsapp: "000000000000", // TODO: replace with international format (no + or spaces)
  socials: {
    github: "https://github.com/KonixDev",
    x: "https://x.com/",
    linkedin: "https://linkedin.com/in/",
  },
  location: "Buenos Aires · Remoto",
  availability: "Aceptando 1 proyecto · Q3 2026",
  acceptingShort: "Aceptando Q3",
};

/** WhatsApp deep-link with prefilled message */
export function waLink(text: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
