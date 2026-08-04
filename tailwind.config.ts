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
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#1F6B3A", // Primary forest green
            600: "#19572f",
            700: "#154827",
            800: "#11381f",
            900: "#0b2514",
          },
          amber: {
            50: "#fffbeb",
            100: "#fef3c7",
            200: "#fde68a",
            300: "#fcd34d",
            400: "#fbbf24",
            500: "#D97706", // Accent warm amber
            600: "#b45309",
            700: "#92400e",
          },
          bg: "#F8FAF9",
          slate: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 12px 30px -4px rgba(31, 107, 58, 0.15)",
        floating: "0 10px 40px -10px rgba(15, 23, 42, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
