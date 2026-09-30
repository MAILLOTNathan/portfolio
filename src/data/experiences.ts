import experiencesJson from "./experiences.json";

/** A single image attached to an experience (local path or absolute URL). */
export type ExperienceImage = {
  src: string;
  alt: string;
  /**
   * How the picture fills its box: `"contain"` for logos and covers, `"cover"`
   * for photographs. Defaults to `"cover"`.
   */
  fit?: "cover" | "contain";
};

/** One entry of the "Mon Parcours" timeline. */
export type Experience = {
  /** Stable identifier, also used as the React key. */
  id: string;
  /** Human readable period, e.g. "Avril 2025 - Août 2025". */
  period: string;
  role: string;
  organization: string;
  location: string;
  /** Contract / involvement type: "Stage", "Formation", "Associatif"... */
  type: string;
  /** One paragraph per item. */
  description: string[];
  /** Short keywords displayed as chips. */
  tags: string[];
  images: ExperienceImage[];
};

/**
 * The content lives in `experiences.json` so it can be edited without touching
 * any component; this module only types it.
 *
 * Importing JSON widens literal types to `string`, so `fit` is narrowed back to
 * its union here (anything unexpected falls back to `"cover"`).
 */
export const experiences: Experience[] = experiencesJson.experiences.map(
  (experience) => ({
    ...experience,
    images: experience.images.map((image) => ({
      src: image.src,
      alt: image.alt,
      fit: image.fit === "contain" ? "contain" : "cover",
    })),
  }),
);
