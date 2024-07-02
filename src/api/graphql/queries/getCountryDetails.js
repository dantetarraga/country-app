import { gql } from '@apollo/client'

export const GET_COUNTRY_DETAILS = gql`
  query GetCountryDetails($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`
