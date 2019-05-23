
const json = require('./package.json')
const name = json.author
const home = '/'

module.exports = {
  siteMetadata: {
    title: name,
    siteUrl: json.homepage,
    author: name,
    description: json.description,
    repo: json.repo,
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
    home,
    nav: {
      projects: '/projects/',
      blog: '/blog/',
      about: '/about/',
    },
    exclude: [
      ['woofers.github.io', 'jaxson.vandoorn.ca'],
      ['woofers3d', 'Woofers 3D'],
      ['ludum-dare-44', 'ALIEN, e x p a n s i o n .'],
      ['libgdx-tools-installer', 'LibGDX Tools Installer'],
      ['react-pico-8', 'React PICO-8'],
      ['chess'],
      ['java-formatter'],
      ['battlesnake-2018'],
      ['battlesnake-java-template'],
    ]
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
        start_url: home,
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
    {
      resolve: `gatsby-source-github-gql`,
      options: {
        auth: process.env.GH_TOKEN,
        query: `
          {
            user(login: "woofers") {
              repositories(
                first: 100,
                isFork: false,
                privacy: PUBLIC,
                isLocked: false,
                ownerAffiliations: OWNER,
                orderBy: {field: PUSHED_AT, direction: DESC}
              ) {
                edges {
                  node {
                    id
                    name
                    description
                    url
                    shortDescriptionHTML
                    homepageUrl
                    stargazers {
                      totalCount
                    }
                    licenseInfo {
                      name
                    }
                    topics: repositoryTopics(first: 100) {
                      nodes {
                        topic {
                          name
                        }
                      }
                    }
                    readme: object(expression: "master:README.md") {
                      ... on Blob {
                        text
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      },
    },
  ],
};
