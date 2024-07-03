import CountryCard from './CountryCard'

const CountryList = ({ countries, onSelectCountry }) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-7 flex-grow overflow-y-auto h-screen px-5'>
      {
        countries.map((country) => (
          <CountryCard key={country.code} country={country} onSelectCountry={onSelectCountry} />
        ))
      }
    </div>
  )
}

export default CountryList
