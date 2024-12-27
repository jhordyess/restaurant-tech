import { LS_TOKEN_KEY } from '@/constants/app'

export const getToken = () => {
  return localStorage.getItem(LS_TOKEN_KEY)
}

export const removeToken = () => {
  localStorage.removeItem(LS_TOKEN_KEY)
}
