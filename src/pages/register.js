import { createUserWithEmailAndPassword } from "firebase/auth"

import { auth } from "../lib/firebase"
import "../styles/edit.css"
import { useNavigate } from "react-router-dom"

export default function Register() {
  const navigate = useNavigate()

  function btnSubmit(e) {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    const name = e.target.name.value
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)

        console.log(`redirecting to home route`)
        navigate('/')

      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorMessage)
      })
  }

  return (
    <form onSubmit={btnSubmit} className="my-form">
      <FormField />
    </form>
  )
}

function FormField() {
  return (
    <fieldset>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="radcowboy@email.com" name="email" className="login-input"/>
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Farhat" name="password" className="login-input"/>
      </div>

      <button className="login-btn" type="submit">
        Register
      </button>
    </fieldset>
  )
}
