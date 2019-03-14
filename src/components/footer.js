import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import { Social } from './social'
import { colours } from './globals'
import { faGithub,
         faLinkedinIn as faLinkedin,
         faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const footerStyle = css(`
  width: 100%;
  justify-content: center;
  background: ${colours.codeBackground};
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
`)

const social = [
  {
    link: '//github.com/woofers',
    name: 'GitHub',
    icon: faGithub,
  },
  {
    link: '//www.linkedin.com/in/jaxson-van-doorn/',
    name: 'LinkedIn',
    icon: faLinkedin,
  },
  {
    link: '//twitter.com/jaxsonvandoorn',
    name: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:jaxson.vandoorn@gmail.com',
    name: 'Email',
    icon: faEnvelope,
  }
]

const Footer = p => (
  <footer role='contentinfo' className={footerStyle}>
    <Social socialEntries={social} />
  </footer>
)

export default Footer
