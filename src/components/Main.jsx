import React from 'react'
import { View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import LoginPage from '../pages/Login'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route
          path='/'
          exact
          element={<RepositoryList />}
        />
        <Route
          path='/signin'
          exact
          element={<LoginPage />}
        />
      </Routes>
    </View>
  )
}

export default Main
