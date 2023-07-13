import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import { Layout } from '../../components/layout'
import { SEO } from '../../components/seo'
import { Container, Heading } from '@chakra-ui/react'

interface Ingredient {
  display: string
  food: {
    name: string
    photo: {
      asset: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

interface Recipe {
  id: string
  title: string
  steps: string[]
  tags: string[]
  photo: {
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  ingredients: Ingredient[]
}

interface RecipePagePops {
  data: {
    sanityRecipe: Recipe
  }
}

const RecipePage = ({ data }: RecipePagePops) => {
  const recipe = data.sanityRecipe
  console.info(recipe.ingredients)
  return (
    <Layout>
      <GatsbyImage image={recipe.photo.asset.gatsbyImageData} alt="" />
      <Container maxWidth="4xl">
        <SEO title={recipe.title} keywords={recipe.tags} />
        <Heading as="h1">{recipe.title}</Heading>
        <Heading as="h2">Ingredients</Heading>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.display}</li>
          ))}
        </ul>
        <Heading as="h2">Steps</Heading>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  fragment FormattedDate on SanityRecipe {
    date: createdAt(formatString: "MMMM DD, YYYY")
  }

  query Recipe($id: String!) {
    sanityRecipe(id: { eq: $id }) {
      id
      ...FormattedDate
      title
      steps
      tags
      photo {
        asset {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            aspectRatio: 1.9
          )
        }
      }
      ingredients {
        display
        food {
          name
          photo {
            asset {
              gatsbyImageData(width: 50, height: 50, placeholder: BLURRED)
            }
          }
        }
      }
    }
  }
`

export default RecipePage
