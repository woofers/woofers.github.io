import React from 'react'
import { css, Global as Styles } from '@emotion/react'

const style = theme => css`
  html {
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  body {
    background: ${theme.colors.accent};
    color: ${theme.colors.text.light};
    transition: color, background 0.1s ease-in-out;
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: ${theme.colors.link};
    box-shadow: 0 -2px 0 #f2705729 inset;
    &:after {
      display: block;
      content: '';
      border-bottom: solid 2px currentColor;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
      transform-origin: 100% 50%
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }

    text-decoration: none;
    color: ${theme.colors.link.light.normal};
    transition: color 0.5s ease;
    &:hover {
      color: ${theme.colors.link.light.hover};
    }
  }

  .tl-wrapper {
    overflow: auto !important;
  }

  h4 {
    font-weight: 400;
    font-size: 1.1rem;
  }

  .footnote::before {
    content: "[" attr(data-label) "]";
    display: inline-block;
  }

  pre {
    background: ${theme.colors.code};
    color: ${theme.colors.text.light};
    *::selection {
      background: ${theme.colors.selection.code} !important;
    }
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: ${theme.colors.code} !important;
    font-size: 0.95em !important;
    color: ${theme.colors.text.code};
  }

  .hljs-comment {
    color: ${theme.colors.text.comment};
  }

  .hljs-bullet {
    color: ${theme.colors.text.punctuation};
  }

  .hljs-string {
    color: ${theme.colors.text.string};
  }

  .hljs-keyword, .hljs-name, .hljs-link {
    color: ${theme.colors.text.tag};
  }

  .hljs-attr {
    color: ${theme.colors.text.code};
  }

  .language-yaml {
    .hljs-attr {
      color: ${theme.colors.text.tag};
    }

    .hljs-string {
      color: ${theme.colors.text.code};
    }
  }

  blockquote {
    padding-left: 1.16rem;
    border-left: 4px solid ${theme.colors.accent};
  }

  ::selection {
    background: ${theme.colors.selection.background} !important;
    color: ${theme.colors.selection.text};
  }
`

const Global = p => (
  <Styles styles={style} />
)

export default Global
