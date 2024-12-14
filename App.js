import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-native/native-stack"
import SensorsScreen from './screens/SensorsScreen'
import LocationScreen from './screens/LocationScreen'
import CellularInfoScreen from './screens/CellularInfoScreen'

const { Navigator, Screen} = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Sensors">
        <Screen name="Sensors" component={SensorsScreen} />
        <Screen name="Location" component={LocationScreen} />
        <Screen name="Cellular Info" component={CellularInfoScreen} />
      </Navigator>
    </NavigationContainer>
  )
}

