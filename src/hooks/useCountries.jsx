import { useQuery } from '@apollo/client'
import { GET_COUNTRIES } from '../graphql/queries/getCountries'

const useCountries = () => {
  const { data, loading, error } = useQuery(GET_COUNTRIES)
  return { data, loading, error }
}

export default useCountries
