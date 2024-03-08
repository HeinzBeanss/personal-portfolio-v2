/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      colors: {
        background: "#12121c",

        space: "#091926",
        space2: "#080814",

        surface: "#208fff",
        lighter: "#a4ecff",
        lightest: "#E4faff",
        words: "#B6CFCA",
        primary: "#ffffff",
        secondary: "#ffffff",
        faint: "#f7f7f7",
        category: "#e3e9e4",
        faintest: "#F0F7F6",
        almostwhite: "#fcfcfc",
        darkest: "#242525",
        dark: "#282929",
      },
      maxWidth: {
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
        half: "25%",
      },
      screens: {
        "3xl": "1921px",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
