// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Xin Hong',
  siteUrl: 'https://hongxin2019.github.io',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'People', // Required
        baseDir: './content/people', // Where .md files are located
        // pathPrefix: '/people', // Add route prefix. Optional
        index: ["me"],
        template: './src/templates/People.vue' // Optional
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Project', // Required
        baseDir: './content/project', // Where .md files are located
        pathPrefix: '/project', // Add route prefix. Optional
        template: './src/templates/Project.vue' // Optional
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-185361316-1',
      },
    },
  ]
};
