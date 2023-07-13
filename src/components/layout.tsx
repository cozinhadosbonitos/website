import * as React from 'react'

import { Header } from './header'
import { Navigation } from './navigation'
import { Footer } from './footer'

import { theme as chakraTheme } from '../utils/theme'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'

const DEFAULT_PADDING = 10

type LayoutProps = {
  paddingTop?: number
  children?: React.ReactNode
}

export const Layout = ({
  paddingTop = DEFAULT_PADDING,
  children,
}: LayoutProps) => {
  return (
    <>
      <ChakraProvider theme={chakraTheme}>
        <Flex direction="column" minHeight="100vh">
          <Header />
          <Navigation />
          <Box as="main" paddingY={DEFAULT_PADDING} paddingTop={paddingTop}>
            {children}
          </Box>
          <Footer />
        </Flex>
      </ChakraProvider>
    </>
  )
}
