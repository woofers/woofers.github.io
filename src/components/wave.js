import React from 'react'
import { injectGlobal } from 'emotion'

injectGlobal(`
  body {
    overflow-x: hidden;
  }
  .wave {
    background: url(wave.svg);
    width: 5000px;
    height: 198px;
    animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
    transform: translate3d(0, 0, 0);
  }
  @keyframes wave {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
  }


  svg {
    font-family: 'Raleway',sans-serif;
  }
`)

export const Wave = p => (
    <div className="wave"></div>

)
