import React from 'react'
import { css } from '@emotion/react'
import IconLink from './icon-link'
import { FadeLink as Link } from './link'
import { useStaticQuery, graphql } from 'gatsby'
import { FaGithub,
         FaPencilAlt,
         FaScroll } from 'react-icons/fa'
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
  const data = useStaticQuery(graphql`{
    ...Nav
    ...Social
    ...Resume
  }`)
  console.log(data)
  const { site } = data
  const { siteMetadata } = site
  const { resume, social } = siteMetadata
  const { twitter, github } = social
  const links = Object.entries(data.site.siteMetadata.nav)
  return (
    <nav css={style}>
      <IconLink to={github.link} inline={false} icon={FaGithub}>{github.name}</IconLink>
      <IconLink to={resume} inline={false} icon={FaScroll}>Resume</IconLink>
      <IconLink to="/blog/" inline={false} icon={FaPencilAlt}> Blog</IconLink>
    </nav>
  )
}

Nav.defaultProps = {
  title: ''
}

export default Nav
