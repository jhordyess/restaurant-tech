import { useRoutes } from 'react-router-dom'
import About from '@/pages/About'
import BookNow from '@/pages/BookNow'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Menu from '@/pages/Menu'
import MyAccount from '@/pages/MyAccount'
import MyOrder from '@/pages/MyOrder'
import MyOrders from '@/pages/MyOrders'
import NotFound from '@/pages/NotFound'
import SignIn from '@/pages/SignIn'

const customerRoutes = [
  {
    path: '/',
    element: <Home />,
    excluded: true
  },
  {
    path: '/about',
    element: <About />,
    name: 'About',
    position: 'left'
  },
  {
    path: '/contact',
    element: <Contact />,
    name: 'Contact',
    position: 'left'
  },
  {
    path: '/menu',
    element: <Menu />,
    name: 'Menu',
    position: 'center'
  },
  {
    path: '/order-now',
    element: <BookNow />,
    name: 'Order Now',
    position: 'right'
  },
  {
    path: '/login',
    element: <Login />,
    name: 'Login',
    position: 'right'
  },
  {
    path: '/sign-in',
    element: <SignIn />,
    name: 'Sign In',
    position: 'right',
    isPrivate: true
  },
  {
    path: '/my-account',
    element: <MyAccount />,
    name: 'My Account',
    position: 'right',
    isPrivate: true
  },
  {
    path: '/my-orders',
    element: <MyOrders />,
    name: 'My Orders',
    position: 'right',
    isPrivate: true
  },
  {
    path: '/my-order',
    element: <MyOrder />,
    name: 'My Order',
    position: 'right',
    isPrivate: true
  },
  {
    path: '*',
    element: <NotFound />,
    excluded: true
  }
]

export type TCustomersLink = {
  path: string
  name?: string
  isPrivate?: boolean
}

export type TCustomersLinks = [TCustomersLink[], TCustomersLink, TCustomersLink[]]

const customerRoutesAccepted = customerRoutes.filter(({ excluded }) => !excluded)

const leftDropdown: TCustomersLink[] = customerRoutesAccepted
  .filter(({ position }) => position === 'left')
  .map(({ path, name }) => ({ path, name }))

const rightLinks: TCustomersLink[] = customerRoutesAccepted
  .filter(({ position }) => position === 'right')
  .map(({ path, name, isPrivate }) => ({ path, name, isPrivate }))

const center: TCustomersLink = customerRoutesAccepted
  .filter(({ position }) => position === 'center')
  .map(({ path, name }) => ({ path, name }))[0]

export const customersLinks: TCustomersLinks = [leftDropdown, center, rightLinks]

export const CustomerRoutes = () =>
  useRoutes(customerRoutes.map(({ path, element }) => ({ path, element })))
