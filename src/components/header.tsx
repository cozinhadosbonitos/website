import * as React from 'react'
import { Link } from 'gatsby'
import { Box, Flex, Heading, Icon, VisuallyHidden } from '@chakra-ui/react'

import SiteLogo from '../icons/logo.svg'

export const Header = () => (
  <Flex color="primary" paddingY="10" justifyContent="center" as="header">
    <Box margin="0 auto">
      <Link to="/">
        <Heading as="h1" marginY={0}>
          <Icon as={SiteLogo} boxSize="423px 52px" />
          <VisuallyHidden>Cozinha dos bonitos</VisuallyHidden>
        </Heading>
      </Link>
    </Box>
  </Flex>
)
