import React from 'react'
import { styled } from 'emotion'

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  text-align: center;
  margin: 2px 0 23px 0;
  position: relative;
  padding-bottom: ${props => 100 / props.aspectRatio}%;
`

const Frame = p => {
  const { aspectRatio, title, ...rest } = p
  return (
    <Container aspectRatio={aspectRatio}>
      <Iframe {...rest} title={title} frameBorder="0" allowFullScreen />
    </Container>
  )
}

Frame.defaultProps = {
  aspectRatio: 16 / 9,
}

export default Frame
