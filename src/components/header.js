import React from 'react'
import styled from '@emotion/styled'
import withLocation from './with-location'
import Title from './title'
import { Link } from 'gatsby'

const Wrapper = styled.header``

const alpha = 0.36

const Menu = styled.div`
  display: flex;
  width: max-content;
  position: relative;
  padding: 0 0 10px;
  &:after {
    content: '';
    pointer-events: none;
    background-image: linear-gradient(
      90deg,
      #fff 0%,
      rgba(255, 255, 255, ${alpha}) 5%,
      #ff00 50%,
      rgba(255, 255, 255, ${alpha}) 95%,
      #fff 100%
    );
    position: absolute;
    height: 100%;
    width: 100%;
  }
`

const Header = props => {
  const { location } = props
  const path = location?.pathname
  return (
    <Wrapper>
      <Menu>
        <Title
          to="/about/"
          as={Link}
          aria-current={path === '/about/' ? 'page' : undefined}
          color="#c9c9c9"
        >
          Me
        </Title>
        <Title
          to="/"
          as={Link}
          aria-current={path === '/' ? 'page' : undefined}
          color="#c9c9c9"
        >
          Work
        </Title>
        <Title
          to="/me/"
          as={Link}
          aria-current={path === '/me/' ? 'page' : undefined}
          color="#c9c9c9"
        >
          Contact
        </Title>
      </Menu>
    </Wrapper>
  )
}

export default withLocation(Header)
