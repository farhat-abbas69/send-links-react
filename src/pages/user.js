import Ucard from "../components/usercard";
import { useState,useEffect } from "react";
import { firestore } from '../lib/firebase.js';
import { useParams } from "react-router-dom";
export default function User() {
    const {id} = useParams();
    // const { slug } = props;
    // console.log(slug);
  
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
  
    async function getUsers() {
    //   console.log(slug);
  
      setLoading(true);
  
      const userQuery = firestore
        .collectionGroup('users')
        .where('name', '==', id)
        .limit(1);
      const userDetails = (await userQuery.get()).docs.map((doc) => doc.data());
  
      setUser(userDetails[0]);
  
      // console.log(userDetails);
      // console.log(userDetails[0])
      // console.log(userDetails[0]['name']);
      // console.log(userDetails[0]['pfp_url']);
      // // console.log(userDetails[0]['socials']);
  
      setLoading(false);
    }
  
    useEffect(() => {
      getUsers();
    }, []);
    return (
      <>
        {loading && "Loading"}
         {!loading &&<Ucard userprofile={user} />}
      </>
    );
  }