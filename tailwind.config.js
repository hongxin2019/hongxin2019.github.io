module.exports = {
  theme: {
    extend: {
      container: {
        center: true
      },
      fontFamily: {
        sans: [
          "Gill Sans",
          "Gill Sans MT",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "eoboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
          "Microsoft Yahei"
        ],
        serif: [
          "Palatino",
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
