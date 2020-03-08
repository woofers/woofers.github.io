import React from 'react'
import Page from '../components/page'
import SEO from '../components/seo'
import { css } from '@emotion/core'

const style = css`
  a {
    color: #f27052;
    font-weight: 700;
    &:hover {
      color: rgba(242, 112, 82, 0.75);
    }
  }
`

const NotFoundPage = () => (
  <Page>
    <SEO title="About" />
    <h1>About</h1>
    <div css={style}>
      <p>My name is <strong>Jaxson Van Doorn</strong> &amp; I create software in <strong>Victoria, BC</strong>.</p><p>I enjoy doing both <i>frontend</i> &amp; <i>backend</i> web design work as-well as the occasional <i>game</i> for fun.</p><p>Most of my open-source projects these days are with <a href="https://reactjs.org/">React</a> + <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</a>, <a href="https://www.java.com">Java</a> or <a href="https://www.lua.org/">Lua</a>.</p><p>Currently studying my <strong>3rd</strong> year of <i>Computer Science</i> at <a href="https://uvic.ca">University of Victoria</a>.</p><p>You can find some of my <a href="/projects/">projects</a> on this site.</p><p>More projects can be found on my <a href="https://github.com/woofers">GitHub</a>, along with my <a href="https://jaxson.vandoorn.ca/resume/jaxsonvd-resume.pdf">resume</a>.</p><p>If you need to get in touch or have any question regarding the content on this site, I can be contacted through <a href="mailto:jaxson.vandoorn@gmail.com">jaxson.vandoorn@gmail.com</a>.</p>
    </div>
  </Page>
)

export default NotFoundPage
