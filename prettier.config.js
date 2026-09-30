/** @type {import('prettier').Config} */
module.exports = {
  plugins: ["prettier-plugin-tailwindcss"],
  // Tailwind utilities passed through these helpers are sorted as well.
  tailwindFunctions: ["cn", "twMerge"],
};
