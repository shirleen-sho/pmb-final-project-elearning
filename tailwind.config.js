/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eceefe",
          100: "#ced3fb",
          200: "#acb7f9",
          300: "#899af7",
          400: "#6d80f4",
          500: "#5667eb",
          600: "#505edf",
          700: "#4753d2",
          800: "#4048c5",
          900: "#3534ae",
        },
        secondary: {
          base:"#efd226",
          hover: "#bba20e"
        },
        light: {
          base:"#757AFF",
          hover: "#889AF9"
        },
        dark:{
          base:"#71717a",
          hover: "#3f3f46"
        },
        success: {
          base: "#22c55e",
          hover: "#15803d",
        },
        danger: {
          base:"#E74A3B",
          hover: "#b91c1c"
        },
        error: {
          base: "#ee2b2b",
          hover: "#dc1e25",
        },
        warning: {
          base: "#eab308",
          hover: "#a16207",
        },
        info:{
          base: "#0ea5e9",
          hover: "#0369a1"
        },
        link:{
          base: "#d1d5db",
          hover: "#4b5563"
        },
        neutral: {
          1: "#F2F2F3",
          2: "#C8CDD0",
          3: "#415058",
          4: "#1F292E",
        },
      },
      fontSize: {
        "2xs": ["0.6rem", "0.75rem"],
      },
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  safelist: [{ pattern: /grid-cols-./ }, { pattern: /col-span-./ }],
  plugins: [],
};
