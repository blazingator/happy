import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { OrphanagesMap, OrphanageDetails } from './pages'

const { Navigator, Screen } = createStackNavigator()

export default function Routes(){
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ 
          headerShown: false
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen name="OrphanageDetails" component={OrphanageDetails} />
      </Navigator>
    </NavigationContainer>
  )
}
