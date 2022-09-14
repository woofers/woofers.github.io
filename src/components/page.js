import Container from 'components/container'
import SEO from 'components/seo'

const Page = ({ children, title, ...rest }) => (
  <Container {...rest}>
    <SEO title={title} />
    {children}
  </Container>
)

export default Page
