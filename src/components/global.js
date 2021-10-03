import { css, Global as GlobalTag } from 'emotion'

const global = theme => css`
  * {
    box-sizing: inherit;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  html,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p {
    font-family: 'Cabin', sans-serif;
  }

  p {
    margin: 0 0 1.6rem;
    padding: 0;
  }

  img {
    max-width: 100%;
    margin: 0;
    padding: 0;
    border-radius: 25px;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: #000;
  }

  ul {
    margin-left: 1.6rem;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.6rem;
    list-style-position: outside;
    list-style-image: none;
  }

  li {
    padding-left: 0;
    margin-bottom: 0.8rem;
  }

  pre {
    margin: 0;
    margin-bottom: 1.6rem;
    font-size: 0.85rem;
    line-height: 1.42;
    overflow: auto;
    word-wrap: normal;
    padding: 1.6rem;
    background: ${theme.colors.code};
    color: ${theme.colors.text.light};
  }

  pre[class*='language-'] {
    background: ${theme.colors.code} !important;
    font-size: 0.95em !important;
    color: ${theme.colors.text.code};
  }

  blockquote {
    padding: 0 0 0 20px;
    margin: 0 28px 28px 28px;
    border-left: 4px solid ${theme.colors.accent};
    *:last-of-type {
      margin: 0;
      padding: 0;
    }
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
  .hljs-keyword,
  .hljs-name,
  .hljs-link {
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

  ::selection {
    background: rgba(0, 40, 255, 0.3) !important;
    color: #314cf0 !important;
  }
`

const Global = () => <GlobalTag styles={global} />

export default Global
