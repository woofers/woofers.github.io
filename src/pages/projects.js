import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import { Page } from '../components/page'
import Button from '../components/page-link'
import { faStar, faBalanceScale, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import Link from '../components/smart-link'
import Description from '../components/description'
import ProjectButton from '../components/project-button'
import { firstImage, removeBadges, Markdown } from '../components/markdown'
import { type, mutateRepoNames } from '../utils/repo'
import dlv from 'dlv'

const push = theme => css`
  padding-top: ${theme.margins.small};
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
  @media screen and (max-width: 1000px) {
    margin-right: auto;
    margin-left: auto;
  }
  img {
    margin: 10px auto;
    max-height: 600px;
    display: block;
    @media screen and (min-width: 1000px) {
      max-width: 500px;
      max-height: 405px;
    }
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
      const md = dlv(repo.readme, 'text')
      const name = repo.fullName
      if (!name) return null
      return (
        <div key={name} css={container}>
          <div key={`${name}-info`} css={start}>
            <h2><Link to={`/projects/${repo.name}/`}>{name}</Link></h2>
            <Description text={repo.description} />
            {license && license !== 'Other' ? <h4><Icon icon={faBalanceScale}/> {license}</h4> : null}
            {stars ? <h4><Icon icon={faStar}/> {stars}</h4> : null }
            {url ? <ProjectButton href={url} type={type(repo)} /> : null}
            <Button inline={true} align="left" href={`/projects/${repo.name}/`}><Icon icon={faInfoCircle}/> More Info</Button>
          </div>
          <div key={`${name}-image`} css={end}>
            <Markdown alt={name} content={md} repo={repo} centerImages={false} filters={[removeBadges, firstImage]} />
          </div>
        </div>
      )
    })
    return (
      <div css={push}>
        <Page title='Projects' site={title}>
          {Repos}
        </Page>
      </div>
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
