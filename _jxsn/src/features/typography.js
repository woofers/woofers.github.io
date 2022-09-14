import { Box } from 'components/box'
import Typography from 'components/typography'

const TypographyBlock = () => (
  <>
    <Typography as="h1" type="h3" css={{ px: '$4', py: '$5' }}>
      Text
    </Typography>
    <Box css={{ maxWidth: '550px', padding: '$5' }}>
      <Typography type="h1">h1. Heading</Typography>
      <Typography type="h2">h2. Heading</Typography>
      <Typography type="h3">h3. Heading</Typography>
      <Typography type="h4">h4. Heading</Typography>
      <Typography type="h5">h5. Heading</Typography>
      <Typography type="h6">h6. Heading</Typography>
      <Typography type="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography type="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography type="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography type="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography type="button">button text</Typography>
      <Typography type="overline">overline text</Typography>
    </Box>
  </>
)

export default TypographyBlock
