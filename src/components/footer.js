import { Fragment } from 'react'
import { styled, Typography } from 'jxsn'
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
import { MarkdownLink as Link } from 'link'

const Wrapper = styled('div', {
  position: 'absolute',
  right: 0,
  width: '50%',
  px: '$3',
  py: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '18px',
  height: '54px',
  variants: {
    position: {
      top: {
        bottom: 0
      },
      bottom: {
        top: 0
      }
    }
  }
})

const Gap = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end'
})

const IconWrapper = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  br: '8px',
  minWidth: '38px',
  height: '38px',
  padding: '8px',
  gap: '0 8px',
  transition: 'background-color 300ms ease 0s',
  '&:hover': {
    backgroundColor: 'rgba(55, 65, 81, 0.07)'
  }
})

const Divider = styled('div', {
  mx: '6px',
  height: '16px',
  width: '1px',
  backgroundColor: '#b1b9c3'
})

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
}

const data = [
  {
    key: 'github',
    name: 'GitHub',
    link: 'https://github.com/woofers',
    handle: 'woofers',
    external: true
  },
  /*
  {
    key: 'stackoverflow',
    name: 'Stack Overflow',
    link: 'https://stackoverflow.com/users/9129020/jvandoorn',
    external: true,
  },
  {
    key: 'twitter',
    name: 'Twitter',
    link: 'https://twitter.com/jaxsonvandoorn',
    handle: '@jaxsonvandoorn',
    external: true,
  },
  {
    key: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jaxson-van-doorn/',
    external: true,
  },
*/
  {
    key: 'email',
    name: 'Email',
    link: 'mailto:hey@jaxs.onl'
  },
  {
    key: 'resume',
    name: 'Resume',
    link: 'https://jaxs.onl/resume/jaxsonvd-resume.pdf'
  }
]

const external = { target: '_blank', rel: 'noopener noreferrer' }

const Footer = ({ data, children, ...props }) => (
  <Wrapper {...props}>
    {children ?? <div />}
    <Gap>
      {data.map(meta => {
        const name = meta.key !== 'no type' ? meta.key : 'react'
        const Icon = Icons[name]
        const showText = meta.showText
        const attrs = !showText
          ? { title: meta.name, 'aria-label': meta.name }
          : {}
        const extra = meta.external ? external : {}
        return (
          <Fragment key={`icons-${name}`}>
            <Link href={meta.link} noStyle {...extra} {...attrs}>
              <IconWrapper>
                <Icon aria-hidden />
                {showText && (
                  <Typography
                    noMargin
                    type="button"
                    css={{ whiteSpace: 'nowrap' }}
                  >
                    {meta.name}
                  </Typography>
                )}
              </IconWrapper>
            </Link>
            {meta.divider && <Divider />}
          </Fragment>
        )
      })}
    </Gap>
  </Wrapper>
)

Footer.defaultProps = {
  data
}

export default Footer
