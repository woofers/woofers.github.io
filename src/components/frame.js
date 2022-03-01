import React from 'react'
import { styled } from 'ruffsponsive'

const InnerFrame = styled('iframe', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
})

const Container = styled('div', {
  textAlign: 'center',
  margin: '2px 0 23px 0',
  position: 'relative',
})

const Frame = p => {
  const { aspectRatio, title, ...rest } = p
  return (
    <Container
      css={{ color: 'currentColor', paddingBottom: `${100 / aspectRatio}%` }}
    >
      <InnerFrame {...rest} title={title} frameBorder="0" allowFullScreen />
    </Container>
  )
}

Frame.defaultProps = {
  aspectRatio: 16 / 9,
}

export default Frame
