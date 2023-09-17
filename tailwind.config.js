/** @type {import('tailwindcss').Config} */
import tailwindcssDebugScreens from "tailwindcss-debug-screens";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        Playfair: ["Playfair Display"],
        Roboto: ["Roboto"],
      },
      gridTemplateColumns: {
        section1: "repeat(auto-fill, minmax(270px, 1fr))",
        section2: "repeat(auto-fill, minmax(203px, 1fr))",
        section3: "repeat(auto-fill, minmax(143px, 1fr))",
      },
      gridTemplateRows: {
        section1: "repeat(2,minmax(0, 294px))",
      },

      container: {
        center: true,
        padding: {},
        screens: {
          xl: "1440px",
        },
      },

      transitionTimingFunction: {},
      backgroundImage: {
        latestNews: "lightgray 50% / cover no-repeat, #C4C4C4",
        hotTopicGradient:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 42.25%, rgba(0, 0, 0, 0.65) 100%);",
      },
      boxShadow: {
        borderSearch: "1px solid var(--grey-palette-grey-110, #8A8886)",
        menu: "0px 3px 6px 0px rgba(0, 0, 0, 0.16)",
      },

      colors: {
        textColor: "var(--black-80, #121221)",
        textWhite: "var(--White, #F8F8F8)",
        hotTopicColor: "var(--black-60, #444)",
        newsTextColor: "var(--black-20, #949494)",
        menuColor: "var(--gray7, #FCFCFC)",
        searchColor: "#f0eeee",
      },
      animation: {},
      keyframes: {},
    },
  },
  plugins: [tailwindcssDebugScreens],
};
