import * as React from 'react'
import { graphql } from 'gatsby'
import { Container, Heading } from '@chakra-ui/react'

import { Layout } from '../components/layout'
import { SEO } from '../components/seo'
import { RecipeCard, Recipe } from '../components/recipe-card'

interface RecipeNode {
  node: Recipe
}

interface IndexPageProps {
  data: {
    allSanityRecipe: {
      edges: RecipeNode[]
    }
  }
}

const IndexPage = ({ data }: IndexPageProps) => {
  const recipes = data.allSanityRecipe.edges.map(({ node }) => node)
  return (
    <Layout>
      <Container>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Heading size="xl">List of recipes:</Heading>
        {recipes.map((recipe) => (
          <RecipeCard recipe={recipe} key={recipe.id} />
        ))}
      </Container>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query RecipesList {
    allSanityRecipe(sort: { createdAt: DESC }) {
      edges {
        node {
          id
          ...FormattedDate
          year: createdAt(formatString: "YYYY")
          title
          url: gatsbyPath(filePath: "/recipes/{SanityRecipe.title}")
          photo {
            asset {
              gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`
