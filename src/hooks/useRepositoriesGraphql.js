import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries'

const useRepositories = () => {
  const { data = {}, loading, error, refetch } = useQuery(GET_REPOSITORIES)

  if (error) {
    console.log('Error: ', error)
    return { loading, repositories: null, refetch }
  }
  console.log(data)

  const { repositories = null } = data

  const repositoriesNodes = repositories
    ? repositories.edges?.map(edge => edge.node)
    : []

  return { loading, repositories: repositoriesNodes, refetch }
}

export default useRepositories
