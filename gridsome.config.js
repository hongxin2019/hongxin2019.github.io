// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Xin Hong",
  siteDescription: "Xin Hong's Homepage.",
  siteUrl: "https://hongxin2019.github.io",
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-185361316-1'
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'src/data/*.yaml'
      }
    }
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@image', '@/assets/image')
  },
};
