'use client'
import {
  ThemeProvider as NextThemeProvider,
  useTheme as useNextTheme
} from 'next-themes'
import React from 'react'
import { updateThemeColor } from './script'
import { darkTheme, lightTheme } from './theme.css'

const themes = ['light', 'dark']

const themeValues = {
  light: lightTheme,
  dark: darkTheme
}

export const useTheme = () => {
  const { setTheme, ...rest } = useNextTheme()
  return {
    ...rest,
    setTheme: (theme: string) => {
      setTheme(theme)
      updateThemeColor('theme', theme)
    }
  }
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => (
  <NextThemeProvider
    themes={themes}
    value={themeValues}
    attribute="class"
    disableTransitionOnChange
    enableSystem
  >
    {children}
  </NextThemeProvider>
)
