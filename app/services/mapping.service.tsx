import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export function pushToArray(snapshot: FirebaseFirestoreTypes.QuerySnapshot): Array<any> {
  if (snapshot?.empty) return []
  return snapshot?.docs ? snapshot?.docs.map((m) => ({ id: m.id, ...m.data() })) : []
}

export function pushToObject(snapshot: FirebaseFirestoreTypes.DocumentSnapshot): any {
  if (!snapshot?.exists) return null
  return { id: snapshot.id, ...snapshot.data() }
}
