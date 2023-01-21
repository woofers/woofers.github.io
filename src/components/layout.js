import React from 'react'
import { styled } from 'jxsn'
import Global from './global'
import Meta from './meta'
import Fonts from './fonts'

const Wrapper = styled('div', {
  color: '#bbbed2'
})

const Main = styled('main', {})

const Layout = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest} id="root-layout-wrapper">
      <Meta />
      <Fonts />
      <Global />
      <Main>{children}</Main>
    </Wrapper>
  )
}

export default Layout
