import React from 'react'
import { styled } from 'emotion'
import Nav from './nav'
import Logo from './logo'

const Wrapper = styled.header`
  padding: 125px 0 0;
  display: flex;
  justify-content: space-between;
`

const Header = ({ items }) => {
  return (
    <Wrapper>
      <Nav items={items} />
      <Logo />
    </Wrapper>
  )
}

export default Header
