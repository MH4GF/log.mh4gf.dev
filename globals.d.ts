declare namespace NodeJS {
  interface ProcessEnv {
    readonly NOTION_TOKEN: string
    readonly NOTION_DATABASE_ID: string
    readonly NEXT_PUBLIC_GTM_ID: string
    readonly NEXT_PUBLIC_VERCEL_URL: string
  }
}
