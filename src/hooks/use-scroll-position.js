import { useState, useEffect } from 'react'

const useScrollPosition = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    if (typeof window === 'undefined') return
    let ticking = false
    const onScroll = () => {
      const x = window.scrollX
      const y = window.scrollY
      const onFrame = () => {
        setData({ x, y })
        ticking = false
      }
      if (!ticking) {
        requestAnimationFrame(onFrame)
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, false)
    return () => {
      window.removeEventListener('scroll', onScroll, false)
    }
  }, [setData])
  return data
}

export default useScrollPosition
