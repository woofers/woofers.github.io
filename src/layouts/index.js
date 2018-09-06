import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { css } from 'emotion'
import Header from '../components/header'
import './index.css'
import 'prism-themes/themes/prism-duotone-space.css'

const name = "Jaxson Van Doorn"
const home = "/"
const divStyle = css(`
  margin: 0px auto;
  max-width: 720px;
  padding: 0px 1.0875rem 1.45rem;
`)

const TemplateWrapper = ({ children }) => (

  <div>
    <Helmet
      title={name}
      meta={[
        { name: 'keywords', content: 'gatsbyjs, org-mode, jaxson' },
      ]}
    />
      <Header name={name} link={home}/>
      <div className={divStyle}>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
