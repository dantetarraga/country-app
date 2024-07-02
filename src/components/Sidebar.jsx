import { NavLink } from 'react-router-dom'

const NAVIGATION_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Vista 1', path: '/vista1' },
  { label: 'Vista 2', path: '/vista2' }
]

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-5 p-4'>
      {NAVIGATION_ITEMS.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          className={({ isActive }) => `py-2 px-4 text-slate-950 bg-gray-300 rounded-lg cursor-pointer ${isActive ? 'bg-slate-950 text-gray-300' : ''}`}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar
