import * as React from 'react'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { Flex, Heading, Text } from '@chakra-ui/react'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Flex
      alignItems="center"
      justifyContent="center"
      minHeight="30vh"
      direction="column"
    >
      <Heading as="h1">NOT FOUND</Heading>
      <Text>You just hit a route that doesn&#39;t exist... the sadness.</Text>
    </Flex>
  </Layout>
)

export default NotFoundPage
