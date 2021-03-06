import {ITodoModel } from 'store/model/todo.model'
import TodoStore from 'store/todo.store'
import * as React from 'react'
import { inject, observer } from 'mobx-react'
import TodoTestScreen from './TodoTestScreen'

interface Props {
  todo: TodoStore
}

const TodoTestContainer = (props: Props) => {
  const [name, setName] = React.useState('')
  const [updateText, setUpdateText] = React.useState('')
  React.useEffect(() => {
    props.todo.fetchSnapshotTodoList()

    return () => {
      props.todo.onUnsubscribeFetchSnapshotTodoList()
    }
  }, [])

  const _insertTodo = () => {
    props.todo.insertTodo(name)
  }

  const _onDelete = (item: ITodoModel) => {
    props.todo.deleteTodo(item)
  }
  const _onEdit = (item: ITodoModel) => {
    props.todo.updateTodo(item, updateText)
  }
  return (
    <TodoTestScreen
      loading={props.todo.loading}
      todoData={props.todo.todoDataList}
      loadingInsert={props.todo.loadingInsert}
      onInsert={_insertTodo}
      setName={setName}
      setUpdateText={setUpdateText}
      onDelete={_onDelete}
      onEdit={_onEdit}
    />
  )
}

export default inject('todo')(observer(TodoTestContainer))
