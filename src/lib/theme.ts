/** localStorage key holding the user's explicit theme choice. */
export const THEME_STORAGE_KEY = "portfolio-theme";

export type Theme = "light" | "dark";

/**
 * Inlined in the document `<head>` before the first paint so the correct theme
 * is applied without a flash of the wrong colours. Falls back to the OS
 * preference when the visitor never picked a theme.
 */
export const themeInitScript = `(function(){try{var stored=localStorage.getItem("${THEME_STORAGE_KEY}");var dark=stored?stored==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var root=document.documentElement;root.classList.toggle("dark",dark);root.style.colorScheme=dark?"dark":"light";}catch(e){}})();`;
