import { useEffect } from 'react'

const useCursorColor = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const onMove = e => {
      const target = e?.target
      const hasTarget = target?.nodeName?.toLowerCase() !== 'main'
      const getComputedStyle = (element) => window ? (element.parentNode ? window.getComputedStyle(element) : false) : false
      const style = getComputedStyle(target)
      const color = style?.getPropertyValue('color')
      const background = style?.getPropertyValue('background-color')
      const hasColor = color => color !== 'rgba(0, 0, 0, 0)'
      const result = hasColor(background) ? background : color
      console.log(result)
      document.documentElement.style.setProperty('--mouse-color', result)
    }
    document.addEventListener('mousemove', onMove, false)
    return () => {
      document.removeEventListener('mousemove', onMove, false)
    }
  }, [])
  return null
}

export default useCursorColor
