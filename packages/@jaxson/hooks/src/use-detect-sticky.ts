import { useRef, useState } from 'react'

const defaultThreshold = [1]

export const useDetectSticky = <TRef extends HTMLElement>({
  threshold = defaultThreshold,
  rootMargin = '-1px 0px 0px 0px',
  ...rest
}: IntersectionObserverInit = {}) => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const setRef = (node: TRef) => {
    let subcribed = true
    ref.current = node
    const observer = new IntersectionObserver(
      ([e]) => {
        if (subcribed && e) {
          setIsSticky(e.intersectionRatio < 1)
        }
      },
      { root: null, threshold, rootMargin, ...rest }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      subcribed = false
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }
  return [isSticky, setRef] as const
}
