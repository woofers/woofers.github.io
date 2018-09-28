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
`)

const social = [
  {
    link: '//github.com/woofers',
    name: 'github'
  },
  {
    link: '//www.linkedin.com/in/jaxson-van-doorn/',
    name: 'linkedin'
  },
  {
    link: '//twitter.com/jaxsonvandoorn',
    name: 'twitter'
  },
  {
    link: 'mailto:jaxson.vandoorn@gmail.com',
    name: 'envelope'
  }
]


const Footer = p => (
  <footer role='contentinfo' className={footerStyle}>
    <div style={{ marginTop: '10px', textAlign: 'center' }}>
      <Social socialEntries={social} />
      {p.children}
    </div>
  </footer>
)

export default Footer
