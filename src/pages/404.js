import React from 'react'

const NotFoundPage = () => {
  if (typeof window !== `undefined`) window.location = '/projects/';
}

export default NotFoundPage
