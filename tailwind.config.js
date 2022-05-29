module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: ["OpenSans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
