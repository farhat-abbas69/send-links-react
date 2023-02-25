import { useState, useEffect } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, firestore } from "./firebase"

export default function useUserData() {

  const [user] = useAuthState(auth)
  const [username, setUsername] = useState(null)

  useEffect(() => {
    let unsubscribe
    if (user) {
      const ref = firestore.collection("users").doc(user.uid) // users/uid
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.name)
      })
    } else {
      setUsername(null)
    }
    // return unsubscribe
  }, [user])




  return { user, username }
}
