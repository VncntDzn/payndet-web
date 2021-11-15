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
        "60vh": "60vh",
        "75vh": "75vh",
        "90vh": "90vh",
      },
      width: {
        "90vw": "90vw",
        "65vw": "65vw",
      },

      colors: {
        orange: {
          DEFAULT: "#FF6721",
        },
        black: {
          DEFAULT: "#081347",
        },
        custom: {
          DEFAULT: "#102791",
          light: "#EF4444",
        },
      },
    },
  },
  variants: {
    scrollbar: ["rounded"],

    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
