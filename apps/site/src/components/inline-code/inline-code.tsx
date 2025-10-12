import { Box } from '@jaxson/ui/box'
import clsx from 'clsx'
import React from 'react'
import { code } from './inline-code.css'

const InlineCode: React.FC<React.ComponentProps<'code'>> = ({
  children,
  className,
  ...rest
}) => (
  <Box as="code" {...rest} className={clsx(code, className)}>
    {children}
  </Box>
)

export { InlineCode, code }
