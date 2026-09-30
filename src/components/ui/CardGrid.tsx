"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { assetPath, cn } from "@/lib/utils";

export type CardGridItem = {
  id: string;
  title: string;
  subtitle?: string;
  /** Emoji used in the tile and the detail panel. */
  icon?: string;
  /** One paragraph per item. */
  description: string[];
  /**
   * Illustration of the tile. When omitted, the tile falls back to a gradient
   * with the emoji icon so an entry can be added before its picture exists.
   */
  thumbnail?: string;
  /** Tailwind classes controlling how many columns the tile spans. */
  className?: string;
};

type ThumbnailProps = {
  src: string;
  alt: string;
  className?: string;
};

/**
 * Image with a graceful fallback: if the remote thumbnail cannot be loaded
 * (hotlink protection, dead link...) a gradient placeholder is shown instead of
 * the browser's broken image icon.
 */
function Thumbnail({ src, alt, className }: ThumbnailProps) {
  const [hasFailed, setHasFailed] = useState(false);

  if (hasFailed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "bg-gradient-to-br from-cyan-500/30 via-purple-500/30 to-fuchsia-500/30",
          className,
        )}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element -- static export with remote, unoptimized images
    <img
      src={assetPath(src)}
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasFailed(true)}
      className={className}
    />
  );
}

/**
 * Responsive grid of illustrative tiles which open a detail panel on click.
 */
export default function CardGrid({ items }: { items: CardGridItem[] }) {
  const [selected, setSelected] = useState<CardGridItem | null>(null);

  // Close on Escape and lock the page scroll while the panel is open.
  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.button
            key={item.id}
            type="button"
            onClick={() => setSelected(item)}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className={cn(
              "group relative h-64 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 dark:border-white/10 dark:bg-neutral-900 sm:h-72",
              item.className,
            )}
          >
            {item.thumbnail ? (
              <Thumbnail
                src={item.thumbnail}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-purple-500/30 to-fuchsia-500/30"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 grid place-items-center pb-14 text-7xl transition-transform duration-700 group-hover:scale-110"
                >
                  {item.icon}
                </span>
              </>
            )}
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5" />

            <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
              <span>
                {item.thumbnail && (
                  <span className="mb-1 block text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                <span className="block text-base font-semibold text-white">
                  {item.title}
                </span>
                {item.subtitle && (
                  <span className="mt-0.5 block text-xs text-neutral-300">
                    {item.subtitle}
                  </span>
                )}
              </span>
              <span className="mb-1 flex h-8 w-8 shrink-0 translate-y-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-4 w-4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[90] flex items-end justify-center bg-black/70 p-3 backdrop-blur-sm sm:items-center sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 32, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="scrollbar-slim relative max-h-[85svh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-white shadow-2xl dark:bg-neutral-950"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="h-4 w-4"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-44 sm:h-52">
                {selected.thumbnail ? (
                  <Thumbnail
                    src={selected.thumbnail}
                    alt={selected.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/25 to-fuchsia-500/25"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 grid place-items-center text-6xl"
                    >
                      {selected.icon}
                    </span>
                  </>
                )}
                <span className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/40" />
              </div>

              <div className="px-6 pb-8 pt-2 sm:px-8">
                {selected.thumbnail && (
                  <span className="text-3xl" aria-hidden="true">
                    {selected.icon}
                  </span>
                )}
                <h3 className="mt-3 text-xl font-semibold sm:text-2xl">
                  {selected.title}
                </h3>
                {selected.subtitle && (
                  <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                    {selected.subtitle}
                  </p>
                )}
                <div className="mt-4 space-y-3">
                  {selected.description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
