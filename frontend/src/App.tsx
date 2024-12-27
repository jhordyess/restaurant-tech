import * as React from 'react'
import Customer from './layouts/customer'
import { HashRouter } from 'react-router-dom'
import { CustomerRoutes, customersLinks } from './routes'
import { Provider } from 'react-redux'
import { applyMiddleware, compose as reduxCompose, legacy_createStore as createStore } from 'redux'
import reducer from '@/store/reducer'
import thunk from 'redux-thunk'
import { logger } from '@/store/middleware'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose

const enhancer = compose(applyMiddleware(thunk, logger))

const store = createStore(reducer, enhancer)

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <Customer links={customersLinks}>
            <Provider store={store}>
              <CustomerRoutes />
            </Provider>
          </Customer>
        </QueryClientProvider>
      </HashRouter>
    </>
  )
}
