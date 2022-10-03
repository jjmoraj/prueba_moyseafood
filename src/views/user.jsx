import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import React from "react";
import { useParams } from "react-router-dom";


const UserView = ()=>{
    const id = useParams();

    const [loading, setLoading] = React.useState(false)

    const [user, setUser] = React.useState([])


    const getUser = async () =>{

        const usersFetch = await axios.get('https://jsonplaceholder.typicode.com/users/'+id.id)
    
        setUser(usersFetch.data)
        console.log(usersFetch.data)
        if(usersFetch.data){
          setLoading(true)
        }
    
      }
    
      React.useEffect(() => {
        getUser()
      }, []);
    
    return(

        <>
        {
            loading ? 
            <div>
                <p>
                {user.name}
                </p>
                <p>
                {user.email}

                </p>
            </div>
            :
            <Spinner animation="border" role="status">
          </Spinner>
        }
        </>
    )
}
export default UserView;