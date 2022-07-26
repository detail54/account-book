import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import MainEl from './Main.styles'

const Main: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  const domain = `https://도메인명`
  const currentUrl = `${domain}/${router.asPath}`
  const pageName =
    router.pathname === '/' ? '' : router.pathname.replace('/', '')

  return (
    <>
      <Head>
        <link rel='canonical' href={currentUrl} />
        <title>{`가계부 / ${pageName}`}</title>
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
