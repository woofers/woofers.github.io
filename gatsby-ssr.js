import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from './src/themes'

export const wrapPageElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
