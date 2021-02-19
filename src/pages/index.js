import React from 'react'
import Splash from '../components/splash'
import SEO from '../components/seo'
import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { mutateRepoNames } from '../utils/repo'

const side = theme => css`
  justify-content: space-between;
  > div {
    padding: 0 10px 0 0;
    width: 500px;
    &:not(:last-of-type) {
      margin-right: 125px;
    }
  }
  h3 {
    font-size: 1.6rem;
    margin-bottom: 20px;
    transition: transform 0.2s ease;
  }
  a {
    display: block;
    &:hover {
      h3 {
        transform: translate(20px, 0px);
      }
    }
  }
  margin-top: 12px;
  @media (min-width: ${theme.breakpoints.normal.breakpoint}) {
    margin-top: 60px;
    display: flex;
    h3 {
      font-size: 1.7rem;
      margin-bottom: 25px;
    }
  }

  @media (min-width: ${theme.breakpoints.large.breakpoint}) {
    h3 {
      font-size: 2rem;
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`{ ...GitHubProjects }`)
  const { site } = data
  const { siteMetadata } = site
  const { exclude } = siteMetadata
  let repos = data.allRepositories.edges
  mutateRepoNames(repos, exclude)
  repos = repos.map(({ node }) => node)
  return (
    <Splash>
      <SEO />
      <div css={side}>

      </div>
    </Splash>
  )
}

export default IndexPage
