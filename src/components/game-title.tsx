import React from 'react'
import { Text as Typography, Box } from 'components/styled'
import { clsx } from 'cva'

type GameTitleProps = {
  children?: React.ReactNode
  title?: string
  icon: string
  iconMode?: 'auto' | 'crisp-edges' | 'pixelated'
  iconType?: string
  iconSize?: number
}

const GameTitle: React.FC<GameTitleProps> = ({
  children,
  title,
  icon,
  iconMode = 'auto',
  iconType,
  iconSize = 45,
  ...rest
}) => {
  return (
    <Box {...rest} display="flex" justifyContent="flexEnd">
      <Typography type="h4" as="h1">
        {title}
      </Typography>
      {icon && (
        <div
          style={{ width: `${iconSize}px` }}
          className="relative overflow-visible"
        >
          <img
            className={clsx(
              'absolute m-0 select-none left-1',
              iconType === 'normal' && 'rounded-none'
            )}
            src={icon}
            alt=""
            draggable="false"
            style={{
              bottom: `${iconSize / 4}px`,
              imageRendering: iconMode,
              width: `${iconSize}px`,
              height: `${iconSize}px`
            }}
          />
        </div>
      )}
      {children}
    </Box>
  )
}

export default GameTitle
