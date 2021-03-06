const json = require('./package.json')
const name = json.author
const remote = /(\/\/github.com\/)(.*)(\.git$)/g
const repo = remote.exec(json.repository.url)[2]
const home = '/'

const makeIcon = (name, size) => ({
  type: 'image/png',
  sizes: `${size}x${size}`,
  src: `icons/${name}-${size}x${size}.png`,
  purpose: name === 'mask' ? 'maskable' : undefined
})

const sizes = [32, 48, 72, 96, 144, 192, 256, 384, 512]
const icons = sizes.map(size => [
  makeIcon('icon', size),
  makeIcon('mask', size)
]).reduce((acc, [icon, other]) => {
  acc.push(icon)
  acc.push(other)
  return acc
}, [])

module.exports = {
  siteMetadata: {
    title: name,
    siteUrl: json.homepage,
    author: name,
    description: json.description,
    tagline: `I create software in **Victoria, BC**.`,
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
      blog: '/blog/',
      about: '/about/',
    },
    exclude: [
      ['discord-jam-2', 'DOGE: BOIS'],
      ['woofers3d', 'Woofers 3D'],
      ['ludum-dare-44', 'ALIEN, e x p a n s i o n .'],
      ['react-pico-8', 'React PICO-8'],
      ['react-yat', 'React YAT'],
      ['opengraph-api'],
      ['org-invoice-template'],
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
      ['noto-emoji-react'],
      ['react-chameleon-theme-color'],
      ['qmk-indicator'],
      ['quefrency-case']
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        short_name: name,
        start_url: home,
        background_color: '#fff',
        theme_color: '#f27052',
        display: `standalone`,
        icons
      },
    },
    {
      resolve: `gatsby-plugin-subfont`,
      options: {
        recursive: true,
        silent: true,
        fallback: false,
        inlineFonts: true
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
