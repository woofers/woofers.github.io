import React from 'react'
import Widget from '@ludum-dare-badges/react'
import Pico8 from './pico-8'
import { clsx } from 'cva'

type FrameProps = React.HTMLProps<HTMLIFrameElement> & {
  aspectRatio?: number
  title?: string
}

const Frame: React.FC<FrameProps> = ({
  aspectRatio = 16 / 9,
  title,
  className,
  ...rest
}) => (
  <div
    className="[color:currentColor] text-center relative [margin:2px 0 23px 0]"
    style={{ paddingBottom: `${100 / aspectRatio}%` }}
  >
    <iframe
      className={clsx(
        'absolute top-0 left-0 w-full h-full [border-radius:25px]',
        className
      )}
      {...rest}
      title={title}
      frameBorder="0"
      allowFullScreen
    />
  </div>
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
    <div
      className={clsx(
        enableGrid &&
          'grid justify-center [grid-template-columns:repeat(auto-fill,minmax(0px,463px))] [grid-row-gap:6px] [grid-column-gap:50px]'
      )}
    >
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
    </div>
  )
}

export default Game
