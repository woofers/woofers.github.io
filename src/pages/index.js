import React from 'react'
import Splash from '../components/splash'
import { FadeLink as Link } from '../components/link'
import SEO from '../components/seo'
import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import { mutateRepoNames } from '../utils/repo'

const side = theme => css`
  justify-content: space-between;
  > div {
    padding: 10px 10px 10px 0;
    width: 500px;
    &:not(:last-of-type) {
      margin-right: 125px;
    }
  }
  h1 {
    font-size: 1.6rem;
    margin-bottom: 20px;
    transition: transform 0.25s ease;
  }
  a {
    &:hover {
      h1 {
        transform: translate(25px, 0px);
      }
    }
  }
  @media (min-width: ${theme.breakpoints.normal.breakpoint}) {
    margin-top: 75px;
    display: flex;
    h1 {
      font-size: 2rem;
      margin-bottom: 25px;
    }
  }
`

const IndexPage = p => {
  const { data } = p
  const { site } = data
  const { siteMetadata } = site
  const { exclude } = siteMetadata
  let repos = data.allRepositories.edges
  mutateRepoNames(repos, exclude)
  repos = repos.map(({ node }) => node)
  const right = repos.filter(repo => !!repo.fullName)
  const left = right.splice(0, Math.ceil(right.length / 2))
  return (
    <Splash>
      <SEO title="Home" />
      <div css={side}>
        <div>
          <h4>Projects</h4>
          {
            left.map(project => (
              <Link key={project.name} to={`/projects/${project.name}/`}>
                <h1>{project.fullName}</h1>
              </Link>
            ))
          }
        </div>
        <div>
          <h4>More Projects</h4>
          {
            right.map(project => (
              <Link key={project.name} to={`/projects/${project.name}/`}>
                <h1>{project.fullName}</h1>
              </Link>
            ))
          }
        </div>
      </div>
    </Splash>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    ...GitHubProjects
  }
`
