import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global-style'
import { MainWrapper } from './layout-components'
import { Header } from './header'
import { Navigation } from './navigation'
import { Footer } from './footer'
import { theme } from '../theme'

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainWrapper>
          <Header />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </MainWrapper>
      </ThemeProvider>
    </>
  )
}
