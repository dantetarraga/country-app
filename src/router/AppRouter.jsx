import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import Vista1 from '../pages/Vista1'
import Vista2 from '../pages/Vista2'

const HomePage = lazy(() => import('../pages/HomePage'))

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path: 'vista1',
        element: <Vista1 />
      },
      {
        path: 'vista2',
        element: <Vista2 />
      }
    ]
  }
])

export default router
