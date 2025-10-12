import React, { unstable_ViewTransition as ViewTransitionBase } from 'react'

const noop = (value: string) => value

export const ViewTransition = ({
  children,
  name,
  template = noop,
  enabled = true,
  ...rest
}: {
  children: React.ReactNode
  name: string
  enabled?: boolean
  template?: (name: string) => string
} & Omit<
  React.ComponentProps<typeof ViewTransitionBase>,
  'name' | 'children'
>) => {
  if (!name || !enabled) {
    return children
  }
  return (
    <ViewTransitionBase {...rest} name={template(name)}>
      {children}
    </ViewTransitionBase>
  )
}
