import Container from 'components/container'
import BackButton from 'components/back-button'
import SEO from 'components/seo'
import { styled } from 'emotion'

const Header = styled.header`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Page = ({ children, title, ...rest }) => (
  <Container {...rest}>
    <SEO title={title} />
    <Header><BackButton /></Header>
    {children}
  </Container>
)

export default Page
