'use client'
import React from 'react'
import ReactPico8 from 'react-pico-8'

const Pico8: React.FC<React.ComponentProps<typeof ReactPico8>> = ({
  center = true,
  ...rest
}) => <ReactPico8 {...rest} center={center} className="my-4" />

export default Pico8
