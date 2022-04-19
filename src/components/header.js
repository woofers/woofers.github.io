import { styled, Typography } from 'ruffsponsive'
import Link from 'link'

const Wrapper = styled('header', {
  py: '$6',
  px: '$6',
})

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Typography type="h3" as="span">
          jaxson
        </Typography>
      </Link>
    </Wrapper>
  )
}

export default Header
