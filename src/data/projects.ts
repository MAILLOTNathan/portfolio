/** A project listed in the "Mes Projets" section. */
export type Project = {
  id: string;
  /** Name displayed on the card. */
  name: string;
  /** Short line under the name: role of the project, layer, type of work… */
  context?: string;
  /** Single paragraph. Left out of the card while empty. */
  description?: string;
  /** Keywords rendered as chips. */
  tags?: string[];
  /** Public repository or live URL. A link is only rendered when this is set. */
  url?: string;
  /** Separate documentation link (rendered under the tags). */
  docs?: string;
  /** Logo or banner shown at the top of the card (`/images/…` or an URL). */
  image?: string;
};

/**
 * Projects displayed on the page.
 *
 * Only `id` and `name` are required; every other field is optional and simply
 * not rendered while empty:
 *
 * ```ts
 * {
 *   id: "example",
 *   name: "Example",
 *   context: "Bibliothèque",
 *   description: "…",
 *   tags: ["C++", "Vulkan"],
 *   url: "https://github.com/etib-corp/example",
 *   docs: "https://etib-corp.github.io/example/",
 * }
 * ```
 *
 * The six entries below are the repositories of **ETIB Corporation**
 * (<https://github.com/etib-corp>), a team project building a C++ stack for
 * extended reality (XR) applications. They are listed bottom-up: the
 * application first, then the layers it is built on, then the tooling.
 */
export const projects: Project[] = [
  {
    id: "xider",
    name: "XIDER",
    context: "IDE pour la réalité étendue · couche applicative",
    description:
      "XIDER (eXtensible Integrated Development Environment for Reality) est l'IDE dédié aux applications de réalité étendue : VR, AR et MR. Il assemble les autres briques du projet — Utility, Evan et Guillaume — en une application desktop avec gestion d'assets, scripting visuel et outils de debug.",
    tags: ["C++", "Vulkan", "OpenXR", "GLSL"],
    url: "https://github.com/etib-corp/xider",
    docs: "https://etib-corp.github.io/xider/",
  },
  {
    id: "guillaume",
    name: "Guillaume",
    context: "Framework d'interface en C++20",
    description:
      "Le shell applicatif : composition d'interface par ECS (entités, composants et systèmes ordonnés en phases Mesure, Layout et Rendu), gestion de scènes, bus d'évènements typés, et stockage clé-valeur persistant (SQLite) ou en mémoire.",
    tags: ["C++20", "ECS", "SQLite"],
    url: "https://github.com/etib-corp/guillaume",
    docs: "https://etib-corp.github.io/guillaume/",
  },
  {
    id: "evan",
    name: "Evan",
    context: "Couche de rendu et de runtime",
    description:
      "Le moteur de rendu utilisé par XIDER : pipeline graphique Vulkan et gestion des swapchains, backends de plateforme OpenXR et GLFW (Android, Linux, Windows, macOS), et la boucle de frame qui pilote l'application.",
    tags: ["C++", "Vulkan", "OpenXR", "GLFW"],
    url: "https://github.com/etib-corp/evan",
    docs: "https://etib-corp.github.io/evan/",
  },
  {
    id: "mais",
    name: "Maïs",
    context: "Scripting Python embarqué",
    description:
      "MAÏS (Modular Abstraction for Interface Scripting) est un runtime de scripting en C++ qui embarque un interpréteur Python via pybind11 : cycle de vie de l'interpréteur, découverte et chargement des scripts, hooks applicatifs (configure, on_start, on_update, on_shutdown) et remontée des tracebacks Python.",
    tags: ["C++", "Python", "pybind11"],
    url: "https://github.com/etib-corp/mais",
  },
  {
    id: "utility",
    name: "Utility",
    context: "Bibliothèque commune",
    description:
      "La couche de base partagée par toutes les autres briques : maths (vecteurs, matrices, quaternions), graphismes (maillages, matériaux, shaders, polices), évènements — y compris les mains en XR —, entrées/sorties, logging et son.",
    tags: ["C++20", "CMake", "FreeType", "OpenAL"],
    url: "https://github.com/etib-corp/utility",
    docs: "https://etib-corp.github.io/utility/",
  },
  {
    id: "anthony",
    name: "ANTHony",
    context: "Outillage de build natif",
    description:
      "ANTHony (Automated Native Tooling Host) expose une API compatible C pour piloter un projet Java/Kotlin basé sur Maven ou Gradle depuis du code natif : capture de stdout/stderr et du code de sortie, variables d'environnement, arguments JVM, options Gradle et timeout. Deux backends — la Gradle Tooling API et le wrapper gradlew en repli — avec récupération des APK/AAB Android.",
    tags: ["C", "C++", "Gradle", "Kotlin"],
    url: "https://github.com/etib-corp/anthony",
  },
];
