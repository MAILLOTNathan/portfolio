"use client";

import { useState } from "react";

import { assetPath, cn } from "@/lib/utils";

/**
 * Illustration attached to an experience.
 *
 * `fit` decides how the picture fills its box: `"contain"` for logos and covers
 * (which must not be cropped) or `"cover"` for photographs.
 *
 * Remote pictures (company logos, blog covers) can be blocked by hotlink
 * protection, so a gradient placeholder with the alt text is displayed instead
 * of the browser's broken image icon.
 */
export default function ExperienceImage({
  src,
  alt,
  fit = "cover",
}: {
  src: string;
  alt: string;
  fit?: "cover" | "contain";
}) {
  const [hasFailed, setHasFailed] = useState(false);

  const baseClassName =
    "h-40 w-full rounded-xl border border-neutral-200/80 bg-neutral-50 dark:border-white/10 dark:bg-white/[0.04]";

  if (hasFailed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          baseClassName,
          "grid place-items-center bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-fuchsia-500/10 p-4 text-center text-xs text-neutral-500 dark:text-neutral-400",
        )}
      >
        {alt}
      </div>
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
      className={cn(
        baseClassName,
        fit === "contain" ? "object-contain p-2" : "object-cover",
      )}
    />
  );
}
