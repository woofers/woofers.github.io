import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'
import gsap from 'gsap'
import { swipeTopDirection, swipeBottomDirection } from './utils'

const swipe = p => {
    const { node, exit, direction, top, triggerName, fade, offset, entryOffset } = p
    let autoAlpha = { }
    if (fade) autoAlpha = { on: 1, off: 0 }
    const scrollTop =
        (document.scrollingElement && document.scrollingElement.scrollTop) ||
        document.body.scrollTop ||
        window.pageYOffset

    if (triggerName === 'entry' && top === 'entry') {
        return gsap.timeline()
            .set(node, {
                overflowY: 'hidden',
                height: '100vh',
                scrollTop: scrollTop,
            })
            .from(node, { ...swipeTopDirection(direction, true, offset), duration: exit.length })
            .set(node, { overflowY: 'initial' })
    } else if (triggerName === 'entry') {
        return gsap.timeline().from(
            node,
            {
                ...swipeBottomDirection(direction, false, fade ? 0 : entryOffset),
                duration: exit.length,
            }
        )
    } else if (triggerName === 'exit' && top === 'exit') {
        return gsap.timeline()
            .set(node, {
                overflowY: 'hidden',
                height: '100vh',
                scrollTop: scrollTop,
                autoAlpha: autoAlpha.on
            })
            .to(node, { autoAlpha: autoAlpha.off, ...swipeTopDirection(direction, false, offset), duration: exit.length })
            .set(node, { overflowY: 'initial' })
    } else {
        return gsap.timeline()
            .set(node, {
                overflowY: 'hidden',
                height: '100vh',
                scrollTop: scrollTop,
            })
            .to(
                node,
                {
                    ...swipeBottomDirection(direction, true, entryOffset),
                    duration: exit.length,
                },
            )
            .set(node, { overflowY: 'initial' })
    }
}

const SwipeLink = p => {
    const {
      exit,
      entry,
      entryOffset,
      offset,
      fade,
      direction,
      duration,
      children,
      top,
      ...rest
    } = p
    const exitLength = duration || 0.7
    const entryLength = exitLength / 3.5
    const entryZ = top === 'entry' ? 1 : 0
    const exitZ = top === 'exit' ? 1 : 0
    const make = (name, length, zIndex) => ({
      length,
      zIndex,
      trigger: ({ node, exit }) =>
        swipe({
          node,
          exit,
          direction,
          top,
          entryOffset,
          triggerName: name,
          offset,
          fade
        })
    })
    return (
      <TransitionLink
        exit={make('exit', exitLength, exitZ)}
        entry={make('entry', entryLength, entryZ)}
        {...rest}
      >
        {children}
      </TransitionLink>
    )
}

SwipeLink.defaultProps = {
  entryOffset: 40,
  offset: 100,
  fade: false,
  top: 'exit',
}

export default SwipeLink
