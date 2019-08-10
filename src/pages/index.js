import React, { Component } from "react"
import { graphql } from 'gatsby'
import RotatingText from '../components/rotating-text'
import { Link } from 'gatsby'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { css } from '@emotion/core'
import { Profile } from '../components/profile'
import Button from '../components/button'

const profile = css`
  img {
    border-radius: 125px !important;
  }
`

const text = theme => css`
  h1:first-of-type {
    font-size: ${theme.fonts.splash}
  }
  @media screen and (max-width: 814px) {
    h1:first-of-type {
      font-size: 2.5em;
    }
  }
  @media screen and (max-width: 675px) {
    h1:first-of-type {
      font-size: 2em;
    }
    h1 {
      font-size: 1.3rem;
    }
  }
`

const nav = theme => css`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  div {
    font-family: 'Raleway',sans-serif;
    font-size: 1.25em;
    text-align: left;
    margin-right: ${theme.margins.large};
  }
  @media screen and (max-width: 502px) {
    div {
      margin-bottom: ${theme.margins.small};
      font-size: 20px;
    }
    display: block !important;
  }
`

const flex = theme => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
  img {
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (max-width: 1066px) {
    h1 {
      margin-block-start: 2px !important;
      margin-block-end: 30px !important;
    }
    div {
      width: 100%;
    }
  }
  @media screen and (max-width: 481px) {
    h1 {
      margin-block-start: 8px !important;
      margin-block-end: 10px !important;
    }
  }
`

class Splash extends Component {
  render() {
    const speed = 65
    const deleteSpeed = speed - 10
    const stop = 3000
    const emptyStop = 500
    const { about, blog, projects } = this.props.data.site.siteMetadata.nav
    return (
      <div>
        <div css={flex}>
          <div css={text}>
            <h1>Hey I'm{' '}<Link to={about}>Jaxson Van Doorn</Link></h1>
            <h1>
              I{' '}
              <RotatingText items={['build games 🎮', 'design apps 🖌', 'craft tools 🔧']}
                typingInterval={speed}
                deletingInterval={deleteSpeed}
                emptyPause={emptyStop}
                pause={stop}
              />
              {' '}for the modern world
            </h1>
          </div>
          <div css={profile}><Profile width="250px" height="250px" /></div>
        </div>
        <div css={nav}>
          <Button href={projects}><Icon icon={faNewspaper}/> Check out my Projects</Button>
          <Button href={blog}><Icon icon={faPencilAlt}/> Read my Blog</Button>
          <Button href={about}><Icon icon={faUser}/> Learn About me</Button>
        </div>
      </div>
    )
  }
}

export default Splash

export const pageQuery = graphql`{ ...Nav }`
