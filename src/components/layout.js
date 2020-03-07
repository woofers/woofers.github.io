import React from 'react'
import Global from './global'
import { ThemeProvider } from 'emotion-theming'
import theme from '../themes'
import Container from './container'

const Layout = ({ children, outside }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Container>
        {children}
      </Container>
      {outside}
    </ThemeProvider>
  )
}

export default Layout
