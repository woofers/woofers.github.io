import React from 'react'
import ReactSwitch from "react-switch"
import light from '../themes/light'
import dark from '../themes/dark'

const Switch = p => {
  return (
    <span style={p.style} css={p.css}>
      <ReactSwitch
        checked={p.checked}
        onChange={p.onChange}
        onColor={dark.colors.switchBackground}
        offColor={light.colors.switchBackground}
        onHandleColor={dark.colors.background}
        offHandleColor={light.colors.background}
        handleDiameter={p.handleDiameter || 28}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={p.height || 20}
        width={p.width || 48}
      />
    </span>
  )
}

export default Switch
