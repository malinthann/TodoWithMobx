import { action, observable } from 'mobx'
import { createId, todoRef } from 'services/data.service'
import { pushToArray } from 'services/mapping.service'
import { ITodoOModel } from './model/todo.model'

export default class TodoStore {
  @observable loading: boolean = false

  @observable todoDataList: ITodoOModel[] = []

  @observable loadingInsert: boolean = false

  @observable unsubscribeFetchSnapshotTodoList: Function | null = null

  @action
  fetchTodoList() {
    this.loading = true
    // NOTE: one time get data
    todoRef()
      .get()
      .then((docs) => {
        this.todoDataList = pushToArray(docs)
      })
  }

  @action
  onUnsubscribeFetchSnapshotTodoList = () => {
    if (this.unsubscribeFetchSnapshotTodoList) this.unsubscribeFetchSnapshotTodoList()
    return Promise.resolve()
  }

  @action
  async fetchSnapshotTodoList() {
    this.loading = true
    // NOTE: realtime data
    await this.onUnsubscribeFetchSnapshotTodoList()
    this.unsubscribeFetchSnapshotTodoList = todoRef().onSnapshot((docs) => {
      this.todoDataList = pushToArray(docs)
      this.loading = false
    })
  }

  @action
  insertTodo(name: string) {
    this.loadingInsert = true

    const item: ITodoOModel = {
      key: createId(),
      name,
    }

    todoRef()
      .doc(item.key)
      .set(item)
      .then(() => {
        this.loadingInsert = false
      })
  }

  @action
  deleteTodo(item: ITodoOModel) {
    this.loadingInsert = true
    todoRef()
      .doc(item.key)
      .delete()
      .then(() => {
        this.loadingInsert = false
      })
  }

  @action
  updateTodo(item: ITodoOModel, name: string) {
    this.loadingInsert = true

    const updateItem: ITodoOModel = {
      key: item.key,
      name,
    }
    todoRef()
      .doc(item.key)
      .update(updateItem)
      .then(() => {
        this.loadingInsert = false
      })
  }
}
