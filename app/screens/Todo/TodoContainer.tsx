import { inject, observer } from 'mobx-react'
import * as React from 'react'
import { ITodoOModel } from 'store/model/todo.model'
import TodoStore from 'store/todo.store'
import TodoScreen from './TodoScreen'

interface Props {
  todo: TodoStore
}

const TodoContainer = (props: Props) => {
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

  const _onDelete = (item: ITodoOModel) => {
    props.todo.deleteTodo(item)
  }
  const _onEdit = (item: ITodoOModel) => {
    props.todo.updateTodo(item, updateText)
  }

  return (
    <TodoScreen
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

export default inject('todo')(observer(TodoContainer))
