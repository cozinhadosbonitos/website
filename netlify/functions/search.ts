const sanityClient = require('@sanity/client')
import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  const client = sanityClient({
    projectId: 'nufe3788',
    dataset: 'production',
    useCdn: true,
  })
  const queryInput = event.queryStringParameters?.q
  if (!queryInput) {
    return {
      statusCode: 200,
      body: JSON.stringify([]),
    }
  }
  const query =
    '*[_type == "recipe" && title match $query] {title, slug, photo}'
  const params = { query: `*${queryInput}*` }
  const recipes = await client.fetch(query, params)
  return {
    statusCode: 200,
    body: JSON.stringify(recipes),
  }
}

export { handler }
