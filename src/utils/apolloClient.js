import ApolloClient from 'apollo-boost'

const createApolloClient = () => new ApolloClient({
  uri: 'http://192.168.1.5:4000/graphql'
})

export default createApolloClient
