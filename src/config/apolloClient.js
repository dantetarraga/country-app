import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'https://countries.trevorblades.com/'
})

const graphqlClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default graphqlClient
