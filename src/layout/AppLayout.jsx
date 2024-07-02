import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const AppLayout = () => {
  return (
    <section className='flex py-2'>
      <Sidebar />
      <main className='w-full px-5'>
        <Suspense fallback={<div>Loading...</div>} />
        <Outlet />
      </main>
    </section>
  )
}

export default AppLayout
