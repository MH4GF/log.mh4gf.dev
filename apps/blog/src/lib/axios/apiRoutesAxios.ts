import axios from 'axios'

const hostUrl = process.env.NEXT_PUBLIC_VERCEL_ALIAS_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL
const protocol = hostUrl === 'localhost:3000' ? 'http' : 'https'
const baseUrl = `${protocol}://${hostUrl}`

export const apiRoutesAxios = axios.create({ baseURL: baseUrl })
