
const json = require('./package.json')
const name = json.author
const remote = /(\/\/github.com\/)(.*)(\.git$)/g
const repo = remote.exec(json.repository.url)[2]
const home = '/'

module.exports = {
  siteMetadata: {
    title: name,
    siteUrl: json.homepage,
    author: name,
    description: json.description,
    repo,
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
    resume: `${json.homepage}/resume/jaxsonvd-resume.pdf`,
    nav: {
      projects: '/projects/',
      blog: '/blog/',
      about: '/about/',
    },
    exclude: [
      ['discord-jam-2', 'DOGE: BOIS'],
      ['woofers3d', 'Woofers 3D'],
      ['ludum-dare-44', 'ALIEN, e x p a n s i o n .'],
      ['react-pico-8', 'React PICO-8'],
      ['opengraph-api'],
      ['react-ludum-dare'],
      ['woofers.github.io'],
      ['kangaroo-country'],
      ['chess'],
      ['resume'],
      ['java-formatter'],
      ['battlesnake-2018'],
      ['battlesnake-java-template'],
      ['libgdx-tools-installer'],
      ['challenger-deep-rofi'],
      ['dotfiles'],
      ['k9-krew'],
      ['course-codes-bugs'],
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/layouts/index.js`)
      }
    },
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
                orderBy: {field: CREATED_AT, direction: DESC}
              ) {
                edges {
                  node {
                    id
                    name
                    description
                    url
                    homepage: homepageUrl
                    stars: stargazers {
                      totalCount
                    }
                    license: licenseInfo {
                      name
                    }
                    topics: repositoryTopics(first: 100) {
                      nodes {
                        topic {
                          name
                        }
                      }
                    }
                    readme: object(expression: "HEAD:README.md") {
                      ... on Blob {
                        text
                      }
                    }
                    readmeOrg: object(expression: "HEAD:README.org") {
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
