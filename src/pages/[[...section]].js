import React, { useEffect, useState } from 'react'
import { styled } from 'emotion'
import useScrollPosition from 'hooks/use-scroll-position'
import useTimeout from 'hooks/use-timeout'
import { useRouter } from 'next/router'
import Logo from 'components/logo'
import Me from 'sections/me'
import Work from 'sections/work'
import Contact from 'sections/contact'

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

const Index = () => {
  const [hasScrolled, setScrolled] = useState()
  const { y } = useScrollPosition()
  const showHeader = y > 275
  useTimeout(() => setScrolled(true), 2600)
  const router = useRouter()
  const section = router?.query?.section?.[0] || 'me'
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
    if (!router.isReady || typeof window === 'undefined') return
    const scrollTo = (x, y) => window.scrollTo({ left: x, top: y, behavior: 'smooth' })
    if (section === 'me') {
      scrollTo(0, 0)
    }
    else if (section === 'work') {
      scrollTo(0, 275 + (1440/2))
    }
    else if (section === 'contact') {
      scrollTo(0, 2315)
    }
  }, [router.isReady, section])
  useEffect(() => {
    if (!router.isReady) return
    router.replace(slug, undefined, { shallow: true })
  }, [slug])
  return (
    <>
      <Header>{showHeader && <Logo />}</Header>
      <Me showHeader={showHeader} hasScrolled={hasScrolled} />
      <Work />
      <Contact />
    </>
  )
}

export default Index
