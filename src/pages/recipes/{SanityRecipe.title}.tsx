import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

import Layout from '../../components/layout'
import { Container } from '../../components/layout-components'
import SEO from '../../components/seo'

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
      <Container>
        <SEO title={recipe.title} keywords={recipe.tags} />
        <h1>{recipe.title}</h1>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.display}</li>
          ))}
        </ul>
        <h2>Steps</h2>
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
