import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_SERVER_URL,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  timeout: 50000,
})

export default api
