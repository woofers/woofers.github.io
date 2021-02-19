import { useEffect } from 'react'
import { navigate } from 'gatsby'

const NotFound = () => {
  useEffect(() => {
    navigate('/', { replace: true })
  }, [])
  return null
}

export default NotFound
