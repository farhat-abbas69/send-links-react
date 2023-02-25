import { Link } from "react-router-dom"
// import "./styles/card.css"

export default function Card({ user }) {
  // console.log(user);
  // console.log(user.name)
  //console.log(user.pfp_url)

  function cardClickHandle() {
    console.log("hi")
  }

  return (
    <section className="glass home-page-glass" onClick={cardClickHandle}>
      <li>
        <Link to={`/user/${user.name}`}>
          <div className="user-img">
            <img
              class="img"
              src={
                user.pfp_url ??
                "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/06/gojo2.jpg"
              }
              alt="hi"
            />
          </div>
          <div className="card">
            <img
              style={{ width: "100px", height: "100px" }}
              src="https://fathers.com.sg/wp-content/uploads/2020/09/star-icon.png"
              alt=""
            />
            <div className="card-info">
              <h2>{user.name ?? "yolo"}</h2>
            </div>
            <div className="progress"></div>
          </div>
        </Link>
      </li>
    </section>
  )
}
