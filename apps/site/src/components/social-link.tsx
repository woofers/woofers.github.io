import { Box } from '@jaxson/ui/box'
import Link from 'components/link'
import React from 'react'
import { GitHubIcon, NpmIcon } from './brand-icons'
import { GamepadIcon, LinkIcon } from './icons'

const Empty: React.FC<React.SVGProps<SVGSVGElement>> = () => null

const iconColors = {
  github: '$socialText',
  linkedin: '$socialText',
  npm: '$npm',
  link: '$socialText',
  play: '$socialText'
} as const

const iconTypes = {
  github: GitHubIcon,
  linkedin: Empty,
  npm: NpmIcon,
  link: LinkIcon,
  play: GamepadIcon
} as const

const fontTypes = {
  link: '$mono',
  play: '$mono'
} as const

type IconType = keyof typeof iconTypes

const getIcon = (type: IconType) => {
  return iconTypes[type]
}

const Icon: React.FC<{ type: IconType }> = ({ type }) => {
  const IconComponent = getIcon(type)
  return <IconComponent width={16} height={16} />
}

type SocialLinkProps = {
  href: string
  children: React.ReactNode
  icon?: React.ReactNode
  type: IconType
}

const getSpecificProps = (type: IconType) => {
  if (type in fontTypes) {
    return { fontFamily: fontTypes[type as keyof typeof fontTypes] }
  }
  return {}
}

const SocialLinkBase: React.FC<SocialLinkProps> = ({
  href,
  children,
  icon,
  type
}) => (
  <Box
    as={Link}
    href={href}
    display="flex"
    alignItems="center"
    gap="$150"
    textDecoration="none"
    lineHeight={{
      mobile: '20px',
      tablet: '22px'
    }}
    fontSize={{
      mobile: '$xs',
      tablet: '$sm'
    }}
    color={iconColors[type]}
    {...getSpecificProps(type)}
  >
    {icon}
    {children}
  </Box>
)

export const SocialLink: React.FC<{
  href: string
  children?: React.ReactNode
  type: IconType
}> = ({ href, children = 'GitHub', type }) => (
  <SocialLinkBase href={href} icon={<Icon type={type} />} type={type}>
    {children}
  </SocialLinkBase>
)
