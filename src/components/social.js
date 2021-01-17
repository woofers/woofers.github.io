import React from 'react'
import { css } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby'
import { FadeLink } from './link'
import { FaGithub,
         FaLinkedinIn as FaLinkedin,
         FaStackOverflow,
         FaTwitter,
         FaEnvelope } from 'react-icons/fa'
import { Flicker } from 'react-micron'

const style = css`
  border: none;
  font-size: 24px;
  color: #fff;
`

const spacing = css`
  > a:not(:last-of-type) {
    margin-right: 16px;
  }
`

const icons = {
  github: FaGithub,
  stackoverflow: FaStackOverflow,
  twitter: FaTwitter,
  linkedin: FaLinkedin,
  email: FaEnvelope,
}

const Entry = p => {
  const { children, icon: Icon, title, link, ...rest } = p
  return (
    <FadeLink
      to={link}
      target="_blank"
      rel="noopener noreferrer"
      css={style}
      title={title}
      {...rest}
    >
      <Flicker events="onMouseOver">
        <Icon />
        {children}
      </Flicker>
    </FadeLink>

  )
}

export const Social = p => {
  const { social } = useStaticQuery(graphql`{ ...Social }`).site.siteMetadata
  for (const key in social) {
    social[key].icon = icons[key]
  }
  return (
    <div css={spacing}>
      {
        Object.keys(social).map(key => {
          const { name } = social[key]
          return (
            <Entry key={`social-${name}`} title={name} {...social[key]} />
          )
        })
      }
    </div>
  )
}

export default Social
