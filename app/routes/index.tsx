import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoContainer from 'screens/Todo/TodoContainer'
import TodoTestContainer from 'screens/TodoTest/TodoTestContainer'

const HomeStack = createNativeStackNavigator()

function HOME_STACK() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TODO_TEST" component={TodoTestContainer} />
      <HomeStack.Screen name="TODO" component={TodoContainer} />
    </HomeStack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <HOME_STACK />
    </NavigationContainer>
  )
}
