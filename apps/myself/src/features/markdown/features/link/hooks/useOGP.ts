type Result = {
  title: string
  description: string
  imageSrc: string
  url: string
}

type UseOGP = (url: string) => Result

export const useOGP: UseOGP = (url) => {
  return { title: url, description: '', imageSrc: '', url: url }
}
