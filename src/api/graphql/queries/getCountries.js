import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      code
      name
      capital
      currency
      languages {
        name
        code
      }
      continent {
        code
        name
      }
      states {
        name
      }
    }
  }
`

export const GET_COUNTRIES_BY_CONTINENT = gql`
  query GetCountriesByContinent($continents: [String!]) {
    countries(filter: { continent: { in: $continents } }) {
      code
      name
      continent {
        name
      }
      capital
    }
  }
`
