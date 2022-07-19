import type { AppProps } from 'next/app'
import { Hydrate, QueryClientProvider } from 'react-query'
import queryClient from 'utils/reactQuery'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/GlobalStyle'
import { useState } from 'react'
import RightTheme from 'styles/ThemeRight'
import DarkTheme from 'styles/ThemeDark'
import Header from 'layout/Header'
import Footer from 'layout/Footer'
import Main from 'layout/Main'

const App = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)

  const changeThemeButtonText = isDarkMode ? 'right mode' : 'dark mode'

  const onChangeTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={isDarkMode ? DarkTheme : RightTheme}>
        <GlobalStyle />
        <Hydrate state={pageProps.dehydratedState}>
          <Header
            changeThemeButtonText={changeThemeButtonText}
            onChangeTheme={onChangeTheme}
          />
          <Main Component={Component} pageProps={pageProps} router={router} />
          <Footer />
          <ReactQueryDevtools
            initialIsOpen={false}
            position='bottom-right'
            panelProps={{ className: 'devtools' }}
          />
        </Hydrate>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
