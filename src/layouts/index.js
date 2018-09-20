import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { css } from 'emotion'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import 'prism-themes/themes/prism-duotone-space.css'

const name = "Jaxson Van Doorn"
const home = "/"
const divStyle = css(`
  margin: 2rem auto 3.5rem;
  max-width: 960px;
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
    <main role='main' className={divStyle}>
      {children()}
    </main>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
