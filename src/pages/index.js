import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const projects = [
  'React Wavify',
  'React PICO 8',
  'React Dialog Polyfill',
  'Ludum Dare Badges'
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h4>Projects</h4>
    {
      projects.map(project => (
        <a key={project} href="#">
          <h1>{project}</h1>
        </a>
      ))
    }
  </Layout>
)

export default IndexPage
