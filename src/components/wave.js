import React from 'react'
import { injectGlobal } from 'emotion'

injectGlobal(`
  svg {
    font-family: 'Raleway',sans-serif;
  }
`)

export const Wave = p => (
  <svg viewBox="0 0 100 20">
    <defs>
      <pattern id="wave" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
        <path id="wavePath" d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z" mask="url(#mask)" fill="#FFF">
          <animateTransform attributeName="transform"
                            begin="0s"
                            dur="6s"
                            type="translate"
                            from="0,2"
                            to="40,2"
                            repeatCount="indefinite" />
        </path>
      </pattern>
    </defs>
    <text textAnchor="middle" x="50" y="15" fontSize="17" fill="#f27052" fillOpacity="1">{p.children}</text>
    <text textAnchor="middle" x="50" y="15" fontSize="17" fill="url(#wave)"  fillOpacity="1">{p.children}</text>
    <rect fill="url(#wave)" width="200px"></rect>
  </svg>
)
