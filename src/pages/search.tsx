import * as React from 'react'

import Layout from '../components/layout'
import { Container } from '../components/layout-components'
import SEO from '../components/seo'
import { SearchBox } from '../components/search-box'

const SearchPage = () => {
  return (
    <Layout>
      <Container>
        <SEO title="Search" />
        <SearchBox />
      </Container>
    </Layout>
  )
}

export default SearchPage
