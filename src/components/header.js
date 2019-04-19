import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Wave from 'react-wavify'
import { withTheme } from 'emotion-theming'
import Chameleon from 'react-chameleon-theme-color'

const header = theme => css`
  background: ${theme.colors.header};
  padding-top: ${theme.margins.small};

  * {
    ::selection {
      background: ${theme.selections.header} !important;
    }
  }
`

const container = theme => css`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 0 ${theme.margins.large};
  z-index: -2;
`

const link = theme => css`
  color: ${theme.colors.headerText};
  font-size: ${theme.fonts.header};
  border: none;
  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`

const wave = theme => css`
  margin-top: -20px;
  height: 145px;
  width: 100%;
  position: absolute;
  background: ${theme.colors.header};
  z-index: -1;
`

const space = theme => css`
  margin-top: ${theme.margins.small};
`

const Header = p => (
  <header role='banner' css={header}>
    <Chameleon />
    <div css={container}>
      <div css={space}>
        <h1>
          <Link
            to={p.link}
            css={link}
          >
          {p.name}
          </Link>
        </h1>
      </div>
      {p.children}
    </div>
    <div css={wave}>
      <Wave fill={p.theme.colors.background}/>
    </div>
  </header>
)

export default withTheme(Header)
