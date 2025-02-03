/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      katibeh: ["katibeh", "sans-serif"],
    },
    extend: {
      colors: {
        pinery: "#257180",
        seceder: "#F2E5BF",
        thrid: "#FD8B51",
      },
    },
  },
  plugins: [],
};
