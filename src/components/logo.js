import React from 'react'
import Title from 'components/title'
import { styled } from 'emotion'
import { motion } from 'framer-motion'

const Container = styled.div`
  width: 210px;
  height: 90px;
  font-weight: 700;
  color: #000;
  display: flex;
  flex-direction: column-reverse;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const Translate = styled(motion.div)`
  transform: translate(0, -48px);
`

const Primary = styled.div`
  z-index: 10;
  line-height: 20px;
  color: var(--mouse-color, #ffba36);
  transition: color 0.5s ease;
  font-style: italic;
  font-weight: 800;
  letter-spacing: -1px;
  font-size: 64px;
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

const Logo = () => {
  return (
    <Translate
      initial={{ x: 300, y: -48, opacity: 0 }}
      animate={{ x: 0, y: -48, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Primary>Jaxson</Primary>
        <Secondary
          initial={{ x: -15, y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.2 }}
        >
          <span>Van</span>
          <Space> </Space>
          <span>
            Door<N>n</N>
          </span>
        </Secondary>
      </Container>
    </Translate>
  )
}

export default Logo
