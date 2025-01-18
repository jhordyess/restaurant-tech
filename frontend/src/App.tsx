import Customer from './layouts/customer'
import { HashRouter } from 'react-router-dom'
import { CustomerRoutes, customersLinks } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <HashRouter>
        <QueryClientProvider client={queryClient}>
          <Customer links={customersLinks}>
            <CustomerRoutes />
          </Customer>
        </QueryClientProvider>
      </HashRouter>
    </>
  )
}
