import { Client } from '@notionhq/client'

type ElementType<T> = T extends (infer U)[] ? U : never
type MatchType<T, U, V = never> = T extends U ? T : V

export type PageObject = MatchType<
  ElementType<Awaited<ReturnType<Client['databases']['query']>>['results']>,
  {
    properties: unknown
  }
>
