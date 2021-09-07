import React from 'react'
import { useRouter } from 'next/router'

const withLocation = Component => {
  return props => {
    const router = useRouter()
    return <Component location={router?.location} {...props} />
  }
}

export default withLocation
