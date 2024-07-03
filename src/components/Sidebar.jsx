import { NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Vista 1', path: '/vista1' },
  { label: 'Vista 2', path: '/vista2' }
]

const Sidebar = () => {
  return (
    <nav
      className='h-full flex flex-col bg-white border-r shadow-sm gap-4 p-4'
    >
      <div className='text-center border-b py-2'>
        <img src={Logo} alt='Logo' className='w-32 mx-auto' />
        <h1 className='font-bold uppercase text-lg text-indigo-400'>World Countries</h1>
      </div>
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) => `w-60 text-center py-2 px-3 font-semibold text-sm rounded-md cursor-pointer transition-colors ease-in-out duration-200
          ${isActive
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'}`}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Sidebar
