import { Link } from "react-router-dom"
import { useState } from "react"
import { auth } from "../lib/firebase"
import { onAuthStateChanged } from "firebase/auth"
import useUserData from "../lib/authcontext"
import "../styles/navbar.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import AuthContext from "../lib/authcontext"
import { useContext } from "react"
// import { useNavigate } from "react-router-dom"

export default function Navbar() {
  // const navigate = useNavigate()
  const {authenticated, setAuthenticated} = useContext(AuthContext)

  // const { user, username } = useUserData()

  const [isLogged, setIsLogged] = useState(false)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      //const uid = user.uid;
      console.log(user)
      setIsLogged(true)
      setAuthenticated(user)
      // user
      console.log("onAuthStateChanged user")
    } else {
      setIsLogged(false)
    }
  })

  async function signOutHandler() {
    await auth.signOut()
    toast("Logged Out!")
    // navigate('/')
  }

  return (
    <>
      <ToastContainer />
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
            {!authenticated && (
              <li>
                <Link to={`/login`}>
                  <button className="btn btn-2">Log In</button>
                </Link>
              </li>
            )}

            {authenticated && (
              <li>
                <Link to={`/user/${authenticated.name}`}>
                  <button className="btn btn-2">Profile</button>
                </Link>
              </li>
            )}

            {!authenticated && (
              <li>
                <Link to={`/register`}>
                  <button className="btn btn-4">Register</button>
                </Link>
              </li>
            )}

            {authenticated && (
              <li>
                <Link to={`/user/edit`}>
                  <button className="btn btn-4">Add</button>
                </Link>
              </li>
            )}

            {authenticated && (
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
    </>
  )
}
