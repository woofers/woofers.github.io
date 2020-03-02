import React, { Component } from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
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

const push = theme => css`
  padding-top: ${theme.margins.small};
`

const container = css`
  position: relative;
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

class Projects extends Component {
  constructor (props) {
    super(props)
    this.state = {  }
    this.render = this.render.bind(this)
  }

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
      const end = theme => css`
        z-index: -1;
        top: 0;
        right: 0;
        transition: ${theme.transitions.hover};
        transition-property: opacity;
        position: absolute;
        align-content: flex-end;
        align-self: center;
        opacity: 0.75;
        &[aria-hidden=true] {
          opacity: 0;
        }
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
      return (
        <div key={name} css={container}
          onMouseEnter={() => {
            const cur = {}
            cur[name] = true
            this.setState(cur)
          }}
          onMouseLeave={() => {
            const cur = {}
            cur[name] = false
            this.setState(cur)
          }}
        >
          <div key={`${name}-info`} css={start}>
            <h2><Link to={`/projects/${repo.name}/`}>{name}</Link></h2>
            <Description text={repo.description} />
            {url ? <ProjectButton href={url} type={type(repo)} /> : null}
            <Button inline={true} align="left" href={`/projects/${repo.name}/`}><Icon icon={faInfoCircle}/> More Info</Button>
          </div>
          <div key={`${name}-image`} css={end} aria-hidden={!this.state[name]}>
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
