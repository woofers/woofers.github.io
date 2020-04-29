import React from 'react'
import IconBox from './icon-box'
import { FadeLink } from './link'

const IconLink = p => {
  const { children, icon, link: Link, ...rest } = p
  return (
    <Link {...rest}>
      <IconBox icon={icon} right="5px" top="3px">
        {children}
      </IconBox>
    </Link>
  )
}

IconLink.defaultProps = {
  link: FadeLink
}

export default IconLink
