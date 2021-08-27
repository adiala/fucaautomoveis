module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#4a4a4c",
        secondary: "#f5ae20",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
