import { RouterProvider } from 'react-router-dom'
import CountryLoading from './components/loading/CountryLoading'
import router from './router/AppRouter'

function App () {
  return <RouterProvider router={router} fallbackElement={<CountryLoading />} />
}

export default App
