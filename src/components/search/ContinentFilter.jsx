const CONTINENTS = [
  { name: 'Europe', Image: '/europa.png', code: 'EU' },
  { name: 'Africa', Image: '/africa.png', code: 'AF' },
  { name: 'America del Sur', Image: '/america-sur.png', code: 'SA' },
  { name: 'America del Norte', Image: '/america-norte.png', code: 'NA' },
  { name: 'Asia', Image: '/asia.png', code: 'AS' },
  { name: 'Oceania', Image: '/oceania.png', code: 'OC' }
]

const ContinentFilter = ({ onSelectContinent, onClear, selectedContinents }) => {
  return (
    <div className='bg-white rounded-lg shadow-lg p-4'>
      <div className='flex justify-between items-center'>
        <h3 className='md:text-lg font-semibold text-gray-400 text-xs'>Filtrar por continentes</h3>
        <button
          onClick={onClear}
          className='text-blue-400 hover:underline font-semibold md:text-lg text-xs'
        >
          Limpiar
        </button>
      </div>

      <div className='grid md:grid-cols-3 gap-4 mt-4 grid-cols-2'>
        {
          CONTINENTS.map((continent) => (
            <div
              key={continent.code}
              onClick={() => onSelectContinent(continent)}
              className='flex items-center gap-2 p-2 flex-col w-50 rounded-lg cursor-pointer'
            >
              <img
                src={continent.Image}
                alt={continent.name}
                className={`w-full md:h-32 h-20 object-cover rounded-md 
                  ${selectedContinents.includes(continent)
                    ? 'border-2 border-sky-400'
                    : 'border-2 border-gray-200'}`}
              />
              <p className='font-semibold self-start md:text-sm text-xs text-gray-400'>
                {continent.name}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ContinentFilter
