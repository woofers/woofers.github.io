import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'
import 'prismjs/themes/prism-solarizedlight.css'

const name = "Jaxson Van Doorn"
const home = "/"
const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet
      title={name}
      meta={[
        { name: 'keywords', content: 'gatsbyjs, org-mode, jaxson' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 720,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <Header name={name} link={home}/>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
