import CountryCard from './CountryCard'

const CountryList = ({ countries, onSelectCountry, selectedCountry }) => {
  return (
    <div className={`${countries.length <= 4 ? 'grid-cols-[repeat(auto-fit,minmax(200px,250px))] h-auto' : 'grid-cols-[repeat(auto-fit,minmax(200px,1fr))] h-[90vh]'} grid gap-7 flex-grow overflow-y-auto px-5 border-r-2`}>
      {
        countries.map((country) => (
          <CountryCard
            key={country.code}
            country={country}
            onSelectCountry={onSelectCountry}
            selectedCountry={selectedCountry}
          />
        ))
      }
    </div>
  )
}

export default CountryList
