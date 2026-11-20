import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50: "#EFFAF5",
            100: "#D9F2E6",
            200: "#B7E5D1",
            300: "#7FD2B4",
            400: "#37B894",
            500: "#087F6E",
            600: "#06695E",
            700: "#07544D",
            800: "#063F3A",
            900: "#042E2C",
          },
          amber: {
            50: "#FFF5ED",
            100: "#FFE7D5",
            200: "#FDD0B1",
            300: "#F9AD7E",
            400: "#EE824A",
            500: "#C85424",
            600: "#AA451C",
            700: "#863817",
          },
          bg: "#F6F8F5",
          slate: "#142521",
        },
        slate: {
          50: "#F6F8F5",
          100: "#EDF1EC",
          200: "#DCE4DF",
          300: "#C1CDC7",
          400: "#8FA09A",
          500: "#647670",
          600: "#4B5C57",
          700: "#354742",
          800: "#243632",
          900: "#142521",
          950: "#0A1714",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 12px 30px -4px rgba(8, 127, 110, 0.16)",
        floating: "0 10px 40px -10px rgba(20, 37, 33, 0.22)",
      },
    },
  },
  plugins: [],
};
export default config;
