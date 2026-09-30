import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes, resolving conflicts (the last one wins). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a path pointing inside `public/` with the deployment base path.
 *
 * `basePath` in `next.config.mjs` only rewrites URLs that Next.js generates
 * (router links, bundles, fonts...). Plain `<img src="...">` values are left
 * untouched, so they have to be prefixed manually to keep working when the site
 * is hosted under a sub-path (e.g. GitHub Pages).
 *
 * Absolute URLs (`https://...`) are returned as-is.
 */
export function assetPath(path: string) {
  if (!path.startsWith("/")) return path;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
