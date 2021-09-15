import { createGlobal } from 'emotion'

const Global = createGlobal`
  * {
    box-sizing: inherit;
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

  ::selection {
    background: rgba(0, 40, 255, 0.3) !important;
    color: #314cf0 !important;
  }
`

export default Global
