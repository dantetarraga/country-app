import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import IconMenu from '../icons/IconMenu'

const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Vista 1', path: '/vista1' },
  { label: 'Vista 2', path: '/vista2' }
]

const Sidebar = ({ isShow, isMobile, onClose }) => {
  return (
    <>
      <div
        className={`${!isShow && 'hidden'} bg-gray-600/50 min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm z-10 md:hidden`}
        onClick={onClose}
      />
      <nav
        className={`
        fixed top-0 left-0 h-full w-72 bg-white border-r shadow-sm p-4
        md:static md:block z-10 transition-transform duration-300 ease-in-out
        ${isShow ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}
      >
        <div className='text-center border-b py-2'>
          <img src={Logo} alt='Logo' className='w-32 mx-auto' />
          <h1 className='font-bold uppercase text-lg text-indigo-400'>World Countries</h1>
        </div>
        {isMobile && (
          <button className='block md:hidden absolute top-2 right-2 p-2 hover:bg-slate-200 rounded-full' onClick={onClose}>
            <IconMenu />
          </button>
        )}
        {NAVIGATION_ITEMS.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) => `
        block w-full text-center py-2 px-3 my-2 font-semibold text-sm rounded-md cursor-pointer
        transition-colors ease-in-out duration-200
        ${isActive
        ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
        : 'hover:bg-indigo-50 text-gray-600'}
        `}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </>
  )
}

export default Sidebar
