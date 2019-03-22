import React, { Component } from "react"
import Button from '../components/button'
import RotatingText from '../components/rotating-text'
import { Link } from 'gatsby'
import { fonts } from '../components/globals'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { faNewspaper } from '@fortawesome/free-regular-svg-icons'

class Splash extends Component {
    render() {
      return (
        <div>
          <span>
            <h1 style={{fontSize: `${fonts.large * 2}em`}}>Hey I'm{' '}<Link to='/about/'>Jaxson Van Doorn</Link></h1>
            <h1>
              I{' '}
              <RotatingText items={['build games 🎮', 'design apps 🖌', 'craft tools 🔧']} />
              {' '}for the modern world
            </h1>
          </span>

          <Button href="/projects/"><Icon icon={faNewspaper}/> Check out my work</Button>
          <Button href="/blog/"><Icon icon={faPencilAlt}/> Read some of my thoughts</Button>
          <Button href="/about/"><Icon icon={faUser}/> Get to know me</Button>
        </div>
      )
    }
}

export default Splash
