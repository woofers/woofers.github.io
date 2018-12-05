import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import { Social } from './social'
import { colours } from './globals'
import FA from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

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
    icon: 'github'
  },
  {
    link: '//www.linkedin.com/in/jaxson-van-doorn/',
    name: 'LinkedIn',
    icon: 'linkedin'
  },
  {
    link: '//twitter.com/jaxsonvandoorn',
    name: 'Twitter',
    icon: 'twitter',
  },
  {
    link: 'mailto:jaxson.vandoorn@gmail.com',
    name: 'Email',
    icon: 'envelope'
  }
]

const Footer = p => (
  <footer role='contentinfo' className={footerStyle}>
    <Social socialEntries={social} />
  </footer>
)

export default Footer
