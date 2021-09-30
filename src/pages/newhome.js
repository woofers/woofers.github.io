import Logo from 'components/logo'
import { styled } from 'emotion'
import Email from 'components/email'
import Title from 'components/title'
import { EarthIcon, GitHubIcon, Machobear, LivRent, Fts360, Fts } from 'logos'

const Text = styled.p`
  font-size: 22px;
  font-family: 'Mulish', sans-serif;
  align-items: ${props => props.$alignItems || 'center'};
`

const LogoWrapper = styled.span`
  padding: 0 0 0 20px;
`

const Card = styled.a`
  display: inline-block;
  font-size: 22px;
  background: ${props => props.$color};
  border-radius: 5px;
  display: inline-flex;
  font-weight: 900;
  color: ${props => props.$text || '#fff'};
  padding: 10px;
  height: 48px;
  align-items: center;
  margin: 0 8px;
  font-family: 'Mulish', sans-serif;
  position: relative;
  svg {
    display: inline-flex;
    align-self: center;
    position: absolute;
    width: ${props => props.$width};
    height: ${props => props.$height};
  }
  overflow: hidden;
  ${props => props.$border && `
    border: 1px solid #c9c9c9;
  `}
`

const Big = styled.span`
  font-size: 50px;
  font-weight: 900;
`

const Spacer = styled.span`
  width: ${props => props.$width};
  user-select: none;
`

const Tag = ({ children, ...rest }) => (
  <Card {...rest}>
    <Spacer {...rest} aria-hidden>
      {'\u00A0'}
    </Spacer>
    {children}
  </Card>
)

const NewHome = () => {
  return (
    <>
      <Text $alignItems="baseline">
        <Big>Hey I{`'`}m</Big>{' '}
        <LogoWrapper>
          <Logo />
        </LogoWrapper>{' '}
        and I make software.
      </Text>
      <Text>
        Currently working on{' '}
        <Tag
          href="https://beta.liv.rent/"
          $color="#fe5f55"
          $width="40px"
          $height="28px"
        >
          <LivRent />
          liv.rent
        </Tag>{' '}
        & reinventing renting at{' '}
        <Tag
          href="https://machobear.ca"
          $color="#1a1a1a"
          $width="110px"
          $height="31px"
        >
          <Machobear />
        </Tag>
      </Text>
      <Text>
        Previously worked on{' '}
        <Tag href="https://360.ftsinc.com/" $text="#38976a" $color="#ddffb4" $width="50px" $height="50px">
          <Fts360 />
          FTS 360
        </Tag>
        weather and climate monitoring tech at{' '}
        <Tag href="https://ftsinc.com/" $color="#fff" $width="0" $height="0" $border>
          <Fts />
        </Tag>
      </Text>
      <Text>
        B.Sc. in Computer Science but most of my education comes from <Tag href="https://github.com/woofers" $color="#24292f" $width="35px" $height="24px"><GitHubIcon />GitHub</Tag> and
      the <Tag href="https://github.com/woofers" $color="#1a8fff" $width="24px" $height="24px"><EarthIcon />{'\u00A0'}real world</Tag>.
      </Text>
      <Email />
    </>
  )
}

export default NewHome
