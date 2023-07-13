import * as React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

export const Navigation = () => (
  <Box
    as="nav"
    border="black 1px solid"
    borderLeftWidth={0}
    borderRightWidth={0}
  >
    <Container maxWidth="4xl">
      <Flex alignItems="center" justifyContent="space-around">
        <Box>All Recipes</Box>
        <Box>Sweet</Box>
        <Box>Savoury</Box>
      </Flex>
    </Container>
  </Box>
)
