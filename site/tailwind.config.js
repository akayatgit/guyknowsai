/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        brand: "#f02247",
        des_color: "#444",
        heading_color: "#00000",
        offWhite_bg: "#f6f6f6",
      },
      boxShadow: {
        brandShadow: "#000000",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
