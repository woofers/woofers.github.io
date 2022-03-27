import React from 'react'
import { styled, Typography } from 'ruffsponsive'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'link'

const Button = styled(Link, {
  textDecoration: 'none',
  fontSize: '15px',
  lineHeight: '18px',
  fontWeight: 700,
  borderRadius: '8px',
  border: 'medium none',
  background: 'transparent none repeat scroll 0% 0%',
  padding: '10px',
  marginTop: '6px',
  marginBottom: '6px',
  marginRight: '6px',
  transition:
    'box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s, transform 0.1s ease 0s',
  position: 'relative',
  outline: 'currentColor none medium',
  color: '#717171',
  cursor: 'pointer',
  "&[aria-current='page']": { color: '#222222' },
  '&:hover': { background: '#f7f7f7 none repeat scroll 0% 0%' },
  "&[aria-current='false']:focus": { transform: 'scale(0.9) !important' },
})

const Container = styled(motion.nav, {
  display: 'flex',
  margin: '10px 0 0',
  marginLeft: 'auto',
  maxWidth: '613px',
  variants: {
    wrap: {
      true: {
        padding: '0',
        height: 'unset',
        flexWrap: 'wrap',
      },
      false: {
        padding: '10px 0 0 10px',
        height: '60px',
        flexWrap: 'nowrap',
      },
    },
  },
  defaultVariants: {
    wrap: false,
  },
})

const Nav = ({ items, wrap, ...rest }) => {
  const router = useRouter()
  const { asPath } = router
  return (
    <Container {...rest} wrap={wrap}>
      {items.map(({ href, children, ...props }) => (
        <Button
          href={href}
          key={`link-${href}`}
          aria-current={href === asPath ? 'page' : false}
          {...props}
        >
          <Typography as="span" type="button" noMargin>
            {children}
          </Typography>
        </Button>
      ))}
    </Container>
  )
}

export default Nav
