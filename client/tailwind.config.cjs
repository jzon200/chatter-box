/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F74D1",
        "gray-1": "#E5E5E5",
        "gray-2": "#F0F0F0",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
