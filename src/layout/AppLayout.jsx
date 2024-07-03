import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import CountryLoading from '../components/loading/CountryLoading'
import Sidebar from '../components/ui/Sidebar'

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
