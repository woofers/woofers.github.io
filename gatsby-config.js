
const name = 'Jaxson Van Doorn'

module.exports = {
  siteMetadata: {
    title: name
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-layout`,
    `gatsby-plugin-catch-links`,
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
