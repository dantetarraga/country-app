import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import { loaderHome } from '../pages/HomePage'

const HomePage = lazy(() => import('../pages/HomePage'))

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        loader: loaderHome,
        Component: HomePage
      },
      {
        path: 'vista1',
        element: <div>Vista 1</div>
      },
      {
        path: 'vista2',
        element: <div>Vista 2</div>
      }
    ]
  }
])

export default router
