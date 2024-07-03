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
        name
      }
      states {
        name
      }
    }
  }
`
