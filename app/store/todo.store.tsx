import { action, observable } from 'mobx'
import { createId, todoRef } from 'services/data.service'
import { pushToArray } from 'services/mapping.service'
import { ITodoModel } from './model/todo.model'

export default class TodoStore {
  @observable loading: boolean = false

  @observable todoDataList: ITodoModel[] = []

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

    const item: ITodoModel = {
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
  deleteTodo(item: ITodoModel) {
    this.loadingInsert = true
    todoRef()
      .doc(item.key)
      .delete()
      .then(() => {
        this.loadingInsert = false
      })
  }

  @action
  updateTodo(item: ITodoModel, name: string) {
    this.loadingInsert = true

    const updateItem: ITodoModel = {
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
