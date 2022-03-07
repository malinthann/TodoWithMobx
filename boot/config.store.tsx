import TodoStore from 'store/todo.store'

function config() {
  return {
    todo: new TodoStore(),
  }
}
export default config
