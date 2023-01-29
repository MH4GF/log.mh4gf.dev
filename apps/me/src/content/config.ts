import { defineCollection } from 'astro:content'
const meCollection = defineCollection({})
export const collections = {
  me: meCollection,
}
