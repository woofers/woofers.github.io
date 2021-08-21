import React from 'react'
import Title from 'components/title'
import { styled } from 'emotion'

const Container = styled.div`
  width: 210px;
  height: 90px;
  font-weight: 700;
  color: #000;
  display: flex;
  flex-direction: column-reverse;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`

const Translate = styled.div`
  transform: translate(0, -48px);
`

const Primary = styled.div`
  line-height: 20px;
  color: #ffba36;
  font-style: italic;
  font-weight: 800;
  letter-spacing: -1px;
  font-size: 64px;
`

const Secondary = styled.div`
  font-weight: 400;
  letter-spacing: -2px;
  margin-left: 12px;
  color: #d2d8e0;
  font-size: 33px;
  align-self: flex-end;
`

const N = styled.span`
  margin-left: 0.75px;
`

const Logo = () => {
  return (
      <Translate>
    <Container>
        <Primary>Jaxson</Primary>
        <Secondary>Van Door<N>n</N></Secondary>
    </Container>
      </Translate>
  )
}


export default Logo
