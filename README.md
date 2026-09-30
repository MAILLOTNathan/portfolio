# My portfolio

Personnal portfolio — [maillotnathan.github.io/portfolio](https://maillotnathan.github.io/portfolio/)

Built with **Next.js** (App Router), **React**, **TypeScript** and **Tailwind CSS**.
The site is statically exported (`output: "export"`) and deployed to GitHub Pages
by the workflow in `.github/workflows/portfolio-ci.yml`.

## Getting started

```bash
npm install
npm run dev
```

The app is served from the `/portfolio` sub-path, to match production:
<http://localhost:3000/portfolio/>

### Scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `npm start`         | Alias of `npm run dev`               |
| `npm run dev`       | Development server (Turbopack)       |
| `npm run build`     | Production build, exported to `out/` |
| `npm run lint`      | ESLint                               |
| `npm run format`    | Prettier (also sorts Tailwind class) |
| `npm run typecheck` | TypeScript, no emit                  |

## Project structure

```
src/
  app/                    # App Router: layout, page, global stylesheet
  components/             # Page sections (Hero, Parcours, Projects, Skills...)
  components/ui/          # Reusable UI pieces (timeline, card grid, aurora...)
  data/                   # Content: experiences.json, projects, skills, hobbies
  lib/                    # Helpers (cn, assetPath) and site metadata
public/
  images/                 # Local pictures
```

### Content

The "Mon Parcours" timeline is data driven: `src/data/experiences.json` holds the
content and `src/data/experiences.ts` adds the TypeScript type on top of it.
Adding an entry to the JSON file is enough for it to appear on the page — the
timeline, the tags and the pictures are all rendered from that data.

The projects and passions work the same way: `src/data/projects.ts` and
`src/data/hobbies.ts`. Their optional fields (`description`, `tags`, `url`,
`thumbnail`…) are simply not rendered while empty, so an entry can be added
before its write-up or its picture exists.

### Deployment sub-path

GitHub Pages serves this repository from `/portfolio`, so `next.config.mjs` sets
`basePath` from `NEXT_PUBLIC_BASE_PATH` (defined in `.env`). Because `basePath`
only rewrites the URLs Next.js generates, pictures referenced with a plain
`<img>` go through `assetPath()` (`src/lib/utils.ts`).

## License

See [LICENSE](./LICENSE).
