import React, { useEffect, useState } from 'react'
import ReactSwitch from "react-switch"
import { light, dark } from '../themes'

const Switch = p => {
  const value = () => (typeof window !== 'undefined' && window.innerWidth > 545) ? 1 : 0.875
  const [scale, setScale] = useState(value())
  const resize = e => {
    setScale(value())
  }
  useEffect((resize => () => {
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  })(resize), [])
  return (
    <span style={p.style} css={p.css}>
      <ReactSwitch
        checked={p.checked}
        aria-checked={p.checked}
        onChange={p.onChange}
        onColor={dark.colors.switchBackground}
        offColor={light.colors.switchBackground}
        onHandleColor={dark.colors.background}
        offHandleColor={light.colors.background}
        handleDiameter={p.handleDiameter * scale}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={p.height * scale}
        width={p.width * scale}
        aria-label={p.label}
        role="switch"
      />
    </span>
  )
}

Switch.defaultProps = {
  height: 20,
  width: 48,
  handleDiameter: 28
}

export default Switch
