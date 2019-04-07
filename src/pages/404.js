import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import { Page } from '../components/page'
import { css } from '@emotion/core'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'

const style = css`
  text-align: center;
`

const inline = css`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  list-style: none;
  justify-content: center;
`

class NotFound extends Component {
  render() {
    const title = 'Page Not Found'
    return (
      <Page title={title} site={this.props.data.site.siteMetadata.title}>
        <div css={style}>
          <h1>{title}</h1>
          <p style={{ fontSize: '17em' }}>
            <Icon icon={faExclamationTriangle} />
          </p>
          <ul css={inline}>
            <li>
              <h3 css={ theme => css`margin-top: ${theme.margins.normal} !important;` }>
                You just hit a route that does not exist . . .
              </h3>
            </li>
            <li>
              <h2 css={ theme => css`margin-left: ${theme.margins.extraSmall} !important;` }>
                <Link to="/">Go home?</Link>
              </h2>
            </li>
          </ul>
        </div>
      </Page>
    )
  }
}
export default NotFound

export const pageQuery = graphql`
  {
    ...Title
  }
`
