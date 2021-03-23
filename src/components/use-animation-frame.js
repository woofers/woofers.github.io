// Adapted from https://css-tricks.com/using-requestanimationframe-with-react-hooks/
import React from 'react'

const useAnimationFrame = callback => {
  // Use useRef for mutable variables that we want to persist
  // without triggering a re-render on their change
  const requestRef = React.useRef()
  const previousTimeRef = React.useRef()
  const startTimeRef = React.useRef()
  const stopedRef = React.useRef()
  const cancel = () => {
    cancelAnimationFrame(requestRef.current)
    stopedRef.current = true
  }
  const animate = time => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current
      const runTime = time - startTimeRef.current
      callback(deltaTime, runTime, cancel)
    }
    else {
      startTimeRef.current = time
    }
    previousTimeRef.current = time
    if (!stopedRef.current) {
      requestRef.current = requestAnimationFrame(animate)
    }
  }
  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current)
  }, [])
}

export default useAnimationFrame
