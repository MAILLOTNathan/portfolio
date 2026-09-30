import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site";

type ContactLink = {
  label: string;
  value: string;
  href: string;
  external: boolean;
  icon: React.ReactNode;
};

const contactLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    value: "nathan-maillot",
    href: "https://www.linkedin.com/in/nathan-maillot/",
    external: true,
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14v7h-4v-6.2c0-1.48-.03-3.4-2.07-3.4-2.07 0-2.39 1.62-2.39 3.29V21h-4V9Z" />
    ),
  },
  {
    label: "GitHub",
    value: "MAILLOTNathan",
    href: "https://github.com/MAILLOTNathan",
    external: true,
    icon: (
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.93.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    ),
  },
  {
    label: "Mail",
    value: "nathan.maillot@preskater.com",
    href: "mailto:nathan.maillot@preskater.com",
    external: false,
    icon: (
      <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm.4 2L12 13l8.6-6H3.4Z" />
    ),
  },
];

export default function Contact() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="section-container pb-16 pt-20 sm:pt-28">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-50 via-white to-purple-50/40 px-6 py-14 dark:border-white/10 dark:from-neutral-950 dark:via-black dark:to-purple-950/20 sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-fuchsia-500/20 blur-3xl"
        />

        <SectionHeader
          align="center"
          eyebrow="Contact"
          title="Travaillons ensemble"
          lead="Une question, une opportunité, ou simplement envie d'échanger ? Le plus simple reste de m'écrire."
          className="relative"
        />

        <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-neutral-200 bg-white/70 p-6 text-center backdrop-blur transition hover:-translate-y-1 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-purple-400/40"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/20">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  {link.icon}
                </svg>
              </span>
              <span className="text-sm font-semibold">{link.label}</span>
              <span className="break-all text-xs text-neutral-500 transition group-hover:text-neutral-700 dark:text-neutral-400 dark:group-hover:text-neutral-200">
                {link.value}
              </span>
            </a>
          ))}
        </div>
      </div>

      <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-200/80 pt-8 text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-400 sm:flex-row">
        <p>
          © {year} {site.name} — Construit avec Next.js et Tailwind CSS.
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 transition hover:border-neutral-300 hover:text-neutral-900 dark:border-white/10 dark:hover:border-white/25 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3.5 w-3.5"
          >
            <path d="M12 19V5m-6 6 6-6 6 6" />
          </svg>
          Retour en haut
        </a>
      </footer>
    </section>
  );
}
