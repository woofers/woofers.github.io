import React from 'react'
import { css } from '@emotion/core'
import { useStaticQuery, graphql } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { FaGithub,
         FaLinkedinIn as FaLinkedin,
         FaStackOverflow,
         FaTwitter,
         FaEnvelope } from 'react-icons/fa'

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
    <OutboundLink
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      css={style}
      title={title}
      {...rest}
    >
      <Icon />
      {children}
    </OutboundLink>
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
