import { styled } from 'emotion'

import {
  EarthIcon,
  GitHubText,
  GitHubIcon,
  Machobear,
  LivRentRed,
} from 'logos'

const TextContainer = styled.div`
  max-width: 700px;
`


const Card = styled.a`
  --scale-bubble: 1;
  display: inline-block;
  font-size: 22px;
  color: ${props => props.$color};
  border-radius: 5px;
  display: inline-flex;
  font-weight: 900;
  padding: 0 ${props => props.$paddingRight} 0 ${props => props.$paddingLeft};
  align-items: center;
  font-family: 'Cabin', sans-serif;
  position: relative;
  svg:first-of-type {
    margin-top: calc(${props => props.$marginTop || 0} / var(--scale-bubble));
    display: inline-flex;
    align-self: center;
    position: absolute;
    width: calc(${props => props.$width} / var(--scale-bubble));
    height: calc(${props => props.$height} / var(--scale-bubble));
  }
  svg:nth-of-type(2) {
    left: calc(
      (${props => props.$width} + ${props => props.$spacing || '10px'}) /
        var(--scale-bubble)
    );
    display: inline-flex;
    align-self: center;
    position: absolute;
    width: calc(${props => props.$width2} / var(--scale-bubble));
    height: calc(${props => props.$height2} / var(--scale-bubble));
  }
  overflow: hidden;
  ${props =>
    props.$border &&
    `
    border: 1px solid #c9c9c9;
  `}
  @media only screen and (max-width: ${({ theme }) =>
    theme.breakpoints.small.breakpoint}) {
    --scale-bubble: 1.5;
    font-size: 13px;
    svg:first-of-type {
      margin-top: 0;
    }
  }
`

const Spacer = styled.span`
  --scale-spacer: 1;
  width: calc(
    (${props => `${props.$width} + ${props.$width2 || '0px'}`}) /
      var(--scale-spacer)
  );
  user-select: none;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.breakpoint}) {
    --scale-spacer: 1.5;
  }
`


const Tag = ({ children, ...rest }) => (
  <Card {...rest}>
    <Spacer {...rest} aria-hidden>
      {'\u00A0'}
    </Spacer>
    {children}
  </Card>
)

const SimpleText = styled.p`
  line-height: 41px;
  margin: 0;
  font-size: 18px;
  color: #233044bd;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  letter-spacing: -0.35px;
  @media only screen and (max-width: ${({ theme }) =>
      theme.breakpoints.small.breakpoint}) {
    font-size: 12px;
    line-height: 30px;
  }
`

const Contact = () => (
  <>
    <TextContainer>
      <SimpleText>
        I help design and ship{' '}
        <Tag
          href="https://github.com/woofers"
          $color="#1a8fff"
          $width="24px"
          $height="24px"
          $width2="2px"
          $paddingLeft="4px"
          $paddingRight="2px"
        >
          <EarthIcon />
          {'\u00A0'}real world
        </Tag>{' '}
        apps and software.
      </SimpleText>
      <SimpleText>
        Currently working on{' '}
        <Tag
          href="https://beta.liv.rent"
          $color="#fe5f55"
          $width="40px"
          $height="28px"
          $width2="17px * -1"
          $paddingLeft="5px"
          $paddingRight="4px"
        >
          <LivRentRed />
          liv.rent
        </Tag>{' '}
        at{' '}
        <Tag
          href="https://machobear.ca"
          $color="#1a1a1a"
          $width="110px"
          $height="31px"
          $paddingLeft="4px"
          $paddingRight="12px"
          $marginTop="3px"
        >
          <Machobear />
        </Tag>
      </SimpleText>
      <SimpleText>
        Check out my{' '}
        <Tag
          href="https://github.com/woofers"
          $color="#0f0e0f"
          $width="35px"
          $height="24px"
          $width2="81px"
          $height2="24px"
          $spacing="4px"
          $paddingLeft="0px"
          $paddingRight="10px"
        >
          <GitHubIcon />
          <GitHubText />
        </Tag>
      </SimpleText>
    </TextContainer>
  </>
)

export default Contact
