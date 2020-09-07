import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { StatusBar } from 'react-native'
import Dashboard from '../pages/Dashboard'

const App = createStackNavigator()

const AppRoutes: React.FC = () => (
  <>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#dcdcdc' },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  </>
)

export default AppRoutes
