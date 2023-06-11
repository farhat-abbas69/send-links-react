import { useState } from "react"
import { firestore } from "../lib/firebase.js"
import useUserData from "../lib/authcontext.js"
import "../styles/edit.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Edit() {
  const { user, username } = useUserData()

  function submitHandle(e) {
    e.preventDefault()
    console.log(e.target.url.value) // profile picture
    const pfp = e.target.url.value
    const name = e.target.name.value
    const social = e.target.socialplat.value
    const socialvalue = e.target.sociallink.value
    console.log(pfp)
    console.log(name)
    console.log(social)
    console.log(socialvalue)

    const data = {
      socials: {},
    }

    if (name !== "") {
      data["name"] = name
    }
    if (pfp !== "") {
      data["pfp_url"] = pfp
    }
    if (social !== "") {
      data.socials[social] = socialvalue
    }

    console.log(data)

    firestore
      .collection("users")
      .doc(user?.uid)
      .set(data, { merge: true })
      .then(() => {
        console.log("User added!")
      })

    toast("🦄 Link Added!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        // rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form onSubmit={submitHandle}>
        {/* Same as */}
        <div className="editcards">
          <div className="editcard">
            <ProfilePicture />
          </div>
          <Social title="Your Name" placeholder="Enter your Name" name="name" />
          <Social
            title="Social Platform"
            placeholder="Social Media Platform"
            name="socialplat"
          />
          <Social
            title="Your Link"
            placeholder="Your Social Media Link"
            name="sociallink"
          />
        </div>
        <div className="center-div">
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159666.png"
            className="c"
            alt="submit"
          />
        </div>
        <div className="center-div">
          <button className="btn-add">ADD SOCIALS!</button>
        </div>
      </form>
    </>
  )
}

function ProfilePicture() {
  const [link, setLink] = useState()
  return (
    <>
      <h2 className="head-title">Profile Picture</h2>
      <img
        className="pfp-img "
        src={
          link ??
          "https://i.pinimg.com/736x/12/30/bc/1230bc4657883f6dd6c96725bd58dc1b.jpg"
        }
      />
      <input
        name="url"
        type="text"
        onChange={(e) => setLink(e.target.value)}
        placeholder="Image Url"
      />
    </>
  )
}

function Social({ title, placeholder, name }) {
  return (
    <div className="editcard">
      <div className="head">
        <h2 className="head-title">{title}</h2>
      </div>
      <div className="card-info">
        <input type="text" name={name} placeholder={placeholder} />
      </div>
      <h2></h2>
    </div>
  )
}
