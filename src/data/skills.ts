/** A named skill, how confident I am with it (0-100) and its brand colour. */
export type Skill = {
  name: string;
  level: number;
  color: string;
};

/** A group of related technical skills. */
export type SkillCategory = {
  title: string;
  description: string;
  icon: string;
  /** Tailwind gradient applied to the progress bars of this group. */
  gradient: string;
  skills: Skill[];
};

export const hardSkills: SkillCategory[] = [
  {
    title: "Front-end",
    description:
      "Interfaces web et mobiles, du prototype à la mise en production.",
    icon: "🎨",
    gradient: "from-cyan-400 to-blue-500",
    skills: [
      { name: "TypeScript", level: 100, color: "#007ACC" },
      { name: "Next.js", level: 100, color: "#111111" },
      { name: "React", level: 100, color: "#61DAFB" },
      { name: "React Native", level: 90, color: "#61DAFB" },
    ],
  },
  {
    title: "Back-end",
    description: "Services, outils et langages bas niveau.",
    icon: "⚙️",
    gradient: "from-purple-400 to-fuchsia-500",
    skills: [
      { name: "Python Fast API", level: 100, color: "#3776AB" },
      { name: "C / C++", level: 100, color: "#00599C" },
      { name: "Node.js", level: 90, color: "#8CC84B" },
      { name: "Haskell", level: 90, color: "#5D4F85" },
      { name: "Rust", level: 50, color: "#DEA584" },
    ],
  },
  {
    title: "DevOps & outils",
    description: "Industrialisation, conteneurisation et travail en équipe.",
    icon: "🛠️",
    gradient: "from-emerald-400 to-teal-500",
    skills: [
      { name: "Git", level: 100, color: "#F05032" },
      { name: "Docker", level: 90, color: "#0DB7ED" },
      { name: "CI / CD", level: 85, color: "#E24329" },
      { name: "Ansible", level: 75, color: "#EE0000" },
      { name: "Kubernetes", level: 70, color: "#326CE5" },
      { name: "Jenkins", level: 70, color: "#D33833" },
      { name: "Supabase", level: 60, color: "#3ECF8E" },
    ],
  },
  {
    title: "Game development",
    description: "Création de jeux vidéo et d'expériences interactives.",
    icon: "🎮",
    gradient: "from-rose-400 to-pink-500",
    skills: [
      { name: "Godot", level: 100, color: "#478CBF" },
      { name: "Unity", level: 90, color: "#222222" },
      { name: "C#", level: 85, color: "#138496" },
      { name: "Unreal Engine", level: 70, color: "#000000" },
    ],
  },
];

/** Soft skills, displayed as their own group. */
export const softSkills: SkillCategory = {
  title: "Savoir-être",
  description:
    "Ce qui compte autant que la technique : écouter, s'adapter et embarquer les autres.",
  icon: "🤝",
  gradient: "from-amber-400 to-orange-500",
  skills: [
    { name: "Travail d'équipe", level: 100, color: "#F59E0B" },
    { name: "Leadership", level: 100, color: "#F59E0B" },
    { name: "Adaptabilité", level: 100, color: "#F59E0B" },
    { name: "Communication", level: 90, color: "#F59E0B" },
    { name: "Résolution de problèmes", level: 90, color: "#F59E0B" },
    { name: "Prise de décision", level: 85, color: "#F59E0B" },
    { name: "Gestion du temps", level: 80, color: "#F59E0B" },
    { name: "Esprit critique", level: 80, color: "#F59E0B" },
    { name: "Gestion des conflits", level: 70, color: "#F59E0B" },
    { name: "Créativité", level: 60, color: "#F59E0B" },
  ],
};
