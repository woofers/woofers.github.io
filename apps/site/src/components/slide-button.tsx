'use client'

import { Box, type BoxProps } from '@jaxson/ui/box'
import { Hidden } from '@jaxson/ui/hidden'
import { TextSlideOnValue } from '@jaxson/ui/text-effects'
import Link from 'next/link'
import React, { useState } from 'react'

export const SlideLinkControlled: React.FC<
  {
    href: string
    altLabel: React.ReactNode
    children: React.ReactNode
    isHovered: boolean
    setHovered: (hovered: boolean) => void
    ariaLabel: string
  } & BoxProps
> = ({
  href,
  altLabel,
  children,
  width,
  height,
  isHovered,
  setHovered,
  ariaLabel,
  ...rest
}) => {
  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }
  return (
    <Box display="inline-flex" {...rest}>
      <Hidden as="h1">{children}</Hidden>
      <Box
        as={Link}
        href={href}
        width={width}
        height={height}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onBlur={onMouseLeave}
        onFocus={onMouseEnter}
        aria-label={ariaLabel}
      >
        <TextSlideOnValue
          trigger={isHovered}
          fontSize={{
            mobile: '$xs',
            tablet: '$md'
          }}
          fontWeight="$semibold"
          color="$orange"
        >
          <Box as="span">{children}</Box>
          <Box as="span">{altLabel}</Box>
        </TextSlideOnValue>
      </Box>
    </Box>
  )
}

export const SlideButtonControlled: React.FC<
  {
    onClick: () => void
    ariaPressed: boolean
    ariaLabel: string
    altLabel: React.ReactNode
    children: React.ReactNode
    isHovered: boolean
    setHovered: (hovered: boolean) => void
  } & BoxProps
> = ({
  onClick,
  altLabel,
  children,
  width,
  height,
  ariaPressed,
  isHovered,
  setHovered,
  ariaLabel,
  ...rest
}) => {
  const onMouseEnter = () => {
    setHovered(true)
  }
  const onMouseLeave = () => {
    setHovered(false)
  }
  return (
    <Box
      px={{
        mobile: '$200',
        tablet: '$400'
      }}
      display="inline-flex"
      {...rest}
    >
      <Hidden as="h2">{children}</Hidden>
      <Box
        cursor="pointer"
        as="button"
        width={width}
        height={height}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onBlur={onMouseLeave}
        onFocus={onMouseEnter}
        aria-pressed={ariaPressed}
        aria-label={ariaLabel}
      >
        <TextSlideOnValue
          trigger={isHovered}
          fontSize={{
            mobile: '$xs',
            tablet: '$sm'
          }}
          fontWeight="$semibold"
          color="$orange"
        >
          <Box as="span">{children}</Box>
          <Box as="span">{altLabel}</Box>
        </TextSlideOnValue>
      </Box>
    </Box>
  )
}

export const SlideButton: React.FC<
  Omit<
    React.ComponentProps<typeof SlideButtonControlled>,
    'isHovered' | 'setHovered'
  >
> = props => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <SlideButtonControlled
      {...props}
      isHovered={isHovered}
      setHovered={setIsHovered}
    />
  )
}

export const SlideLink: React.FC<
  Omit<
    React.ComponentProps<typeof SlideLinkControlled>,
    'isHovered' | 'setHovered'
  >
> = props => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <SlideLinkControlled
      {...props}
      isHovered={isHovered}
      setHovered={setIsHovered}
    />
  )
}
