import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const API = axios.create({
  baseURL: 'https://dummyjson.com',
  responseType: 'json'
})

const getRequestConfig = (authorization?: string): AxiosRequestConfig => {
  const headers: AxiosRequestConfig['headers'] = {
    // "Access-Control-Allow-Origin": "*",
    'Content-Type': 'application/json'
  }
  if (authorization) headers.Authorization = `Bearer ${authorization}`
  return { headers }
}

type ApiRequest<T> = {
  url: string
  data: T
  method?: 'GET' | 'POST' | 'DELETE'
  authorization?: string
}

export function makeRequest<T>({
  url,
  data,
  method = 'GET',
  authorization
}: ApiRequest<T>): Promise<AxiosResponse> {
  const requestConfig = getRequestConfig(authorization)
  switch (method) {
    case 'GET':
      return API.get(url, requestConfig)
    case 'POST':
      return API.post(url, data, requestConfig)
    case 'DELETE':
      return API.delete(url, requestConfig)
    default:
      throw new Error('Invalid request method')
  }
}

export function fakeRequest<T>(dummyData: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dummyData)
    }, 500)
  })
}
