import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { css } from '@emotion/core'

const projects = [
  'React Wavify',
  'React PICO 8',
  'React Dialog Polyfill',
  'Ludum Dare Badges'
]

const side = css`
  margin-top: 75px;
  display: flex;
  > div {
    padding: 10px;
    &:not(:last-of-type) {
      margin-right: 125px;
    }
    &:first-of-type {
      padding-left: 0;
    }
  }
  h1 {
    font-size: 2rem;
    transition: padding-left 0.25s ease;
  }
  a {
    &:hover {
      h1 {
        padding-left: 20px;
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div css={side}>
      <div>
        <h4>Projects</h4>
        {
          projects.map(project => (
            <a key={project} href="#">
              <h1>{project}</h1>
            </a>
          ))
        }
      </div>
      <div>
        <h4>More Projects</h4>
        {
          projects.map(project => (
            <a key={'more' + project} href="#">
              <h1>{project}</h1>
            </a>
          ))
        }
      </div>
    </div>
  </Layout>
)

export default IndexPage
