import { Fragment } from 'react'
import {
  FaGlobeAmericas,
  FaPlay,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaGithub
} from 'react-icons/fa'
import { BiEnvelope, BiMailSend } from 'react-icons/bi'
import { HiOutlineNewspaper } from 'react-icons/hi'
import { IoMdInformationCircle } from 'react-icons/io'
import { Divider, Link, Text, Row, Box } from 'components/styled'
import { toUrl } from 'utils'
import { clsx } from 'cva'

const Empty: React.FC<Nothing> = () => null

const Icons = {
  stackoverflow: () => <FaStackOverflow />,
  linkedin: () => <FaLinkedin />,
  twitter: () => <FaTwitter />,
  github: () => <FaGithub />,
  email: () => <BiEnvelope size="1.2em" />,
  email_alt: () => <BiMailSend size="1.28em" />,
  resume: () => <HiOutlineNewspaper size="1.2em" />,
  game: () => <FaPlay size="0.9em" />,
  demo: () => <FaGlobeAmericas />,
  react: () => <IoMdInformationCircle size="1.22em" />
} as const

const dataDefault = [
  {
    key: 'github',
    name: 'GitHub',
    link: 'https://github.com/woofers',
    handle: 'woofers',
    external: true,
    showText: true
  },
  {
    key: 'resume',
    name: 'Resume',
    link: 'https://jaxs.onl/resume/jaxsonvd-resume.pdf',
    showText: true
  },
  {
    key: 'email',
    name: 'hey@jaxs.onl',
    link: 'mailto:hey@jaxs.onl',
    showText: true
  }
] as Entry[]

type Entry = {
  key: string
  name: string
  link: string
  handle?: string
  external?: boolean
  showText?: boolean
  divider?: boolean
}

const external = { target: '_blank', rel: 'noopener noreferrer' } as const

type LinksProps = {
  data?: Entry[]
  children?: React.ReactNode
  className?: string
}

const Links: React.FC<LinksProps> = ({
  data = dataDefault,
  children,
  ...rest
}) => (
  <Box {...rest}>
    {children}
    <Row gutter="1" alignItems="center" className="h-9">
      {data.map(meta => {
        const name = meta.key !== 'no type' ? meta.key : 'react'
        const Icon = Icons[name as keyof typeof Icons] ?? Empty
        const showText = meta.showText
        const attrs = !showText
          ? ({
              title: meta.name,
              'aria-label': meta.name,
              className: 'w-9 h-9 flex items-center justify-center'
            } as const)
          : ({ className: 'px-1 py-1' } as const)
        const extra = meta.external ? external : {}
        return (
          <Fragment key={`icons-${name}`}>
            <Link
              href={meta.link}
              {...extra}
              {...attrs}
              className={clsx(
                attrs.className,
                'hover:bg-zinc-200/75 hover:rounded-md'
              )}
              theme="plain"
            >
              <Row gutter="2" alignItems="center">
                <Icon aria-hidden />
                {showText && (
                  <Text
                    className="whitespace-nowrap"
                    type="h6"
                    as="span"
                    fontWeight="medium"
                    font="serif"
                  >
                    {meta.name}
                  </Text>
                )}
              </Row>
            </Link>
            {meta.divider && <Divider direction="vertical" />}
          </Fragment>
        )
      })}
    </Row>
  </Box>
)

export default Links
