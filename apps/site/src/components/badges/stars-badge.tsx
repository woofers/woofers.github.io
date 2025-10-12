import { Box } from '@jaxson/ui/box'
import { Hidden } from '@jaxson/ui/hidden'
import { AnimatedNumberTo } from '@jaxson/ui/text-effects'
import { StarIcon } from '../icons'
import { starIcon } from './style.css'

type StarsBadgeProps = {
  stars: number
}

export const StarsBadge: React.FC<StarsBadgeProps> = ({ stars }) => {
  return (
    <>
      <Hidden as="span">{stars} GitHub stars</Hidden>
      <Box
        aria-hidden
        display="flex"
        alignItems="center"
        gap="$050"
        fontSize={{
          mobile: '$xs',
          tablet: '$sm'
        }}
        title={`${stars} stars`}
      >
        <Box>
          <StarIcon className={starIcon} />
        </Box>
        <AnimatedNumberTo
          value={stars}
          springOptions={{
            bounce: 0.4
          }}
        />
      </Box>
    </>
  )
}
