import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import useMediaQuery from '@material-ui/core/useMediaQuery'

const createGlobal = val => {
  const style = css(`${val}`)
  return () => <Global styles={style} />
}

export { styled, Global, css, createGlobal, useMediaQuery }
