import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import ListGroup from 'react-bootstrap/ListGroup';

import React from "react";
import { useNavigate, useParams } from "react-router-dom";


const UserView = ()=>{
    const id = useParams();

    const [loading, setLoading] = React.useState(false)

    const [user, setUser] = React.useState([])

    const navigate = useNavigate();

    const getUser = async () =>{

        const usersFetch = await axios.get('https://jsonplaceholder.typicode.com/users/'+id.id)
    
        setUser(usersFetch.data)
        console.log(usersFetch.data)
        if(usersFetch.data){
          setLoading(true)
        }
    
      }

    const cambiarEmail = () =>{
        let email = document.querySelector("#phone")
        email = email.value
        // para cambiar el email seria algo como asi
        // axios.put(https://jsonplaceholder.typicode.com/users/+id.id?email=phone)
        navigate("/users", { replace: true });

    }  

    const cambiarTelefono = () =>{
        let phone = document.querySelector("#email")
        phone = phone.value
        
        // para cambiar el numero seria algo como asi
        // axios.put(https://jsonplaceholder.typicode.com/users/+id.id?email=email)
        navigate("/users", { replace: true });
    }  
    
      React.useEffect(() => {
        getUser()
      }, []);
    
    return(

        <>
        {
            loading ? 
            <div>
                <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    Nombre : {user.name}
                </ListGroup.Item>
                <ListGroup.Item   variant="secondary" as="li">
                    Nombre de Usuario: {user.username}
                </ListGroup.Item>
                <ListGroup.Item variant="success" as="li">
                    <form>
                        <label htmlFor='phone'></label>
                        <input id="email" value={user.email}></input>
                        <button className='btn' onClick={()=>cambiarEmail()}>Cambiar Email</button>
                    </form>                </ListGroup.Item>
                <ListGroup.Item  variant="danger" as="li">
                    Direccion: Ciudad: {user.address.city}, Calle: {user.address.street}, Apartamento: {user.address.suite}
                </ListGroup.Item> 
                </ListGroup>
                <ListGroup.Item  variant="warning" as="li">
                    <form>
                        <label htmlFor='phone'></label>
                        <input id="phone" value={user.phone}></input>
                        <button className='btn'  onClick={()=>cambiarTelefono()}>Cambiar Telefono</button>
                    </form>
                </ListGroup.Item>
                <ListGroup.Item  variant="info"  as="li">
                    Compañia: Nombre: {user.company.name}, puesto: {user.company.catchPhrase}
                </ListGroup.Item>   
            </div>
            :
            <Spinner animation="border" role="status">
          </Spinner>
        }
        </>
    )
}
export default UserView;