import Container from 'components/container'
import BackButton from 'components/back-button'
import SEO from 'components/seo'
import { styled } from 'emotion'
import Logo from 'components/logo'

const Header = styled.header`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
`

const Page = ({ children, title, ...rest }) => (
  <Container {...rest}>
    <SEO title={title} />
    <Header><BackButton /><Logo id="header-logo" /></Header>
    {children}
  </Container>
)

export default Page
