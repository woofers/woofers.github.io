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
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-offline`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name,
        short_name: `jvd`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
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
}
