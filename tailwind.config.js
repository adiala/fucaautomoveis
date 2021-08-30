module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {'Rubik': ['rubik', 'sans-serif']},
      backgroundImage: {
        'hero-image': "url('/hero.jpg')",
       },
      colors: {
        primary: "#4a4a4c",
        secondary: "#f5ae20",
        button: "#37bea5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
