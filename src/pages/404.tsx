import * as React from 'react'
import { Flex, Heading, Text } from '@chakra-ui/react'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="30vh"
      direction="column"
    >
      <Heading>Not Found</Heading>
      <Text>You just hit a page that doesn't exist...</Text>
    </Flex>
  </Layout>
)

export default NotFoundPage
