// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Xin Hong',
  siteDescription:
    "Xin Hong is a Ph.D. student advised by Yanyan Lan at the Institute of Computing Technology (ICT), Chinese Academy of Sciences. I work in the areas of computer vision and machine learning with focus on visual reasoning, and joint processing of vision and language. Before joining Yanyan Lan's research group, I was an research intern at Megvii Technology working on image inpainting.",
  siteUrl: 'https://hongxin2019.github.io',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-185361316-1',
      },
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'src/data/*.yaml',
      },
    },
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@image', '@/assets/image');
  },
};
