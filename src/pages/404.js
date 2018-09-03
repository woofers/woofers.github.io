import Link from 'gatsby-link'
import React from 'react'
import FA from 'react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';

const NotFoundPage = () => (
  <center>
    <h1>Page not found</h1>
    <p style={{ fontSize: '17em' }}><FA name="exclamation-triangle" /></p>
    <p style={{ display: 'inline' }}>You just hit a route that does not exist . . .</p>
    <h2 style={{ display: 'inline', marginLeft: '0.4em' }}>
      <Link to="/">Go home?</Link>
    </h2>
  </center>
)

export default NotFoundPage
