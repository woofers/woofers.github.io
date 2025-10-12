import { Box } from '@jaxson/ui/box'
import { Hidden } from '@jaxson/ui/hidden'
import { AnimatedNumberTo } from '@jaxson/ui/text-effects'
import { DownloadIcon } from '../icons'
import { downloadIcon } from './style.css'

type DownloadsBadgeProps = {
  downloads: number
}

export const DownloadsBadge: React.FC<DownloadsBadgeProps> = ({
  downloads
}) => {
  if (downloads <= 0 || !downloads) return null

  return (
    <>
      <Hidden as="span">{downloads.toLocaleString()} downloads</Hidden>
      <Box
        aria-hidden
        display="flex"
        alignItems="center"
        gap="$050"
        title={`${downloads.toLocaleString()} downloads`}
        fontSize={{
          mobile: '$xs',
          tablet: '$sm'
        }}
      >
        <DownloadIcon className={downloadIcon} />
        <AnimatedNumberTo
          value={downloads}
          from={Math.max(Math.floor(downloads * 0.5), 0)}
          springOptions={{
            stiffness: 100,
            damping: 20
          }}
        />
      </Box>
    </>
  )
}
