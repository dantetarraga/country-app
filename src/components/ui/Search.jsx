import IconSearch from '../icons/IconSearch'

const Search = ({ onSearch, onChange, searchTerm }) => {
  return (
    <div className='max-w-[60%] mx-auto bg-white rounded-full shadow-md overflow-hidden my-5'>
      <div className='flex items-center justify-between px-7 py-2'>
        <div className='w-full'>
          <label htmlFor='country' className='text-gray-600 block leading-none text-sm'>País</label>
          <input
            id='country'
            type='text'
            className='flex-grow text-sm text-gray-400 focus:outline-none border-b-2 border-sky-400 placeholder:text-xs placeholder:text-gray-400 w-[70%]'
            placeholder='Escribe el país que deseas buscar'
            onChange={(e) => onChange(e.target.value)}
            value={searchTerm}
          />
        </div>
        <button
          className='bg-sky-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-300 ease-in-out flex items-center gap-2'
          onClick={() => onSearch(searchTerm)}
        >
          <IconSearch />
          Buscar
        </button>
      </div>
    </div>
  )
}

export default Search