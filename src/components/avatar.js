import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import styled from '@emotion/styled'

const Image = styled.div`
  width: 460px;
  position: relative;
  :before {
    z-index: 2;
    content: '';
    display: block;
    position: absolute;
    border: 50px solid transparent;
    border-top-color: transparent;
    border-top-style: solid;
    border-top-width: 50px;
    border-top: 50px solid #fefefe;
    top: -60px;
    left: -65px;
    box-shadow: 0px -7px 6px -9px black;
    transform: rotate(135deg);
  }
  :after {
    content: '';
    display: block;
    position: absolute;
    border: 50px solid transparent;
    border-bottom-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 50px;
    border-bottom: 50px solid #fefefe;
    bottom: -60px;
    right: -65px;
    box-shadow: 0px 7px 6px -9px black;
    transform: rotate(135deg);
  }
`

const Avatar = () => (
  <Image>
    <StaticImage
      src="https://avatars.githubusercontent.com/u/7284672?v=4"
      alt="A Jaxson"
      placeholder="blurred"
      layout="fixed"
      width={460}
      height={460}
    />
  </Image>
)

export default Avatar
