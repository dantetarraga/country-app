import { useQuery } from '@apollo/client'
import { useState } from 'react'
import { GET_COUNTRIES } from '../api/graphql/queries/getCountries'
import CountryList from '../components/CountryList'
import Search from '../components/Search'
import client from '../config/apolloClient'

export const loaderHome = async () => {
  const { data } = await client.query({ query: GET_COUNTRIES })

  return ({ data })
}

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const { data } = useQuery(GET_COUNTRIES)

  const filteredCountries = data.countries.filter(country =>
    country.name.toLowerCase().startsWith(searchTerm.toLowerCase())
  )

  const handleSearch = (term) => setSearchTerm(term)

  return (
    <div className='w-full'>
      <Search onSearch={handleSearch} onChange={setSearchTerm} searchTerm={searchTerm} />
      <CountryList countries={filteredCountries} />
    </div>
  )
}

export default HomePage
