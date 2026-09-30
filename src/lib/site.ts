/** Single source of truth for everything describing the site owner. */
export const site = {
  name: "Nathan Maillot",
  role: "Développeur Full Stack",
  location: "La Réunion",
  school: "Epitech Saint-André",
  url: "https://maillotnathan.github.io/portfolio/",
  description:
    "Portfolio de Nathan Maillot, développeur full stack basé à La Réunion, diplômé d'Epitech. Projets, parcours, compétences et passions.",
} as const;

/** In-page sections, used by the navbar and for scroll tracking. */
export const navSections = [
  { id: "whoami", label: "Qui suis-je ?" },
  { id: "parcours", label: "Mon Parcours" },
  { id: "projects", label: "Mes Projets" },
  { id: "hobbies", label: "Mes Passions" },
  { id: "skills", label: "Mes Compétences" },
  { id: "contact", label: "Contactez-moi" },
] as const;

export type SectionId = (typeof navSections)[number]["id"];
