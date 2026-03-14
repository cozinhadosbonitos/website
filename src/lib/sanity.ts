import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: 'nufe3788',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export interface SanityRecipe {
  _id: string
  title: string
  _createdAt: string
  tags: string[]
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
