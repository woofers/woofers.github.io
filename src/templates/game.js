import React, { Component } from "react"
import { css } from 'emotion'
import DocumentTitle from 'react-document-title'
import { margins } from '../components/globals'
import { Breadcrumb } from '../components/breadcrumb'
import 'font-awesome/css/font-awesome.min.css';
import makeTitle from '../utils/title'
import FA from 'react-fontawesome'

const org = css(`
  div {
    margin-bottom: ${margins.small};
  }
`)

const titleStyle = css(`
  div:first-child h1 {
    display: none;
  }
`)

const grid = css(`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(405px, 1fr));
  grid-template-rows: 960px;
  grid-column-gap: 50px;
  grid-row-gap: 6px;
`)

const iframeContainer = css(`
  text-align: center;
  margin: ${margins.small} 0;
  position: relative;
  padding-top: 56.25%;
`)

const iframe = css(`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`)

class GameTemplate extends Component {
  page(post) {
    const divStyle = post.meta.landscape === 'nil' ? grid : ''
    return (
      <div className={divStyle}>
        <div className={iframeContainer}>
          <iframe src={post.meta.game} className={iframe} frameBorder="0" allowFullScreen />
        </div>
        <div style={{ textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }

  render() {
    const post = this.props.data.orga
    const slug = post.fields.slug
    const { title, icon, date } = post.meta
    const iconMode = post.meta.icon_mode
    const showTitle = post.meta.show_title !== 'nil'
    const style = ((title && showTitle) || date) ? org : `${org} ${titleStyle}`
    const tab = makeTitle(title, this.props.data.site.siteMetadata.title)
    const _page = this.page(post)
    const links = [{ name: 'Projects', link: '/projects/'},
                   { name: `${title}` }]
    return (
      <DocumentTitle title={tab}>
        <article>
          <Breadcrumb links={links} />
          <div style={{ textAlign: 'right' }}>
            {showTitle ?
              <div>
                <h1 style={{ display: 'inline' }} >{title}</h1>
                <img style={{ marginLeft: '10px', imageRendering: iconMode }} width="55px" height="55px" src={icon} />
              </div>
              : null }
            {date ? <p>{date}</p> : null }
          </div>
          {_page}
        </article>
      </DocumentTitle>
    )
  }
}

export default GameTemplate

export const pageQuery = graphql`
  query Game($slug: String!) {
    ...Post
  }
`
