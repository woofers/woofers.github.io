import { graphql } from 'gatsby'

export const content = graphql`
  fragment Content on OrgContent {
    html
    meta {
      title
      date
      icon
      type
      icon_mode
      icon_type
      placeholder
      game
      landscape
      profile_alt
      profile
      lang
    }
    fields {
      slug
      path
    }
  }
`
export const url = graphql`
  fragment Url on Query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

export const title = graphql`
  fragment Title on Query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const pages = graphql`
  fragment Pages on Query {
    allSitePage {
      nodes {
        path
      }
    }
  }
`

export const template = graphql`
  fragment Template on Query {
    ...Title
    site {
      siteMetadata {
        home
      }
    }
  }
`

export const nav = graphql`
  fragment Nav on Query {
    site {
      siteMetadata {
        nav {
          projects
          blog
          about
        }
      }
    }
  }
`

export const repo = graphql`
  fragment Repo on Query {
    site {
      siteMetadata {
        repo
      }
    }
  }
`

export const social = graphql`
  fragment Social on Query {
    site {
      siteMetadata {
        social {
          github {
            name
            link
          }
          stackoverflow {
            name
            link
          }
          twitter {
            name
            link
          }
          linkedin {
            name
            link
          }
          email {
            name
            link
          }
        }
      }
    }
  }
`

export const repoExclude = graphql`
  fragment RepoExclude on Query {
    site {
      siteMetadata {
        exclude
      }
    }
  }
`

export const github = graphql`
  fragment GitHub on Query {
    ...RepoExclude
    allRepositories {
      edges {
        node {
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
          topics {
            nodes {
              topic {
                name
              }
            }
          }
          readme {
            text
          }
        }
      }
    }
  }
`

export const readme = graphql`
  fragment Readme on repositories {
    readme {
      text
    }
    readmeOrg {
      text
    }
  }
`
