import React from 'react'
import { styled } from 'emotion'
import Link from 'link'

const radius = `
  display: inline-block;
  border-radius: 4px;
`

const ButtonLink = styled(Link)`
  > div {
    ${radius}
    background: ${props => props.theme.colors.accentGradient};
    & > div {
      ${radius}
      background: ${props => props.theme.colors.background};
      height: 100%;
      font-weight: 700;
      padding: 6px 12px;
      color: ${props => props.theme.colors.accent};
      font-size: 14px;
      border: 1px solid ${props => props.theme.colors.accent};
      transition: background 0.7s cubic-bezier(0.04, 0.9, 0.48, 1.15) 0s;
      &:hover {
        background: rgba(0, 0, 0, 0);
        color: ${props => props.theme.colors.text.light};
        border: none;
        padding: 7px 13px;
      }
    }
  }
`

const Button = ({ children, ...rest }) => (
  <ButtonLink {...rest}>
    <div>
      <div>
        {children}
      </div>
    </div>
  </ButtonLink>
)

const back = path => {
  const noSlash = path.replace(/\/$/, '')
  const upNoSlash = noSlash.substring(0, noSlash.lastIndexOf('/'))
  const up =  upNoSlash + '/'
  if (up === '/projects/') return '/'
  return up
}

const BackButton = p => {
  const { location, children, href, ...rest } = p
  const { pathname } = location || { pathname: '' }
  const path = href || back(pathname)
  return (
    <Button
      href={path}
      {...rest}
    >
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path></svg>
      Back
    </Button>
  )
}

export default BackButton
