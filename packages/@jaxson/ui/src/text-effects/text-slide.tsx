'use client'
import {
  AnimatePresence,
  type AnimatePresenceProps,
  motion,
  type Transition,
  type Variants
} from 'motion/react'
import { Children, useEffect, useState } from 'react'
import { Box, type BoxProps } from '../box'

type TextSlideProps = {
  children: React.ReactNode[]
  className?: string
  interval?: number
  transition?: Transition
  variants?: Variants
  onIndexChange?: (index: number) => void
  trigger?: boolean
  mode?: AnimatePresenceProps['mode']
} & BoxProps

export const TextSlide: React.FC<TextSlideProps> = ({
  children,
  interval = 2,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
  trigger = true,
  mode = 'popLayout',
  ...rest
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const items = Children.toArray(children)

  useEffect(() => {
    if (!trigger) return
    const intervalMs = interval * 1000
    const timer = setInterval(() => {
      setCurrentIndex(current => {
        const next = (current + 1) % items.length
        onIndexChange?.(next)
        return next
      })
    }, intervalMs)
    return () => clearInterval(timer)
  }, [items.length, interval, onIndexChange, trigger])

  const motionVariants: Variants = {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -15, opacity: 0 }
  }

  return (
    <Box
      {...rest}
      position="relative"
      display="inline-block"
      whiteSpace="nowrap"
    >
      <AnimatePresence mode={mode} initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}

export const TextSlideOnValue: React.FC<
  Omit<TextSlideProps, 'trigger' | 'interval'> & { trigger: boolean }
> = ({
  children,
  transition = { duration: 0.3 },
  variants,
  onIndexChange,
  mode = 'popLayout',
  trigger,
  ...rest
}) => {
  const items = Children.toArray(children)
  const currentIndex = !trigger ? 0 : 1
  const motionVariants: Variants = {
    initial: { y: 15, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -15, opacity: 0 }
  }

  return (
    <Box
      {...rest}
      position="relative"
      display="inline-block"
      whiteSpace="nowrap"
    >
      <AnimatePresence mode={mode} initial={false}>
        <motion.div
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={variants || motionVariants}
        >
          {items[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </Box>
  )
}
