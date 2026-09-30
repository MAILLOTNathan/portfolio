const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Theme is driven by a `dark` class on <html> so the user can pick a theme
  // instead of it being forced by the OS setting.
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-0.75rem)" },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

/**
 * Exposes every Tailwind colour as a CSS custom property (`--blue-500`, ...).
 * The aurora background relies on those variables to build its gradients.
 */
function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, value]) => [`--${key}`, value]),
  );

  addBase({
    ":root": newVars,
  });
}
