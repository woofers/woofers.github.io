import React from 'react'
import { css } from '@emotion/react'
import { FadeLink as Link } from './link'
import { useStaticQuery, graphql } from 'gatsby'
import { camelCaseToPascalCase as uppercase } from '../utils/case'
import { Tada } from 'react-micron'

const style = theme => css`
  display: flex;
  a {
    padding: 11.5px 20px;
    font-size: 17px;
    font-weight: 700;
    box-shadow: none;
  }
  div {
    height: 50px;
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
          <Tada events="onMouseOver" key={name}>
            <Link to={link} underline>{uppercase(name)}</Link>
          </Tada>
        )
      }
    </nav>
  )
}

Nav.defaultProps = {
  title: ''
}

export default Nav
