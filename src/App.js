import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import "bootstrap/dist/css/bootstrap.css"

import "./index.css"
import "./styles/card.css"
import "./styles/form.css"

import Navbar from "./components/navbar"
import Login from "./pages/login"
import Edit from "./pages/edit"
import User from "./pages/user"
import Register from "./pages/register"
import AuthContext  from './lib/authcontext'
import { useState } from "react"

function App() {
  const [authenticated, setAuthenticated] = useState(null)
  

  return (
    <>
      <AuthContext.Provider value={{authenticated, setAuthenticated}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/user" element={<Home />} />
          <Route path="/user/edit" element={<Edit />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </AuthContext.Provider>

    </>
  )
}

export default App
