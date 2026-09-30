import type { CardGridItem } from "@/components/ui/CardGrid";

/**
 * The four passions shown in the "Mes Passions" grid. Clicking a tile opens the
 * matching description.
 */
export const hobbies: CardGridItem[] = [
  {
    id: "musique",
    title: "La musique",
    subtitle: "Ma grande passion",
    icon: "🥁",
    className: "lg:col-span-2",
    thumbnail: "https://c.stocksy.com/a/jQ5400/z9/974189.jpg",
    description: [
      "La musique est une passion qui m'accompagne depuis mon plus jeune âge. Elle m'inspire, me motive et me permet de m'évader.",
      "Actuellement batteur d'un groupe, j'ai souvent l'occasion de me produire sur scène et en studio.",
    ],
  },
  {
    id: "voitures",
    title: "Les voitures",
    subtitle: "Une fascination sans fin",
    icon: "🚗",
    thumbnail:
      "https://strapi-zervtek.s3.ap-southeast-1.amazonaws.com/image0_5c1a36e418.webp",
    description: [
      "Le son des moteurs, l'odeur de l'essence, la vitesse... Les voitures sont une véritable passion pour moi.",
      "J'ai bientôt l'occasion d'aller au Japon, un pays où la culture automobile est très présente. Ce sera un pèlerinage pour moi, et j'ai hâte de vous en dire plus à mon retour.",
    ],
  },
  {
    id: "ar-vr",
    title: "La VR & l'AR",
    subtitle: "Une nouvelle façon de créer",
    icon: "🕶️",
    // Pas encore d'illustration : la tuile se rabat sur un dégradé + l'icône.
    // Ajouter une image dans `public/images/` puis son chemin dans `thumbnail`.
    description: [
      "La réalité virtuelle et la réalité augmentée me fascinent parce qu'elles déplacent l'informatique : l'écran disparaît, et c'est le corps qui interagit directement avec l'information.",
      "Je suis ce domaine de près — l'immersion, l'interaction en temps réel, la 3D — et ce que ces technologies changent dans la façon de concevoir une interface.",
      "Ce qui m'attire, c'est le niveau d'exigence : la moindre latence ou le moindre décalage se ressent immédiatement. C'est exactement le genre de contrainte que je trouve stimulante, et j'ai envie d'explorer ça plus loin.",
    ],
  },
  {
    id: "impression-3d",
    title: "L'impression 3D",
    subtitle: "Une passion grandissante",
    icon: "🖨️",
    className: "lg:col-span-2",
    thumbnail:
      "https://hlhrapid.com/wp-content/uploads/2022/11/fused-deposition-modeling.jpg",
    description: [
      "Depuis que j'ai découvert l'impression 3D, je suis fasciné par les possibilités qu'elle offre. J'ai déjà réalisé plusieurs projets, et j'ai hâte de continuer à explorer ce domaine.",
      "C'est une technologie qui me passionne, et je suis convaincu qu'elle révolutionnera de nombreux secteurs. J'en suis d'autant plus fou depuis que j'ai ma propre imprimante !",
    ],
  },
];
