import { graphql } from 'gatsby'

export const content = graphql`
  fragment Content on OrgContent {
    html
    meta {
      title
      date
      slug
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

export const title = graphql`
  fragment Title on Query {
    site {
      siteMetadata {
        title
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
