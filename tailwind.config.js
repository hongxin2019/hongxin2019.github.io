module.exports = {
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        sans: [
          'Lato', "Verdana", "Helvetica", "sans-serif",
        ],
        serif: [
          // "Palatino",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif"
        ]
      }
    }
  },
  variants: {},
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
};
