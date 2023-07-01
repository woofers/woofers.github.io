'use client'

import React from 'react'
import {
  Root as ProgressRoot,
  Indicator as ProgressIndicator
} from '@radix-ui/react-progress'
import { clsx } from 'cva'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressRoot>,
  React.ComponentPropsWithoutRef<typeof ProgressRoot>
>(({ className, value, ...props }, ref) => (
  <ProgressRoot
    ref={ref}
    className={clsx(
      'relative h-[12px] w-full overflow-hidden rounded-full bg-slate-700',
      className
    )}
    {...props}
  >
    <ProgressIndicator
      className="h-full w-full flex-1 bg-slate-900 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressRoot>
))
Progress.displayName = ProgressRoot.displayName

export default Progress
