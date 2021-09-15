import React, { useRef, useEffect, useState } from 'react'
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
  top: 0;
  left: 0;
  height: 130px;
  width: 210px;
  display: flex;
  padding: 40px 20px 0;
`

const Index = () => {
  const [timer, setTimer] = useState()
  const { y } = useScrollPosition()
  const showHeader = y > 275
  useTimeout(() => setTimer(true), 2600)
  const router = useRouter()
  const hasLoaded = router?.query?.reset === 'true' || !router?.query?.reset  ? false : true
  const section = router?.query?.section?.[0] || 'me'
  const hasScrolled = section !== 'me' || timer
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
    if (!router.isReady || typeof window === 'undefined' || hasLoaded) return
    const scrollTo = (x, y) => window.scrollTo({ left: x, top: y, behavior: 'auto' })
    if (section === 'me') {
      scrollTo(0, 0)
    }
    else if (section === 'work') {
      scrollTo(0, 275 + (1440/2))
    }
    else if (section === 'contact') {
      scrollTo(0, 2315)
    }
  }, [router.isReady, section, hasLoaded])
  useEffect(() => {
    if (!router.isReady || router.asPath === slug) return
    const query = router?.query
    const pathname = router?.pathname
    router.replace("/[[...section]]?reset=false", slug, { shallow: true })
  }, [slug, router])
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
