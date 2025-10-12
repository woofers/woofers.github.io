import { useEffect, useState } from 'react'

const lazyMemoize = <T>(fn: () => T) => {
  return {
    get value() {
      const value = fn()
      Object.defineProperty(this, 'value', { value })
      return value
    }
  }
}

const isIosDevice = () =>
  typeof window !== 'undefined' &&
  window.navigator &&
  window.navigator.platform &&
  (/iP(ad|hone|od)/.test(window.navigator.platform) ||
    (window.navigator.platform === 'MacIntel' &&
      window.navigator.maxTouchPoints > 1))

export const useIos = () => {
  const [value, setValue] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    setValue(!!isIosDevice())
  }, [])
  return value
}
