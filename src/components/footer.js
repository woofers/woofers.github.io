import React from 'react'
import Link from 'gatsby-link'
import { css } from 'emotion'

const footerStyle = css(`
  width: 100%;
  justify-content: center;
  background: #2d2833;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2.75rem;
  overflow: hidden;
`)

const Footer = p => (
  <footer className={footerStyle}>
    <div style={{ marginTop: '10px'}}>
      <center>
        {p.children}
      </center>
    </div>
  </footer>
)

export default Footer
