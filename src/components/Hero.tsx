"use client";

import { motion, type Variants } from "motion/react";

import { AuroraBackground } from "@/components/ui/Backgrounds";
import { site } from "@/lib/site";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section id="top">
      <AuroraBackground>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="section-container relative flex flex-col items-center gap-6 text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-white/70 px-4 py-1.5 text-xs font-medium tracking-wide text-neutral-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-neutral-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {site.role} · {site.location}
          </motion.span>

          <motion.h1
            variants={item}
            className="max-w-4xl text-balance text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
          >
            Bienvenue sur <span className="text-gradient">mon portfolio</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-2xl text-pretty text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg"
          >
            Je m&apos;appelle {site.name}, développeur full stack passionné par
            l&apos;informatique et la musique. Deux univers où la précision et
            la rigueur font la différence.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-2 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-900/10 transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-neutral-900"
            >
              Contactez-moi
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </a>
            <a
              href="#parcours"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:border-neutral-400 hover:bg-white/60 dark:border-white/15 dark:text-neutral-200 dark:hover:border-white/30 dark:hover:bg-white/5"
            >
              Découvrir mon parcours
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#whoami"
          aria-label="Faire défiler vers la section suivante"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 rounded-full border border-neutral-300/70 p-2 text-neutral-500 transition hover:text-neutral-900 dark:border-white/10 dark:text-neutral-400 dark:hover:text-white md:block"
        >
          <motion.svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M12 5v14m-6-6 6 6 6-6" />
          </motion.svg>
        </motion.a>
      </AuroraBackground>
    </section>
  );
}
