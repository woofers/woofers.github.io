import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'

const style = css`
  background: #a7a7a7;
`

const Header = ({ siteTitle }) => (
  <header css={style}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
