import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import IconMenu from '../components/icons/IconMenu'
import CountryLoading from '../components/loading/CountryLoading'
import Sidebar from '../components/ui/Sidebar'

const AppLayout = () => {
  return (
    <section className='flex h-screen'>
      <Sidebar />
      <main className='w-full px-5 relative'>
        <button className='block md:hidden absolute top-8 left-8 p-2 hover:bg-slate-200 rounded-full'>
          <IconMenu />
        </button>
        <Suspense fallback={<CountryLoading />}>
          <Outlet />
        </Suspense>
      </main>
    </section>
  )
}

export default AppLayout
