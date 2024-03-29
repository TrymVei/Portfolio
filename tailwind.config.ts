import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      darkPurple: "#291C3A",
      russianViolet: "#331C52",
      darkViolet: "#8121d0",
      languidLavender: "#DCCFED",
      LightGrayishCyan: "#E1EBED",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      content: {
        gitIcon: "url('/img/icons/gitIcon.svg')",
        emptyContent: "",
      },
    },
  },
  plugins: [],
};
export default config;
