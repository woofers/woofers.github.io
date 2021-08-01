import { graphql } from 'gatsby'

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
