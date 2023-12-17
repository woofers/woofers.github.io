import BackButton from './back-button'
import Links from './links'
import { Box } from 'components/styled'

type LinkProps = React.ComponentProps<typeof Links> & { back?: string }

const ContentContainer: React.FC<LinkProps> = ({ children, data, back }) => (
  <article className="flex-grow pt-6 prose dark:prose-invert relative">
    {!!back && (
      <Box
        className="left-[-14px] top-[-14px] flex justify-end sm:top-[-22px] xl:hidden"
        position="absolute"
      >
        <BackButton href={back} />
      </Box>
    )}
    {!!back && (
      <Box position="sticky" className="hidden top-0 left-0 h-0 xl:block">
        <Box position="absolute" className="top-[16px] left-[-160px]">
          <BackButton href={back} />
        </Box>
      </Box>
    )}
    {!!data && (
      <Box position="absolute" className="top-0 right-0">
        <Links data={data} className="dark-mode:text-neutral-800" />
      </Box>
    )}
    {children}
  </article>
)

export default ContentContainer
