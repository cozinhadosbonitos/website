import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { Container } from '../components/layout-components'
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
        <h1>List of recipes:</h1>
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
    allSanityRecipe(sort: { fields: createdAt, order: DESC }) {
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
