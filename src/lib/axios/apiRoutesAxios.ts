import axios from 'axios'

const protocol = process.env.NEXT_PUBLIC_VERCEL_URL === 'localhost:3000' ? 'http' : 'https'
const baseUrl = `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}`

export const apiRoutesAxios = axios.create({ baseURL: baseUrl })
