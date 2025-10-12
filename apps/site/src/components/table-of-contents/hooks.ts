import { useCallback, useRef, useState } from 'react'

const isDifferent = (a: unknown, b: unknown): boolean => {
  if (Array.isArray(a) && Array.isArray(b)) {
    return b.length !== a.length || a.some((v, i) => isDifferent(v, b[i]))
  }

  return a !== b
}

export const useOnChange = <T>(
  value: T,
  onChange: (current: T, previous: T) => void,
  isUpdated: (prev: T, current: T) => boolean = isDifferent
) => {
  const [prev, setPrev] = useState<T>(value)

  if (isUpdated(prev, value)) {
    onChange(value, prev)
    setPrev(value)
  }
}

export const useEffectEvent = <F extends (...params: never[]) => unknown>(
  callback: F
): F => {
  const ref = useRef(callback)
  ref.current = callback
  return useCallback(((...params) => ref.current(...params)) as F, [])
}
