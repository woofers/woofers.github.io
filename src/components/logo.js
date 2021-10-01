import React from 'react'
import { styled } from 'emotion'
import { motion } from 'framer-motion'
import Link from 'link'

const StyledLink = styled(Link)`
  --scale-logo: 1;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.large.breakpoint}) {
    --scale-logo: 1.2;
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.mobile.breakpoint}) {
    --scale-logo: 1.5;
  }
`

const Container = styled.div`
  padding-left: 14px;
  width: 224px;
  height: 98px;
  font-weight: 700;
  color: #000;
  display: flex;
  flex-direction: column-reverse;
  font-family: Cantarell, sans-serif;
  position: relative;
`

const Translate = styled(motion.div)``

const Primary = styled.div`
  position: absolute;
  bottom: -10px;
  z-index: 10;
  color: #fe9c55;
  transition: color 0.5s ease;
  font-weight: 900;
  letter-spacing: -1px;
  font-size: 64px;
  transform: skew(172deg, 0deg);
`

const Secondary = styled(motion.div)`
  transform: translateX(-15px);
  position: absolute;
  top: 0;
  z-index: 5;
  font-weight: 400;
  letter-spacing: -2px;
  margin-left: 12px;
  color: #d2d8e0;
  font-size: 33px;
  align-self: flex-end;
  text-transform: lowercase;
`

const N = styled.span`
  margin-left: 1.25px;
`

const Space = styled.span`
  display: none;
`

const Logo = ({ shift, delay = 0 }) => {
  return (
    <StyledLink href="/">
      <Translate
        layoutId={'jvd-logo'}
        initial={{ x: 0, y: 0, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ delay: delay, duration: 0.5 }}
        layout="position"
      >
        <Container>
          <Primary>Jaxson</Primary>
          <Secondary
            initial={{ x: -15, y: 50, opacity: 0 }}
            animate={{ x: -15, y: 0, opacity: 1 }}
            transition={{ delay: 1.1 + delay, duration: 0.2 }}
          >
            <span>Van</span>
            <Space> </Space>
            <span>
              Door<N>n</N>
            </span>
          </Secondary>
        </Container>
      </Translate>
    </StyledLink>
  )
}

export default Logo
