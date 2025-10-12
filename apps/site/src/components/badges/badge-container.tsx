import { Box } from '@jaxson/ui/box'
import React from 'react'

type BadgeContainerProps = {
  children: React.ReactNode
  className?: string
}

export const BadgeContainer: React.FC<BadgeContainerProps> = ({
  children,
  className
}) => {
  return (
    <Box
      className={className}
      display="flex"
      alignItems="center"
      gap="$200"
      fontSize="$sm"
      color="$neutral400"
    >
      {children}
    </Box>
  )
}
