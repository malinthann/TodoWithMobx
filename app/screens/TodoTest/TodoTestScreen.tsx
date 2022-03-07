import SafeArea from 'components/SafeArea'
import React from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { TodoTestStyles as styles } from './TodoTestStyle'

interface Props {}

const TodoTestScreen = (props: Props) => {
  return (
    <SafeArea edges="safe">
      {/* Insert */}
      <TextInput placeholder='Type your todo list'/>
      <Text>Add</Text>
      {/* Edit */}
      {/* Delete */}
    </SafeArea>
  )
}

export default TodoTestScreen
