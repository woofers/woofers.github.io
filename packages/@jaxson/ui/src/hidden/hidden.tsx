import React from 'react'
import { Box, type BoxProps } from '../box'

export const Hidden = <T extends React.ElementType = 'div'>({
  children,
  as: asProp,
  ...rest
}: BoxProps<T>): React.JSX.Element => {
  return (
    <Box
      {...({ as: asProp } as {})}
      position="absolute"
      width="1px"
      height="1px"
      margin="-1px"
      overflow="hidden"
      clip="rect(0 0 0 0)"
      whiteSpace="nowrap"
      borderWidth="0"
      {...rest}
    >
      {children}
    </Box>
  )
}
