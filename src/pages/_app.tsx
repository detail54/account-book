import React, { useState } from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { Hydrate, QueryClientProvider } from 'react-query'
import queryClient from 'utils/reactQuery'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import RightTheme from 'styles/ThemeRight'
import DarkTheme from 'styles/ThemeDark'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

const Header = dynamic(() => import('layout/Header'))
const Footer = dynamic(() => import('layout/Footer'))
const Main = dynamic(() => import('layout/Main'))

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const onChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <SessionProvider
      session={pageProps.session}
      refetchInterval={60 * 5}
      refetchOnWindowFocus
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={isDarkMode ? DarkTheme : RightTheme}>
          <GlobalStyle />
          <Hydrate state={pageProps.dehydratedState}>
            <RecoilRoot>
              <Header isDarkMode={isDarkMode} onChangeTheme={onChangeTheme} />
              <Main
                Component={Component}
                pageProps={pageProps}
                router={router}
              />
              <Footer />
            </RecoilRoot>
            <ReactQueryDevtools
              initialIsOpen={false}
              position='bottom-right'
              panelProps={{ className: 'devtools' }}
            />
          </Hydrate>
        </ThemeProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default App
