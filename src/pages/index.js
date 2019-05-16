import React, { Component } from "react"
import { graphql } from 'gatsby'
import Button from '../components/button'
import RotatingText from '../components/rotating-text'
import { Link } from 'gatsby'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'
import { css } from '@emotion/core'

const text = theme => css`
  font-size: ${theme.fonts.splash}
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
        <span>
          <h1 css={text}>Hey I'm{' '}<Link to={about}>Jaxson Van Doorn</Link></h1>
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
        </span>
        <Button href={projects}><Icon icon={faNewspaper}/> Check out my work</Button>
        <Button href={blog}><Icon icon={faPencilAlt}/> Read some of my ideas</Button>
        <Button href={about}><Icon icon={faUser}/> Get to know me</Button>
      </div>
    )
  }
}

export default Splash

export const pageQuery = graphql`{ ...Nav }`
