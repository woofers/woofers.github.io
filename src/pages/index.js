import React from 'react'
import Splash from '../components/splash'
import SEO from '../components/seo'
import { css } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { mutateRepoNames } from '../utils/repo'
import { FadeLink as Link } from '../components/link'
import header from './header.svg'
import slide from './slide.svg'
import line from './line.svg'
import projects from './projects.svg'
import contact from './contact.svg'
import me from './me.png'

const margin = css`
  background-color: #fbf7f3;
  padding-top: 100px;
  padding-bottom: 20vw;
  background-image: url(${header}), url(${me});
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% auto, auto 90%;
  background-position: center bottom, 100% 50%;
`

const orange = css`
  position: relative;
  margin-top: -5px;
  padding-bottom: 11.5vw;
  background-color: #ffb277;
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
  background-position: center bottom;
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
  background-position: center bottom;
`


const peach = css`
  margin-top: -5px;
  background-color: #ffe9d8;
  padding-top: 1400px;

  padding-bottom: 24vw;
  background-image: url(${contact});
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% auto;
  background-position: center bottom;
`

const footer = css`
  margin-top: -5px;
  background-color: #ffb277;
  height: 500px;

  width: 100%;
`

const hello = css`
  font-size: 70px;
`

const subhead = css`
  font-size: 70px;
  color: #fcf3ec;
`

const box = css`
  padding-left: 125px;
  padding-right: 125px;
  padding-bottom: 75px;
  max-width: 850px;
`

const subbox = css`
  ${box};
  top: calc(-20vw + 100px);
  position: absolute;
`

const underbox = css`
  ${box};
  padding-top: 170px;
  margin-left: auto;
  max-width: 1100px;
  text-align: right;
`

const desc = css`
  font-size: 25px;
  letter-spacing: 1.25px;
  padding-left: 5px;
`

const whiteDesc = css`
  ${desc};
  color: #fcf3ec;
`

const orangeDesc = css`
  ${desc};
  color: #ff7170;
`

const cross = css`
  text-decoration: line-through;
`

const crossHi = css`
  ${cross};
  color: #ffcca5;
`

const underline = css`
  padding-bottom: 5px;
  border-bottom: 13px solid currentColor;
`

const highlight = css`
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  background: -webkit-linear-gradient(-90deg,#ff7170,#ffd57f);
  -webkit-background-clip: text;
  background-clip: text;
`

const Background = () => {
  return (
    <>
      <div css={margin}>
        <div css={box}>
          <h1 css={hello}>Hey I'm <span css={highlight}>Jaxson</span></h1>
          <div css={desc}>I make software for humans, <span css={cross}>not robots</span></div>
          <div css={orangeDesc}>I’ve been trusted by companies to work on various web-based <abbr title="Software as a Service">SaaS</abbr> products for 4+ years.</div>
        </div>
      </div>
      <div css={orange}>
        <div css={subbox}>
          <h1 css={subhead}>About me</h1>
          <div css={whiteDesc}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          </div>
        </div>
        <div css={underbox}>
          <h1 css={subhead}>I sometimes <span css={crossHi}>vent</span> write on my <span css={underline}><Link to="/blog/">blog</Link></span></h1>
          <div css={whiteDesc}>
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          </div>
        </div>
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
      <div>
      </div>
    </Splash>
  )
}

export default IndexPage
