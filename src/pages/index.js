import React from 'react'
import Splash from '../components/splash'
import SEO from '../components/seo'
import Abbr from '../components/abbr'
import { css, keyframes } from '@emotion/react'
import { graphql, useStaticQuery } from 'gatsby'
import { mutateRepoNames } from '../utils/repo'
import { FadeLink as Link } from '../components/link'
import Logo from '../components/logo'
import Input from '../components/input'
import Social from '../components/social'
import Icon from '../components/icon-box'
import Button from '../components/button'
import { BsFillTerminalFill } from 'react-icons/bs'
import { FaKeyboard } from 'react-icons/fa'

import header from './header.svg'
import slide from './slide.svg'
import line from './line.svg'
import projects from './projects.svg'
import contact from './contact.svg'
import me from './me.png'

const shift = keyframes`
  0% {
    background-position-x: 50%, 200%;
  }
  100% {
    background-position-x: 50%, 100%;
  }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const flex = css`
  display: flex;
  > div {
    &:first-of-type {
      margin-right: 10px;
    }
    &:last-of-type {
      margin-left: 10px;
    }
  }
`

const margin = theme => css`
  background-color: #fbf7f3;
  padding-top: 100px;
  padding-bottom: 20vw;
  background-image: url(${header}), url(${me});
  background-repeat: no-repeat;
  width: 100%;

  animation: ${shift} 1500ms;
  animation-iteration-count: 1;
  animation-delay: 1150ms;
  animation-fill-mode: both;

  background-size: 100% auto, auto 60%;
  background-position-y: 100%, 95%;
  @media (min-width: ${theme.breakpoints.small.breakpoint}) {
    background-size: 100% auto, auto 75%;
  }
  @media (min-width: ${theme.breakpoints.normal.breakpoint}) {
    background-size: 100% auto, auto 90%;
    background-position-y: 100%, 50%;
  }
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

  padding-top: 50px;
`

const neutral = css`
  margin-top: -5px;
  background-color: #fbf7f3;
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
  padding-bottom: 20vw;
  background-image: url(${projects});
  background-repeat: no-repeat;
  width: 100%;
  background-size: 100% auto;
  background-position: center bottom;
`


const peach = css`
  position: relative;
  margin-top: -5px;
  background-color: #ffe9d8;
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
  width: 100%;
`

const big = css`
  font-size: 70px;
`

const hello = css`
  ${big}
  display: inline;
  animation: ${fadeIn} 1000ms;
  animation-iteration-count: 1;
  animation-delay: 250ms;
  animation-fill-mode: both;
  -webkit-text-stroke: 1.5px #6F707B;
  color: #fbf7f3;
`

const subhead = css`
  font-size: 70px;
  color: #2b3044;
`

const subsubhead = css`
  ${subhead};
  font-size: 45px;
  margin-bottom: 0;
  font-weight: 400;
`

const rotate = css`
  ${subhead}
  margin-top: 100px;
  transform: translate(0, 50px) rotateZ(355deg);
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

const peachbox = css`
  ${box};
  right: 0;
  top: calc(-20vw + 100px);
  position: absolute;
  max-width: 900px;
`

const underbox = css`
  ${box};
  padding-top: 170px;
  margin-left: auto;
  max-width: 1100px;
  text-align: right;
`

const centerbox = css`
  ${box};
  padding-top: 128px;
  padding-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  text-align: center;

`

const widebox = css`
  ${box};
  max-width: none;
  padding-top: 30px;
`

const desc = css`
  font-size: 23px;
  padding-left: 5px;
`

const headerDesc = css`
  ${desc}
  color: #2b3044;
  animation: ${fadeIn} 800ms;
  animation-iteration-count: 1;
  animation-delay: 5850ms;
  animation-fill-mode: both;
  font-weight: 600;
}
`

const whiteDesc = css`
  ${desc}
  color: #2b3044;
  letter-spacing: -1px;
  line-height: 35px;
`

const rightDesc = css`
  ${whiteDesc}
  max-width: 720px;
  margin-left: auto;
  text-align: right;
`

const orangeDesc = css`
  ${desc};
  color: #ff7170;
`

const thick = 5.5
const indent = 3

const cross = css`
  user-select: none;
  pointer-events: none;
  position: relative;
  &:before {
    content: '';
    width: calc(100% - ${indent}px);
    height: ${thick}px;
    position: absolute;
    background: currentColor;
    top: calc(50% - ${thick / 2}px);
    left: ${indent}px;
  }
`

const crossOrange = css`
  ${cross};
  color: #ffcca5;
`

const crossGrey = css`
  ${cross};
  color: #c8ccd0;
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

const button = color => css`
  font-weight: 700;
  font-family: 'Hammersmith One',sans-serif;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  font-size: 20px;
  line-height: 1.17;
  font-weight: 700;
  min-width: 28px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 500px;
  background: ${color};
  color: #fbf7f3;
  margin-right: 5px;
`

const Background = () => {
  return (
    <>
      <div css={margin}>
        <div css={box}>
          <h1 css={hello}>Hey I'm{' '}</h1>
          <Logo />

          <div css={headerDesc}>JavaScript developer <Icon top="4px" icon={BsFillTerminalFill} />, keyboard enthusiast <Icon top="7px" width="1.25em" height="1.25em" icon={FaKeyboard} /></div>

          <Social />
          <div css={button('#ff7170')}>Message me</div>
          <div css={button('#ff9077')}>Message me</div>
          <div css={button('#779bff')}>Message me</div>
        </div>
      </div>
      <div css={orange}>
        <div css={subbox}>
          <h1 css={subhead}>About me</h1>
          <div css={whiteDesc}>
              I'm a frontend developer working from <b>Victoria, BC</b>.  My interests in technology are pretty broad however I specialize in building fluid and accessible large scale apps with <b>React</b>.  As a tech enthusiast I hope to grow and learn along-side others to help drive the next generation of software that will shape how we live.
          </div>
        </div>
        <div css={centerbox}>
          <div css={rightDesc}>
              In my free time, I enjoy spending time with my dog, cooking delicious food, or watching old movies.  I also spend my time tinkering with tech
              such as open source projects, or building custom keyboards.  On top of this I always try and find time to learn about emerging web technologies and frameworks.
          </div>
        </div>
        <div css={centerbox}>
          <h1 css={rotate}>Check out my <span aria-hidden css={crossOrange}>code</span> <Link to="/projects/">projects</Link></h1>
        </div>
      </div>
      <div css={neutral}>
        <div css={widebox}>
          <h1 css={big}>I have worked <span aria-hidden css={crossGrey}>for</span> with</h1>
        </div>
      </div>
      <div css={grey}>
        <div css={widebox}>
          <h1 css={big}>on products like</h1>
        </div>
      </div>
      <div css={peach}>
        <div css={peachbox}>
          <h1 css={big}>and within the open-source world </h1>
        </div>
      </div>
      <div css={footer}>
        <div css={widebox}>
          <h1 css={subhead}>Get in touch.</h1>
          <h2 css={subsubhead}>Say hi.</h2>
          <div css={flex}>
            <Input type="text" placeholder="Name"/>
            <Input type="text" placeholder="Email"/>
          </div>
          <Input type="textarea" placeholder="Message"/>
        </div>
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
