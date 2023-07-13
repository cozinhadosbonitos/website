import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Card, CardBody, Heading, Text } from '@chakra-ui/react'

export interface Recipe {
  id: string
  date: string
  title: string
  url: string
  description?: string
  photo: {
    asset: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

type RecipeCardProps = {
  recipe: Recipe
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Link to={recipe.url} title={recipe.title}>
      <Card
        flexDirection={{ base: 'column', md: 'row' }}
        overflow="hidden"
        marginY={6}
        borderRadius="none"
        borderWidth={2}
        _hover={{
          boxShadow:
            '0 8px 15px rgba(0, 0, 0, 0.25), 0 5px 8px rgba(0, 0, 0, 0.06)',
        }}
      >
        <GatsbyImage image={recipe.photo.asset.gatsbyImageData} alt="" />
        <CardBody>
          <Heading size="lg">
            {recipe.title} <br />
            <Text as="small" fontSize="0.8em">
              {recipe.date}
            </Text>
          </Heading>
          <Text py={2}>TODO</Text>
        </CardBody>
      </Card>
    </Link>
  )
}
