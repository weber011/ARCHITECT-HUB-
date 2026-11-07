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
        charcoal: {
          DEFAULT: "#15191D",
          950: "#0B0D0F",
          900: "#101417",
          800: "#15191D",
          700: "#1E2328",
          600: "#2B323A",
          500: "#3E4651",
        },
        gold: {
          DEFAULT: "#C49A45",
          light: "#D8AF5D",
          hover: "#B68B38",
          dark: "#987227",
          subtle: "rgba(196, 154, 69, 0.12)",
          border: "rgba(196, 154, 69, 0.25)",
        },
        ivory: {
          DEFAULT: "#F7F5F0",
          50: "#FCFBF9",
          100: "#F7F5F0",
          200: "#EFECE4",
          300: "#E2DDD2",
        },
        mutedText: {
          DEFAULT: "#8E959E",
          light: "#B2B8C0",
          dark: "#5A616B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D8AF5D 0%, #C49A45 50%, #987227 100%)",
        "dark-gradient": "linear-gradient(180deg, rgba(21, 25, 29, 0.8) 0%, rgba(21, 25, 29, 0.98) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
