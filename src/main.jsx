import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import graphqlClient from './config/apolloClient.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={graphqlClient}>
    <App />
  </ApolloProvider>
)
