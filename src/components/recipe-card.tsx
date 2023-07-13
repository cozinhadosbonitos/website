import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

// @ts-ignore
import { SiteThemeProps } from '../theme'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

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
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        margin={6}
        border="black 3px solid"
        _hover={{
          cursor: 'pointer',
          boxShadow:
            '0 8px 15px rgba(0, 0, 0, 0.25), 0 5px 8px rgba(0, 0, 0, 0.06)',
        }}
      >
        <Box flexShrink={0}>
          <GatsbyImage image={recipe.photo.asset.gatsbyImageData} alt="" />
        </Box>
        <Box padding={4}>
          <Heading as="h2" size="h4">
            {recipe.title} <br />
            <Box as="small" fontSize="0.8em">
              {recipe.date}
            </Box>
          </Heading>
          <Text>TODO</Text>
        </Box>
      </Flex>
    </Link>
  )
}
