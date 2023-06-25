/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      maxWidth: {
        xxs: "14rem",
      },
      colors: {
        primary: {
          DEFAULT: "#403CFF",
        }
      }
    },
  },
  plugins: [],
};
