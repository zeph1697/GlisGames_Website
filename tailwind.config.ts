import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        subBgColor: "#1B2631",
      },

      animation: {
        "water-drop": "water-drop 1s ease-out infinite",
      },

      keyframes: {
        "water-drop": {
          "0%": {
            width: "0",
            height: "0",
            opacity: "1",
          },
          "40%": {
            width: "0",
            height: "0",
            opacity: "1",
            border: "4px solid #fbbf24",
          },
          "100%": {
            width: "5rem",
            height: "5rem",
            opacity: "0",
            border: "1px solid #fbbf24",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
