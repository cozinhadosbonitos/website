import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './global-style'
import { Header } from './header'
import { Navigation } from './navigation'
import { Footer } from './footer'
import { theme } from '../theme'

import { theme as chakraTheme } from '../utils/theme'
import { ChakraProvider, Flex } from '@chakra-ui/react'

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ChakraProvider theme={chakraTheme}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Flex direction="column" minHeight="100vh">
            <Header />
            <Navigation />
            <main>{children}</main>
            <Footer />
          </Flex>
        </ThemeProvider>
      </ChakraProvider>
    </>
  )
}
