import React from 'react'
import { css, Global as Styles } from '@emotion/core'

const style = css`
  html {
    margin: 0;
    padding: 0;
    overflow-y: auto;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper,
  .tl-edges,
  .tl-wrapper {
    height: 100%;
  }

  body {
    background: #f27052;
    color: #fff;
    transition: color, background 0.1s ease-in-out;
  }

  a {
    text-decoration: none;
    color: #fff;
    transition: color 0.5s ease;
    &:hover {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  h4 {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    font-size: 1.1rem;
  }

  .footnote::before {
    content: "[" attr(data-label) "]";
    display: inline-block;
  }

  pre {
    background: #2d2833;
    color: #fff;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: #2d2833 !important;
    font-size: 0.95em !important;
    color: #aaaaca;
  }

  .token.function, .token.attr-value {
    color: #aaaaca;
  }

  .token.comment {
    color: #787890;
  }

  .token.punctuation {
    color: #8b8bb1;
  }

  .token.string, .token.number {
    color: #dd672c;
  }

  .token.tag {
    color: #fe8c52;
  }

  blockquote {
    padding-left: 1.16rem;
    border-left: 4px solid #f27052;
  }

  ::selection {
    background: rgba(234, 169, 67, 0.99) !important;
    color: #06324c;
  }
`

const Global = p => (
  <Styles styles={style} />
)

export default Global
