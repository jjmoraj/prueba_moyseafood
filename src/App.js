import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import { BrowserRouter as Router, Routes, Switch, Route,  Navigate } from "react-router-dom";
import UserView from './views/user';
import UserList from './views/list';
import HeaderComponent from './components/header';


function App() {

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


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HeaderComponent />} />
          <Route path='/users' element={<UserList />} />
          <Route  path='/users/:id' element={<UserView />}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
