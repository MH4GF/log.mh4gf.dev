// https://nextjs.org/docs/basic-features/static-file-serving
export const servingStaticFilePath = (path: string) => {
  return path.replace(/^public/, '')
}
