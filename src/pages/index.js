import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import Page from '../components/page'
import Nav from '../components/nav'

const Header = styled.h1`
  margin: 0;
  color: #333333;
  font-size: 42px;
  line-height: 40px;
  letter-spacing: -0.2px;
  font-weight: 800;
`

const Home = () => {
  return (
    <Page>
      <title>Home</title>
      <Header>Jaxson Van Doorn</Header>
      <Nav />
      <StaticImage
        src="https://placekitten.com/800/600"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={800}
        height={600}
      />
    </Page>
  )
}

export default Home
