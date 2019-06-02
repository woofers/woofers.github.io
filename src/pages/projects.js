import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { Page } from '../components/page'
import Button from '../components/button'
import { faStar, faBalanceScale, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Link from '../components/smart-link'
import Description from '../components/description'
import ProjectButton from '../components/project-button'
import { firstImage, removeBadges, Markdown } from '../components/markdown'
import { type, mutateRepoNames } from '../utils/repo'
import dlv from 'dlv'

const icon = css`
  .img {
    border-radius: 0 !important;
  }
`

const container = css`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const start = css`
  align-content: flex-start;
  align-self: center;
  max-width: 650px;
`

const end = css`
  align-content: flex-end;
  align-self: center;
  img {
    margin: 10px 0;
    max-width: 500px;
    max-height: 400px;
  }
`

class Projects extends Component {
  render() {
    const { exclude } = this.props.data.site.siteMetadata
    const { title } = this.props.data.site.siteMetadata
    const repos = this.props.data.allRepositories.edges
    mutateRepoNames(repos, exclude)
    const Repos = repos.map(({ node }) => {
      const repo = node
      const license = dlv(repo.license, 'name')
      const stars = repo.stars.totalCount
      const url = repo.homepage
      const gitUrl = repo.url
      const md = dlv(repo.readme, 'text')
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
            {url ? <ProjectButton href={url} type={type(repo)} /> : null}
            <Button href={`/github/${repo.name}/`}><Icon icon={faInfoCircle}/> More Info</Button>
          </div>
          <div key={`${name}-image`} css={end}>
            <Markdown alt={name} content={md} repo={repo} centerImages={false} filters={[removeBadges, firstImage]} />
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
