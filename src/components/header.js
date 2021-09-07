import React from 'react'
import { styled } from 'emotion'
import { useRouter } from 'next/router'
import Nav from './nav'
import Logo from './logo'

const Wrapper = styled.header`
  padding: 125px 0 0;
  display: flex;
  justify-content: space-between;
`

const Header = ({ items }) => {
  const router = useRouter()
  return (
    <Wrapper>
      <Nav items={items} />
      {router?.pathname !== '/about/' && <Logo />}
    </Wrapper>
  )
}

export default Header
