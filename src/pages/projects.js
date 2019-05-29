import React, { Component }from 'react'
import { graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { Page } from '../components/page'
import Button from '../components/button'
import { faStar, faPlayCircle, faBalanceScale, faScroll } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Link from '../components/smart-link'
import Description from '../components/description'
import { firstImage, removeBadges, Markdown } from '../components/markdown'
import { mutateRepoNames } from '../utils/repo'

const ProjectButton = p => {
  if (p.type === 'game') return (<Button href={p.url}><Icon icon={faPlayCircle}/> Play</Button>)
  else if (p.type === 'react') return (<Button href={p.url}><Icon icon={faPlayCircle}/> View Demo</Button>)
  else if (p.type === 'resume') return (<Button href={p.url}><Icon icon={faScroll}/> View Resume</Button>)
  else return (<Button href={p.url}><Icon icon={faPlayCircle}/> View Site</Button>)
}

const icon = css`
  .img {
    border-radius: 0 !important;
  }
`

const container = css`
  display: flex;
  justify-content: space-between;
`

const start = css`
  align-content: flex-start;
`

const end = css`
  align-content: flex-end;
  img {
    max-width: 500px;
    max-height: 500px;
  }
`

class Projects extends Component {
  render() {
    const { exclude } = this.props.data.site.siteMetadata
    const { title } = this.props.data.site.siteMetadata
    const repos = this.props.data.allRepositories.edges
    mutateRepoNames(repos, exclude)
    const type = repo => {
      let labels = repo.topics
      if (labels) {
        labels = labels.nodes
        labels = labels.map(label => label.topic.name)
        if (labels.includes('game')) return 'game'
        else if (labels.includes('react')) return 'react'
        else if (labels.includes('resume')) return 'resume'
      }
      return 'no type'
    }
    const Repos = repos.map(({ node }) => {
      const repo = node
      const license = repo.license ? repo.license.name : ''
      const stars = repo.stars.totalCount
      const url = repo.homepage
      const gitUrl = repo.url
      const md = repo.readme ? repo.readme.text : ''
      const name = repo.fullName
      if (!name) return null
      return (
        <div key={name} css={container}>
          <Global styles={[icon]} />
          <div key={`${name}-info`} css={start}>
            <h2><Link to={url ? url : gitUrl}>{name}</Link></h2>
            <Description text={repo.description} />
            {license ? <h4><Icon icon={faBalanceScale}/> {license}</h4> : null}
            {stars ? <h4><Icon icon={faStar}/> {stars}</h4> : null }
            {url ? <ProjectButton url={url} type={type(repo)} /> : null}
            <Button href={gitUrl}><Icon icon={faGithub}/> View on GitHub</Button>
            <Button href={`/github/${repo.name}/`}><Icon icon={faPlayCircle}/> More Info</Button>
          </div>
          <div key={`${name}-image`} css={end}>
            <Markdown content={md} repo={repo} filters={[removeBadges, firstImage]} />
          </div>
        </div>
      )
    })
    return (
      <Page title='Projects' site={title}>
        {Repos}
      </Page>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  {
    ...Title
    ...Nav
    ...GitHub
  }
`
