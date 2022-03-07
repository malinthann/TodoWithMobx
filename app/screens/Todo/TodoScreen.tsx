import _styles from '@styles'
import SafeArea from 'components/SafeArea'
import React from 'react'
import { View, Text, ActivityIndicator, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { ITodoOModel } from 'store/model/todo.model'

interface Props {
  loading: boolean
  todoData: ITodoOModel[]
  loadingInsert: boolean
  onInsert: () => void
  setName: (t: string) => void
  setUpdateText: (t: string) => void
  onDelete: (item: ITodoOModel) => void
  onEdit: (item: ITodoOModel) => void
}

const TodoScreen = (props: Props) => {
  return (
    <SafeArea edges="safe" style={_styles.flx1}>
      <TextInput onChangeText={props.setName} placeholder="something" />
      <TextInput onChangeText={props.setUpdateText} placeholder="update" />
      <TouchableOpacity onPress={props.onInsert}>
        <Text>insert</Text>
      </TouchableOpacity>
      {props.loading || props.loadingInsert ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={props.todoData}
          renderItem={({ item, index }) => {
            return (
              <View style={_styles.rows}>
                <TouchableOpacity style={_styles.flx1} onPress={() => props.onDelete(item)}>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.onEdit(item)}>
                  <Text>edit</Text>
                </TouchableOpacity>
              </View>
            )
          }}
        />
      )}
    </SafeArea>
  )
}

export default TodoScreen
