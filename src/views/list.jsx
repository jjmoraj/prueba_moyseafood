
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import '../App.css';
import Spinner from 'react-bootstrap/Spinner';
import { Routes,Route,Link,BrowserRouter } from 'react-router-dom';

const UserList=()=>{


    const [loading, setLoading] = React.useState(false)


    const [users, setUsers] = React.useState([])
   
    const getUsers = async () =>{
  
      const usersFetch = await axios.get('https://jsonplaceholder.typicode.com/users/')
  
      setUsers(usersFetch.data)
      if(usersFetch.data){
        setLoading(true)
      }
  
    }
  
    React.useEffect(() => {
      getUsers()
    }, []);
    return(
        <>
        <div className="row" data-masonry="{&quot;percentPosition&quot;: true }" style={{position: 'relative'}}>
          {
            loading ? 
              users.map((item)=>{
                  
                return(
                  <Card   key={item.id} className='mx-auto' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="foto-perfil-2.png" />
                    <Card.Body>
                      <Card.Title>Nombre: {item.name}</Card.Title>
                      <Card.Text>
                        Email: {item.email}
                      </Card.Text>
                      <Card.Subtitle>
                        Numero de telefono: {item.phone}
                      </Card.Subtitle>
                      <Card.Link>
                          <Link  to={`/users/${item.id}`}>
                            <Button variant="primary" >Deatils</Button>
                          </Link>
                      </Card.Link>
                    </Card.Body>
                  </Card>
                )
  
              })
            :
            <Spinner animation="border" className='center-block' role="status">
            </Spinner>
          }       
        </div>
        </>
    )
}

export default UserList;