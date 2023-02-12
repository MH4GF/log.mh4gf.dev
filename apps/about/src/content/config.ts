// eslint-disable-next-line import/no-unresolved
import { defineCollection } from 'astro:content'
const meCollection = defineCollection({})
export const collections = {
  me: meCollection,
}
