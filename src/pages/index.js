import React from 'react'
import styled from '@emotion/styled'

const Main = styled.main`
  color: #232129;
  padding: 96px;
  font-family: -apple-system, Roboto, sans-serif, serif;
`

const Header = styled.h1`
  margin-top: 0;
  margin-bottom: 64px;
  max-width: 320px;
`

const Home = () => {
  return (
    <Main>
      <title>Home</title>
      <Header>Home page</Header>
    </Main>
  )
}

export default Home
