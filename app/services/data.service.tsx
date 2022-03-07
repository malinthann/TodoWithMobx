import firestore from '@react-native-firebase/firestore'

const db = firestore()

export function todoRef() {
  return db.collection('todo')
}

export function createId() {
  return db.collection('todo').doc().id
}
