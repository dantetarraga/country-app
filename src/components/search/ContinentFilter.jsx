const CONTINENTS = [
  { name: 'Europe', Image: 'https://restcountries.com/data/eu.png' },
  { name: 'Africa', Image: 'https://restcountries.com/data/af.png' },
  { name: 'Americas', Image: 'https://restcountries.com/data/am.png' },
  { name: 'Asia', Image: 'https://restcountries.com/data/as.png' },
  { name: 'Oceania', Image: 'https://restcountries.com/data/oc.png' }
]

const ContinentFilter = () => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4'>
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold'>Filtrar por continentes</h3>
        <button
          // onClick={onClear}
          className='text-blue-500 hover:underline'
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}

export default ContinentFilter
