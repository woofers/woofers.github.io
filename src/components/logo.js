import React from 'react'
import Title from 'components/title'
import { styled } from 'emotion'
import { motion } from 'framer-motion'
import { SectionLink } from 'link'

const Container = styled.div`
  width: 210px;
  height: 90px;
  font-weight: 700;
  color: #000;
  display: flex;
  flex-direction: column-reverse;
  font-family: Cantarell, sans-serif;
`

const Translate = styled(motion.div)`
`

const Primary = styled.div`
  z-index: 10;
  line-height: 20px;
  color: var(--hover-color, #fe9c55);
  transition: color 0.5s ease;
  font-weight: 900;
  letter-spacing: -1px;
  font-size: 64px;
  transform: skew(172deg, 0deg);
`

const Secondary = styled(motion.div)`
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
    <SectionLink href="/">
      <Translate
        layoutId={'jvd-logo'}
        initial={{ x: 0, y: -26, opacity: 0 }}
        animate={{ x: 0, y: -26, opacity: 1 }}
        transition={{ delay: delay, duration: 0.5 }}
        layout="position"
      >
        <Container>
          <Primary>Jaxson</Primary>
          <Secondary
            initial={{ x: -15, y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
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
    </SectionLink>
  )
}

export default Logo
