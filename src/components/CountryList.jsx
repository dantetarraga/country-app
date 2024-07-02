import CountryCard from './CountryCard'

const CountryList = ({ countries }) => {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-7'>
      {
        countries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))
      }
    </div>
  )
}

export default CountryList
