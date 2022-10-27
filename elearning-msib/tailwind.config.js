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
        secondary: {},
        success: {
          base: "#81e052",
          hover: "#67d92a",
        },
        error: {
          base: "#ee2b2b",
          hover: "#dc1e25",
        },
        warning: {
          base: "#f8bc54",
          hover: "#f7ad31",
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
  plugins: [],
};
