import { Box } from '@jaxson/ui/box'
import React, {
  type HTMLAttributes,
  type RefObject,
  useEffect,
  useRef
} from 'react'
import { useEffectEvent, useOnChange } from './hooks'

/**
 * Adapted from Fumadocs UI Components
 *
 * https://github.com/fuma-nama/fumadocs/blob/747b380dafe69c6061cde9e8dbf96e2a0c17bab1/packages/ui/src/components/layout/toc-thumb.tsx#L4
 */

type TOCThumb = [top: number, height: number]

const calc = (container: HTMLElement, active: string[]): TOCThumb => {
  if (active.length === 0 || container.clientHeight === 0) {
    return [0, 0]
  }

  let upper = Number.MAX_VALUE
  let lower = 0

  for (const item of active) {
    const element = container.querySelector<HTMLElement>(`a[href="#${item}"]`)
    if (!element) continue

    const styles = getComputedStyle(element)
    upper = Math.min(upper, element.offsetTop + parseFloat(styles.paddingTop))
    lower = Math.max(
      lower,
      element.offsetTop +
        element.clientHeight -
        parseFloat(styles.paddingBottom)
    )
  }

  return [upper, lower - upper]
}

const update = (element: HTMLElement, info: TOCThumb) => {
  element.style.setProperty('--toc-top', `${info[0]}px`)
  element.style.setProperty('--toc-height', `${info[1]}px`)
}

export const TocThumb: React.FC<
  HTMLAttributes<HTMLDivElement> & {
    containerRef: RefObject<HTMLElement | null>
    active: string[]
  }
> = ({ containerRef, active, ...props }) => {
  const thumbRef = useRef<HTMLDivElement>(null)
  const onResize = useEffectEvent(() => {
    if (!containerRef.current || !thumbRef.current) return
    update(thumbRef.current, calc(containerRef.current, active))
  })

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    onResize()
    const observer = new ResizeObserver(onResize)
    observer.observe(container)
    return () => {
      observer.disconnect()
    }
  }, [containerRef, onResize])

  useOnChange(active, () => {
    if (!containerRef.current || !thumbRef.current) return
    update(thumbRef.current, calc(containerRef.current, active))
  })

  return (
    <Box
      ref={thumbRef}
      role="none"
      background="$tableOfConentsLineActive"
      style={{
        marginTop: 'var(--toc-top)',
        height: 'var(--toc-height)',
        transition:
          'height 0.3s ease-in-out, margin-top 0.3s ease-in-out, background 0.3s ease-in-out'
      }}
      {...props}
    />
  )
}
