import React from 'react'
import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import Page from '../components/page'

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  max-width: 320px;
`

const Home = () => {
  return (
    <Page>
      <title>Home</title>
      <Header>Home page</Header>
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
