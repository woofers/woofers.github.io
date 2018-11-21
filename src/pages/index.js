import React, { Component } from 'react'
import { css } from 'emotion'
import { Page } from '../components/page'
import { Wave } from '../components/wave'

class Splash extends Component {
  render() {
    return (
        <Page post={{ meta: 'Welcome' }} site={this.props.data.site.siteMetadata.title}>
            <h2>Hi I am <div style={{ width: '20em', margin: '0' }}><Wave>Jaxson</Wave></div></h2>
        </Page>
    )
  }
}

export default Splash

export const pageQuery = graphql`
  query Splash {
    ...Title
  }
`
