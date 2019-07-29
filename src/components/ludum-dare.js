import React from 'react'
import { css } from '@emotion/core'
import Widget from 'react-ludum-dare'
import { withTheme } from 'emotion-theming'

const padding = theme => css`
  td {
    padding: 0 !important;
  }
  h2 {
    color: #fff !important;
  }
  margin-bottom: ${theme.margins.medium};
`

const LD = p => (
  <div css={padding}>
    <Widget usePlaceholder={true} {...p} />
  </div>
)

export default withTheme(LD)
