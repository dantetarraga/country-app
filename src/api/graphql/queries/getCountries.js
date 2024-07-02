import { gql } from '@apollo/client'

export const GET_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      code
      name
      emoji
      continent {
        name
      }
    }
  }
`
