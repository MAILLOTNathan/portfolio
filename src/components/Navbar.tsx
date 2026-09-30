"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

import ThemeToggle from "@/components/ThemeToggle";
import { navSections, site, type SectionId } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Fixed navbar with:
 * - a reading progress bar,
 * - the active section highlighted while scrolling,
 * - a glass background that appears once the page is scrolled,
 * - a collapsible panel on mobile.
 */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (value) => {
    setIsScrolled(value > 24);
  });

  // Highlight the section currently sitting in the middle of the viewport.
  useEffect(() => {
    const elements = navSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Prevent the page from scrolling behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "border-b transition-colors duration-300",
          isScrolled || isMenuOpen
            ? "border-neutral-200/80 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-black/70"
            : "border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Navigation principale"
          className="section-container flex h-16 items-center justify-between gap-4"
        >
          <a
            href="#top"
            className="group flex items-center gap-2.5 rounded-full text-sm font-semibold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 text-xs font-bold text-white shadow-lg shadow-purple-500/20">
              NM
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navSections.map((section) => {
              const isActive = activeSection === section.id;

              return (
                <li key={section.id} className="relative">
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative block whitespace-nowrap rounded-full px-3 py-2 text-sm transition-colors",
                      isActive
                        ? "text-neutral-900 dark:text-white"
                        : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white",
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navbar-active-pill"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                        className="absolute inset-0 -z-10 rounded-full bg-neutral-100 dark:bg-white/10"
                      />
                    )}
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid h-10 w-10 place-items-center rounded-full border border-neutral-200 bg-white/70 text-neutral-600 transition hover:text-neutral-900 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300 lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 rounded bg-current transition-transform duration-300",
                    isMenuOpen && "translate-y-[7px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-0.5 w-5 rounded bg-current transition-opacity duration-200",
                    isMenuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[14px] h-0.5 w-5 rounded bg-current transition-transform duration-300",
                    isMenuOpen && "-translate-y-[7px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Reading progress. */}
        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500"
        />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="section-container lg:hidden"
          >
            <ul className="mt-3 space-y-1 rounded-2xl border border-neutral-200 bg-white/95 p-2 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-neutral-950/95">
              {navSections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block rounded-xl px-4 py-3 text-sm transition-colors",
                      activeSection === section.id
                        ? "bg-neutral-100 font-medium text-neutral-900 dark:bg-white/10 dark:text-white"
                        : "text-neutral-600 hover:bg-neutral-100/70 dark:text-neutral-300 dark:hover:bg-white/5",
                    )}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
