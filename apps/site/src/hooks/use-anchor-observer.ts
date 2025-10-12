import { useMemo, useSyncExternalStore } from 'react'

/**
 * Adapted from Fumadocs UI Components
 * Modified to use a Set instead of an array
 * and useSyncExternalStore instead of useState
 *
 * https://github.com/fuma-nama/fumadocs/blob/dev/packages/core/src/utils/use-anchor-observer.ts
 */

let data = {
  active: new Set<string>()
}

const getSnapshot = () => {
  return data
}

const makeSubscribe =
  (watch: string[], single: boolean) => (onChange: () => void) => {
    let visible = [] as string[]
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && !visible.includes(entry.target.id)) {
            visible = [...visible, entry.target.id]
          } else if (
            !entry.isIntersecting &&
            visible.includes(entry.target.id)
          ) {
            visible = visible.filter(v => v !== entry.target.id)
          }
        }

        if (visible.length > 0) {
          data = { ...data, active: new Set(visible) }
          onChange()
        }
      },
      {
        rootMargin: single ? '-80px 0% -70% 0%' : `-20px 0% -10% 0%`,
        threshold: 1
      }
    )

    const onScroll = () => {
      const element = document.scrollingElement
      if (!element) return
      const top = element.scrollTop
      if (top <= 0 && single) {
        data = { ...data, active: new Set(watch.slice(0, 1)) }
        onChange()
      } else if (top + element.clientHeight >= element.scrollHeight - 6) {
        data = {
          ...data,
          active:
            data.active.size > 0 && !single
              ? new Set(
                  watch.slice(
                    watch.indexOf(data.active.values().next().value || '')
                  )
                )
              : new Set(watch.slice(-1))
        }
      }
    }
    watch.forEach(heading => {
      const element = document.getElementById(heading)
      if (element) observer.observe(element)
    })
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }

export const useAnchorObserver = (watch: string[], single: boolean) => {
  const subscribe = useMemo(() => makeSubscribe(watch, single), [watch, single])
  const { active } = useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
  return active
}
