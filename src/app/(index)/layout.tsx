import Link from 'next/link'
import { Divider, Box, Stack, Container, Row } from 'components/styled'
import Logo from 'components/logo'

const MainLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Box as="main" display="flex" flexGrow="grow">
    <Stack gutter="0" flexGrow="grow" className="max-h-screen overflow-y-auto">
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
        <Logo className="[mix-blend-mode:difference] [filter:contrast(0.8)] [transform:scale(0.8)] dark-mode:[mix-blend-mode:normal] dark-mode:[filter:none] dark-mode:text-neutral-400/75" />
      </Row>
    </Stack>
  </Box>
)

export default MainLayout
