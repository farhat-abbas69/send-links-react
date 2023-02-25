import useUserData from '../lib/userid'
import '../styles/usercard.css'

export default function Ucard({ userprofile }) {
  console.log(userprofile);
  const socials = userprofile.socials?? {"so empty": "0"};
  console.log(`Socials has a value: ${socials}`) // social object

  let socialmed = Object.keys(socials)
  console.log(socialmed) // keys



  const {user, username} = useUserData()


  return (
    <div className="u-card-user_screen">

      <div className="u-card-main">
        <section className="u-glass">
          <div className="user-img">
            
            <img
              className="img"
              src={`${
                userprofile.pfp_url ??
                'https://socialsfrag.com/wp-content/uploads/2022/04/Why-Gojo-Satoru-Covers-His-Eyes-And-Can-He-See-Through-His-Blindfold_-758x426.jpg'
              }`}
              alt={'hi'}
            />
          </div>
          <h2 className="center-text">{userprofile.name}</h2>
          <div className="u-cards">
            {socialmed?.map((social) => (
              <Card social={social} value={socials[social]} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Card({ social, value }) {
  console.log(value)
  return (
    <div className="u-card">
      {/* <img
        className="logo"
        src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
        alt=""
      /> */}
      <div className="hidden">
        <div className="u-card-info">
          <h2>{social}</h2>
        </div>
      </div>
      <h2></h2>
    </div>
  );
}