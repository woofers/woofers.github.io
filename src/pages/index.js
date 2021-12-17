import React from 'react'
import Splash from '../components/splash'
import { FadeLink as Link } from '../components/link'
import SEO from '../components/seo'
import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { FiDownload } from 'react-icons/fi'
import { mutateRepoNames } from '../utils/repo'
import Description from '../components/description'
import { small, large } from '../styles/text'

const side = theme => css`
  justify-content: space-between;
  > div {
    padding: 0 10px 0 0;
    width: min(500px, 100%);
    &:not(:last-of-type) {
      margin-right: 80px;
      margin-bottom: 40px;
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

const desc = css`
  > a {
    > div {
      > h3 {
        margin-bottom: 5px;
      }
      & > div {
        height: 0;
        opacity: 0;
        overflow: hidden;
        margin-bottom: 15px;
      }
    }
  }
  > a:hover, > a:focus {
    > div {
      & > div {
        opacity: 1;
        height: 25px;
        overflow: hidden;
      }
    }
  }
  transition: height 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) 0s, opacity 0.3s;
`

const fade = css`
  opacity: 0.5;
`

const body = css`
  font-size: 18px;
  letter-spacing: -0.1px;
`

const link = css`
  font-weight: 700;
  display: inline-block !important;
  &:after {
    content: none;
  }
`

const help = css`
  border-bottom: none !important;
  cursor: help !important;
  svg {
    margin-top: -2px;
  }
`

const height = css`
  height: 80px;
`

const Projects = p => {
  const { projects, children, ...rest } = p
  const noChild = !React.Children.count(children)
  const height = theme => css`
    @media (min-width: ${theme.breakpoints.normal.breakpoint}) {
      margin-top: ${noChild ? '50px' : '0'};
      height: ${noChild ? '390px' : '440px'};
    }
  `
  return (
    <div {...rest} css={height}>
      {children}
      {
        projects.map(project => {
          const description = `${project.name}-description`
          return (
            <div key={project.name} css={desc}>
              <Link to={`/projects/${project.name}/`} aria-describedby={description} aria-label={project.fullName}>
                <div>
                  <h3 css={large}>{project.fullName}</h3>
                  <div css={desc}>
                    <Description id={description} text={project.description} />
                  </div>
                </div>
              </Link>
            </div>
          )
        })
      }
    </div>
  )
}

const External = ({ to, children }) => <Link css={link} target="_blank" rel="noopener noreferrer" to={to}>{children}</Link>

const IndexPage = () => {
  const data = useStaticQuery(graphql`{ ...GitHubProjects }`)
  const { site } = data
  const { siteMetadata } = site
  const { exclude } = siteMetadata
  let repos = data.allRepositories.edges
  mutateRepoNames(repos, exclude)
  repos = repos.map(({ node }) => node)
  const filtered = repos.filter(repo => !!repo.fullName)
  return (
    <Splash>
      <SEO />
      <div css={side}>
        <div>
          <h2 css={small}>Me</h2>
          <p css={body}>Hi all, I'm <strong>Jaxson</strong>: a twenty-something developer who's trying to make modern software products slightly less broken.</p>
          <p css={body}>Currently my main area of interest and focus is <strong>Front-end React development</strong> and other modern web tooling. <span css={fade}>In my past life I was a Java developer.</span></p>
          <p css={body}>I currently maintain <External to="https://github.com/woofers/react-wavify"><strong>React Wavify</strong></External> <span>(<abbr css={help} title="around 100 thousand downloads on Node Package Manager">~100k <FiDownload title="downloads on NPM" /></abbr>)</span> and many other open source projects. Outside software I enjoy obscure films and spending time with my dog Maxine.</p>
          <span css={small}>- Jaxson</span>
        </div>
        <Projects projects={filtered}>
          <h2 css={small}>Projects</h2>
        </Projects>
      </div>
      <div css={height} aria-hidden></div>
    </Splash>
  )
}

export default IndexPage
