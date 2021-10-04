import React from 'react'
import { styled } from 'emotion'
import Link from 'link'
import { useRouter } from 'next/router'

const radius = `
  display: inline-block;
  border-radius: 5px;
`

const ButtonLink = styled(Link)`
  > div {
    width: 87px;
    ${radius}
    background: linear-gradient(110deg, #fe7255 10%, #fe5f55);
    & > div {
      ${radius}
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: ${props => props.theme.colors.background};
      height: 100%;
      font-family: 'Mulish', sans-serif;
      letter-spacing: 0.3px;
      line-height: 18.5px;
      font-size: 16px;
      font-weight: 900;
      padding: 10px;
      color: #5d5d5d;
      border: 1px solid #ccc;
      transition: background 0.7s cubic-bezier(0.04, 0.9, 0.48, 1.15) 0s;
      &:hover {
        background: rgba(0, 0, 0, 0);
        color: ${props => props.theme.colors.text.light};
        border: none;
        padding: 11px;
      }
      > svg {
        margin-right: 5px;
      }
    }
  }
`

const Button = ({ children, ...rest }) => (
  <ButtonLink {...rest}>
    <div>
      <div>{children}</div>
    </div>
  </ButtonLink>
)

const back = path => {
  const noSlash = path.replace(/\/$/, '')
  const upNoSlash = noSlash.substring(0, noSlash.lastIndexOf('/'))
  const up = upNoSlash + '/'
  if (up === '/projects/') return '/'
  return up
}

const BackButton = p => {
  const router = useRouter()
  const { children, href, ...rest } = p
  const pathname = router?.asPath
  const path = href || back(pathname)
  return (
    <Button href={path} {...rest}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="28px"
        width="28px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"></path>
      </svg>
      Back
    </Button>
  )
}

export default BackButton
