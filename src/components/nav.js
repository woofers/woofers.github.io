import React from 'react'
import { css } from '@emotion/core'
import { FadeLink as Link } from './link'
import { useStaticQuery, graphql } from 'gatsby'
import { camelCaseToPascalCase as uppercase } from '../utils/case'

const style = theme => css`
  display: flex;
  a {
    padding: 11.5px 20px;
    height: 50px;
    font-size: 17px;
    font-weight: 700;
    box-shadow: none;
  }
  justify-content: flex-end;
  @media (min-width: ${theme.breakpoints.nav.breakpoint}) {
    justify-content: flex-start;
  }
`

const Nav = p => {
  const data = useStaticQuery(graphql`{ ...Nav }`)
  const links = Object.entries(data.site.siteMetadata.nav)
  return (
    <nav css={style}>
      {
        links.map(([name, link]) =>
          <Link to={link} underline key={name}>{uppercase(name)}</Link>
        )
      }
    </nav>
  )
}

Nav.defaultProps = {
  title: ''
}

export default Nav
