/**
 * Next.js configuration.
 *
 * The site is exported statically (`output: "export"`) so it can keep being
 * deployed to GitHub Pages, which serves it from a sub-path
 * (`https://maillotnathan.github.io/portfolio/`). That sub-path is configured
 * once in `.env` via `NEXT_PUBLIC_BASE_PATH` and read both here (for the
 * router/assets) and in `src/lib/utils.ts#assetPath` (for plain `<img>` src).
 */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  trailingSlash: true,
  // Static export cannot run the image optimizer.
  images: { unoptimized: true },
  // Next.js writes AGENTS.md / CLAUDE.md at the root by default; this project
  // documents itself in README.md instead.
  agentRules: false,
};

export default nextConfig;
