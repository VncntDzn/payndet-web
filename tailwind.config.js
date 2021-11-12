module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '60vh': '60vh',
      },
      width: {
        '90vw': '90vw',
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        orange: {
          DEFAULT: "#FF6721",
        },
        black: {
          DEFAULT: "#081347",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
