import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

const Error = () => {
  const router = useRouter()
  useEffect(() => {
    router.replace('/')
  }, [router])
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  )
}

export default Error
