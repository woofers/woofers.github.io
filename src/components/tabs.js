import React from 'react'
import { styled } from 'emotion'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'link'

const Button = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  line-height: 18px;
  font-weight: 700;
  border-radius: 8px;
  border: medium none;
  background: transparent none repeat scroll 0% 0%;
  padding: 10px;
  margin-top: 6px;
  margin-bottom: 6px;
  margin-right: 6px;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    transform 0.1s ease 0s, transform 0.1s ease 0s;
  position: relative;
  outline: currentcolor none medium;
  color: #717171;
  cursor: pointer;
  &[aria-current='true'] {
    color: #222222;
  }
  &:hover {
    background: #f7f7f7 none repeat scroll 0% 0%;
  }
  &[aria-current='false']:focus {
    transform: scale(0.9) !important;
  }
`

const Container = styled(motion.nav)`
  display: flex;
  margin: 10px 0 0;
  padding: ${props => props.$wrap ? '0' : '10px 0 0 10px'};
  height: ${props => props.$wrap ? 'unset' : '60px'};
  flex-wrap: ${props => props.$wrap ? 'wrap' : 'nowrap'};
  max-width: 613px;
`

const Nav = ({ items, wrap, ...rest }) => {
  const router = useRouter()
  const { asPath } = router
  console.log(rest)
  return (
    <Container {...rest} $wrap={wrap}>
      {items.map(({ href, children, ...props }) => (
        <Button
          href={href}
          key={`link-${href}`}
          aria-current={href === asPath}
          {...props}
        >
          {children}
        </Button>
      ))}
    </Container>
  )
}

export default Nav
