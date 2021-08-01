
import React from 'react'
import { ThemeProvider } from '@emotion/react'
import Layout from './src/components/layout'
import theme from './src/themes'

export const wrapPageElement = ({ element, props }) => (
  <ThemeProvider theme={theme}>
    <Layout {...props}>
      {element}
    </Layout>
  </ThemeProvider>
)
