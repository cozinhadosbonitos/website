import * as React from 'react'
import { Box, Container, Flex } from '@chakra-ui/react'

export const Navigation = () => (
  <Box
    as="nav"
    border="black 1px solid"
    borderLeftWidth={0}
    borderRightWidth={0}
  >
    <Container>
      <Flex alignItems="center" justifyContent="space-around" paddingY={4}>
        <Box>All Recipes</Box>
        <Box>Sweet</Box>
        <Box>Savoury</Box>
      </Flex>
    </Container>
  </Box>
)
