import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_COUNTRIES } from '../api/graphql/queries/getCountries'
import CountryDetails from '../components/country/CountryDetails'
import CountryList from '../components/country/CountryList'
import Search from '../components/search/Search'
import client from '../config/apolloClient'

export const loaderHome = async () => {
  const { data } = await client.query({ query: GET_COUNTRIES })

  return ({ data })
}

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContinents, setSelectedContinents] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const { data } = useQuery(GET_COUNTRIES)

  const filteredCountries = data.countries.filter(country =>
    country.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  )

  const handleSearch = (term) => setSearchTerm(term)
  const handleSelectContinent = (continent) => {
    if (selectedContinents.includes(continent)) {
      setSelectedContinents(selectedContinents.filter((item) => item.code !== continent.code))
      return
    }
    setSelectedContinents([...selectedContinents, continent])
  }

  return (
    <div className='w-full'>
      <Search
        onSearch={handleSearch}
        onChangeTerm={setSearchTerm}
        searchTerm={searchTerm}
        onSelectContinent={handleSelectContinent}
        selectedContinents={selectedContinents}
        setSelectedContinents={setSelectedContinents}
      />
      <div className='flex gap-10 justify-between'>
        <CountryList countries={filteredCountries} onSelectCountry={setSelectedCountry} />
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
