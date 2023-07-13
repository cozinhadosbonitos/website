import * as React from 'react'
import { Box, Container, Link } from '@chakra-ui/react'

export const Footer = () => (
  <Box color="black" backgroundColor="primary" paddingY={8}>
    <Container>
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link href="https://www.gatsbyjs.org" isExternal variant="currentColor">
        Gatsby
      </Link>
    </Container>
  </Box>
)
