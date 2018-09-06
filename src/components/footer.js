import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'
import { Social } from './social'

const footerStyle = css(`
  width: 100%;
  justify-content: center;
  background: #2d2833;
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
  <footer className={footerStyle}>
    <div style={{ marginTop: '10px'}}>
      <center>
        <Social socialEntries={social} />
        {p.children}
      </center>
    </div>
  </footer>
)

export default Footer
