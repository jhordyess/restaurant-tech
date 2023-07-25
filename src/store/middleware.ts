import { Middleware } from 'redux'

export const logger: Middleware = () => next => action => {
  console.log(action)
  next(action)
}
