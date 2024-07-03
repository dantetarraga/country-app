import { useEffect, useRef, useState } from 'react'
import IconSearch from '../icons/IconSearch'
import ContinentFilter from './ContinentFilter'

const Search = ({ onSearch, onChangeTerm, searchTerm, onSelectContinent, selectedContinents, setSelectedContinents }) => {
  const [showFilter, setShowFilter] = useState(false)
  const searchRef = useRef(null)
  const filterRef = useRef(null)

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleInputFocus = () => setShowFilter(true)
  const handleClearFilter = () => setSelectedContinents([])

  const handleClickOutside = (event) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target) &&
      filterRef.current &&
      !filterRef.current.contains(event.target)
    ) {
      setShowFilter(false)
    }
  }

  return (
    <div className='relative w-[70%] lg:max-w-[60%] mx-auto bg-white rounded-full shadow-md my-5' ref={searchRef}>
      <div className='flex items-center justify-between px-7 py-2'>
        <div className='w-full'>
          <label htmlFor='country' className='text-gray-600 block leading-none text-sm'>País</label>
          <input
            id='country'
            type='text'
            className='flex-grow text-sm text-gray-400 focus:outline-none border-b-2 border-sky-400 placeholder:text-xs placeholder:text-gray-400 w-[70%]'
            placeholder='Escribe el país que deseas buscar'
            onChange={(e) => onChangeTerm(e.target.value)}
            onFocus={handleInputFocus}
            value={searchTerm}
            autoComplete='off'
          />
        </div>
        <button
          className='bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-300 ease-in-out flex items-center gap-2'
          onClick={() => onSearch(searchTerm)}
        >
          <IconSearch />
          <p className='hidden md:block'>
            Buscar
          </p>
        </button>
      </div>
      {
        showFilter && (
          <div className='absolute top-full left-0 md:w-[68%] w-full mt-4' ref={filterRef}>
            <ContinentFilter
              onSelectContinent={onSelectContinent}
              onClear={handleClearFilter}
              selectedContinents={selectedContinents}
            />
          </div>
        )
      }
    </div>
  )
}

export default Search
