import React from 'react'
import P8 from 'react-pico-8'
import { css } from '@emotion/core'
import { withTheme } from 'emotion-theming'

const pico = theme => css`
  margin: 16px 0;
  .p8_menu_button {
    button {
      background: ${theme.colors.link.pico.normal};
    }
    &:hover {
      button {
        background: ${theme.colors.link.pico.hover};
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

const Pico8 = p => (
  <P8 css={pico} {...p} />
)

Pico8.defaultProps = {
  center: true
}

export default withTheme(Pico8)
