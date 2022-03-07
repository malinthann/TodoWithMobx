import { action, observable } from 'mobx'

export class AuthStore {
  @observable loading: boolean = false

  @action
  loginWithEmailAndPassword() {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 500)
  }
}