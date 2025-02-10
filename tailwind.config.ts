import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#151515',
        light: '#f7f7f7',
        primary: { ...require('tailwindcss/colors').indigo },
        secondary: { ...require('tailwindcss/colors').emerald },
      }
    },
  },
  plugins: [],
} satisfies Config;