import React from 'react'
import { Link } from 'gatsby'
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

const Text = styled.div`
  margin-bottom: 48px;
`

const NotFoundPage = () => {
  return (
    <Main>
      <title>Not found</title>
      <Header>Page not found</Header>
      <Text>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
      </Text>
      <Link to="/">Go home</Link>.
    </Main>
  )
}

export default NotFoundPage
