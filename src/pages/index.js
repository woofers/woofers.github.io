import React from 'react'
import Splash from '../components/splash'
import { FadeLink as Link } from '../components/link'
import SEO from '../components/seo'
import { css } from '@emotion/core'
import { graphql, useStaticQuery } from 'gatsby'
import { mutateRepoNames } from '../utils/repo'
import Description from '../components/description'

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
    transition: transform 0.2s ease;
  }
  a {
    &:hover {
      h1 {
        transform: translate(20px, 0px);
      }
    }
  }
  margin-top: 12px;
  @media (min-width: ${theme.breakpoints.normal.breakpoint}) {
    margin-top: 50px;
    display: flex;
    h1 {
      font-size: 2rem;
      margin-bottom: 25px;
    }
  }
`

const desc = css`
  > a {
    > h1 {
      margin-bottom: 5px;
    }
    > div {
      height: 0;
      overflow: hidden;
      margin-bottom: 15px;
    }
  }
  > a:hover {
    > div {
      height: 25px;
      overflow: hidden;
    }
  }
  transition: height 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s;
`

const height = theme => css`
  @media (min-width: ${theme.breakpoints.normal.breakpoint}) {
    height: 450px;
  }
`

const Projects = p => {
  const { title, projects, ...rest } = p
  return (
    <div {...rest} css={height}>
      <h4>{title}</h4>
      {
        projects.map(project => (
          <div key={project.name} css={desc}>
            <Link to={`/projects/${project.name}/`}>
              <h1>{project.fullName}</h1>
              <div css={desc}>
                <Description text={project.description} />
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

const IndexPage = p => {
  const data = useStaticQuery(graphql`{ ...GitHubProjects }`)
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
      <SEO />
      <div css={side}>
        <Projects title="Projects" projects={left} />
        <Projects title="More Projects" projects={right} />
      </div>
    </Splash>
  )
}

export default IndexPage
