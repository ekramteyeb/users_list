import './App.css';
import {useState, useEffect} from 'react'
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import Card from './components/Card'

import ExploreUsers from './components/ExploreUsers'

import axios from 'axios'


function App() {

  const [users , setUsers] = useState([])
  
  useEffect(() => {
      axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
        console.log(response.data)
      })
      .catch((error) => {
        console.log('this is error ' + error)
      })

  }, [])

  return (
    <Router>
    <div className="App">
    
        <Switch>
          <Route exact path='/users'>
            {users.length > 0 ? users.map(user => <Card key={user.id} user={user} id={user.id} />) : '' }
          </Route>
         <Route path='/users/:id'>
          
          <ExploreUsers data={users}/>
      
         </Route>

          <Route path='/'>
            {users.length > 0 ? users.map(user => <Card key={user.id} user={user} id={user.id} />) : '' }
              
          </Route>
        </Switch>
    
    
     {/*  <UserDetails  user={users[0]}/> */}
    </div>
    </Router>
  );
}

export default App;
