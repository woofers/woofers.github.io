import React from 'react'
import P8 from 'react-pico-8'
import { styled } from 'emotion'

const Pico8 = styled(P8)`
  margin: 16px 0;
  .p8_menu_button {
    button {
      background: ${props => props.theme.colors.link.pico.normal};
    }
    &:hover {
      button {
        background: ${props => props.theme.colors.link.pico.hover};
      }
    }
  }
  .p8_menu_button img {
    border-radius: 0;
    max-width: none;
  }
  #p8_container {
    > button {
      img {
       margin-bottom: auto;
      }
    }
  }
`

Pico8.defaultProps = {
  center: true
}

export default Pico8
