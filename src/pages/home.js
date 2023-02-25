import Banner from '../components/banner.js';
import Header from '../components/header.js';
import Card from '../components/card.js';

import { firestore } from '../lib/firebase.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Loader from '../components/loader.js';



export default function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
  
    async function getUsers() {
      setLoading(true);
  
      const userQuery = firestore.collectionGroup('users').limit(10);
      const usersList = (await userQuery.get()).docs.map((doc) => doc.data());
  
      setUsers(users.concat(usersList));
      // console.log(usersList);
  
      console.log(setUsers(usersList));
  
      setLoading(false);
    }
  
    useEffect(() => {
      getUsers();
    }, []);
  
    return (
      <>
        {!loading && <Header />}
        {<Banner />}
        {loading && <Loader />}
        <Container fluid={true}>
          <Row>
            {!loading && users.map((user) => (
              <Col lg={4}>{ <Card user={user} key={user.name?? 69} />}</Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
  