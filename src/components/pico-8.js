import React from 'react'
import P8 from 'react-pico-8'
import { css } from '@emotion/core'
import { withTheme } from 'emotion-theming'

const pico = theme => css`
  margin: ${theme.margins.small} 0;
  .p8_menu_button {
    button {
      background: ${theme.colors.pico};
    }
    &:hover {
      button {
        background: ${theme.colors.text};
      }
    }
  }
  .p8_menu_button img {
    border-radius: 0;
    max-width: none;
  }
  #p8_container {
    > button {
      border-radius: ${theme.margins.image};
      img {
       margin-bottom: auto;
      }
    }
  }
`

const Pico8 = p => (
  <P8 src={p.src}
      center={true}
      placeholder={p.placeholder}
      css={pico}
  />
)

export default withTheme(Pico8)
