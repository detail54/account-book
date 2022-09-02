import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
// hook
import { useSession } from 'next-auth/react'
// store
import { useRecoilState } from 'recoil'
import { lastPageState } from 'store/atoms'
// style
import MainEl from './Main.styles'

const Main: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  const { data: session } = useSession()
  const [lastPage, setLastPage] = useRecoilState(lastPageState)

  // 세션 확인하여 마지막 방문 페이지 저장
  useEffect(() => {
    if (!session) {
      const path = router.asPath

      if (
        !path.startsWith('/session-timeout') &&
        !path.startsWith('/signin') &&
        !path.startsWith('/signup') &&
        path !== '/'
      ) {
        const pageName = path.substring(1, path.length)
        setLastPage(pageName)
      }
    }
  }, [session])

  // 마지막 방문 페이지가 있을 경우에만 해당 페이지로 이동시키기 위해
  // session-timeout 쿼리에 페이지 마지막 방문 페이지 이름을 남겨둠.
  useEffect(() => {
    if (!session && lastPage) {
      router.push(`session-timeout?page=${lastPage}`)
    }
  }, [lastPage])

  const domain = `https://도메인명`
  const currentUrl = `${domain}/${router.asPath}`
  const pageName =
    router.pathname === '/' ? '' : router.pathname.replace('/', '/ ')

  return (
    <>
      <Head>
        <link rel='canonical' href={currentUrl} />
        <title>{`가계부 ${pageName}`}</title>
        <meta name='description' content='가계부' />
        <meta property='og:title' content='가계부' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <meta property='og:description' content='가계부' />
        <meta property='og:url' content={currentUrl} />
        {/* <meta
          property='og:image'
          content={`${domain}/opengraph.png?${(Math.random() * 7).toString(7)}`}
        /> */}
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='가계부' />
      </Head>
      <MainEl>
        <Component {...pageProps} />
      </MainEl>
    </>
  )
}

export default Main
