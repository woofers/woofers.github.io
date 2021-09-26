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
    &:after {
      position: absolute;
      content: '';
      background-color: #222222;
      bottom: -6px;
      left: 10px;
      width: calc(100% - 20px);
      height: 2px;
    }
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
  box-shadow: inset 0px -2px 0px -1px #dddddd;
  padding: 0 50px;
  > ${Button}:first-of-type {
    margin-left: -10px;
  }
`

const Nav = ({ items }) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
    >
      {items.map(({ href, children }) => (
        <Button
          href={href}
          key={`link-${href}`}
          aria-current={href === pathname}
        >
          {children}
        </Button>
      ))}
    </Container>
  )
}

export default Nav