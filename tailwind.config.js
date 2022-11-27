/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        lighter: "lighter",
      },
      colors: {
        harbour: "#685DC5",
      },
    },
  },
  plugins: [],
};
