import axios, { type AxiosError } from 'axios'

import { baseURL } from '@/constants/env'
import { getToken, removeToken } from './helpers/token'

export const API = axios.create({ baseURL })

API.interceptors.request.use(
  config => {
    const token = getToken()

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  (error: AxiosError) => Promise.reject(error)
)

API.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const status = error.response?.status

    if (status === 401) {
      const currentPath = window.location.pathname
      const encodedPath = encodeURIComponent(currentPath)

      const URLObject = new URL('/login')
      URLObject.searchParams.append('error', 'Session expired. Please login again.')
      URLObject.searchParams.append('redirect', encodedPath)

      removeToken()
      window.location.href = URLObject.toString()
    }

    return Promise.reject(error)
  }
)
