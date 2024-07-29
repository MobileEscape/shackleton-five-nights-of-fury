/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        hintIcon: "2px 2px 2px rgba(0, 0, 0, 0.5)",
      },
      fontFamily: {
        mrsEaves: ["mrs-eaves", "serif"],
        frank: ["adobe-handwriting-frank", "sans-serif"],
        frankWorsley: ["frank-worsley", "serif"],
        kingEdwards: ["king-Edwards", "sans-serif"],
      },
      colors: {
        primary: "#3d4860",
        secondary: "#6b7ea8",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
