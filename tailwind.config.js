/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./public/index.js"],
  theme: {
    extend: {
      borderRadius: {
        xl: "1rem",
      },
      lineHeight: {
        11: "2.75rem",
      },
      spacing: {
        86: "21.5rem",
      },
      colors: {
        "white-guide": "hsl(0, 0%, 100%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 22%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
        "orange-guide": "hsl(25, 97%, 53%)",
      },
      fontFamily: {
        body: ["Overpass"],
      },
      fontSize: {
        base: "0.875rem",
      },
      fontWeight: {
        base: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
