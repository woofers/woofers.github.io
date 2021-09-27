import React from 'react'
import styled from '@emotion/styled'
import { Global, useTheme, css } from '@emotion/react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const createGlobal = val => {
  const style = css(`${val}`)
  const Component = () => <Global styles={style} />
  return Component
}

export { styled, Global, css, createGlobal, useMediaQuery, useTheme }
