import React from 'react'
import { styled } from 'emotion'
import { useRouter } from 'next/router'
import Title from './title'
import Link from 'link'

const head = arr => arr[0]
const last = arr => arr[arr.length - 1]

const color = (alpha = 1) => `rgba(255, 255, 255, ${alpha})`
const edge = color(1)
const fade = color(0.36)
const none = 'rgba(0, 0, 0, 0)'

const makeGradient = (left, right) => `
  linear-gradient(
    90deg,
    ${!left ? edge : none} 0%,
    ${!left ? fade : none} 5%,
    ${none} 50%,
    ${!right ? fade : none} 95%,
    ${!right ? edge : none} 100%
  );
`

const Menu = styled.div`
  display: flex;
  width: max-content;
  position: relative;
  padding: 0 0 10px;
  &:after {
    content: '';
    pointer-events: none;
    background-image: ${props => makeGradient(props.left, props.right)};
    position: absolute;
    height: 100%;
    width: 100%;
  }
`

const Nav = ({ items, setLoaded }) => {
  const router = useRouter()
  const path = router?.asPath
  return (
    <Menu left={head(items).to === path} right={last(items).to === path}>
      {items.map(({ children, to, ...rest }) => (
        <Title
          {...rest}
          key={`menu-nav-${to}`}
          to={to}
          as={Link}
          aria-current={path === to ? 'page' : undefined}
          color="#c9c9c9"
          onClick={() => setLoaded(false)}
        >
          {children}
        </Title>
      ))}
    </Menu>
  )
}

export default Nav
