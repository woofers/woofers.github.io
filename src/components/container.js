import { styled } from 'jxsn'

const Wrapper = styled('div', {
  position: 'relative',
  pb: '24px'
})

const Container = ({ children, ...rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
)

export default Container
