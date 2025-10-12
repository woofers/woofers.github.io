'use client'

import clsx from 'clsx'
import React from 'react'
import { Box, type BoxProps, MotionBox } from '../box'
import { vars } from '../theme/theme.css'
import { header, headerAbove } from './header.css'

export const Header: React.FC<
  BoxProps & { above?: React.ReactNode }
> = props => {
  const { style, children, className, above, ...rest } = props
  return (
    <>
      <Box
        pt={{
          mobile: '$100',
          tablet: '$1200'
        }}
        aria-hidden
      ></Box>
      <Box position="relative">
        <MotionBox
          initial={{ filter: 'blur(4px)', opacity: 0, y: -10 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          px={{
            mobile: '$400',
            tablet: '$0'
          }}
          transition={{ duration: 0.3 }}
          className={clsx(header, className)}
          as="header"
          top={0}
          zIndex="$modal"
          backdropFilter="none"
          boxShadow="none"
          backgroundClip="padding-box"
          pb="$800"
          {...rest}
        >
          <Box
            mx="auto"
            maxWidth="700px"
            backgroundClip="padding-box"
            backgroundColor="$headerFill"
            border={`0.5px dashed ${vars.colors.headerBorder}`}
            borderRadius="$md"
            boxShadow={vars.shadow.normal}
            position="relative"
            overflowX="hidden"
          >
            {children}
          </Box>
          <Box position="absolute" width="100%" className={headerAbove}>
            <Box maxWidth="700px" width="100%" mx="auto">
              {above}
            </Box>
          </Box>
        </MotionBox>
      </Box>
    </>
  )
}
