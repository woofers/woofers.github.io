import { Box } from '@jaxson/ui/box'
import Widget from '@ludum-dare-badges/react'
import { Pico8 } from 'components/pico-8'
import React from 'react'

type FrameProps = React.ComponentPropsWithRef<'iframe'> & {
  aspectRatio?: number
  title?: string
}

const Frame: React.FC<FrameProps> = ({
  aspectRatio = 16 / 9,
  title,
  className,
  src,
  ...rest
}) => (
  <Box
    position="relative"
    color="currentColor"
    textAlign="center"
    pt="$1600"
    m="2px 0 23px 0"
    pb={`${100 / aspectRatio}%`}
  >
    <Box
      as="iframe"
      position="absolute"
      top="0"
      left="0"
      width="100%"
      height="100%"
      borderRadius="$md"
      className={className}
      title={title}
      frameBorder="0"
      allowTransparency
      allowFullScreen
      style={{
        colorScheme: 'light'
      }}
      src={src}
      {...rest}
    />
  </Box>
)

type GameProps = {
  children?: React.ReactNode
  portrait: boolean
  lang?: string
  title?: string
  src?: string
  ludumDare?: string
  placeholder?: string
}

const gridStyle = {
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: '1fr 0.7fr',
  gridRowGap: '$600',
  gridColumnGap: '$1200'
} as const

const Game: React.FC<GameProps> = ({
  src,
  children,
  portrait = false,
  lang,
  title,
  ludumDare,
  placeholder
}) => {
  const isPico = lang === 'pico'
  const enableGrid = portrait && !isPico
  return (
    <Box as="div" {...(enableGrid ? gridStyle : {})}>
      {isPico ? (
        <Pico8 src={src ?? ''} placeholder={placeholder} />
      ) : (
        <Frame
          aspectRatio={portrait ? 9 / 16 : 16 / 9}
          title={title}
          src={src}
        />
      )}
      <div>{children}</div>
      {ludumDare && <Widget game={ludumDare} />}
    </Box>
  )
}

export default Game
