'use client'
import { Box } from '@jaxson/ui/box'
import { vars } from '@jaxson/ui/theme'
import clsx from 'clsx'
import { useAnchorObserver } from 'hooks/use-anchor-observer'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { container, line, linkItem } from './table-of-contents.css'
import { TocThumb } from './toc-thumb'

const getItemOffset = (depth: number) => {
  if (depth <= 2) return 14
  if (depth === 3) return 26
  return 36
}

const getLineOffset = (depth: number) => {
  return depth >= 3 ? 10 : 0
}

export type TocEntry = {
  depth: number
  value: string
  id: string
  children?: TocEntry[]
}

type TableOfContentsProps = {
  toc: TocEntry[]
  className?: string
  removeFirstLine?: boolean
}

const flattenToc = (
  toc: TocEntry[] | undefined
): Omit<TocEntry, 'children'>[] => {
  if (!toc || toc.length <= 0) {
    return []
  }
  return toc.flatMap(item => [item, ...flattenToc(item.children)])
}

const removeFirst = (toc: TocEntry[] | undefined): TocEntry[] => {
  if (!toc || toc.length <= 0) {
    return []
  }
  return toc.slice(1)
}

const getTocEntryId = (id: string) => `toc-entry-${id}`

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  toc: initialToc,
  className,
  removeFirstLine = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const toc = useMemo(
    () =>
      removeFirstLine
        ? removeFirst(flattenToc(initialToc))
        : flattenToc(initialToc),
    [initialToc, removeFirstLine]
  )
  const ids = useMemo(() => toc.map(item => item.id), [toc])
  const activeIds = useAnchorObserver(ids, false)

  const [svg, setSvg] = useState<{
    path: string
    width: number
    height: number
  }>()

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    const onResize = () => {
      if (container.clientHeight === 0) return
      let w = 0
      let h = 0
      const d: string[] = []
      for (let i = 0; i < toc.length; i++) {
        const element: HTMLElement | null = container.querySelector(
          `a[href="#${toc[i]?.id}"]`
        )
        if (!element) continue

        const styles = getComputedStyle(element)
        const offset = getLineOffset(toc[i]?.depth ?? 0) + 0.5,
          top = element.offsetTop + parseFloat(styles.paddingTop),
          bottom =
            element.offsetTop +
            element.clientHeight -
            parseFloat(styles.paddingBottom)

        w = Math.max(offset, w)
        h = Math.max(h, bottom)

        d.push(`${i === 0 ? 'M' : 'L'}${offset} ${top}`)
        d.push(`L${offset} ${bottom}`)
      }

      setSvg({
        path: d.join(' '),
        width: w + 1,
        height: h
      })
    }

    const observer = new ResizeObserver(onResize)
    onResize()

    observer.observe(container)
    return () => {
      observer.disconnect()
    }
  }, [toc])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  if (!toc || toc.length === 0) {
    return null
  }

  return (
    <Box py="$300" px="$500" position="relative">
      {svg ? (
        <Box
          position="absolute"
          style={{
            top: 0,
            left: 0,
            zIndex: 10,
            insetInlineStart: 0,
            width: svg.width,
            height: svg.height,
            maskRepeat: 'no-repeat',
            maskImage: `url("data:image/svg+xml,${
              // Inline SVG
              encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svg.width} ${svg.height}"><path d="${svg.path}" stroke="black" stroke-width="2px" fill="none" /></svg>`
              )
            }")`
          }}
        >
          <TocThumb containerRef={containerRef} active={[...activeIds]} />
        </Box>
      ) : null}
      <Box
        ref={containerRef}
        as="nav"
        position="absolute"
        overflowY="auto"
        className={clsx(container, className)}
        style={{
          top: 0,
          left: 0,
          width: '212px'
        }}
      >
        {toc.map((item, index) => {
          const upper = toc[index - 1]?.depth ?? 0
          const lower = toc[index + 1]?.depth ?? 0
          const offset = getLineOffset(item.depth)
          const upperOffset = getLineOffset(upper)
          const lowerOffset = getLineOffset(lower)
          return (
            <Box
              key={item.id}
              as="a"
              data-active={activeIds.has(item.id)}
              id={getTocEntryId(item.id)}
              href={`#${item.id}`}
              onClick={e => handleClick(e, item.id)}
              display="block"
              color={activeIds.has(item.id) ? '$orange' : '$neutral400'}
              textDecoration="none"
              borderRadius="$100"
              fontSize="$sm"
              lineHeight="20px"
              fontWeight={activeIds.has(item.id) ? 'medium' : 'normal'}
              position="relative"
              className={linkItem}
              style={{
                paddingLeft: `${getItemOffset(item.depth)}px`,
                transition: 'all 0.15s ease-out',
                cursor: 'pointer'
              }}
            >
              {offset !== upperOffset ? (
                <Box
                  as="svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  position="absolute"
                  style={{
                    insetInlineStart: 0,
                    top: '-6px',
                    width: '16px',
                    height: '16px'
                  }}
                >
                  <line
                    x1={upperOffset}
                    y1="0"
                    x2={offset}
                    y2="12"
                    strokeWidth="1"
                    style={{
                      stroke: vars.colors.tableOfConentsLine
                    }}
                  />
                </Box>
              ) : null}
              <Box
                position="absolute"
                lineHeight="20px"
                style={{
                  insetBlock: 0,
                  width: '1px',
                  ...(offset !== upperOffset && { top: '6px' }),
                  ...(offset !== lowerOffset && { bottom: '6px' }),
                  insetInlineStart: offset
                }}
                className={line}
              />
              {item.value}
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
