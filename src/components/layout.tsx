import * as React from 'react'

import { Header } from './header'
import { Navigation } from './navigation'
import { Footer } from './footer'

import { theme as chakraTheme } from '../utils/theme'
import { ChakraProvider, Flex } from '@chakra-ui/react'

type LayoutProps = {
  children?: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ChakraProvider theme={chakraTheme}>
        <Flex direction="column" minHeight="100vh">
          <Header />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
