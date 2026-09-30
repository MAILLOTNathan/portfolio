import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { assetPath, cn } from "@/lib/utils";

/** Accent gradients cycled per card so the grid does not look monotonous. */
const accents = [
  "from-cyan-400 to-blue-500",
  "from-purple-400 to-fuchsia-500",
  "from-emerald-400 to-teal-500",
  "from-amber-400 to-orange-500",
  "from-sky-400 to-indigo-500",
  "from-rose-400 to-pink-500",
];

export default function Projects() {
  return (
    <section id="projects" className="section-container py-20 sm:py-28">
      <SectionHeader
        eyebrow="Projets"
        title="Mes projets"
        lead={
          <>
            Une sélection de projets sur lesquels j&apos;ai travaillé au sein
            d&apos;
            <a
              href="https://github.com/etib-corp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 underline decoration-purple-400/40 underline-offset-4 transition hover:decoration-purple-400 dark:text-purple-400"
            >
              ETIB Corporation
            </a>
            , une équipe qui construit une stack C++ complète pour les
            applications de réalité étendue.
          </>
        }
      />

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <li key={project.id}>
            <article className="card-surface group flex h-full flex-col gap-4 p-6 transition hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg hover:shadow-purple-500/5 dark:hover:border-white/20">
              {project.image && (
                // eslint-disable-next-line @next/next/no-img-element -- static export, unoptimized images
                <img
                  src={assetPath(project.image)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-full rounded-xl border border-neutral-200/80 bg-neutral-50 object-contain p-2 dark:border-white/10 dark:bg-white/[0.04]"
                />
              )}

              <div className="flex items-start justify-between gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-sm font-bold text-white shadow-lg shadow-purple-500/10",
                    accents[index % accents.length],
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {project.url && (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 shrink-0 text-neutral-400 transition group-hover:text-neutral-600 dark:group-hover:text-neutral-200"
                  >
                    <path d="M14 5h5v5m0-5-7 7M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" />
                  </svg>
                )}
              </div>

              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-purple-600 dark:hover:text-purple-400"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                {project.context && (
                  <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                    {project.context}
                  </p>
                )}
              </div>

              {project.description && (
                <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
              )}

              <div className="mt-auto space-y-3 pt-1">
                {project.tags && project.tags.length > 0 && (
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}

                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 transition hover:text-purple-600 dark:text-neutral-400 dark:hover:text-purple-400"
                  >
                    Documentation
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
