import { AuthStore } from 'store/auth.store'
import TodoStore from 'store/todo.store'

function config() {
  return {
    todo: new TodoStore(),
    auth: new AuthStore(),
  }
}
export default config
