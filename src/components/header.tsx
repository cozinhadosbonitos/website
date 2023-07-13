import * as React from 'react'
import { Link } from 'gatsby'
import { Box, Flex } from '@chakra-ui/react'

import SiteLogo from '../icons/logo.svg'

export const Header = () => (
  <Flex color="primary" paddingY="10" justifyContent="center" as="header">
    <Box margin="0 auto">
      <Link to="/">
        <SiteLogo />
      </Link>
    </Box>
  </Flex>
)
