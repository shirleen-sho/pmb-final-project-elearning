/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
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
          base: "#efd226",
          hover: "#bba20e",
        },
        light: {
          base: "#757AFF",
          hover: "#889AF9",
        },
        dark: {
          base: "#71717a",
          hover: "#3f3f46",
        },
        success: {
          base: "#22c55e",
          hover: "#15803d",
        },
        danger: {
          base: "#E74A3B",
          hover: "#b91c1c",
        },
        error: {
          base: "#ee2b2b",
          hover: "#dc1e25",
        },
        warning: {
          base: "#eab308",
          hover: "#a16207",
        },
        info: {
          base: "#0ea5e9",
          hover: "#0369a1",
        },
        link: {
          base: "#d1d5db",
          hover: "#4b5563",
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
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
      gridRow: {
        "span-7": "span 7 / span 7",
        "span-8": "span 8 / span 8",
        "span-9": "span 9 / span 9",
        "span-10": "span 10 / span 10",
        "span-11": "span 11 / span 11",
        "span-12": "span 12 / span 12",
      },
      gridRowStart: {
        8: "8",
        9: "9",
        10: "10",
        11: "11",
        12: "12",
      },
    },
  },
  safelist: [{ pattern: /grid-cols-./ }, { pattern: /col-span-./ }],
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
