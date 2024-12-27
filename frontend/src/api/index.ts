import { AxiosResponse, AxiosRequestConfig, ResponseType } from 'axios'
import { API } from './AxiosInstance'

type ApiRequestParams = {
  url: string
  data?: object
  query?: object
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  headers?: AxiosRequestConfig['headers']
  responseType?: ResponseType
  abortTimeout?: number
}

type ApiRequest = <T = AxiosResponse['data']>(params: ApiRequestParams) => Promise<T>

export const makeRequest: ApiRequest = async ({
  query: params,
  method = 'GET',
  headers,
  responseType = 'json',
  abortTimeout,
  ...rest
}) => {
  const requestConfig: AxiosRequestConfig = {
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    method,
    params,
    responseType,
    ...(abortTimeout && {
      signal: AbortSignal.timeout(abortTimeout)
    }),
    ...rest
  }

  return API.request(requestConfig)
    .then(response => response.data)
    .catch(error => {
      if (error.response) {
        console.error(error.response.data)
      } else if (error.request) {
        console.error(error.request)
      } else {
        console.error('Error', error.message)
      }
      return Promise.reject(error)
    })
}

export function fakeRequest<T>(dummyData: T): Promise<T> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(dummyData)
    }, 500)
  })
}
