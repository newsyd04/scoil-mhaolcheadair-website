/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f2748",
          blue: "#1b4e85",
          green: "#1f6b52",
          red: "#a63a46",
          cream: "#f8f7f2",
        },
        "sbc-blue": "#0f2748",
        "sbc-yellow": "#e3bc53",
      },
      fontFamily: {
        display: ['"Merriweather"', "serif"],
        body: ['"Source Sans 3"', "sans-serif"],
        sketch: ['"Merriweather"', "serif"],
        quicksand: ['"Source Sans 3"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
