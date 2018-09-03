import Link from 'gatsby-link'
import React from 'react'

const NotFoundPage = () => (
  <div>
    <h1>Page not found</h1>
    <p style={{ display: 'inline' }}>You just hit a route that does not exist . . .</p>
    <h2 style={{ display: 'inline', marginLeft: '0.4em' }}>
      <Link to="/">Go home?</Link>
    </h2>
  </div>
)

export default NotFoundPage
