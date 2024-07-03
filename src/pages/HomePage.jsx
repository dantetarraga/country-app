import { useQuery } from '@apollo/client'
import { useMemo, useState } from 'react'
import { GET_COUNTRIES } from '../api/graphql/queries/getCountries'
import CountryDetails from '../components/country/CountryDetails'
import CountryList from '../components/country/CountryList'
import ErrorFallback from '../components/error/ErrorFallback'
import Search from '../components/search/Search'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContinents, setSelectedContinents] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const { data, error } = useQuery(GET_COUNTRIES)

  const filteredCountries = useMemo(() => {
    if (!data || !data.countries) return []

    return data.countries.filter(country => {
      const matchesSearchTerm = country.name.toLowerCase().startsWith(searchTerm.toLowerCase())

      const matchesContinent = selectedContinents.length === 0 ||
        selectedContinents.some(continent => continent.code === country.continent.code)

      return matchesSearchTerm && matchesContinent
    })
  }, [data, searchTerm, selectedContinents])

  const handleSearch = (term) => setSearchTerm(term)
  const handleSelectContinent = (continent) => {
    if (selectedContinents.includes(continent)) {
      setSelectedContinents(selectedContinents.filter((item) => item.code !== continent.code))
      return
    }
    setSelectedContinents([...selectedContinents, continent])
  }

  if (error) return <ErrorFallback />

  return (
    <div className='w-full flex flex-col'>
      <div className='w-full ml-5 md:ml-0'>
        <Search
          onSearch={handleSearch}
          onChangeTerm={setSearchTerm}
          searchTerm={searchTerm}
          onSelectContinent={handleSelectContinent}
          selectedContinents={selectedContinents}
          setSelectedContinents={setSelectedContinents}
        />
      </div>
      <div className='flex md:gap-10 gap-2 justify-between'>
        <CountryList
          countries={filteredCountries}
          onSelectCountry={setSelectedCountry}
          selectedCountry={selectedCountry}
        />
        {
          selectedCountry &&
          (
            <aside className={`${selectedCountry ? 'block self-center' : 'hidden'}`}>
              <CountryDetails country={selectedCountry} onSelectCountry={setSelectedCountry} />
            </aside>
          )
        }
      </div>
    </div>
  )
}

export default HomePage
