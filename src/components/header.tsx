import * as React from 'react'
import { Link } from 'gatsby'

import SiteLogo from '../icons/logo.svg'
import { Box, Flex } from '@chakra-ui/react'

export const Header = () => (
  <Flex color="primary" paddingY="10" justifyContent="center" as="header">
    <Box margin="0 auto">
      <Link to="/">
        <SiteLogo />
      </Link>
    </Box>
  </Flex>
)
