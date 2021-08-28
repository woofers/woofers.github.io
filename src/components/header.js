import React from 'react'
import { styled } from 'emotion'
import Nav from './nav'
import Logo from './logo'
import withLocation from './with-location'

const Wrapper = styled.header`
  padding: 125px 0 0;
  display: flex;
  justify-content: space-between;
`

const Header = ({ items, location }) => {
  return (
    <Wrapper>
      <Nav items={items} />
      {location.pathname !== '/about/' && <Logo />}
    </Wrapper>
  )
}

export default withLocation(Header)
