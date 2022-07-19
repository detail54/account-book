import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const Main: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  const domain = `https://도메인명`
  const currentUrl = `${domain}/${router.asPath}`
  const pageName = router.pathname === '/' ? '' : router.pathname

  return (
    <>
      <Head>
        <link rel='canonical' href={currentUrl} />
        <title>{`next react query boilerplate${pageName}`}</title>
        <meta name='description' content='__next react query boilerplate' />
        <meta property='og:title' content='__next react query boilerplate' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />
        <meta
          property='og:description'
          content='__next react query boilerplate'
        />
        <meta property='og:url' content={currentUrl} />
        {/* <meta
          property='og:image'
          content={`${domain}/opengraph.png?${(Math.random() * 7).toString(7)}`}
        /> */}
        <meta property='og:type' content='website' />
        <meta
          property='og:site_name'
          content='__next react query boilerplate'
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default Main
