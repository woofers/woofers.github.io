import React from 'react'
import Splash from '../components/splash'
import SEO from '../components/seo'
import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { mutateRepoNames } from '../utils/repo'
import header from './header.svg'
import slide from './slide.svg'
import line from './line.svg'
import projects from './projects.svg'
import contact from './contact.svg'

const style = css`
  background: #2b3044;
  width: 100px;
  height: 100px;
`


const margin = css`
  padding-top: 300px;
  padding-bottom: 20vw;
  background-image: url(${header});
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% auto;
  background-position: center bottom, 100% 100%;
`

const orange = css`
  margin-top: -5px;
  padding-top: 300px;
  padding-bottom: 11.5vw;
  background-color: #ffb277;
  height: 800px;
  background-image: url(${slide});
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% auto;
  background-position: center bottom, 100% 100%;
`

const neutral = css`
  margin-top: -5px;
  background-color: #fbf7f3;
  padding-top: 1200px;
  padding-bottom: 4vw;
  background-image: url(${line});
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% auto;
  background-position: center bottom, 100% 100%;
`

const grey = css`
  margin-top: -5px;
  background-color: #fbf7f3;
  padding-top: 1600px;

  padding-bottom: 20vw;
  background-image: url(${projects});
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% auto;
  background-position: center bottom, 100% 100%;
`


const peach = css`
  margin-top: -5px;
  background-color: #ffe9d8;
  height: 1600px;

  padding-bottom: 24vw;
  background-image: url(${contact});
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% auto;
  background-position: center bottom, 100% 100%;
`

const footer = css`
  margin-top: -5px;
  background-color: #ffb277;
  height: 500px;

  width: 100%;
`

const Background = () => {
  return (
    <>
      <div css={margin}>
      </div>
      <div css={orange}>
      </div>
      <div css={neutral}>
      </div>
      <div css={grey}>
      </div>
      <div css={peach}>
      </div>
      <div css={footer}>
      </div>
    </>
  )
}

const IndexPage = () => {
  const data = useStaticQuery(graphql`{ ...GitHubProjects }`)
  const { site } = data
  const { siteMetadata } = site
  const { exclude } = siteMetadata
  let repos = data.allRepositories.edges
  mutateRepoNames(repos, exclude)
  repos = repos.map(({ node }) => node)
  return (
    <Splash wrapper={Background}>
      <SEO />
      <div css={style}>
      </div>
    </Splash>
  )
}

export default IndexPage
