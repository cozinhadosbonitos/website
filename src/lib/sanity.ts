import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'

export const client = createClient({
  projectId: 'nufe3788',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface SanityRecipe {
  _id: string
  title: string
  _createdAt: string
  tags: string[]
  courseType: string
  steps: string[]
  photo: SanityImageSource
  ingredients: {
    display: string
    food: {
      name: string
      photo: SanityImageSource
    }
  }[]
}

export async function getAllRecipes(): Promise<SanityRecipe[]> {
  return client.fetch(
    `*[_type == "recipe"] | order(_createdAt desc) {
      _id,
      title,
      _createdAt,
      tags,
      courseType,
      photo,
      ingredients[] {
        display,
        food-> {
          name,
          photo
        }
      }
    }`
  )
}

export async function getRecipeByTitle(
  title: string
): Promise<SanityRecipe | null> {
  const recipes = await client.fetch(
    `*[_type == "recipe" && title == $title] {
      _id,
      title,
      _createdAt,
      tags,
      courseType,
      steps,
      photo,
      ingredients[] {
        display,
        food-> {
          name,
          photo
        }
      }
    }`,
    { title }
  )
  return recipes[0] || null
}
