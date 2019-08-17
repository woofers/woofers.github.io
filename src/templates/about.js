import React, { Component } from "react"
import { Content } from '../components/content'
import { Page } from '../components/page'
import { AboutProfile as Profile } from '../components/profile'
import { graphql } from 'gatsby'
import { withTheme } from 'emotion-theming'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Button from '../components/button'

class AboutTemplate extends Component {
  render() {
    const post = this.props.data.orgContent
    const { social, resume } = this.props.data.site.siteMetadata
    const { github } = social
    const { margins } = this.props.theme
    return (
      <Page title={post.meta.title} site={this.props.data.site.siteMetadata.title}>
        <Profile width={margins.profile} height={margins.profile} >
          <Button href={github.link}><Icon icon={faGithub}/> {github.name}</Button>
          <Button href={resume}><Icon icon={faScroll}/> Resume</Button>
        </Profile>
        <Content html={post.html} hideTitle={true} />
      </Page>
    )
  }
}

export default withTheme(AboutTemplate)

export const pageQuery = graphql`
  query($slug: String!) {
    ...Title
    ...Social
    orgContent(fields: {slug: {eq: $slug}}) {
      ...Content
    }
  }
`
