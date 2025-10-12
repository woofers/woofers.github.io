'use client'
import {
  motion,
  type SpringOptions,
  useSpring,
  useTransform
} from 'motion/react'
import React, { useEffect, useState } from 'react'

type AnimatedNumberProps = {
  value: number
  className?: string
  springOptions?: SpringOptions
}

export const AnimatedNumberTo: React.FC<
  AnimatedNumberProps & { from?: number }
> = ({ value, className, springOptions, from = 0 }) => {
  const [state, setState] = useState(from)
  useEffect(() => {
    setState(value)
  }, [])
  return (
    <AnimatedNumber
      value={state}
      className={className}
      springOptions={springOptions}
    />
  )
}

export const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  className,
  springOptions
}) => {
  const spring = useSpring(value, springOptions)
  const display = useTransform(spring, current =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return (
    <motion.div
      style={{
        fontVariantNumeric: 'tabular-nums'
      }}
    >
      {display}
    </motion.div>
  )
}
