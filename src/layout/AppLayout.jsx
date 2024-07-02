import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import CountryLoading from '../components/loading/CountryLoading'

const AppLayout = () => {
  return (
    <section className='flex h-screen'>
      <Sidebar />
      <main className='w-full px-5'>
        <Suspense fallback={<CountryLoading />}>
          <Outlet />
        </Suspense>
      </main>
    </section>
  )
}

export default AppLayout
