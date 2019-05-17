
const json = require('./package.json')
const name = json.author

module.exports = {
  siteMetadata: {
    title: name,
    siteUrl: json.homepage,
    author: name,
    description: json.description,
    repo: 'woofers/woofers.github.io',
    social: {
      github: {
        name: 'GitHub',
        link: '//github.com/woofers',
        handle: 'woofers',
      },
      stackoverflow: {
        name: 'Stack Overflow',
        link: '//stackoverflow.com/users/9129020/jvandoorn',
      },
      twitter: {
        name: 'Twitter',
        link: '//twitter.com/jaxsonvandoorn',
        handle: '@jaxsonvandoorn',
      },
      linkedin: {
        name: 'LinkedIn',
        link: '//www.linkedin.com/in/jaxson-van-doorn/',
      },
      email: {
        name: 'Email',
        link: 'mailto:jaxson.vandoorn@gmail.com',
      },
    },
    home: '/',
    nav: {
      projects: '/projects/',
      blog: '/blog/',
      about: '/about/',
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-layout`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/resume/**'],
      },
    },
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-140419508-1',
        head: true,
        anonymize: true,
      },
    },
  ],
};
