const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

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
        },
        primaryDark: {
          DEFAULT: "#000E78",
        },
        boulder: {
          DEFAULT: "#7A7A7A",
        },
        navyBlue: {
          DEFAULT: "#000578",
        },
        lightningYellow: {
          DEFAULT: "#FFBE1C",
        }
      },
      fontFamily: {
        sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat Variable', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        innerMD: "inset 0px 0px 4px rgba(0, 0, 0, 0.25)",
      }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
      center: true,
    }
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { 
          fontFamily: theme("fontFamily.poppins"),
          fontSize: "4.75rem",
          fontWeight: theme("fontWeight.bold"),
          lineHeight: theme("lineHeight.tight"),
        },
        h2: { 
          fontFamily: theme("fontFamily.poppins"),
          fontSize: theme("fontSize.6xl"),
          fontWeight: theme("fontWeight.bold"),
        },
        h4: {
          fontFamily: theme("fontFamily.sans"),
          fontSize: theme("fontSize.lg")
        }
      });
    }),
    require('@tailwindcss/typography'),
  ],
};
