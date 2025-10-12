import React from 'react'
import { Box } from '../box'
import { ActivityIcon, AlertIcon, CheckIcon, AudioIcon } from '../icons'

const getBannerIcon = (type: BannerType) => {
  switch (type) {
    case 'info':
      return AudioIcon
    case 'warning':
      return ActivityIcon
    case 'error':
      return AlertIcon
    case 'success':
      return CheckIcon
  }
  return () => null
}

const renderBannerIcon = (
  type: 'info' | 'warning' | 'error' | 'success',
  props?: { className?: string; size?: number }
): React.ReactNode => {
  const IconComponent = getBannerIcon(type)
  return <IconComponent {...props} />
}

type BannerType = 'info' | 'warning' | 'error' | 'success'

const getLinkColor = (type: BannerType) => {
  switch (type) {
    case 'info':
      return '$foregroundPrimary'
    case 'warning':
      return '$foregroundWarning'
    case 'error':
      return '$foregroundCritical'
    case 'success':
      return '$foregroundPositive'
  }
}

export const BannerLink: React.FC<
  React.ComponentProps<'a'> & {
    children: React.ReactNode
    type: BannerType
  }
> = ({ children, type, ...rest }) => {
  const linkColor = getLinkColor(type)
  return (
    <Box
      {...rest}
      pt="$100"
      as="a"
      color={linkColor}
      cursor="pointer"
      fontWeight="$semibold"
      textDecoration="none"
      display="block"
    >
      {children}
    </Box>
  )
}

const getTypeStyles = (type: 'info' | 'warning' | 'error' | 'success') => {
  switch (type) {
    case 'info':
      return {
        background: '$infoFaded',
        borderColor: '$borderPrimaryFaded',
        color: '$primary',
        iconColor: '$foregroundPrimary'
      }
    case 'warning':
      return {
        background: '$backgroundWarningFaded',
        borderColor: '$borderWarningFaded',
        color: '$primary',
        iconColor: '$foregroundWarning'
      }
    case 'error':
      return {
        background: '$backgroundCriticalFaded',
        borderColor: '$borderCriticalFaded',
        color: '$primary',
        iconColor: '$foregroundCritical'
      }
    case 'success':
      return {
        background: '$backgroundPositiveFaded',
        borderColor: '$borderPositiveFaded',
        color: '$primary',
        iconColor: '$foregroundPositive'
      }
  }
}

export const Banner: React.FC<{
  icon?: React.ReactNode
  title: React.ReactNode
  children: React.ReactNode
  type: 'info' | 'warning' | 'error' | 'success'
}> = ({ icon, title, children, type }) => {
  const { iconColor, ...styles } = getTypeStyles(type)
  return (
    <Box
      {...styles}
      borderWidth="$025"
      borderStyle="solid"
      borderRadius="$md"
      p="$400"
      display="flex"
      alignItems="flex-start"
      gap="$400"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink="0"
        color={iconColor}
        style={{ width: '20px', height: '20px' }}
      >
        {icon || renderBannerIcon(type)}
      </Box>
      <Box display="flex" flexDirection="column" flex="1" gap="$200">
        <Box fontSize="$sm" fontWeight="$semibold">
          {title}
        </Box>
        <Box fontSize="$sm" lineHeight="$normal">
          {children}
        </Box>
      </Box>
    </Box>
  )
}
