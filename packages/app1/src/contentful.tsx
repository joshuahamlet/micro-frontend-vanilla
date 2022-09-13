import { createClient } from 'contentful'

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})