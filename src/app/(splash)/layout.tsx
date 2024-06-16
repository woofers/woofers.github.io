import Link from 'next/link'
import { Divider, Box, Stack, Container, Row } from 'components/styled'
import Logo from 'components/logo'

const SplashLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Box as="main" display="flex" flexGrow="grow">
    <Stack
      gutter="0"
      flexGrow="grow"
      className="max-h-screen overflow-y-auto background fade-morph"
    >
      <Container padding="y" container="full">
        {children}
        <div className="min-w-0 box-border m-0 flex-grow"></div>
        <Divider className="mt-8 mb-2 border-[#ffb38e4f]" />
      </Container>
      <Row
        gutter="0"
        justifyContent="center"
        className="pb-8"
        as={Link}
        href="/"
      >
        <Logo className="text-[#ffb793d4]" />
      </Row>
    </Stack>
  </Box>
)

export default SplashLayout
