import React, { Component } from "react"
import { css } from 'emotion'
import DocumentTitle from 'react-document-title'
import cheerio from 'cheerio'
import { margins } from '../components/globals'
import 'font-awesome/css/font-awesome.min.css';
import makeTitle from '../utils/title'

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


class GameTemplate extends Component {
  render() {
      const post = this.props.data.orga
      const content = cheerio.load(post.html)
      const game = content('iframe', 'body')
      const info = content('body')
      info.find('iframe').remove()
      const { title, icon, date } = post.meta
      const iconMode = post.meta.icon_mode
      const showTitle = post.meta.show_title !== 'nil'
      const style = ((title && showTitle) || date) ? org : `${org} ${titleStyle}`
      const tab = makeTitle(title, this.props.data.site.siteMetadata.title)
      const _page = this.page(post)
      return (
          <DocumentTitle title={tab}>
              <article>
                  <div style={{ textAlign: 'right' }}>
                      {showTitle ?
                       <div>
                           <h1 style={{ display: 'inline' }} >{title}</h1>
                           <img style={{ marginLeft: '10px', imageRendering: iconMode }} width="55px" height="55px" src={icon} />
                       </div>
                       : null }
                      {date ? <p>{date}</p> : null }
                  </div>
                  <div className={grid}>
                      <div style={{ textAlign: 'center', margin: `${margins.small} 0`, position: 'relative', 'paddingTop': '56.25%' }} className={style} dangerouslySetInnerHTML={{ __html: game.toString() }} />
                      <div style={{ textAlign: 'left' }} className={style} dangerouslySetInnerHTML={{ __html: info.toString() }} />
                  </div>

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
