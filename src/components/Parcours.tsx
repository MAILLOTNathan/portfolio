import SectionHeader from "@/components/SectionHeader";
import ExperienceImage from "@/components/ui/ExperienceImage";
import { Timeline } from "@/components/ui/Timeline";
import { experiences } from "@/data/experiences";
import { cn } from "@/lib/utils";

export default function Parcours() {
  const timelineData = experiences.map((experience) => ({
    title: experience.period,
    content: (
      <article key={experience.id} className="card-surface p-6 sm:p-8">
        <header className="border-b border-neutral-200/70 pb-4 dark:border-white/10">
          <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
            {experience.role}
          </h3>
          <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">
              {experience.organization}
            </span>
            {" · "}
            {experience.location}
            {" · "}
            {experience.type}
          </p>
        </header>

        <div className="mt-5 space-y-3">
          {experience.description.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {experience.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-purple-500/20 bg-purple-500/5 px-3 py-1 text-xs font-medium text-purple-700 dark:border-purple-400/20 dark:bg-purple-400/10 dark:text-purple-300"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        {experience.images.length > 0 && (
          <div
            className={cn(
              "mt-6 grid gap-3",
              experience.images.length > 1 && "sm:grid-cols-2",
            )}
          >
            {experience.images.map((image) => (
              <ExperienceImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                fit={image.fit}
              />
            ))}
          </div>
        )}
      </article>
    ),
  }));

  return (
    <section id="parcours" className="section-container py-20 sm:py-28">
      <SectionHeader
        eyebrow="Expériences"
        title="Mon parcours"
        lead="Les différentes étapes de mon parcours professionnel et scolaire, des projets Epitech aux expériences en entreprise."
      />

      <div className="mt-14">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}
