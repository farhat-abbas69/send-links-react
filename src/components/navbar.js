import { Link } from "react-router-dom"
import { useState } from "react"
import { auth } from "../lib/firebase"
import { onAuthStateChanged } from "firebase/auth"
import useUserData from "../lib/userid"
import "../styles/navbar.css"
// import { useNavigate } from "react-router-dom"


export default function Navbar() {
  // const navigate = useNavigate()

  const { user, username } = useUserData()

  const [isLogged, setIsLogged] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //const uid = user.uid;
      setIsLogged(true)
      console.log("onAuthStateChanged user")
    } else {
      setIsLogged(false)
    }

  })

  async function signOutHandler() {
    await auth.signOut()
    // navigate('/')

  }

  return (
    <header className="main-header">
      <nav className="nav">
        <h1 className="title">
          <li>
          <Link to="/">
            <button className="btn btn-1">Home</button>
          </Link>
          </li>
        </h1>
        <ul className="navlist">
          {!user && (
            <li>
              <Link to={`/login`}>
                <button className="btn btn-2">Log In</button>
              </Link>
            </li>
          )}

          {!user && (
            <li>
              <Link to={`/register`}>
                <button className="btn btn-4">Register</button>
              </Link>
            </li>
          )}

          {user && (
            <li>
              <Link to={`/user/edit`}>
                <button className="btn btn-4">Add</button>
              </Link>
            </li>
          )}

          {user && (
            <li>
              <Link to="/">
                <button className="btn btn-3" onClick={signOutHandler}>
                  Log Out
                </button>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}
