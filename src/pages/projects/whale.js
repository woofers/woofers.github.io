import React, { Component } from 'react'
import DocumentTitle from 'react-document-title'
import { css } from 'emotion'

const frame = css(`
  width: 405px;
  height: 720px;
`)

class Whale extends Component {
  render() {
    const siteName = this.props.data.site.siteMetadata.title
    let title = `Whale - ${siteName}`
    return (
      <DocumentTitle title={title}>
        <div style={{ textAlign: 'center' }}>
          <iframe className={frame} src='game/index.html'/>
        </div>
      </DocumentTitle>
    )
  }
}

export default Whale

export const pageQuery = graphql`
    query TitleBySlug {
        site {
            siteMetadata {
                title
            }
        }
    }
`
