import { graphql } from 'gatsby'

export const content = graphql`
  fragment Content on OrgContent {
    html
    metadata {
      title
      date
      icon
      type
      icon_mode
      icon_type
      ludum_dare
      placeholder
      game
      landscape
      lang
    }
    fields {
      slug
    }
  }
`

export const title = graphql`
  fragment Title on Query {
    site {
      siteMetadata {
        title
        tagline
      }
    }
  }
`

export const nav = graphql`
  fragment Nav on Query {
    site {
      siteMetadata {
        nav {
          blog
          about
        }
      }
    }
  }
`

export const resume = graphql`
  fragment Resume on Query {
    site {
      siteMetadata {
        resume
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
            handle
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

export const allGithub = graphql`
  fragment GitHubProjects on Query {
    ...RepoExclude
    allRepositories {
      edges {
        node {
          ...GitHub
        }
      }
    }
  }
`

export const github = graphql`
  fragment GitHub on repositories {
    name
    description
    url
    homepage
    stars {
      totalCount
    }
    license {
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
    readmeOrg {
      text
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

export const url = graphql`
  fragment Url on Query {
    site {
      siteMetadata {
        siteUrl
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
