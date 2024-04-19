import React from 'react'
import { Text, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositoriesRest'

const RepositoryList = () => {
  const { repositories } = useRepositories()
  console.log(repositories)

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  )
}

export default RepositoryList
