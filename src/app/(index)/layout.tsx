import { Link } from 'next-view-transitions'
import { Divider, Box, Stack, Container, Row } from 'components/styled'
import Logo from 'components/logo'

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Box as="main" display="flex" flexGrow="grow">
    <Stack
      gutter="0"
      flexGrow="grow"
      className="max-h-screen overflow-y-auto fade-morph"
    >
      <Container>
        {children}
        <Divider className="mt-8 mb-2" />
      </Container>
      <Row
        gutter="0"
        justifyContent="center"
        className="pb-8"
        as={Link}
        href="/"
      >
        <Logo className="text-[#c7c7c6] dark-mode:text-[#2e2e2e]" />
      </Row>
    </Stack>
  </Box>
)

export default MainLayout
