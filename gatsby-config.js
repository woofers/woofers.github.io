
const json = require('./package.json')
const name = json.author

module.exports = {
  siteMetadata: {
    title: name,
    siteUrl: json.homepage
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-layout`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-orga`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name,
        short_name: name,
        start_url: '/',
        background_color: '#463d4e',
        theme_color: '#f27052',
        display: `standalone`,
        icon: 'static/favicon.png',
        theme_color_in_head: false,
      },
    },
  ],
};
