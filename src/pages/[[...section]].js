import React, { useEffect, useState } from 'react'
import { styled } from 'emotion'
import useScrollPosition from 'hooks/use-scroll-position'
import useTimeout from 'hooks/use-timeout'
import { useRouter } from 'next/router'
import Logo from 'components/logo'
import Intro from 'components/intro'
import Work from 'components/work'
import Contact from 'components/contact'

const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 40px;
  left: 0;
  height: 320px;
  display: flex;
  padding: 0 20px;
  pointer-events: none;
`

const Me = () => {
  const [hasScrolled, setScrolled] = useState()
  const { y } = useScrollPosition()
  const showHeader = y > 275
  useTimeout(() => setScrolled(true), 2600)
  const router = useRouter()
  const section = router?.query?.section?.[0] || 'intro'
  const slug = (() => {
    if (y > 2015) {
      return '/contact'
    } else if (y > 275) {
      return '/work'
    } else {
      return '/'
    }
  })()
  useEffect(() => {
    if (!router.isReady) return
    router.replace(slug, undefined, { shallow: true })
  }, [slug])
  return (
    <>
      <Header>{showHeader && <Logo />}</Header>
      <Intro showHeader={showHeader} hasScrolled={hasScrolled} />
      <Work />
      <Contact />
    </>
  )
}

export default Me
